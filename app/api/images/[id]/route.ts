import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/grampanchayat';

async function getClient() {
  const client = new MongoClient(uri);
  await client.connect();
  return client;
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  let client;
  try {
    client = await getClient();
    const db = client.db('grampanchayat');
    const collection = db.collection('images');
    
    const image = await collection.findOne({ _id: new ObjectId(params.id) });
    
    if (!image) {
      return NextResponse.json(
        { error: 'Image not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(image);
  } catch (error) {
    console.error('Error fetching image:', error);
    return NextResponse.json(
      { error: 'Failed to fetch image' },
      { status: 500 }
    );
  } finally {
    if (client) {
      await client.close();
    }
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  let client;
  try {
    client = await getClient();
    const db = client.db('grampanchayat');
    const collection = db.collection('images');
    
    const body = await request.json();
    const updateData = {
      ...body,
      updatedAt: new Date()
    };
    
    const result = await collection.findOneAndUpdate(
      { _id: new ObjectId(params.id) },
      { $set: updateData },
      { returnDocument: 'after' }
    );
    
    if (!result) {
      return NextResponse.json(
        { error: 'Image not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error updating image:', error);
    return NextResponse.json(
      { error: 'Failed to update image' },
      { status: 500 }
    );
  } finally {
    if (client) {
      await client.close();
    }
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  let client;
  try {
    client = await getClient();
    const db = client.db('grampanchayat');
    const collection = db.collection('images');
    
    const result = await collection.findOneAndDelete({ _id: new ObjectId(params.id) });
    
    if (!result) {
      return NextResponse.json(
        { error: 'Image not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Error deleting image:', error);
    return NextResponse.json(
      { error: 'Failed to delete image' },
      { status: 500 }
    );
  } finally {
    if (client) {
      await client.close();
    }
  }
}
