import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import WhatsAppNumber from '@/models/WhatsAppNumber';
import mongoose from 'mongoose';

// Mark this route as dynamic
export const dynamic = 'force-dynamic';

/**
 * PATCH /api/v1/whatsapp-numbers/:id/click
 * Increments the click count for a specific WhatsApp number
 */
export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        // Connect to database
        await connectDB();

        const { id } = await params;

        // Validate MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Invalid WhatsApp number ID',
                },
                { status: 400 }
            );
        }

        // Find and update the WhatsApp number
        const updatedNumber = await WhatsAppNumber.findByIdAndUpdate(
            id,
            {
                $inc: { click_count: 1 }, // Increment click_count by 1
                updated_at: new Date(),
            },
            {
                new: true, // Return the updated document
                runValidators: true,
            }
        );

        if (!updatedNumber) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'WhatsApp number not found',
                },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                data: {
                    id: updatedNumber._id.toString(),
                    number: updatedNumber.number,
                    is_active: updatedNumber.is_active,
                    click_count: updatedNumber.click_count,
                    updated_at: updatedNumber.updated_at,
                },
                message: 'Click count updated successfully',
            },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('Error updating click count:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Internal server error',
                error: error.message,
            },
            { status: 500 }
        );
    }
}
