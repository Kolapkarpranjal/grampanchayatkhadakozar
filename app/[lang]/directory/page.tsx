"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { Search } from "lucide-react";

// Import all locales
import en from "../../../locales/en/common.json";
import mr from "../../../locales/mr/common.json";

export default function DirectoryPage() {
  const params = useParams();
  const lang = params?.lang as string || 'mr';
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("All");

  // Choose correct language JSON
  let t: any = en;
  if (lang === "mr") t = mr;

  const directoryT = t.directory; // focus on directory section

  // Gram Panchayat Level Data with translations
  const gramPanchayatData = [
    {
      division: directoryT.committees.gramPanchayat,
      officials: [
        {
          name: directoryT.members.gramPanchayat.sagarVasantraoPagar,
          designation: directoryT.designations.sarpanch,
          email: "sagar.pagar@khadakozar.gov.in",
          address: "Khadak Ozar, Taluka: Nashik, District: Nashik, Maharashtra | DOB: 21/05/1997 | Education: B.A. | Mobile: 8805815671"
        },
        {
          name: directoryT.members.gramPanchayat.govindTulshiramPagar,
          designation: directoryT.designations.deputySarpanch,
          email: "govind.pagar@khadakozar.gov.in",
          address: "Khadak Ozar, Taluka: Nashik, District: Nashik, Maharashtra | DOB: 30/08/1994 | Education: S.S.C. (10th Pass) | Mobile: 8805815671"
        },
        {
          name: directoryT.members.gramPanchayat.harshadJanardanPagar,
          designation: directoryT.designations.member,
          email: "harshad.pagar@khadakozar.gov.in",
          address: "Khadak Ozar, Taluka: Nashik, District: Nashik, Maharashtra | DOB: 28/07/1995 | Education: B.E. (Civil Engineering) | Mobile: 8806018793"
        },
        {
          name: directoryT.members.gramPanchayat.devidasTatyabaPagar,
          designation: directoryT.designations.member,
          email: "devidas.pagar@khadakozar.gov.in",
          address: "Khadak Ozar, Taluka: Nashik, District: Nashik, Maharashtra | DOB: 07/10/1984 | Education: B.Com. | Mobile: 9518357405"
        },
        {
          name: directoryT.members.gramPanchayat.sharadRamchandraBhavar,
          designation: directoryT.designations.member,
          email: "sharad.bhavar@khadakozar.gov.in",
          address: "Khadak Ozar, Taluka: Nashik, District: Nashik, Maharashtra | DOB: 01/06/1981 | Education: F.Y. (First Year of Graduation) | Mobile: 9545347626"
        },
        {
          name: directoryT.members.gramPanchayat.shivajiChindhuGhodhade,
          designation: directoryT.designations.member,
          email: "shivaji.ghodhade@khadakozar.gov.in",
          address: "Khadak Ozar, Taluka: Nashik, District: Nashik, Maharashtra | DOB: 21/09/1994 | Education: H.S.C. (12th Pass) | Mobile: 9359410216"
        },
        {
          name: directoryT.members.gramPanchayat.sarikaAshokPagar,
          designation: directoryT.designations.femaleMember,
          email: "sarika.pagar@khadakozar.gov.in",
          address: "Khadak Ozar, Taluka: Nashik, District: Nashik, Maharashtra | DOB: 05/07/1989 | Education: S.S.C. (10th Pass) | Mobile: 9834763723"
        },
        {
          name: directoryT.members.gramPanchayat.ratnaAtmaramPagar,
          designation: directoryT.designations.femaleMember,
          email: "ratna.pagar@khadakozar.gov.in",
          address: "Khadak Ozar, Taluka: Nashik, District: Nashik, Maharashtra | DOB: 12/02/1990 | Education: S.S.C. (10th Pass) | Mobile: 7620913417"
        },
        {
          name: directoryT.members.gramPanchayat.sonaliSunilBhavar,
          designation: directoryT.designations.femaleMember,
          email: "sonali.bhavar@khadakozar.gov.in",
          address: "Khadak Ozar, Taluka: Nashik, District: Nashik, Maharashtra | DOB: 10/06/1989 | Education: H.S.C. (12th Pass) | Mobile: 9850261067"
        },
        {
          name: directoryT.members.gramPanchayat.arunaKhanderaoPagar,
          designation: directoryT.designations.femaleMember,
          email: "aruna.pagar@khadakozar.gov.in",
          address: "Khadak Ozar, Taluka: Nashik, District: Nashik, Maharashtra | DOB: 16/04/1988 | Education: F.Y.J.C. (First Year Junior College – 11th) | Mobile: 9373225120"
        },
        {
          name: directoryT.members.gramPanchayat.laxmibaiChahaduSuryawanshi,
          designation: directoryT.designations.femaleMember,
          email: "laxmibai.suryawanshi@khadakozar.gov.in",
          address: "Khadak Ozar, Taluka: Nashik, District: Nashik, Maharashtra | DOB: — | Education: — | Mobile: 8805370716"
        },
        {
          name: directoryT.members.gramPanchayat.priyankaShivanathKedare,
          designation: directoryT.designations.femaleMember,
          email: "priyanka.kedare@khadakozar.gov.in",
          address: "Khadak Ozar, Taluka: Nashik, District: Nashik, Maharashtra | DOB: 24/03/1996 | Education: S.S.C. (10th Pass) | Mobile: 9822827919"
        }
      ]
    },
    {
      division: directoryT.committees.executiveCommittee,
      officials: [
        {
          name: directoryT.members.executiveCommittee.roshanBalwantSuryavanshi,
          designation: directoryT.designations.gramPanchayatOfficer,
          email: "roshan.suryavanshi@khadakozar.gov.in",
          address: "Khadak Ozar, Taluka: Nashik, District: Nashik, Maharashtra | DOB: 03/04/1988 | Education: Agricultural Diploma | Mobile: 8275586264"
        },
        {
          name: directoryT.members.executiveCommittee.sushilRajendraKedare,
          designation: directoryT.designations.computerOperator,
          email: "sushil.kedare@khadakozar.gov.in",
          address: "Khadak Ozar, Taluka: Nashik, District: Nashik, Maharashtra | DOB: 30/08/1994 | Education: HSC | Mobile: 8850366248"
        },
        {
          name: directoryT.members.executiveCommittee.ganeshKeduPagar,
          designation: directoryT.designations.clerkVasuliKarkun,
          email: "ganesh.pagar@khadakozar.gov.in",
          address: "Khadak Ozar, Taluka: Nashik, District: Nashik, Maharashtra | DOB: 27/09/1993 | Education: HSC | Mobile: 9764268193"
        },
        {
          name: directoryT.members.executiveCommittee.kailasRamdasPagar,
          designation: directoryT.designations.gramRojgarSahayak,
          email: "kailas.pagar@khadakozar.gov.in",
          address: "Khadak Ozar, Taluka: Nashik, District: Nashik, Maharashtra | DOB: 28/12/1995 | Education: HSC | Mobile: 8805815671"
        },
        {
          name: directoryT.members.executiveCommittee.sahebraoNivrittiKank,
          designation: directoryT.designations.waterSupplyEmployee,
          email: "sahebrao.kank@khadakozar.gov.in",
          address: "Khadak Ozar, Taluka: Nashik, District: Nashik, Maharashtra | DOB: 28/06/1986 | Education: SSC | Mobile: 8010045761"
        }
      ]
    }
  ];

  // Use only Gram Panchayat data (removed state-level officials)
  const allData = gramPanchayatData;
  const divisions = ["All", ...allData.map(item => item.division)];

  // Filter officials data
  const filteredData = allData.filter(item => 
    selectedDivision === "All" || item.division === selectedDivision
  ).map(item => ({
    ...item,
    officials: item.officials.filter(official =>
      official.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      official.designation.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(item => item.officials.length > 0);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header matching the screenshot */}
        <div className="mb-8">
          <nav className="text-sm text-gray-600 mb-4">
            <span className="text-gray-900 font-semibold">{directoryT.title}</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{directoryT.pageTitle}</h1>
        </div>
        
        {/* Filter Section with green color scheme */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 text-sm font-medium rounded-lg shadow-md">
              {directoryT.filterText}
                </div>
            <div className="flex-1">
              <select
                value={selectedDivision}
                onChange={(e) => setSelectedDivision(e.target.value)}
                className="w-full max-w-md px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
              >
                {divisions.map((division) => (
                  <option key={division} value={division}>
                    {division}
                  </option>
                ))}
              </select>
            </div>
            <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2 font-medium flex items-center gap-2 transition-all duration-200 rounded-lg shadow-md">
              <Search className="w-4 h-4" />
              {directoryT.filterButton}
            </button>
        </div>
        </div>
        
        {/* Officials Tables with new color scheme */}
        <div className="space-y-6">
          {filteredData.map((division, divisionIndex) => (
            <div key={divisionIndex} className="border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Section Header */}
              <div className="bg-gradient-to-r from-slate-700 to-slate-800 text-white px-6 py-4">
                <h3 className="text-lg font-semibold">{division.division}</h3>
              </div>
              
              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">{directoryT.tableHeaders.name}</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">{directoryT.tableHeaders.designation}</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">{directoryT.tableHeaders.address}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {division.officials.map((official, index) => (
                      <tr key={index} className="hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-200">
                        <td className="border border-gray-200 px-4 py-3 text-gray-800 font-medium">
                          {official.name}
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-gray-700">
                          <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            {official.designation}
                          </span>
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-gray-600 text-sm">
                          {official.address}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-10 w-10 text-green-500" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{directoryT.noOfficialsFound}</h3>
            <p className="text-gray-600">{directoryT.noOfficialsMessage}</p>
          </div>
        )}
        </div>
    </div>
  );
}


