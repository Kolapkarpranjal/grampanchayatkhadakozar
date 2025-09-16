const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/grampanchayat';

async function seedRTSDocuments() {
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db('grampanchayat');
    const collection = db.collection('rts_documents');
    
    // Clear existing RTS documents
    await collection.deleteMany({});
    console.log('Cleared existing RTS documents');
    
    // Sample RTS documents and forms
    const rtsDocuments = [
      {
        name: "Birth Registration Form",
        description: "Application form for birth registration certificate. Required for official birth documentation and various government services.",
        fileType: "form",
        fileUrl: "/uploads/sample-birth-form.pdf",
        isActive: true,
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Death Certificate Application",
        description: "Form to apply for death certificate. Required for legal and administrative purposes after a person's death.",
        fileType: "form",
        fileUrl: "/uploads/sample-death-form.pdf",
        isActive: true,
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Marriage Registration Form",
        description: "Application form for marriage registration certificate. Required for legal recognition of marriage.",
        fileType: "form",
        fileUrl: "/uploads/sample-marriage-form.pdf",
        isActive: true,
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Below Poverty Line Certificate Guidelines",
        description: "Guidelines and requirements for obtaining Below Poverty Line (BPL) certificate for accessing government welfare schemes.",
        fileType: "document",
        fileUrl: "/uploads/sample-bpl-guidelines.pdf",
        isActive: true,
        order: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "No Dues Certificate Application",
        description: "Application form for No Dues Certificate confirming that the applicant has no outstanding dues to the Gram Panchayat.",
        fileType: "form",
        fileUrl: "/uploads/sample-no-dues-form.pdf",
        isActive: true,
        order: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Old Age Pension Application",
        description: "Application form for old age pension for destitute elderly persons under government welfare schemes.",
        fileType: "form",
        fileUrl: "/uploads/sample-old-age-form.pdf",
        isActive: true,
        order: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Property Assessment Guidelines",
        description: "Guidelines for property assessment and valuation for various purposes including tax calculation.",
        fileType: "document",
        fileUrl: "/uploads/sample-assessment-guidelines.pdf",
        isActive: true,
        order: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    
    // Insert RTS documents
    const result = await collection.insertMany(rtsDocuments);
    console.log(`Successfully inserted ${result.insertedCount} RTS documents`);
    
    // Display inserted documents
    const insertedDocuments = await collection.find({}).sort({ order: 1 }).toArray();
    console.log('Inserted RTS documents:');
    insertedDocuments.forEach((doc, index) => {
      console.log(`${index + 1}. ${doc.name}`);
      console.log(`   Type: ${doc.fileType}`);
      console.log(`   Description: ${doc.description}`);
      console.log(`   Order: ${doc.order}`);
      console.log(`   Active: ${doc.isActive}`);
      console.log('');
    });
    
  } catch (error) {
    console.error('Error seeding RTS documents:', error);
  } finally {
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

// Run the seeding function
seedRTSDocuments();

