import Image from "next/image";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

// Import all locales
import en from "../locales/en/common.json";
import mr from "../locales/mr/common.json";

interface MemberImage {
  _id: string;
  title: string;
  imageUrl: string;
  memberName: string;
  memberDesignation: string;
  order: number;
}

export default function MembersSection() {
  const [memberImages, setMemberImages] = useState<MemberImage[]>([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const lang = params?.lang as string || 'en';

  // Choose correct language JSON
  let t: any = en;
  if (lang === "mr") t = mr;

  useEffect(() => {
    const fetchMemberImages = async () => {
      try {
        const response = await fetch('/api/images?type=member');
        const data = await response.json();
        setMemberImages(data);
      } catch (error) {
        console.error('Error fetching member images:', error);
        // Fallback to default members from translations
        const defaultMembers = t.home.members.members.map((member: any, index: number) => ({
          _id: `default-${index + 1}`,
          title: member.name,
          imageUrl: `/members/member${index + 1}.jpg`,
          memberName: member.name,
          memberDesignation: member.designation,
          order: index + 1
        }));
        setMemberImages(defaultMembers);
      } finally {
        setLoading(false);
      }
    };

    fetchMemberImages();
  }, [t]);
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        {t.home.members.title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
        {loading ? (
          [...Array(6)].map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-40 h-40 bg-gray-200 animate-pulse rounded-full"></div>
              <div className="mt-4 h-4 bg-gray-200 animate-pulse rounded w-32"></div>
              <div className="mt-2 h-3 bg-gray-200 animate-pulse rounded w-24"></div>
            </div>
          ))
        ) : (
          memberImages.map((member) => (
            <div key={member._id} className="flex flex-col items-center">
              <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-gray-200 shadow-md">
                <Image
                  src={member.imageUrl}
                  alt={member.memberName}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{member.memberDesignation}</h3>
              <p className="text-gray-700">{member.memberName}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
