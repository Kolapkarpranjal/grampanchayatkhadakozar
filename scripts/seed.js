const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/grampanchayat';
const client = new MongoClient(uri);

const sampleNotices = [
  {
    title: "Gram Panchayat Election Schedule 2024",
    description: "Official schedule for upcoming Gram Panchayat elections in Maharashtra",
    type: "announcement",
    publishDate: "2024-01-15",
    expiryDate: "2024-03-15",
    fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    fileType: "pdf",
    fileName: "election-schedule-2024.pdf",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Tender for Road Construction Work",
    description: "Invitation for tender for construction of village roads under PMGSY scheme",
    type: "tender",
    publishDate: "2024-01-10",
    expiryDate: "2024-02-10",
    fileUrl: "https://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf-file.pdf",
    fileType: "pdf",
    fileName: "road-tender-2024.pdf",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Circular on Digital Payment Implementation",
    description: "Implementation guidelines for digital payment systems in Gram Panchayats",
    type: "circular",
    publishDate: "2024-01-08",
    expiryDate: "2024-12-31",
    fileUrl: "https://via.placeholder.com/800x600/0066cc/ffffff?text=Digital+Payment+Circular",
    fileType: "image",
    fileName: "digital-payment-circular.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

async function seedDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db('grampanchayat');
    const collection = db.collection('notices');
    
    // Clear existing data
    await collection.deleteMany({});
    console.log('Cleared existing notices');
    
    // Insert sample data
    const result = await collection.insertMany(sampleNotices);
    console.log(`Inserted ${result.insertedCount} notices`);
    
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
    console.log('Database connection closed');
  }
}

seedDatabase();
