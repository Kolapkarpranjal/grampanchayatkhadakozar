"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { useParams, usePathname } from "next/navigation";

// Import all locales
import en from "../locales/en/common.json";
import mr from "../locales/mr/common.json";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSamitiOpen, setIsSamitiOpen] = useState(false);
  const params = useParams();
  const pathname = usePathname();
  
  // Get language from params, default to 'mr' for consistency
  const lang = (params?.lang as string) || 'mr';

  // Choose correct language JSON
  let t: any = en;
  if (lang === "mr") t = mr;

  t = t.navbar; // focus on navbar section

  // Function to generate language switch URL
  const getLanguageUrl = (newLang: string) => {
    // Replace the current language in the pathname with the new language
    const pathSegments = pathname.split('/');
    
    if (pathSegments[1] === 'en' || pathSegments[1] === 'mr') {
      pathSegments[1] = newLang;
      return pathSegments.join('/');
    }
    // If no language in path, add it
    return `/${newLang}${pathname}`;
  };

  return (
    <header className="bg-white shadow-xl border-b border-gray-100">
      {/* Top Strip with Language Options */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto flex justify-between items-center px-6 py-6">
          <div className="flex items-center gap-8">
            <div className="relative">
              <div className="h-20 md:h-24 w-20 md:w-24 rounded-xl shadow-xl border-3 border-white/30 bg-white/95 flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/logo.jpg" 
                  alt="Gram Panchayat Logo" 
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    e.currentTarget.src = '/images/satyamavlogo.png';
                  }}
                />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl blur opacity-40"></div>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                Gram Panchayat Khadak Ozar
              </h1>
              <p className="text-base md:text-lg font-medium opacity-90">Government of Maharashtra</p>
            </div>
          </div>
          
          {/* Language Selector - Top Right */}
          <div className="flex items-center gap-2">
            <Link 
              href={getLanguageUrl('en')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                lang === 'en' 
                  ? 'bg-white text-green-700 shadow-lg' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              English
            </Link>
            <Link 
              href={getLanguageUrl('mr')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                lang === 'mr' 
                  ? 'bg-white text-green-700 shadow-lg' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              मराठी
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-2">
            <li>
              <Link 
                href={`/${lang}`} 
                className="px-4 py-2 text-gray-700 hover:text-green-600 font-semibold transition-all duration-300 relative group rounded-lg hover:bg-white/80 hover:shadow-md"
              >
                {t.home}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-green-500 rounded-full transition-all duration-300 group-hover:w-3/4"></span>
              </Link>
            </li>
            <li>
              <Link 
                href={`/${lang}/about`} 
                className="px-4 py-2 text-gray-700 hover:text-green-600 font-semibold transition-all duration-300 relative group rounded-lg hover:bg-white/80 hover:shadow-md"
              >
                {t.about}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-green-500 rounded-full transition-all duration-300 group-hover:w-3/4"></span>
              </Link>
            </li>
            <li>
              <Link 
                href={`/${lang}/directory`} 
                className="px-4 py-2 text-gray-700 hover:text-green-600 font-semibold transition-all duration-300 relative group rounded-lg hover:bg-white/80 hover:shadow-md"
              >
                {t.directory}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-green-500 rounded-full transition-all duration-300 group-hover:w-3/4"></span>
              </Link>
            </li>
            <li>
              <Link 
                href={`/${lang}/events`} 
                className="px-4 py-2 text-gray-700 hover:text-green-600 font-semibold transition-all duration-300 relative group rounded-lg hover:bg-white/80 hover:shadow-md"
              >
                {t.events}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-green-500 rounded-full transition-all duration-300 group-hover:w-3/4"></span>
              </Link>
            </li>
            <li className="relative group">
              <button 
                className="px-4 py-2 text-gray-700 hover:text-green-600 font-semibold transition-all duration-300 relative group rounded-lg hover:bg-white/80 hover:shadow-md flex items-center gap-1"
                onMouseEnter={() => setIsSamitiOpen(true)}
                onMouseLeave={() => setIsSamitiOpen(false)}
              >
                {t.samiti}
                <ChevronDown className="w-4 h-4" />
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-green-500 rounded-full transition-all duration-300 group-hover:w-3/4"></span>
              </button>
              <ul 
                className={`absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 transition-all duration-300 ${
                  isSamitiOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setIsSamitiOpen(true)}
                onMouseLeave={() => setIsSamitiOpen(false)}
              >
                <li>
                  <Link 
                    href={`/${lang}/samiti/shaley-vyavasthapan`} 
                    className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200"
                  >
                    {t.shaleySamiti}
                  </Link>
                </li>
                <li>
                  <Link 
                    href={`/${lang}/samiti/jan-arogya`} 
                    className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200"
                  >
                    {t.janArogyaSamiti}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link 
                href={`/${lang}/gallery`} 
                className="px-4 py-2 text-gray-700 hover:text-green-600 font-semibold transition-all duration-300 relative group rounded-lg hover:bg-white/80 hover:shadow-md"
              >
                {t.gallery}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-green-500 rounded-full transition-all duration-300 group-hover:w-3/4"></span>
              </Link>
            </li>
            <li>
              <Link 
                href={`/${lang}/rts`} 
                className="px-4 py-2 text-gray-700 hover:text-green-600 font-semibold transition-all duration-300 relative group rounded-lg hover:bg-white/80 hover:shadow-md"
              >
                {t.rts}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-green-500 rounded-full transition-all duration-300 group-hover:w-3/4"></span>
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-3 text-gray-700 hover:text-green-600 hover:bg-white/80 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50">
            <div className="px-6 py-6 space-y-3">
              <Link 
                href={`/${lang}`} 
                className="block px-5 py-4 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-xl transition-all duration-300 font-semibold shadow-sm hover:shadow-md"
                onClick={() => setIsOpen(false)}
              >
                {t.home}
              </Link>
              <Link 
                href={`/${lang}/about`} 
                className="block px-5 py-4 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-xl transition-all duration-300 font-semibold shadow-sm hover:shadow-md"
                onClick={() => setIsOpen(false)}
              >
                {t.about}
              </Link>
              <Link 
                href={`/${lang}/directory`} 
                className="block px-5 py-4 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-xl transition-all duration-300 font-semibold shadow-sm hover:shadow-md"
                onClick={() => setIsOpen(false)}
              >
                {t.directory}
              </Link>
              <Link 
                href={`/${lang}/events`} 
                className="block px-5 py-4 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-xl transition-all duration-300 font-semibold shadow-sm hover:shadow-md"
                onClick={() => setIsOpen(false)}
              >
                {t.events}
              </Link>
              <div className="px-5 py-2">
                <div className="text-sm font-semibold text-gray-500 mb-2">{t.samiti}</div>
                <div className="ml-4 space-y-2">
                  <Link 
                    href={`/${lang}/samiti/shaley-vyavasthapan`} 
                    className="block px-4 py-3 text-gray-600 hover:bg-green-50 hover:text-green-600 rounded-lg transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.shaleySamiti}
                  </Link>
                  <Link 
                    href={`/${lang}/samiti/jan-arogya`} 
                    className="block px-4 py-3 text-gray-600 hover:bg-green-50 hover:text-green-600 rounded-lg transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.janArogyaSamiti}
                  </Link>
                </div>
              </div>
              <Link 
                href={`/${lang}/gallery`} 
                className="block px-5 py-4 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-xl transition-all duration-300 font-semibold shadow-sm hover:shadow-md"
                onClick={() => setIsOpen(false)}
              >
                {t.gallery}
              </Link>
              <Link 
                href={`/${lang}/rts`} 
                className="block px-5 py-4 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-xl transition-all duration-300 font-semibold shadow-sm hover:shadow-md"
                onClick={() => setIsOpen(false)}
              >
                {t.rts}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
