import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IWhatsAppNumber extends Document {
    _id: mongoose.Types.ObjectId;
    number: string;
    is_active: boolean;
    click_count: number;
    max_clicks: number;
    hours_limit: number;
    last_reset_at: Date;
    created_by?: string;
    updated_by?: string;
    deleted_by?: string;
    created_at: Date;
    updated_at: Date;
}

const WhatsAppNumberSchema: Schema<IWhatsAppNumber> = new Schema(
    {
        number: {
            type: String,
            required: [true, 'Phone number is required'],
            unique: true,
            trim: true,
            validate: {
                validator: function (v: string) {
                    // Basic validation for phone number (10-15 digits)
                    return /^\d{10,15}$/.test(v);
                },
                message: (props) => `${props.value} is not a valid phone number!`,
            },
        },
        is_active: {
            type: Boolean,
            default: true,
            index: true, // Index for faster queries
        },
        click_count: {
            type: Number,
            default: 0,
            min: 0,
        },
        max_clicks: {
            type: Number,
            default: 200,
            min: 1,
        },
        hours_limit: {
            type: Number,
            default: 24,
            min: 1,
        },
        last_reset_at: {
            type: Date,
            default: Date.now,
        },
        created_by: {
            type: String,
            required: false,
        },
        updated_by: {
            type: String,
            required: false,
        },
        deleted_by: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    }
);

// Prevent model recompilation in development (Next.js hot reload)
const WhatsAppNumber: Model<IWhatsAppNumber> =
    mongoose.models.WhatsAppNumber || mongoose.model<IWhatsAppNumber>('WhatsAppNumber', WhatsAppNumberSchema);

export default WhatsAppNumber;
