const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/grampanchayat';

async function updateBannersWithClearImages() {
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db('grampanchayat');
    const collection = db.collection('images');
    
    // Clear existing banners
    await collection.deleteMany({ type: 'banner' });
    console.log('Cleared existing banners');
    
    // Updated banners with clearer, more professional images
    const banners = [
      {
        title: "Khadak Ozar Gram Panchayat - Digital Governance",
        description: "Embracing digital transformation for transparent and efficient governance",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&crop=center&auto=format&q=80",
        altText: "Digital Governance and Technology for Rural Development",
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
        description: "Building sustainable infrastructure and promoting comprehensive rural development",
        imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&h=600&fit=crop&crop=center&auto=format&q=80", 
        altText: "Rural Development and Village Infrastructure",
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
        description: "Serving the community with dedication and ensuring welfare of all citizens",
        imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=600&fit=crop&crop=center&auto=format&q=80",
        altText: "Community Services and Public Welfare",
        type: "banner",
        order: 3,
        isActive: true,
        bannerText: "Community Services",
        bannerLink: "",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    
    // Insert updated banners
    const result = await collection.insertMany(banners);
    console.log(`Successfully inserted ${result.insertedCount} clear banners`);
    
    // Display inserted banners
    const insertedBanners = await collection.find({ type: 'banner' }).toArray();
    console.log('Updated banners with clear images:');
    insertedBanners.forEach((banner, index) => {
      console.log(`${index + 1}. ${banner.title}`);
      console.log(`   Image: ${banner.imageUrl}`);
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
updateBannersWithClearImages();



