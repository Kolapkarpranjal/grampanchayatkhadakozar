"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

// Import all locales
import en from "../locales/en/common.json";
import mr from "../locales/mr/common.json";

export default function AboutEventsSection() {
  const params = useParams();
  const lang = params?.lang as string || 'mr';

  // Choose correct language JSON
  let t: any = en;
  if (lang === "mr") t = mr;

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        
        {/* About Us Section */}
        <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-green-700">{t.home.aboutEvents.aboutUs.title}</h2>
          <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
            {t.home.aboutEvents.aboutUs.content}
          </p>
          <Link
            href={`/${lang}/about`}
            className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
          >
            {t.home.aboutEvents.aboutUs.readMore}
          </Link>
        </div>
      </div>
    </section>
  );
}