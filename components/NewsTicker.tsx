"use client";
import { useParams } from "next/navigation";

// Import all locales
import en from "../locales/en/common.json";
import mr from "../locales/mr/common.json";

export default function NewsTicker() {
  const params = useParams();
  const lang = params?.lang as string || 'mr';

  // Choose correct language JSON
  let t: any = en;
  if (lang === "mr") t = mr;
  return (
    <div className="bg-gradient-to-r from-green-600 to-green-700 text-white relative overflow-hidden shadow-lg">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative flex items-center">
        <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-xs sm:text-sm md:text-base">{t.home.newsTicker.news}</span>
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex animate-marquee">
            <p className="whitespace-nowrap px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-medium">
              {t.home.newsTicker.content}
            </p>
            <p className="whitespace-nowrap px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-medium">
              {t.home.newsTicker.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
