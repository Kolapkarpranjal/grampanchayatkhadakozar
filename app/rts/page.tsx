// app/[lang]/rts/page.tsx
"use client";

import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

export default function RTSPage() {
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
              Right to Service (RTS)
            </h1>
            <h2 className="text-xl font-semibold text-gray-800">
              Maharashtra Right To Service Act
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The Maharashtra Right to Public Services Act, 2015 is enacted and is in force since 28.04.2015 to ensure that notified services are provided to the citizens in a transparent, speedy and time-bound manner by various Government Departments and Public Authorities under the Government. Its objective is to provide easy, prompt and time bound services to the citizens.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The Maharashtra State Commission for Right to Public Service has been constituted under the above Act to monitor, coordinate, control and improve the public services being provided by the Government. The Commission consists of a Chief Commissioner and six Commissioners. The headquarter of the Commission is at the New Administrative Building, Opposite Mantralaya, Mumbai and the Divisional Offices of the Commissioners are at the six Divisional Headquarters.
            </p>

            <p className="text-gray-700 leading-relaxed">
              If any notified service is not provided to any eligible person within stipulated time or is rejected without proper grounds, the concerned person may file 1st and 2nd appeals with the higher authorities and if he is not satisfied with their decision, he may prefer third appeal to the Commission. The erring officer is liable for a penalty up to Rs 5000/- per case.
            </p>

            <h3 className="text-lg font-semibold text-gray-900">
              Notified Services under RTS:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Birth registration certificate</li>
              <li>Death certificate</li>
              <li>Marriage registration certificate</li>
              <li>Below Poverty Line Certificate</li>
              <li>No Dues Certificate</li>
              <li>Old Age Certificate For Niradhar</li>
              <li>Assessment certificate</li>
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
              src="/images/rts.png" // 👉 replace with your image path
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
