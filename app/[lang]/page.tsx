"use client";
import { useParams } from "next/navigation";
import BannerSlider from "../../components/BannerSlider";
import NewsTicker from "../../components/NewsTicker";
import AboutEventsSection from "../../components/AboutEventsSection";
import MembersSection from "../../components/MembersSection";
import GallerySection from "../../components/gallery";

// Import all locales
import en from "../../locales/en/common.json";

import mr from "../../locales/mr/common.json";

export default function HomePage() {
  const params = useParams();
  const lang = params?.lang as string;

  // Choose correct language JSON
  let t: any = en;
  if (lang === "mr") t = mr;

  const homeTranslations = t.home; // focus on home section

  return (
    <div>
      <BannerSlider />
      <NewsTicker />
      <MembersSection />
      <AboutEventsSection />
      <GallerySection />
     
    </div>
  );
}





