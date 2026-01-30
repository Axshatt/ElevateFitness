import { NextResponse } from 'next/server';
import { connectToDB } from '@/lib/db';
import { Lead } from '@/lib/models';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        await connectToDB();

        const newLead = await Lead.create(body);

        return NextResponse.json({ message: 'Lead created successfully', lead: newLead }, { status: 201 });
    } catch (error) {
        console.error('Error creating lead:', error);
        return NextResponse.json({ message: 'Error creating lead' }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectToDB();
        const leads = await Lead.find({}).sort({ createdAt: -1 });
        return NextResponse.json(leads);
    } catch (error) {
        return NextResponse.json({ message: 'Error fetching leads' }, { status: 500 });
    }
}
