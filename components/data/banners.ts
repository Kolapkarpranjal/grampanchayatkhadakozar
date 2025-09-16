// Static banner data for the website
// This data will be used for static export while keeping backend as fallback

export interface BannerImage {
  _id: string;
  title: string;
  imageUrl: string;
  bannerText: string;
  bannerLink: string;
  order: number;
  isActive: boolean;
}

// English banner data
export const englishBanners: BannerImage[] = [
  {
    _id: '1',
    title: 'Khadak Ozar Gram Panchayat - Digital India Initiative for Rural Development',
    imageUrl: '/images/banner/banner1.jpg',
    bannerText: 'Digital Gram Panchayat',
    bannerLink: '/about',
    order: 1,
    isActive: true
  },
  {
    _id: '2',
    title: 'Rural Development & Infrastructure - Building Better Communities',
    imageUrl: '/images/banner/banner2.jpg',
    bannerText: 'Rural Development',
    bannerLink: '/schemes',
    order: 2,
    isActive: true
  },
  {
    _id: '3',
    title: 'Community Services & Welfare - Serving Our Village with Dedication',
    imageUrl: '/images/banner/banner3.jpg',
    bannerText: 'Community Services',
    bannerLink: '/events',
    order: 3,
    isActive: true
  }
];

// Marathi banner data
export const marathiBanners: BannerImage[] = [
  {
    _id: '1',
    title: 'खडक ओझर ग्राम पंचायत - ग्रामीण विकासासाठी डिजिटल इंडिया उपक्रम',
    imageUrl: '/images/banner/banner1.jpg',
    bannerText: 'डिजिटल ग्राम पंचायत',
    bannerLink: '/about',
    order: 1,
    isActive: true
  },
  {
    _id: '2',
    title: 'ग्रामीण विकास आणि पायाभूत सुविधा - चांगल्या समुदायांचे निर्माण',
    imageUrl: '/images/banner/banner2.jpg',
    bannerText: 'ग्रामीण विकास',
    bannerLink: '/schemes',
    order: 2,
    isActive: true
  },
  {
    _id: '3',
    title: 'समुदाय सेवा आणि कल्याण - आमच्या गावाची समर्पित सेवा',
    imageUrl: '/images/banner/banner3.jpg',
    bannerText: 'समुदाय सेवा',
    bannerLink: '/events',
    order: 3,
    isActive: true
  }
];

// Function to get banners based on language
export function getBannersByLanguage(lang: string): BannerImage[] {
  return lang === 'mr' ? marathiBanners : englishBanners;
}

// Function to get all active banners sorted by order
export function getActiveBanners(lang: string): BannerImage[] {
  return getBannersByLanguage(lang)
    .filter(banner => banner.isActive)
    .sort((a, b) => a.order - b.order);
}
