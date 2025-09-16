"use client";
import { useParams } from "next/navigation";

// Import all locales
import en from "../../../../locales/en/common.json";
import mr from "../../../../locales/mr/common.json";

export default function JanArogyaSamitiPage() {
  const params = useParams();
  const lang = params?.lang as string || 'mr';

  // Choose correct language JSON
  let t: any = en;
  if (lang === "mr") t = mr;

  const pageT = t.janArogyaSamiti; // focus on janArogyaSamiti section

  // Get committee members from directory data
  const committeeMembers = t.directory?.members?.janArogyaSamiti || {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-8">
          <nav className="text-sm text-gray-600 mb-4">
            <span className="text-gray-900 font-semibold">{pageT.title}</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{pageT.pageTitle}</h1>
          <p className="text-lg text-green-600 font-medium mb-2">{pageT.subtitle}</p>
          <p className="text-lg text-gray-600">{pageT.description}</p>
        </div>

        <div className="flex justify-center">
          {/* Main Content - Centered */}
          <div className="w-full max-w-4xl space-y-8">
            {/* Committee Information */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 font-bold">🏥</span>
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
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold">🎯</span>
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

            {/* Health Services */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <span className="text-red-600 font-bold">⚕️</span>
                </div>
                {pageT.healthServices}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pageT.healthServicesList.map((service: string, index: number) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-sm font-bold">+</span>
                    </div>
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Committee Members Table */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 font-bold">👥</span>
          </div>
                {pageT.members}
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Name</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Designation</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(committeeMembers).map(([key, name]) => {
                      // Get designation from the key mapping
                      const designationMap: { [key: string]: string } = {
                        nagnathRamnathPagar: t.directory.designations.chairman,
                        vijayKisanPagar: t.directory.designations.viceChairman,
                        ajayaShivajiGavit: t.directory.designations.healthWorker,
                        shobhanaAnandaraoDeshmukh: t.directory.designations.anganwadiSevika,
                        gyaneshwarNavnathKale: t.directory.designations.anganwadiSevak,
                        mangalaBhausahebNagre: t.directory.designations.ashaMember,
                        manishaGanpatGirgaon: t.directory.designations.charanGarbhAsha,
                        anjanaBandopantPagar: t.directory.designations.member,
                        ajayramBandopantMutha: t.directory.designations.upSarpanch,
                        harindraNanabhaoPagar: t.directory.designations.member,
                        govindTulshiramPagar: t.directory.designations.member,
                        navnathKenuPagar: t.directory.designations.youthRepresentative
                      };

                      // Get address from the key mapping
                      const addressMap: { [key: string]: string } = {
                        nagnathRamnathPagar: "Gavhal Ozar, Khadak Ozar, Taluka: Nashik, District: Nashik, Maharashtra",
                        vijayKisanPagar: "Brahmanwade, Khadak Ozar, Taluka: Nashik, District: Nashik, Maharashtra",
                        ajayaShivajiGavit: "Khadak Ozar, Taluka: Nashik, District: Nashik, Maharashtra",
                        shobhanaAnandaraoDeshmukh: "Khadak Ozar, Taluka: Nashik, District: Nashik, Maharashtra",
                        gyaneshwarNavnathKale: "Khadak Ozar, Taluka: Nashik, District: Nashik, Maharashtra",
                        mangalaBhausahebNagre: "Khadak Ozar, Taluka: Nashik, District: Nashik, Maharashtra",
                        manishaGanpatGirgaon: "Khadak Ozar, Taluka: Nashik, District: Nashik, Maharashtra",
                        anjanaBandopantPagar: "Khadak Ozar, Taluka: Nashik, District: Nashik, Maharashtra",
                        ajayramBandopantMutha: "Khadak Ozar, Taluka: Nashik, District: Nashik, Maharashtra",
                        harindraNanabhaoPagar: "Khadak Ozar, Taluka: Nashik, District: Nashik, Maharashtra",
                        govindTulshiramPagar: "Khadak Ozar, Taluka: Nashik, District: Nashik, Maharashtra",
                        navnathKenuPagar: "Khadak Ozar, Taluka: Nashik, District: Nashik, Maharashtra"
                      };

                      return (
                        <tr key={key} className="hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 transition-all duration-200">
                          <td className="border border-gray-200 px-4 py-3 text-gray-800 font-medium">
                            {String(name)}
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-gray-700">
                            <span className="bg-gradient-to-r from-green-100 to-blue-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                              {designationMap[key] || t.directory.designations.member}
                      </span>
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-gray-600 text-sm">
                            {addressMap[key] || "Khadak Ozar, Taluka: Nashik, District: Nashik, Maharashtra"}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Health Tips */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-green-600">💡</span>
                {pageT.healthTips}
              </h3>
              <div className="space-y-3 text-sm text-gray-700">
                {pageT.healthTipsList.map((tip: string, index: number) => (
                  <p key={index}>• {tip}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


