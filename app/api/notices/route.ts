import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';
import { Notice } from '../../../models/Notice';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('grampanchayat');
    const notices = await db.collection('notices').find({}).sort({ publishDate: -1 }).toArray();
    return NextResponse.json(notices);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch notices' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db('grampanchayat');
    
    const notice: Notice = {
      ...body,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    const result = await db.collection('notices').insertOne(notice);
    return NextResponse.json({ id: result.insertedId, ...notice });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create notice' }, { status: 500 });
  }
}