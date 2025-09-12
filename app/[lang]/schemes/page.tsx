"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { 
  Home, 
  Heart, 
  GraduationCap, 
  Droplets, 
  Shield, 
  Users, 
  Search, 
  Filter,
  ExternalLink,
  Calendar,
  MapPin,
  Award,
  CheckCircle,
  Clock,
  FileText
} from "lucide-react";

// Import all locales
import en from "../../../locales/en/common.json";
import mr from "../../../locales/mr/common.json";

export default function SchemesPage() {
  const params = useParams();
  const lang = params?.lang as string;
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Choose correct language JSON
  let t: any = en;
  if (lang === "mr") t = mr;

  t = t.schemes; // focus on schemes section

  // Gram Panchayat Level Schemes Data
  const schemesData = [
    {
      id: 1,
      title: "Pradhan Mantri Gramin Awaas Yojana (PMGAY)",
      category: "Housing",
      icon: Home,
      description: "Housing scheme for rural poor families to provide pucca houses with basic amenities like electricity, water, and sanitation.",
      benefits: [
        "Financial assistance up to ₹1.20 lakh",
        "Basic amenities included (electricity, water, toilet)",
        "Priority to SC/ST families and women",
        "Construction of pucca houses"
      ],
      eligibility: "Below Poverty Line (BPL) families, SC/ST families, women-headed households",
      status: "active",
      launchDate: "2016",
      targetBeneficiaries: "All eligible rural families",
      implementation: "Through Gram Panchayat with state government support"
    },
    {
      id: 2,
      title: "Swachh Bharat Mission (Gramin)",
      category: "Sanitation",
      icon: Shield,
      description: "Clean India Mission for rural areas focusing on sanitation, hygiene, and waste management.",
      benefits: [
        "Individual household toilets",
        "Community toilets in public places",
        "Solid and liquid waste management",
        "Behavioral change communication"
      ],
      eligibility: "All rural households without toilet facilities",
      status: "active",
      launchDate: "2014",
      targetBeneficiaries: "Rural households",
      implementation: "Community-led total sanitation approach"
    },
    {
      id: 3,
      title: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
      category: "Agriculture",
      icon: Award,
      description: "Direct income support scheme for farmers with small and marginal landholdings.",
      benefits: [
        "₹6,000 per year in 3 installments",
        "Direct bank transfer (DBT)",
        "No middlemen involved",
        "Support for agricultural inputs"
      ],
      eligibility: "Small and marginal farmers with landholding up to 2 hectares",
      status: "active",
      launchDate: "2019",
      targetBeneficiaries: "Small and marginal farmers",
      implementation: "Direct benefit transfer through bank accounts"
    },
    {
      id: 4,
      title: "Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)",
      category: "Employment",
      icon: Users,
      description: "Employment guarantee scheme providing 100 days of wage employment per year to rural households.",
      benefits: [
        "100 days guaranteed employment per year",
        "Minimum wage rate as per state norms",
        "Asset creation in rural areas",
        "Women participation (33% reservation)"
      ],
      eligibility: "Adult members of rural households willing to do unskilled manual work",
      status: "active",
      launchDate: "2005",
      targetBeneficiaries: "Rural households",
      implementation: "Through Gram Panchayat and Block Development Office"
    },
    {
      id: 5,
      title: "Pradhan Mantri Ujjwala Yojana (PMUY)",
      category: "Energy",
      icon: Heart,
      description: "LPG connection scheme for women from Below Poverty Line (BPL) families.",
      benefits: [
        "Free LPG connection",
        "First refill and stove included",
        "Reduced health risks from indoor air pollution",
        "Empowerment of women"
      ],
      eligibility: "Women from BPL families, SC/ST households, forest dwellers",
      status: "active",
      launchDate: "2016",
      targetBeneficiaries: "BPL women",
      implementation: "Through LPG distributors with government subsidy"
    },
    {
      id: 6,
      title: "Pradhan Mantri Gram Sadak Yojana (PMGSY)",
      category: "Infrastructure",
      icon: MapPin,
      description: "Rural road connectivity scheme to provide all-weather road access to unconnected habitations.",
      benefits: [
        "All-weather road connectivity",
        "Improved access to markets and services",
        "Better transportation facilities",
        "Economic development of rural areas"
      ],
      eligibility: "Unconnected habitations with population 500+ (250+ in hilly areas)",
      status: "active",
      launchDate: "2000",
      targetBeneficiaries: "Rural habitations",
      implementation: "Through state public works departments"
    },
    {
      id: 7,
      title: "Pradhan Mantri Jan Dhan Yojana (PMJDY)",
      category: "Financial",
      icon: FileText,
      description: "Financial inclusion scheme to provide banking services to all households.",
      benefits: [
        "Zero balance bank account",
        "RuPay debit card with accident insurance",
        "Overdraft facility up to ₹10,000",
        "Direct benefit transfer"
      ],
      eligibility: "All unbanked households",
      status: "active",
      launchDate: "2014",
      targetBeneficiaries: "Unbanked households",
      implementation: "Through public and private sector banks"
    },
    {
      id: 8,
      title: "Pradhan Mantri Matru Vandana Yojana (PMMVY)",
      category: "Health",
      icon: Heart,
      description: "Maternity benefit scheme for pregnant and lactating mothers.",
      benefits: [
        "₹5,000 in 3 installments",
        "Compensation for wage loss",
        "Improved health and nutrition",
        "Reduced maternal and infant mortality"
      ],
      eligibility: "Pregnant and lactating mothers (19+ years) for first living child",
      status: "active",
      launchDate: "2017",
      targetBeneficiaries: "Pregnant and lactating mothers",
      implementation: "Through Anganwadi centers and health facilities"
    }
  ];

  const categories = ["All", "Housing", "Sanitation", "Agriculture", "Employment", "Energy", "Infrastructure", "Financial", "Health"];

  // Filter schemes data
  const filteredSchemes = schemesData.filter(scheme => {
    const matchesSearch = scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scheme.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scheme.benefits.some(benefit => benefit.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || scheme.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Housing": "from-blue-500 to-blue-600",
      "Sanitation": "from-green-500 to-green-600",
      "Agriculture": "from-yellow-500 to-yellow-600",
      "Employment": "from-purple-500 to-purple-600",
      "Energy": "from-red-500 to-red-600",
      "Infrastructure": "from-indigo-500 to-indigo-600",
      "Financial": "from-pink-500 to-pink-600",
      "Health": "from-teal-500 to-teal-600"
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <nav className="text-sm text-gray-600 mb-4">
            <span className="text-gray-900 font-semibold">Schemes</span>
          </nav>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-600 bg-clip-text text-transparent mb-2">
            Gram Panchayat Schemes
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Comprehensive list of government schemes available for the residents of Gram Panchayat Khadak Ozar
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search schemes by name, description, or benefits..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Schemes</p>
                <p className="text-2xl font-bold text-gray-900">{schemesData.length}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Schemes</p>
                <p className="text-2xl font-bold text-green-600">{schemesData.filter(s => s.status === 'active').length}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Categories</p>
                <p className="text-2xl font-bold text-purple-600">{categories.length - 1}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Filter className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Filtered Results</p>
                <p className="text-2xl font-bold text-indigo-600">{filteredSchemes.length}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <Search className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Schemes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredSchemes.map((scheme) => {
            const IconComponent = scheme.icon;
            return (
              <div key={scheme.id} className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Header */}
                <div className={`bg-gradient-to-r ${getCategoryColor(scheme.category)} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-medium opacity-90">{scheme.category}</span>
                        <h3 className="text-lg font-bold leading-tight">{scheme.title}</h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        scheme.status === 'active' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-500 text-white'
                      }`}>
                        {scheme.status === 'active' ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{scheme.description}</p>
                  
                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Key Benefits
                    </h4>
                    <ul className="space-y-1">
                      {scheme.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                      {scheme.benefits.length > 3 && (
                        <li className="text-sm text-blue-600 font-medium">
                          +{scheme.benefits.length - 3} more benefits
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Eligibility */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-500" />
                      Eligibility
                    </h4>
                    <p className="text-sm text-gray-600">{scheme.eligibility}</p>
                  </div>

                  {/* Footer Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{scheme.launchDate}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>Ongoing</span>
                      </div>
                    </div>
                    <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-sm font-semibold flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredSchemes.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">No Schemes Found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filter options.</p>
          </div>
        )}
      </div>
    </div>
  );
}
