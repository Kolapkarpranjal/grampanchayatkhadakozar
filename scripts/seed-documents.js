const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/grampanchayat';

async function seedDocuments() {
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db('grampanchayat');
    const collection = db.collection('documents');
    
    // Clear existing documents
    await collection.deleteMany({});
    console.log('Cleared existing documents');
    
    // Sample documents for RTS services
    const documents = [
      {
        name: "Birth Registration Certificate",
        description: "Official certificate for birth registration issued by the Gram Panchayat. Required for various government services and identity verification.",
        category: "certificate",
        isActive: true,
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Death Certificate",
        description: "Official certificate for death registration issued by the Gram Panchayat. Required for legal and administrative purposes.",
        category: "certificate",
        isActive: true,
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Marriage Registration Certificate",
        description: "Official certificate for marriage registration issued by the Gram Panchayat. Required for legal recognition of marriage.",
        category: "certificate",
        isActive: true,
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Below Poverty Line Certificate",
        description: "Certificate issued to families below the poverty line for accessing various government welfare schemes and benefits.",
        category: "certificate",
        isActive: true,
        order: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "No Dues Certificate",
        description: "Certificate confirming that the applicant has no outstanding dues or pending payments to the Gram Panchayat.",
        category: "certificate",
        isActive: true,
        order: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Old Age Certificate For Niradhar",
        description: "Certificate for elderly destitute persons to avail old age pension and other welfare benefits.",
        category: "certificate",
        isActive: true,
        order: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Assessment Certificate",
        description: "Certificate for property assessment and valuation issued by the Gram Panchayat for various purposes.",
        category: "certificate",
        isActive: true,
        order: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    
    // Insert documents
    const result = await collection.insertMany(documents);
    console.log(`Successfully inserted ${result.insertedCount} documents`);
    
    // Display inserted documents
    const insertedDocuments = await collection.find({}).sort({ order: 1 }).toArray();
    console.log('Inserted documents:');
    insertedDocuments.forEach((doc, index) => {
      console.log(`${index + 1}. ${doc.name}`);
      console.log(`   Description: ${doc.description}`);
      console.log(`   Category: ${doc.category}`);
      console.log(`   Order: ${doc.order}`);
      console.log(`   Active: ${doc.isActive}`);
      console.log('');
    });
    
  } catch (error) {
    console.error('Error seeding documents:', error);
  } finally {
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

// Run the seeding function
seedDocuments();

