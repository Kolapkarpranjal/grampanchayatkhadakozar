import Image from "next/image";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

// Import all locales
import en from "../locales/en/common.json";
import mr from "../locales/mr/common.json";

// Import static member data
import { getAllMembers, MemberImage } from "./data/members";

// Function to get translated member name
const getTranslatedMemberName = (englishName: string, lang: string): string => {
  const translations = lang === 'mr' ? mr : en;
  
  // Create a mapping of English names to translation keys
  const nameMapping: { [key: string]: string } = {
    "Sagar Vasantrao Pagar": "sagarVasantraoPagar",
    "Govind Tulshiram Pagar": "govindTulshiramPagar", 
    "Harshad Janardan Pagar": "harshadJanardanPagar",
    "Devidas Tatyaba Pagar": "devidasTatyabaPagar",
    "Sharad Ramchandra Bhavar": "sharadRamchandraBhavar",
    "Shivaji Chindhu Ghodhade": "shivajiChindhuGhodhade",
    "Sarika Ashok Pagar": "sarikaAshokPagar",
    "Ratna Atmaram Pagar": "ratnaAtmaramPagar",
    "Sonali Sunil Bhavar": "sonaliSunilBhavar",
    "Aruna Khanderao Pagar": "arunaKhanderaoPagar",
    "Laxmibai Chahadu Suryawanshi": "laxmibaiChahaduSuryawanshi",
    "Priyanka Shivanath Kedare": "priyankaShivanathKedare",
    "Roshan Balwant Suryavanshi": "roshanBalwantSuryavanshi",
    "Sushil Rajendra Kedare": "sushilRajendraKedare",
    "Ganesh Kedu Pagar": "ganeshKeduPagar",
    "Kailas Ramdas Pagar": "kailasRamdasPagar",
    "Sahebrao Nivritti Kank": "sahebraoNivrittiKank"
  };

  const translationKey = nameMapping[englishName];
  if (translationKey && translations.directory?.members?.gramPanchayat) {
    return (translations.directory.members.gramPanchayat as any)[translationKey] || englishName;
  }
  
  // If no translation found, return the original name
  return englishName;
};

// Function to get translated designation
const getTranslatedDesignation = (englishDesignation: string, lang: string): string => {
  const translations = lang === 'mr' ? mr : en;
  
  // Create a mapping of English designations to translation keys
  const designationMapping: { [key: string]: string } = {
    "Sarpanch (Head of Village Council)": "sarpanch",
    "Deputy Sarpanch (Deputy Head of Village Council)": "deputySarpanch",
    "Member": "member",
    "Member (Female)": "femaleMember",
    "Gram Panchayat Officer": "gramPanchayatOfficer",
    "Computer Operator": "computerOperator",
    "Clerk Vasuli Karkun": "clerkVasuliKarkun",
    "Gram Rojgar Sahayak": "gramRojgarSahayak",
    "Water Supply Employee": "waterSupplyEmployee"
  };

  const translationKey = designationMapping[englishDesignation];
  if (translationKey && translations.directory?.designations) {
    return (translations.directory.designations as any)[translationKey] || englishDesignation;
  }
  
  // If no translation found, return the original designation
  return englishDesignation;
};

export default function MembersSection() {
  const [memberImages, setMemberImages] = useState<MemberImage[]>([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const lang = params?.lang as string || 'mr';

  // Choose correct language JSON
  let t: any = en;
  if (lang === "mr") t = mr;

  useEffect(() => {
    // Load static members only (for static export compatibility)
    const staticMembers = getAllMembers(lang);
    setMemberImages(staticMembers);
    setLoading(false);
  }, [lang]);
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-10">
        {t.home.members.title}
      </h2>

      {loading ? (
        <div className="max-w-4xl mx-auto">
          {/* Loading state for Sarpanch and Deputy Sarpanch */}
          <div className="flex justify-center gap-8 sm:gap-12 md:gap-16 mb-8 sm:mb-12">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gray-200 animate-pulse rounded-full"></div>
                <div className="mt-4 sm:mt-6 h-4 sm:h-5 bg-gray-200 animate-pulse rounded w-32 sm:w-40"></div>
                <div className="mt-2 sm:mt-3 h-3 sm:h-4 bg-gray-200 animate-pulse rounded w-28 sm:w-36"></div>
              </div>
            ))}
          </div>
          {/* Loading state for other members */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center">
            {[...Array(15)].map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gray-200 animate-pulse rounded-full"></div>
                <div className="mt-3 sm:mt-4 h-3 sm:h-4 bg-gray-200 animate-pulse rounded w-24 sm:w-28"></div>
                <div className="mt-2 h-2 sm:h-3 bg-gray-200 animate-pulse rounded w-20 sm:w-24"></div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          {/* Sarpanch and Deputy Sarpanch - First Row */}
          <div className="flex justify-center gap-8 sm:gap-12 md:gap-16 mb-8 sm:mb-12">
            {memberImages
              .filter(member => member.order <= 2)
              .map((member) => {
                const translatedName = getTranslatedMemberName(member.memberName, lang);
                const translatedDesignation = getTranslatedDesignation(member.memberDesignation, lang);
                
                return (
                  <div key={member._id} className="flex flex-col items-center">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 relative rounded-full overflow-hidden border-3 sm:border-4 border-gray-200 shadow-lg">
                      <Image
                        src={member.imageUrl}
                        alt={translatedName}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-bold text-center leading-tight">{translatedDesignation}</h3>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg text-center leading-tight font-medium">{translatedName}</p>
                  </div>
                );
              })}
          </div>
          
          {/* Other Members - 3 per row with proper spacing */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center">
            {memberImages
              .filter(member => member.order > 2)
              .map((member) => {
                const translatedName = getTranslatedMemberName(member.memberName, lang);
                const translatedDesignation = getTranslatedDesignation(member.memberDesignation, lang);
                
                return (
                  <div key={member._id} className="flex flex-col items-center">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 relative rounded-full overflow-hidden border-2 sm:border-3 border-gray-200 shadow-md">
                      <Image
                        src={member.imageUrl}
                        alt={translatedName}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-semibold text-center leading-tight">{translatedDesignation}</h3>
                    <p className="text-gray-700 text-xs sm:text-sm md:text-base text-center leading-tight">{translatedName}</p>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </section>
  );
}
