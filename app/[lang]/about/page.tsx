"use client";
import { useParams } from "next/navigation";

// Import all locales
import en from "../../../locales/en/common.json"
import mr from "../../../locales/mr/common.json";

export default function AboutPage() {
  const params = useParams();
  const lang = params?.lang as string;

  // Choose correct language JSON
  let t: any = en;
  if (lang === "mr") t = mr;

  t = t.about; // focus only on about section

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
     

      {/* Introduction */}
      <section>
        <h2 className="text-3xl font-bold text-green-700 mb-4">{t.introduction.title}</h2>
        <p className="mb-4">
          {t.introduction.content1}
        </p>
        <p className="mb-4">
          {t.introduction.content2}
        </p>
        <p>
          {t.introduction.content3}
        </p>
      </section>

      {/* Vision & Mission */}
      <section>
        <h2 className="text-3xl font-bold text-green-700 mb-4">{t.visionMission.title}</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {t.visionMission.items.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Objectives & Functions */}
      <section>
        <h2 className="text-3xl font-bold text-green-700 mb-4">{t.objectivesFunctions.title}</h2>

        <h3 className="text-xl font-semibold mt-4 mb-2">{t.objectivesFunctions.objectives.title}</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {t.objectivesFunctions.objectives.items.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">{t.objectivesFunctions.functions.title}</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {t.objectivesFunctions.functions.items.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Roles & Responsibilities */}
      <section>
        <h2 className="text-3xl font-bold text-green-700 mb-4">{t.rolesResponsibilities.title}</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {t.rolesResponsibilities.items.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Key Achievements */}
      <section>
        <h2 className="text-3xl font-bold text-green-700 mb-4">{t.keyAchievements.title}</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {t.keyAchievements.items.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}









