"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Eye, X } from "lucide-react";

// Import all locales
import en from "../../../locales/en/common.json";
import mr from "../../../locales/mr/common.json";

// Import static gallery data
import { getActiveGalleryImages, GalleryImage } from "../../../components/data/gallery";

export default function GalleryPage() {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const params = useParams();
  const lang = params?.lang as string || 'mr';

  // Choose correct language JSON
  let t: any = en;
  if (lang === "mr") t = mr;

  const galleryT = t.home.gallery; // focus on gallery section

  useEffect(() => {
    // Load static gallery images (for static export compatibility)
    const staticGalleryImages = getActiveGalleryImages(lang);
    setGalleryImages(staticGalleryImages);
    setLoading(false);
  }, [lang]);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-8">
          <nav className="text-sm text-gray-600 mb-4">
            <span className="text-gray-900 font-semibold">{galleryT.title}</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{galleryT.title}</h1>
          <p className="text-lg text-gray-600">Explore our village through these beautiful images</p>
        </div>

        {/* Gallery Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-200 animate-pulse"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 animate-pulse rounded mb-3"></div>
                  <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : galleryImages.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl text-gray-300 mb-4">📸</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No Gallery Images</h3>
            <p className="text-gray-500">Gallery images will be added soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image) => (
              <div key={image._id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden cursor-pointer" onClick={() => handleImageClick(image)}>
                  <img
                    src={image.imageUrl}
                    alt={image.altText}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{image.title}</h3>
                  <p className="text-gray-600 line-clamp-3">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox Modal */}
        {isLightboxOpen && selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 rounded-full p-2 transition-all duration-200 z-10"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="relative">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.altText}
                  className="object-contain w-full h-full max-h-[80vh] rounded-lg"
                />
              </div>
              <div className="bg-white p-6 rounded-b-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h2>
                <p className="text-gray-600">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
