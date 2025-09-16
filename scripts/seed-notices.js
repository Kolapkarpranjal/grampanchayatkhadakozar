const { MongoClient } = require('mongodb');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DB_NAME = 'grampanchayat';

const sampleNotices = [
  {
    title: "Gram Panchayat Khadak Ozar - Monthly Meeting Notice",
    description: "Notice for the monthly Gram Panchayat meeting to be held on the first Saturday of every month. All members are requested to attend.",
    type: "announcement",
    publishDate: "2024-01-15",
    expiryDate: "2024-02-15",
    fileName: "monthly-meeting-notice.pdf",
    fileType: "pdf",
    fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Water Supply Maintenance - Public Notice",
    description: "Public notice regarding scheduled water supply maintenance work in Khadak Ozar village. Water supply will be temporarily interrupted from 9 AM to 5 PM on the specified dates.",
    type: "circular",
    publishDate: "2024-01-20",
    expiryDate: "2024-02-20",
    fileName: "water-supply-notice.pdf",
    fileType: "pdf",
    fileUrl: "https://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf-file.pdf",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Tender for Road Construction Work",
    description: "Gram Panchayat Khadak Ozar invites sealed tenders for road construction work in the village. Interested contractors are requested to submit their bids.",
    type: "tender",
    publishDate: "2024-01-25",
    expiryDate: "2024-02-25",
    fileName: "road-construction-tender.pdf",
    fileType: "pdf",
    fileUrl: "https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Government Scheme Application Deadline",
    description: "Important notice regarding the deadline for submitting applications for various government schemes. Last date for submission is approaching.",
    type: "order",
    publishDate: "2024-01-30",
    expiryDate: "2024-03-30",
    fileName: "scheme-deadline-notice.pdf",
    fileType: "pdf",
    fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

async function seedNotices() {
  const client = new MongoClient(MONGODB_URI);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db(DB_NAME);
    const collection = db.collection('notices');
    
    // Clear existing notices (optional - remove this if you want to keep existing data)
    // await collection.deleteMany({});
    // console.log('Cleared existing notices');
    
    // Insert sample notices
    const result = await collection.insertMany(sampleNotices);
    console.log(`Inserted ${result.insertedCount} notices`);
    
    // Display inserted notices
    const insertedNotices = await collection.find({}).sort({ publishDate: -1 }).toArray();
    console.log('\nInserted notices:');
    insertedNotices.forEach((notice, index) => {
      console.log(`${index + 1}. ${notice.title} (${notice.type})`);
    });
    
  } catch (error) {
    console.error('Error seeding notices:', error);
  } finally {
    await client.close();
    console.log('\nDisconnected from MongoDB');
  }
}

// Run the seeding function
seedNotices();
