"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

// Import all locales
import en from "../locales/en/common.json";
import mr from "../locales/mr/common.json";

interface GalleryImage {
  _id: string;
  title: string;
  imageUrl: string;
  altText: string;
  order: number;
}

const GallerySection = () => {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const lang = params?.lang as string || 'en';

  // Choose correct language JSON
  let t: any = en;
  if (lang === "mr") t = mr;

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const response = await fetch('/api/images?type=gallery');
        const data = await response.json();
        setGalleryImages(data);
      } catch (error) {
        console.error('Error fetching gallery images:', error);
        // Fallback to default images
        setGalleryImages([
          { _id: '1', title: 'Gallery Image 1', imageUrl: '/images/gallery/image1.jpg', altText: 'Gallery Image 1', order: 1 },
          { _id: '2', title: 'Gallery Image 2', imageUrl: '/images/gallery/image2.jpg', altText: 'Gallery Image 2', order: 2 },
          { _id: '3', title: 'Gallery Image 3', imageUrl: '/images/gallery/image3.jpg', altText: 'Gallery Image 3', order: 3 },
          { _id: '4', title: 'Gallery Image 4', imageUrl: '/images/gallery/image4.jpg', altText: 'Gallery Image 4', order: 4 },
          { _id: '5', title: 'Gallery Image 5', imageUrl: '/images/gallery/image5.jpg', altText: 'Gallery Image 5', order: 5 },
          { _id: '6', title: 'Gallery Image 6', imageUrl: '/images/gallery/image6.jpg', altText: 'Gallery Image 6', order: 6 },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryImages();
  }, []);

  if (loading) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-700">{t.home.gallery.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-gray-200 animate-pulse rounded-lg h-64"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-700">{t.home.gallery.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div key={image._id} className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={image.imageUrl}
                alt={image.altText || image.title}
                width={500}
                height={350}
                className="object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
