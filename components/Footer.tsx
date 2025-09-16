"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Footer() {
  const params = useParams();
  const lang = params?.lang as string || 'mr';

  // Footer content in both languages
  const footerContent = {
    en: {
      description: "The aim of this portal is to make our Khadak Ozar Gram Panchayat digital and it has been created to enable citizens to display our work and services from the comfort of their homes, in less time.",
      contentOwned: "Content Owned by",
      department: "Rural Development & Panchayat Raj Department",
      developedBy: "Developed and hosted by",
      nic: "National Informatics Centre",
      ministry: "Ministry of Electronics & Information Technology, Government of India",
      lastUpdated: "Last Updated: Sep 04, 2025"
    },
    mr: {
      description: "या पोर्टलचा उद्देश आमच्या खडक ओझर ग्राम पंचायताला डिजिटल बनवणे आहे आणि नागरिकांना त्यांच्या घरातूनच आरामात, कमी वेळात आमचे काम आणि सेवा दाखविण्यासाठी तयार केले आहे.",
      contentOwned: "सामग्रीचे मालक",
      department: "ग्रामीण विकास आणि पंचायत राज विभाग",
      developedBy: "विकसित आणि होस्ट केले",
      nic: "राष्ट्रीय सूचना विज्ञान केंद्र",
      ministry: "इलेक्ट्रॉनिक्स आणि माहिती तंत्रज्ञान मंत्रालय, भारत सरकार",
      lastUpdated: "शेवटचे अद्यतन: 04 सप्टेंबर, 2025"
    }
  };

  const content = footerContent[lang as keyof typeof footerContent] || footerContent.en;

  return (
    <footer className="bg-black text-gray-200 mt-8 sm:mt-12">
      {/* Portal Description */}
      <div className="border-b border-gray-700 py-4 sm:py-6">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-sm sm:text-base text-center leading-relaxed text-gray-300">
            {content.description}
          </p>
        </div>
      </div>

      {/* Department Info */}
      <div className="max-w-6xl mx-auto text-center py-4 sm:py-6 px-4">
        <p className="text-xs sm:text-sm mb-2 leading-relaxed">
          {content.contentOwned} <span className="font-semibold">{content.department}</span>
        </p>
        <p className="text-xs sm:text-sm mb-2 leading-relaxed">
          {content.developedBy} <span className="font-semibold">{content.nic}</span>,<br />
          {content.ministry}
        </p>
        <p className="text-xs text-gray-400">{content.lastUpdated}</p>
      </div>

      {/* Logos Row */}
      <div className="bg-black py-3 sm:py-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-4 sm:gap-6 px-4">
          <img src="/images/footer/S3WaaS.svg" alt="S3WaaS" width={120} height={40} className="h-8 sm:h-10 w-auto" />
          <img src="/images/footer/NIC.svg" alt="NIC" width={120} height={40} className="h-8 sm:h-10 w-auto" />
          <img src="/images/footer/Digital-India.svg" alt="Digital India" width={120} height={40} className="h-8 sm:h-10 w-auto" />
        </div>
      </div>
    </footer>
  );
}
