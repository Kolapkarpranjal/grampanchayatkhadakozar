import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/grampanchayat';

async function getClient() {
  const client = new MongoClient(uri);
  await client.connect();
  return client;
}

export async function GET(request: NextRequest) {
  let client;
  try {
    client = await getClient();
    const db = client.db('grampanchayat');
    const collection = db.collection('documents');
    
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const isActive = searchParams.get('isActive') !== 'false';
    
    // Build query
    const query: any = { isActive };
    if (category) {
      query.category = category;
    }
    
    // Fetch documents and sort by order
    const documents = await collection.find(query).sort({ order: 1, createdAt: -1 }).toArray();
    
    return NextResponse.json(documents);
  } catch (error) {
    console.error('Error fetching documents:', error);
    return NextResponse.json(
      { error: 'Failed to fetch documents' },
      { status: 500 }
    );
  } finally {
    if (client) {
      await client.close();
    }
  }
}

export async function POST(request: NextRequest) {
  let client;
  try {
    client = await getClient();
    const db = client.db('grampanchayat');
    const collection = db.collection('documents');
    
    const body = await request.json();
    const documentData = {
      ...body,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    const result = await collection.insertOne(documentData);
    const savedDocument = { ...documentData, _id: result.insertedId };
    
    return NextResponse.json(savedDocument, { status: 201 });
  } catch (error) {
    console.error('Error creating document:', error);
    return NextResponse.json(
      { error: 'Failed to create document' },
      { status: 500 }
    );
  } finally {
    if (client) {
      await client.close();
    }
  }
}

