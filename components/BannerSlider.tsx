"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import "swiper/css";
import "swiper/css/navigation";

// Import all locales
import en from "../locales/en/common.json";
import mr from "../locales/mr/common.json";

interface BannerImage {
  _id: string;
  title: string;
  imageUrl: string;
  bannerText: string;
  bannerLink: string;
  order: number;
}

export default function BannerSlider() {
  const [bannerImages, setBannerImages] = useState<BannerImage[]>([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const lang = params?.lang as string || 'en';

  // Choose correct language JSON
  let t: any = en;
  if (lang === "mr") t = mr;

  useEffect(() => {
    const fetchBannerImages = async () => {
      try {
        const response = await fetch('/api/images?type=banner');
        const data = await response.json();
        setBannerImages(data);
      } catch (error) {
        console.error('Error fetching banner images:', error);
        // Fallback to default images
        setBannerImages([
          {
            _id: '1',
            title: 'Central Schemes',
            imageUrl: '/images/banner1.jpg',
            bannerText: t.home.banner.centralSchemes,
            bannerLink: '',
            order: 1
          },
          {
            _id: '2',
            title: 'Pradhan Mantri Gram Sadak Yojana',
            imageUrl: '/images/banner2.webp',
            bannerText: t.home.banner.pradhanMantriGramSadak,
            bannerLink: '',
            order: 2
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchBannerImages();
  }, [t]);

  if (loading) {
    return (
      <div className="h-[500px] bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 animate-pulse flex items-center justify-center rounded-2xl mx-4 my-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-gray-600 font-medium">Loading banners...</div>
        </div>
      </div>
    );
  }
  return (
    <div className="mx-4 my-6 rounded-3xl overflow-hidden shadow-2xl">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={bannerImages.length > 1}
        className="h-[500px] rounded-3xl"
      >
        {bannerImages.map((banner) => (
          <SwiperSlide key={banner._id}>
            <div className="relative h-full group">
              <img 
                src={banner.imageUrl} 
                alt={banner.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
