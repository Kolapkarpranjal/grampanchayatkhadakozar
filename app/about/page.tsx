"use client";
import { useParams } from "next/navigation";

// Import all locales
import en from "../../locales/en/common.json";
import mr from "../../locales/mr/common.json";

export default function AboutPage() {
  const params = useParams();
  const lang = params?.lang as string || 'en';

  // Choose correct language JSON
  let t: any = en;
  if (lang === "mr") t = mr;
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      {/* Page Title */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-green-700">{t.about.title}</h1>
      </div>

      {/* Introduction */}
      <section>
        <h2 className="text-3xl font-bold text-green-700 mb-4">{t.about.introduction.title}</h2>
        <p className="mb-4">
          {t.about.introduction.content1}
        </p>
        <p className="mb-4">
          {t.about.introduction.content2}
        </p>
        <p>
          {t.about.introduction.content3}
        </p>
      </section>

      {/* Vision & Mission */}
      <section>
        <h2 className="text-3xl font-bold text-green-700 mb-4">{t.about.visionMission.title}</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {t.about.visionMission.items.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Objectives & Functions */}
      <section>
        <h2 className="text-3xl font-bold text-green-700 mb-4">{t.about.objectivesFunctions.title}</h2>

        <h3 className="text-xl font-semibold mt-4 mb-2">{t.about.objectivesFunctions.objectives.title}</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {t.about.objectivesFunctions.objectives.items.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">{t.about.objectivesFunctions.functions.title}</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {t.about.objectivesFunctions.functions.items.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Roles & Responsibilities */}
      <section>
        <h2 className="text-3xl font-bold text-green-700 mb-4">{t.about.rolesResponsibilities.title}</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {t.about.rolesResponsibilities.items.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Key Achievements */}
      <section>
        <h2 className="text-3xl font-bold text-green-700 mb-4">{t.about.keyAchievements.title}</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {t.about.keyAchievements.items.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
