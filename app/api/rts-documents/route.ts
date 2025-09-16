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
    const collection = db.collection('rts_documents');
    
    const { searchParams } = new URL(request.url);
    const isActive = searchParams.get('isActive') !== 'false';
    
    const query: any = { isActive };
    const documents = await collection.find(query).sort({ order: 1, createdAt: -1 }).toArray();
    
    return NextResponse.json(documents);
  } catch (error) {
    console.error('Error fetching RTS documents:', error);
    return NextResponse.json(
      { error: 'Failed to fetch RTS documents' },
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
    const collection = db.collection('rts_documents');
    
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
    console.error('Error creating RTS document:', error);
    return NextResponse.json(
      { error: 'Failed to create RTS document' },
      { status: 500 }
    );
  } finally {
    if (client) {
      await client.close();
    }
  }
}

