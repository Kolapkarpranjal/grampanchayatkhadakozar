"use client";
import { useState } from "react";
import { Search } from "lucide-react";

export default function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("All");


  // Official data from Maharashtra Rural Development & Panchayat Raj Department
  const officialsData = [
    {
      division: "Rural Development and Panchayat Raj Department PS Office",
      officials: [
        {
          name: "Mr. Eknath Dawle (I.A.S.)",
          designation: "Principal Secretary, Rural Development and Panchayat Raj Department",
          email: "sec[dot]rdd[at]maharashtra[dot]gov[dot]in",
          address: "7th Floor, Construction Building, 25 Marzban Path, Fort, Mumbai 400001"
        }
      ]
    },
    {
      division: "Maharashtra State Rural Development Mission",
      officials: [
        {
          name: "Mr. Nilesh Sagar (I.A.S.)",
          designation: "Chief Executive Officer (Maharashtra State Rural Livelihood Improvement Mission)",
          email: "ceo[at]umed[dot]in",
          address: "5th Floor, CIDCO Bhavan (South Wing) CBD Belapur, Navi Mumbai-400614"
        }
      ]
    },
    {
      division: "Maharashtra Rural Development Association Office (MRRDA)",
      officials: [
        {
          name: "Mr. Satish M. Chikhlikar",
          designation: "Secretary (Chief Minister Gram Road Scheme)",
          email: "secycmpmgsy-rdd[at]mah[dot]gov[dot]in",
          address: "5th Floor, Bandhkam Bhavan, 25 Marzban Path, Fort, Mumbai 400001"
        }
      ]
    },
    {
      division: "State Rural Development and Panchayat Raj Deputy Secretariate Office",
      officials: [
        {
          name: "Mr. K. G. Valvi",
          designation: "Joint Secretary (Bandhkam-3) (Aastha-1,Aastha-2 & Scheme 6)",
          email: "est[dot]rdd[at]maharashtra[dot]gov[dot]in",
          address: "7th Floor, Bandhkam Bhavan, 25 Marzban Path, Fort, Mumbai 400001"
        },
        {
          name: "Smt. V. M. Bharose",
          designation: "Joint Secretary Central Scheme",
          email: "varsha[dot]bharose[at]nic[dot]in",
          address: "Ground Floor, Bandhkam Bhavan, 25 Marzban Path, Fort, Mumbai 400001"
        },
        {
          name: "Mr. Prashant V. Patil",
          designation: "Deputy Secretary (PMGSY & MMGSY)",
          email: "dspmgsy[dot]rdd[at]maharashtra[dot]gov[dot]in",
          address: "5th Floor, Bandhkam Bhavan, 25 Marzban Path, Fort, Mumbai 400001"
        },
        {
          name: "Mr. Subhash Ingale",
          designation: "Deputy Secretary ( M. D. S )",
          email: "mds[dot]rdd[at]maharashtra[dot]gov[dot]in",
          address: "3rd Floor, Bandhkam Bhavan, 25 Marzban Path, Fort, Mumbai 400001"
        },
        {
          name: "Mr. Vinod Bondre",
          designation: "Deputy Secretary (Panchayat Raj)",
          email: "dspara[dot]rdd-mh[at]gov[dot]in",
          address: "Ground Floor, A-Wing, Bandhkam Bhavan, 25 Marzban Path, Fort, Mumbai 400001"
        },
        {
          name: "Smt. N.S. Rande",
          designation: "Deputy Secretary (Zilla Parishad Establishment)",
          email: "neela[dot]ranade[at]nic[dot]in",
          address: "1st Floor, Bandhkam Bhavan, 25 Marzban Path, Fort, Mumbai 400001"
        },
        {
          name: "Smt. Seema B. Jadhav",
          designation: "Deputy Secretary (Treasury & Registration Branch)",
          email: "seema[dot]jadhav[at]nic[dot]in",
          address: "Ground Floor, A-Wing, Bandhkam Bhavan, 25 Marzban Path, Fort, Mumbai 400001"
        },
        {
          name: "Mr. R. B. Linganwad",
          designation: "Deputy Secretary/Deputy Director Finance",
          email: "ravikumar[dot]linganwad[at]gov[dot]in",
          address: "1st Floor, Bandhkam Bhavan, 25 Marzban Path, Fort, Mumbai 400001"
        }
      ]
    },
    {
      division: "State Rural Development and Panchayat of Under Secretary Office",
      officials: [
        {
          name: "Mr. P. V. Babar",
          designation: "Under Secretary",
          email: "parmeshwarv[dot]babar[at]nic[dot]in",
          address: "Ground Floor, Bandhkam Bhavan, 25 Marzban Path, Fort, Mumbai 400001"
        },
        {
          name: "Mr. A. V. Shinde",
          designation: "Under Secretary",
          email: "sopr5[dot]rdd-mh[at]nic[dot]in",
          address: "Ground Floor, Bandhkam Bhavan, 25 Marzban Path, Fort, Mumbai 400001"
        },
        {
          name: "Smt. U. V. Joshi",
          designation: "Under Secretary",
          email: "urmila[dot]joshi[at]nic[dot]in",
          address: "3rd Floor, Bandhkam Bhavan, 25 Marzban Path, Fort, Mumbai 400001"
        },
        {
          name: "Mr. N. K. Kudal",
          designation: "Under Secretary",
          email: "narayan[dot]kudal[at]nic[dot]in",
          address: "1st Floor, Bandhkam Bhavan, 25 Marzban Path, Fort, Mumbai 400001"
        },
        {
          name: "Smt. S. M. Kholgadge",
          designation: "Under Secretary",
          email: "sangeeta[dot]kholgadge[at]nic[dot]in",
          address: "Ground Floor, Bandhkam Bhavan, 25 Marzban Path, Fort, Mumbai 400001"
        },
        {
          name: "Mr. V. A. Daingade",
          designation: "Under Secretary",
          email: "aoyoj2[dot]rdd-mh[at]nic[dot]in",
          address: "Ground Floor, Bandhkam Bhavan, 25 Marzban Path, Fort, Mumbai 400001"
        },
        {
          name: "Mr. B. M. Asole",
          designation: "Under Secretary",
          email: "sopr2[dot]rdd-mh[at]nic[dot]in",
          address: "Ground Floor, Bandhkam Bhavan, 25 Marzban Path, Fort, Mumbai 400001"
        },
        {
          name: "Smt. S. K. Ghotale",
          designation: "Under Secretary",
          email: "supriya[dot]ghotale[at]nic[dot]in",
          address: "1st Floor, Bandhkam Bhavan, 25 Marzban Path, Fort, Mumbai 400001"
        },
        {
          name: "Mr. Prashant A. Doke",
          designation: "Under Secretary",
          email: "prashant[dot]doke[at]nic[dot]in",
          address: "1st Floor, Bandhkam Bhavan, 25 Marzban Path, Fort, Mumbai 400001"
        },
        {
          name: "Smt. S. G. Lande",
          designation: "Under Secretary",
          email: "sangita[dot]lande[at]nic[dot]in",
          address: "1st Floor, Bandhkam Bhavan, 25 Marzban Path, Fort, Mumbai 400001"
        },
        {
          name: "Smt. S. S. Gawas",
          designation: "Under Secretary",
          email: "Sandhya[dot]gawas[at]nic[dot]in",
          address: "1st Floor, Bandhkam Bhavan, 25 Marzban Path, Fort, Mumbai 400001"
        }
      ]
    },
    {
      division: "State Directorate of State Rural Development and Panchayatraj Office",
      officials: [
        {
          name: "Mr. Girish Bhalerao",
          designation: "Director (Panchayat Raj)",
          email: "spdrgsa[dot]maharashtra[at]mah[dot]gov[dot]in",
          address: "A-9, Shivsagar Apartment, Modibagh, Ganeshkhind Road, Shivajinagar, Pune, Maharashtra 411005"
        }
      ]
    },
    {
      division: "State Management Unit - Rural Housing",
      officials: [
        {
          name: "Mr. Rajaram Dighe",
          designation: "Director (State Management Unit-Rural Housing)",
          email: "directoriayruralhousing[at]gmail[dot]com",
          address: "4th Floor, CIDCO Bhawan – South Division, CBD Belapur, Navi Mumbai- 400614 Maharashtra."
        }
      ]
    }
  ];

  const divisions = ["All", ...officialsData.map(item => item.division)];

  // Filter officials data
  const filteredData = officialsData.filter(item => 
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
            <span>Home</span> <span className="mx-2">&gt;</span> 
            <span>About Us</span> <span className="mx-2">&gt;</span> 
            <span className="text-gray-900 font-semibold">Who&apos;s Who</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Who&apos;s Who</h1>
        </div>

        {/* Filter Section matching the screenshot */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="bg-orange-500 text-white px-4 py-2 text-sm font-medium">
              Filter Who&apos;s Who divisions wise
            </div>
            <div className="flex-1">
              <select
                value={selectedDivision}
                onChange={(e) => setSelectedDivision(e.target.value)}
                className="w-full max-w-md px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                {divisions.map((division) => (
                  <option key={division} value={division}>
                    {division}
                  </option>
                ))}
              </select>
            </div>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-6 py-2 font-medium flex items-center gap-2 transition-colors duration-200">
              <Search className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>


        {/* Officials Tables matching the screenshot */}
        <div className="space-y-6">
          {filteredData.map((division, divisionIndex) => (
            <div key={divisionIndex} className="border border-gray-200">
              {/* Section Header */}
              <div className="bg-gray-800 text-white px-6 py-4">
                <h3 className="text-lg font-semibold">{division.division}</h3>
              </div>
              
              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-orange-500 text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Name</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Designation</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Email</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {division.officials.map((official, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-800 font-medium">
                          {official.name}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">
                          {official.designation}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-blue-600 hover:underline cursor-pointer">
                          {official.email}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-600 text-sm">
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
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">No Officials Found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filter options.</p>
          </div>
        )}
      </div>

    </div>
  );
}





