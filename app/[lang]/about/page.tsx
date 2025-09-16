"use client";
import { useParams } from "next/navigation";
import Image from "next/image";

// Import all locales
import en from "../../../locales/en/common.json"
import mr from "../../../locales/mr/common.json";

export default function AboutPage() {
  const params = useParams();
  const lang = params?.lang as string || 'mr';

  // Choose correct language JSON
  let t: any = en;
  if (lang === "mr") t = mr;

  t = t.about; // focus only on about section

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      {/* Page Header with Image */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-8">{t.title}</h1>
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/about.jpg"
            alt={t.imageAlt}
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Village Overview */}
      <section>
        <h2 className="text-3xl font-bold text-green-700 mb-6">{t.villageOverview.title}</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            {t.villageOverview.description}
          </p>
        </div>
      </section>

      {/* Village Statistics */}
      <section>
        <h2 className="text-3xl font-bold text-green-700 mb-6">{t.statistics.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.statistics.items.map((stat: any, index: number) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
              <div className="text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Village Facilities */}
      <section>
        <h2 className="text-3xl font-bold text-green-700 mb-6">{t.facilities.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.facilities.categories.map((category: any, index: number) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item: string, itemIndex: number) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Distance Information */}
      <section>
        <h2 className="text-3xl font-bold text-green-700 mb-6">{t.distance.title}</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.distance.items.map((item: any, index: number) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="font-medium text-gray-700">{item.location}</span>
                <span className="text-green-600 font-semibold">{item.distance}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agriculture Information */}
      <section>
        <h2 className="text-3xl font-bold text-green-700 mb-6">{t.agriculture.title}</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-4">{t.agriculture.landInfo.title}</h3>
              <ul className="space-y-2">
                {t.agriculture.landInfo.items.map((item: any, index: number) => (
                  <li key={index} className="flex justify-between">
                    <span className="text-gray-700">{item.label}</span>
                    <span className="font-semibold text-green-600">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-4">{t.agriculture.crops.title}</h3>
              <ul className="space-y-2">
                {t.agriculture.crops.items.map((crop: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700">{crop}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tourist Attractions */}
      <section>
        <h2 className="text-3xl font-bold text-green-700 mb-6">{t.attractions.title}</h2>
        <div className="space-y-6">
          {t.attractions.places.map((place: any, index: number) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">{place.name}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{place.description}</p>
              {place.features && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{place.features.title}</h4>
                  <ul className="space-y-1">
                    {place.features.items.map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Special Features */}
      <section>
        <h2 className="text-3xl font-bold text-green-700 mb-6">{t.specialFeatures.title}</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <ul className="space-y-3">
            {t.specialFeatures.items.map((feature: string, index: number) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2">✨</span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gram Panchayat Officials */}
      <section>
        <h2 className="text-3xl font-bold text-green-700 mb-6">{t.officials.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.officials.members.map((official: any, index: number) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-green-600 mb-3">{official.name}</h3>
              <div className="space-y-2 text-sm">
                <div><span className="font-medium">{t.officials.dob}:</span> {official.dob}</div>
                <div><span className="font-medium">{t.officials.education}:</span> {official.education}</div>
                <div><span className="font-medium">{t.officials.mobile}:</span> {official.mobile}</div>
                <div><span className="font-medium">{t.officials.position}:</span> {official.position}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}















