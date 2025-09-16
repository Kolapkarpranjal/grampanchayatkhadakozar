"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

// Import all locales
import en from "../locales/en/common.json";
import mr from "../locales/mr/common.json";

// Import static gallery data
import { getActiveGalleryImages, GalleryImage } from "./data/gallery";

const GallerySection = () => {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const lang = params?.lang as string || 'mr';

  // Choose correct language JSON
  let t: any = en;
  if (lang === "mr") t = mr;

  useEffect(() => {
    // Load static gallery images (for static export compatibility)
    const staticGalleryImages = getActiveGalleryImages(lang);
    setGalleryImages(staticGalleryImages);
    setLoading(false);
  }, [lang]);

  if (loading) {
    return (
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 text-green-700">{t.home.gallery.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-gray-200 animate-pulse rounded-lg h-48 sm:h-56 md:h-64"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 text-green-700">{t.home.gallery.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryImages.map((image) => (
            <div key={image._id} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.imageUrl}
                alt={image.altText || image.title}
                className="object-cover w-full h-48 sm:h-56 md:h-64 hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
