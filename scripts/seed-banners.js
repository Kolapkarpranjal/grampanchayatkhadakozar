const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/grampanchayat';

async function seedBanners() {
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db('grampanchayat');
    const collection = db.collection('images');
    
    // Clear existing banners
    await collection.deleteMany({ type: 'banner' });
    console.log('Cleared existing banners');
    
    // Sample banners for Khadak Ozar Gram Panchayat
    const banners = [
      {
        title: "Khadak Ozar Gram Panchayat - Digital India Initiative",
        description: "Embracing digital transformation for better governance and citizen services",
        imageUrl: "/images/banner1.jpg",
        altText: "Khadak Ozar Gram Panchayat Digital India Banner",
        type: "banner",
        order: 1,
        isActive: true,
        bannerText: "Digital Gram Panchayat",
        bannerLink: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Rural Development & Infrastructure - Khadak Ozar",
        description: "Building better infrastructure and promoting rural development in our village",
        imageUrl: "/images/banner2.jpg", 
        altText: "Rural Development Infrastructure Banner",
        type: "banner",
        order: 2,
        isActive: true,
        bannerText: "Rural Development",
        bannerLink: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Community Services & Welfare - Khadak Ozar",
        description: "Providing essential community services and welfare programs for all residents",
        imageUrl: "/images/banner3.jpg",
        altText: "Community Services and Welfare Programs Banner",
        type: "banner",
        order: 3,
        isActive: true,
        bannerText: "Community Services",
        bannerLink: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Agricultural Development & Support - Khadak Ozar",
        description: "Supporting farmers and promoting sustainable agricultural practices in our village",
        imageUrl: "/images/banner4.jpg",
        altText: "Agricultural Development and Farmer Support Banner",
        type: "banner",
        order: 4,
        isActive: true,
        bannerText: "Agricultural Support",
        bannerLink: "",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    
    // Insert banners
    const result = await collection.insertMany(banners);
    console.log(`Successfully inserted ${result.insertedCount} banners`);
    
    // Display inserted banners
    const insertedBanners = await collection.find({ type: 'banner' }).toArray();
    console.log('Inserted banners:');
    insertedBanners.forEach((banner, index) => {
      console.log(`${index + 1}. ${banner.title}`);
      console.log(`   Image: ${banner.imageUrl}`);
      console.log(`   Banner Text: ${banner.bannerText}`);
      console.log(`   Order: ${banner.order}`);
      console.log(`   Active: ${banner.isActive}`);
      console.log('');
    });
    
  } catch (error) {
    console.error('Error seeding banners:', error);
  } finally {
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

// Run the seeding function
seedBanners();

