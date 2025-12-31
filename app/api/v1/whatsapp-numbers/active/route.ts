import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import WhatsAppNumber from '@/models/WhatsAppNumber';

// Mark this route as dynamic
export const dynamic = 'force-dynamic';

/**
 * GET /api/v1/whatsapp-numbers/active
 * Returns a random available WhatsApp number based on click limits and time reset
 */
export async function GET(request: NextRequest) {
    try {
        // Connect to database
        console.log('GET /api/v1/whatsapp-numbers/active - Starting request');
        try {
            await connectDB();
        } catch (dbError: any) {
            console.error('Database connection error:', dbError);
            return NextResponse.json(
                {
                    success: false,
                    message: 'Database connection failed. Please check if your IP is whitelisted in MongoDB Atlas.',
                    error: dbError.message,
                },
                { status: 503 }
            );
        }

        // Find all active WhatsApp numbers
        const allActiveNumbers = await WhatsAppNumber.find({ is_active: true });
        console.log(`Found ${allActiveNumbers.length} active numbers`);

        if (!allActiveNumbers || allActiveNumbers.length === 0) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'No active WhatsApp numbers found in database',
                    data: [],
                },
                { status: 404 }
            );
        }

        const now = new Date();
        const availableNumbers = [];

        // Check each number for availability
        for (const num of allActiveNumbers) {
            // FIX 1: Handle null lastResetAt
            if (!num.last_reset_at) {
                num.last_reset_at = now;
                num.click_count = 0;
                await num.save();
            }

            // Calculate time difference
            const timeDiff = now.getTime() - new Date(num.last_reset_at).getTime();
            const hoursPassed = timeDiff / (1000 * 60 * 60);

            // FIX 2: Reset if hours limit exceeded
            if (hoursPassed >= num.hours_limit) {
                num.click_count = 0;
                num.last_reset_at = now;
                await num.save();
                availableNumbers.push(num);
            }
            // FIX 3: Check if click limit not exceeded
            else if (num.click_count < num.max_clicks) {
                availableNumbers.push(num);
            }
        }

        console.log(`Available numbers after limit check: ${availableNumbers.length}`);

        // No available numbers
        if (availableNumbers.length === 0) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'All numbers have reached their click limit for today.',
                    data: null,
                },
                { status: 200 }
            );
        }

        // FIX 4: Random selection
        const randomIndex = Math.floor(Math.random() * availableNumbers.length);
        const selectedNumber = availableNumbers[randomIndex];

        // FIX 5: Increment click count
        try {
            selectedNumber.click_count += 1;
            await selectedNumber.save();
        } catch (saveError: any) {
            console.error('Error saving click count:', saveError);
            // Non-critical error, still return the number
        }

        // Clean response - exclude internal fields
        return NextResponse.json(
            {
                success: true,
                data: {
                    id: selectedNumber._id.toString(),
                    number: selectedNumber.number,
                    is_active: selectedNumber.is_active,
                    click_count: selectedNumber.click_count,
                    created_at: selectedNumber.created_at,
                    updated_at: selectedNumber.updated_at,
                },
                message: 'Active WhatsApp number fetched successfully',
            },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('Unhandled error in GET /api/v1/whatsapp-numbers/active:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Internal server error',
                error: error.message,
                stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
            },
            { status: 500 }
        );
    }
}
