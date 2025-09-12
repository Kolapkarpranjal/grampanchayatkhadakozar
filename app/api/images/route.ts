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
    const collection = db.collection('images');
    
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const isActive = searchParams.get('isActive') !== 'false';
    
    // Build query
    const query: any = { isActive };
    if (type) {
      query.type = type;
    }
    
    // Fetch images and sort by order
    const images = await collection.find(query).sort({ order: 1, createdAt: -1 }).toArray();
    
    return NextResponse.json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    return NextResponse.json(
      { error: 'Failed to fetch images' },
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
    const collection = db.collection('images');
    
    const body = await request.json();
    const imageData = {
      ...body,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    const result = await collection.insertOne(imageData);
    const savedImage = { ...imageData, _id: result.insertedId };
    
    return NextResponse.json(savedImage, { status: 201 });
  } catch (error) {
    console.error('Error creating image:', error);
    return NextResponse.json(
      { error: 'Failed to create image' },
      { status: 500 }
    );
  } finally {
    if (client) {
      await client.close();
    }
  }
}
