const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/grampanchayat';

async function updateGramPanchayatBanners() {
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db('grampanchayat');
    const collection = db.collection('images');
    
    // Clear existing banners
    await collection.deleteMany({ type: 'banner' });
    console.log('Cleared existing banners');
    
    // Government and Gram Panchayat specific banners
    const banners = [
      {
        title: "Khadak Ozar Gram Panchayat - Digital Governance Initiative",
        description: "Transforming rural governance through digital technology and citizen services",
        imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&h=600&fit=crop&crop=center&auto=format&q=80",
        altText: "Digital Governance and Rural Development",
        type: "banner",
        order: 1,
        isActive: true,
        bannerText: "Digital Gram Panchayat",
        bannerLink: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Maharashtra Government - Rural Development Programs",
        description: "Empowering rural communities through government schemes and development initiatives",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&crop=center&auto=format&q=80",
        altText: "Government Rural Development Programs",
        type: "banner",
        order: 2,
        isActive: true,
        bannerText: "Rural Development",
        bannerLink: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Gram Panchayat Services - Citizen Centric Governance",
        description: "Providing essential services and maintaining transparency in local governance",
        imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=600&fit=crop&crop=center&auto=format&q=80",
        altText: "Gram Panchayat Citizen Services",
        type: "banner",
        order: 3,
        isActive: true,
        bannerText: "Citizen Services",
        bannerLink: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Panchayati Raj System - Local Self Governance",
        description: "Strengthening democracy at the grassroots level through Panchayati Raj institutions",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop&crop=center&auto=format&q=80",
        altText: "Panchayati Raj Local Governance",
        type: "banner",
        order: 4,
        isActive: true,
        bannerText: "Local Governance",
        bannerLink: "",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    
    // Insert new Gram Panchayat banners
    const result = await collection.insertMany(banners);
    console.log(`Successfully inserted ${result.insertedCount} Gram Panchayat banners`);
    
    // Display inserted banners
    const insertedBanners = await collection.find({ type: 'banner' }).toArray();
    console.log('Updated banners with Gram Panchayat themes:');
    insertedBanners.forEach((banner, index) => {
      console.log(`${index + 1}. ${banner.title}`);
      console.log(`   Banner Text: ${banner.bannerText}`);
      console.log(`   Order: ${banner.order}`);
      console.log(`   Active: ${banner.isActive}`);
      console.log('');
    });
    
  } catch (error) {
    console.error('Error updating banners:', error);
  } finally {
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

// Run the update function
updateGramPanchayatBanners();



