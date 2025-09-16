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

// Import static banner data
import { getActiveBanners, BannerImage } from "./data/banners";

export default function BannerSlider() {
  const [bannerImages, setBannerImages] = useState<BannerImage[]>([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const lang = params?.lang as string || 'mr';

  // Choose correct language JSON
  let t: any = en;
  if (lang === "mr") t = mr;

  useEffect(() => {
    // Load static banners only (for static export compatibility)
    const staticBanners = getActiveBanners(lang);
    setBannerImages(staticBanners);
    setLoading(false);
  }, [lang]);

  if (loading) {
    return (
      <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 animate-pulse flex items-center justify-center rounded-xl sm:rounded-2xl mx-2 sm:mx-4 my-4 sm:my-6">
        <div className="text-center px-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-gray-600 font-medium text-sm sm:text-base">Loading banners...</div>
        </div>
      </div>
    );
  }
  // If no banners are loaded, show a fallback
  if (bannerImages.length === 0) {
    return (
      <div className="mx-2 sm:mx-4 my-4 sm:my-6 rounded-xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
        <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 flex items-center justify-center">
          <div className="text-center px-4">
            <div className="text-gray-600 font-medium text-lg">No banners available</div>
            <div className="text-gray-500 text-sm mt-2">Please check banner configuration</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-2 sm:mx-4 my-4 sm:my-6 rounded-xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={bannerImages.length > 1}
        className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl sm:rounded-3xl"
      >
        {bannerImages.map((banner) => (
          <SwiperSlide key={banner._id}>
            <div className="relative h-full group overflow-hidden">
              <img 
                src={banner.imageUrl} 
                alt={banner.title}
                className="w-full h-full object-contain bg-gray-100 transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
