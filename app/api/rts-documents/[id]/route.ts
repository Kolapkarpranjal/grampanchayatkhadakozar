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
    const collection = db.collection('rts_documents');
    
    const document = await collection.findOne({ _id: new ObjectId(params.id) });
    
    if (!document) {
      return NextResponse.json(
        { error: 'RTS document not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(document);
  } catch (error) {
    console.error('Error fetching RTS document:', error);
    return NextResponse.json(
      { error: 'Failed to fetch RTS document' },
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
    const collection = db.collection('rts_documents');
    
    const body = await request.json();
    const updateData = {
      ...body,
      updatedAt: new Date()
    };
    
    const result = await collection.updateOne(
      { _id: new ObjectId(params.id) },
      { $set: updateData }
    );
    
    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: 'RTS document not found' },
        { status: 404 }
      );
    }
    
    const updatedDocument = await collection.findOne({ _id: new ObjectId(params.id) });
    return NextResponse.json(updatedDocument);
  } catch (error) {
    console.error('Error updating RTS document:', error);
    return NextResponse.json(
      { error: 'Failed to update RTS document' },
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
    const collection = db.collection('rts_documents');
    
    const result = await collection.deleteOne({ _id: new ObjectId(params.id) });
    
    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: 'RTS document not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ message: 'RTS document deleted successfully' });
  } catch (error) {
    console.error('Error deleting RTS document:', error);
    return NextResponse.json(
      { error: 'Failed to delete RTS document' },
      { status: 500 }
    );
  } finally {
    if (client) {
      await client.close();
    }
  }
}

