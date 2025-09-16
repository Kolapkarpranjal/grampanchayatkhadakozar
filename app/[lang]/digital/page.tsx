"use client";
import { useParams } from "next/navigation";

// Import locales
import en from "../../../locales/en/common.json";
import mr from "../../../locales/mr/common.json";

export default function DigitalGrampanchayatPage() {
  const params = useParams();
  const lang = (params?.lang as string) || "mr";

  const t: any = lang === "mr" ? mr : en;
  const page = t.digitalGrampanchayat;

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <header className="text-center mb-8 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700">
          {page.title}
        </h1>
        <p className="mt-3 text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
          {page.subtitle}
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <article className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">{page.sections.vision.title}</h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{page.sections.vision.desc}</p>
        </article>

        <article className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">{page.sections.objectives.title}</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
            {page.sections.objectives.items.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 sm:p-6 md:col-span-2">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">{page.sections.services.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {page.sections.services.items.map((svc: string, idx: number) => (
              <div key={idx} className="rounded-lg border border-gray-200 p-4 bg-gray-50">
                <span className="text-gray-800 text-sm sm:text-base">{svc}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 sm:p-6 md:col-span-2">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">{page.sections.contact.title}</h2>
          <div className="text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
            <p><strong>{page.sections.contact.office}:</strong> {page.sections.contact.officeValue}</p>
            <p><strong>{page.sections.contact.email}:</strong> {page.sections.contact.emailValue}</p>
            <p><strong>{page.sections.contact.phone}:</strong> {page.sections.contact.phoneValue}</p>
            <p><strong>{page.sections.contact.hours}:</strong> {page.sections.contact.hoursValue}</p>
          </div>
        </article>
      </section>
    </main>
  );
}


