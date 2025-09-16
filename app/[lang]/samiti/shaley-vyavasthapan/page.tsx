"use client";
import { useParams } from "next/navigation";

// Import all locales
import en from "../../../../locales/en/common.json";
import mr from "../../../../locales/mr/common.json";

export default function ShaleyVyavasthapanSamitiPage() {
  const params = useParams();
  const lang = params?.lang as string || 'mr';

  // Choose correct language JSON
  let t: any = en;
  if (lang === "mr") t = mr;

  const pageT = t.shaleySamiti; // focus on shaleySamiti section

  // Get committee members from directory data
  const committeeMembers = t.directory?.members?.shaleySamiti || {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-8">
          <nav className="text-sm text-gray-600 mb-4">
            <span className="text-gray-900 font-semibold">{pageT.title}</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{pageT.pageTitle}</h1>
          <p className="text-lg text-gray-600">{pageT.description}</p>
        </div>

        <div className="flex justify-center">
          {/* Main Content - Centered */}
          <div className="w-full max-w-4xl space-y-8">
            {/* Committee Information */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold">📋</span>
                </div>
                {pageT.committeeInfo}
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">{pageT.description}</p>
                <p className="mb-4">{pageT.additionalInfo}</p>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 font-bold">🎯</span>
                </div>
                {pageT.responsibilities}
              </h2>
              <ul className="space-y-3">
                {pageT.responsibilitiesList.map((responsibility: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Committee Members Table */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold">👥</span>
          </div>
                {pageT.members}
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Name</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Designation</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(committeeMembers).map(([key, name]) => {
                      // Get designation from the key mapping
                      const designationMap: { [key: string]: string } = {
                        ravindraRamnathPagar: t.directory.designations.president,
                        sharadKisanPagar: t.directory.designations.vicePresident,
                        namdevTukaramPagar: t.directory.designations.tatSanchalak,
                        punjaramKoshinathSuryavanshi: t.directory.designations.secretary,
                        chandrakantTulshiramPagar: t.directory.designations.member,
                        sopanTulshiramPagar: t.directory.designations.member,
                        nandkishorGangadharSaykar: t.directory.designations.member,
                        sukdevPrabhakarGhopade: t.directory.designations.member,
                        babajiBhimajiPagar: t.directory.designations.member,
                        hanumantMadhavPagar: t.directory.designations.member,
                        ajayTrambakPagar: t.directory.designations.member,
                        shivajiGopalPagar: t.directory.designations.member,
                        krishnaDinkarPagar: t.directory.designations.member,
                        govindTulshiramPagar: t.directory.designations.member,
                        sanjayMadhavraoChaute: t.directory.designations.member,
                        aditikaGanpatSaykar: t.directory.designations.studentMember,
                        sujataSiddharthKedar: t.directory.designations.specialInvitee,
                        kalyaniSantoshSonawane: t.directory.designations.womanMember
                      };

                      return (
                        <tr key={key} className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 transition-all duration-200">
                          <td className="border border-gray-200 px-4 py-3 text-gray-800 font-medium">
                            {String(name)}
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-gray-700">
                            <span className="bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                              {designationMap[key] || t.directory.designations.member}
                      </span>
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-gray-600 text-sm">
                            Khadak Ozar, Taluka: Nashik, District: Nashik, Maharashtra
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
