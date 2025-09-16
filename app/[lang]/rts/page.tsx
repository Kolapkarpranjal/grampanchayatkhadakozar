"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
// Import all locales
import en from "../../../locales/en/common.json";
import mr from "../../../locales/mr/common.json";

export default function RTSPage() {
  const params = useParams();
  const lang = params?.lang as string || 'mr'; // Default to 'mr' if undefined

  // Choose correct language JSON
  let t: any = en;
  if (lang === "mr") t = mr;

  t = t.rts; // focus on rts section

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Section */}
      <main className="flex-1 bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-purple-700">
              {t.title}
            </h1>
            <h2 className="text-xl font-semibold text-gray-800">
              {t.subtitle}
            </h2>

            <p className="text-gray-700 leading-relaxed">
              {t.description1}
            </p>

            <p className="text-gray-700 leading-relaxed">
              {t.description2}
            </p>

            <p className="text-gray-700 leading-relaxed">
              {t.description3}
            </p>

            <h3 className="text-lg font-semibold text-gray-900">
              {t.notifiedServices}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {t.services.map((service: string, index: number) => (
                <li key={index}>{service}</li>
              ))}
            </ul>


          </motion.div>

          {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/images/rts.png"
              alt="RTS Act"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </main>

    </div>
  );
}












