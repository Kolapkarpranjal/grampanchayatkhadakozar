"use client";
import { useParams } from "next/navigation";

// Import all locales
import en from "../../../locales/en/common.json";
import mr from "../../../locales/mr/common.json";

export default function RTIPage() {
  const params = useParams();
  const lang = params?.lang as string || 'mr';

  // Choose correct language JSON
  let t: any = en;
  if (lang === "mr") t = mr;

  t = t.navbar; // focus on navbar section

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          {t.rti}
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Right to Information Act - Access to government information.
        </p>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-500">
            This page is under construction. RTI information will be added soon.
          </p>
        </div>
      </div>
    </div>
  );
}






