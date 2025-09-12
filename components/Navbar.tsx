"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { useParams, usePathname } from "next/navigation";

// Import all locales
import en from "../locales/en/common.json";
import mr from "../locales/mr/common.json";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const params = useParams();
  const pathname = usePathname();
  
  // Ensure client-side rendering to prevent hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  const lang = isClient ? (params?.lang as string || 'en') : 'en';

  // Choose correct language JSON
  let t: any = en;
  if (lang === "mr") t = mr;

  t = t.navbar; // focus on navbar section

  // Function to generate language switch URL
  const getLanguageUrl = (newLang: string) => {
    if (!isClient) return `/${newLang}`;
    
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
        <div className="relative max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="h-16 md:h-20 w-16 md:w-20 rounded-lg shadow-lg border-2 border-white/20 bg-white/95 flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/logo.jpg" 
                  alt="Gram Panchayat Logo" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg blur opacity-30"></div>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold leading-tight">
                Gram Panchayat Khadak Ozar
              </h1>
              <p className="text-sm md:text-base font-medium opacity-90">Government of Maharashtra</p>
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
                href={`/${lang}/schemes`} 
                className="px-4 py-2 text-gray-700 hover:text-green-600 font-semibold transition-all duration-300 relative group rounded-lg hover:bg-white/80 hover:shadow-md"
              >
                {t.schemes}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-green-500 rounded-full transition-all duration-300 group-hover:w-3/4"></span>
              </Link>
            </li>
            <li>
              <Link 
                href={`/${lang}/notices`} 
                className="px-4 py-2 text-gray-700 hover:text-green-600 font-semibold transition-all duration-300 relative group rounded-lg hover:bg-white/80 hover:shadow-md"
              >
                {t.notices}
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
                href={`/${lang}/schemes`} 
                className="block px-5 py-4 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-xl transition-all duration-300 font-semibold shadow-sm hover:shadow-md"
                onClick={() => setIsOpen(false)}
              >
                {t.schemes}
              </Link>
              <Link 
                href={`/${lang}/notices`} 
                className="block px-5 py-4 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-xl transition-all duration-300 font-semibold shadow-sm hover:shadow-md"
                onClick={() => setIsOpen(false)}
              >
                {t.notices}
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
