const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/grampanchayat';
const client = new MongoClient(uri);

const sampleImages = [
  // Banner Images
  {
    type: "banner",
    title: "Central Schemes",
    description: "Central government schemes for rural development",
    imageUrl: "/images/banner1.jpg",
    altText: "Central Schemes Banner",
    order: 1,
    isActive: true,
    bannerText: "Central Schemes",
    bannerLink: "",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: "banner",
    title: "Pradhan Mantri Gram Sadak Yojana",
    description: "Rural road development scheme",
    imageUrl: "/images/banner2.webp",
    altText: "PMGSY Banner",
    order: 2,
    isActive: true,
    bannerText: "Pradhan Mantri Gram Sadak Yojana",
    bannerLink: "",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  
  // Gallery Images
  {
    type: "gallery",
    title: "Village Development Work",
    description: "Infrastructure development in the village",
    imageUrl: "/images/gallery/image1.jpg",
    altText: "Village Development Work",
    order: 1,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: "gallery",
    title: "Community Center",
    description: "Newly built community center",
    imageUrl: "/images/gallery/image2.jpg",
    altText: "Community Center",
    order: 2,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: "gallery",
    title: "Water Supply Project",
    description: "Clean water supply infrastructure",
    imageUrl: "/images/gallery/image3.jpg",
    altText: "Water Supply Project",
    order: 3,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: "gallery",
    title: "School Building",
    description: "New school building construction",
    imageUrl: "/images/gallery/image4.jpg",
    altText: "School Building",
    order: 4,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: "gallery",
    title: "Health Center",
    description: "Primary health center",
    imageUrl: "/images/gallery/image5.jpg",
    altText: "Health Center",
    order: 5,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: "gallery",
    title: "Road Construction",
    description: "Village road construction work",
    imageUrl: "/images/gallery/image6.jpg",
    altText: "Road Construction",
    order: 6,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // Event Images
  {
    type: "event",
    title: "Cultural Program",
    description: "Traditional cultural program in the village",
    imageUrl: "/events/event1.jpg",
    altText: "Cultural Program",
    order: 1,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: "event",
    title: "Village Meeting",
    description: "Gram Sabha meeting with villagers",
    imageUrl: "/events/event2.jpg",
    altText: "Village Meeting",
    order: 2,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: "event",
    title: "Tree Plantation",
    description: "Environmental awareness and tree plantation drive",
    imageUrl: "/events/event3.jpg",
    altText: "Tree Plantation",
    order: 3,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: "event",
    title: "Development Work",
    description: "Infrastructure development activities",
    imageUrl: "/events/event4.jpg",
    altText: "Development Work",
    order: 4,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // Member Images
  {
    type: "member",
    title: "Chief Minister",
    description: "Hon'ble Chief Minister of Maharashtra",
    imageUrl: "/members/member1.jpg",
    altText: "Chief Minister",
    order: 1,
    isActive: true,
    memberName: "Shri. Devendra Fadnavis",
    memberDesignation: "Hon'ble Chief Minister",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: "member",
    title: "Deputy Chief Minister",
    description: "Hon'ble Deputy Chief Minister",
    imageUrl: "/members/member2.jpg",
    altText: "Deputy Chief Minister",
    order: 2,
    isActive: true,
    memberName: "Shri. Eknath Shinde",
    memberDesignation: "Hon'ble Deputy Chief Minister",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: "member",
    title: "Deputy Chief Minister",
    description: "Hon'ble Deputy Chief Minister",
    imageUrl: "/members/member3.jpg",
    altText: "Deputy Chief Minister",
    order: 3,
    isActive: true,
    memberName: "Shri. Ajit Pawar",
    memberDesignation: "Hon'ble Deputy Chief Minister",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: "member",
    title: "Minister",
    description: "Hon'ble Minister, Rural Development and Panchayat Raj",
    imageUrl: "/members/member4.jpg",
    altText: "Minister",
    order: 4,
    isActive: true,
    memberName: "Shri. Jayakumar Gore",
    memberDesignation: "Hon'ble Minister, Rural Development and Panchayat Raj",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: "member",
    title: "Minister of State",
    description: "Hon'ble Minister of State, Rural Development and Panchayat Raj",
    imageUrl: "/members/member5.jpg",
    altText: "Minister of State",
    order: 5,
    isActive: true,
    memberName: "Shri. Yogesh Kadam",
    memberDesignation: "Hon'ble Minister of State, Rural Development and Panchayat Raj",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: "member",
    title: "Principal Secretary",
    description: "Principal Secretary, Rural Development and Panchayat Raj",
    imageUrl: "/members/member6.jpg",
    altText: "Principal Secretary",
    order: 6,
    isActive: true,
    memberName: "Shri. Eknath Dawale",
    memberDesignation: "Principal Secretary, Rural Development and Panchayat Raj",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

async function seedImages() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db('grampanchayat');
    const collection = db.collection('images');
    
    // Clear existing data
    await collection.deleteMany({});
    console.log('Cleared existing images');
    
    // Insert sample data
    const result = await collection.insertMany(sampleImages);
    console.log(`Inserted ${result.insertedCount} images`);
    
  } catch (error) {
    console.error('Error seeding images:', error);
  } finally {
    await client.close();
    console.log('Database connection closed');
  }
}

seedImages();
