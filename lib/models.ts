import mongoose, { Schema, model, models } from 'mongoose';

// Lead Schema
const genericSchema = new Schema({}, { strict: false });
// Using strict:false for rapid prototyping or specific defined schemas?
// Let's define specific schemas for better validation.

const LeadSchema = new Schema({
    firstName: String,
    lastName: String,
    email: { type: String, required: true },
    phone: String,
    goal: String,
    status: { type: String, default: 'New' }, // New, Contacted, Converted
    createdAt: { type: Date, default: Date.now }
});

const PlanSchema = new Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    period: String,
    features: [String],
    popular: { type: Boolean, default: false }
});

export const Lead = models.Lead || model('Lead', LeadSchema);
export const Plan = models.Plan || model('Plan', PlanSchema);
