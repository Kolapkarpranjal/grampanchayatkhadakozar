// Static gallery data for the website
// This data will be used for static export while keeping backend as fallback

export interface GalleryImage {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// English gallery data
export const englishGalleryImages: GalleryImage[] = [
  {
    _id: '1',
    title: 'Village Development',
    description: 'Infrastructure development and community projects in Khadak Ozar village',
    imageUrl: '/images/gallery/gallery1.jpg',
    altText: 'Village Development Project',
    order: 1,
    isActive: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    _id: '2',
    title: 'Community Events',
    description: 'Cultural programs and community gatherings in the village',
    imageUrl: '/images/gallery/gallery2.jpg',
    altText: 'Community Cultural Event',
    order: 2,
    isActive: true,
    createdAt: '2024-02-01T10:00:00Z',
    updatedAt: '2024-02-01T10:00:00Z'
  },
  {
    _id: '3',
    title: 'Agricultural Activities',
    description: 'Farming activities and agricultural development in the village',
    imageUrl: '/images/gallery/gallery3.jpg',
    altText: 'Agricultural Activities',
    order: 3,
    isActive: true,
    createdAt: '2024-02-15T10:00:00Z',
    updatedAt: '2024-02-15T10:00:00Z'
  },
  {
    _id: '4',
    title: 'Village Infrastructure',
    description: 'Public facilities and infrastructure improvements',
    imageUrl: '/images/gallery/gallery5.jpg',
    altText: 'Village Infrastructure',
    order: 4,
    isActive: true,
    createdAt: '2024-03-01T10:00:00Z',
    updatedAt: '2024-03-01T10:00:00Z'
  }
];

// Marathi gallery data
export const marathiGalleryImages: GalleryImage[] = [
  {
    _id: '1',
    title: 'गावाचा विकास',
    description: 'खडकओझर गावातील पायाभूत सुविधा विकास आणि समुदाय प्रकल्प',
    imageUrl: '/images/gallery/gallery1.jpg',
    altText: 'गावाचा विकास प्रकल्प',
    order: 1,
    isActive: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    _id: '2',
    title: 'समुदाय कार्यक्रम',
    description: 'गावातील सांस्कृतिक कार्यक्रम आणि समुदाय सभा',
    imageUrl: '/images/gallery/gallery2.jpg',
    altText: 'समुदाय सांस्कृतिक कार्यक्रम',
    order: 2,
    isActive: true,
    createdAt: '2024-02-01T10:00:00Z',
    updatedAt: '2024-02-01T10:00:00Z'
  },
  {
    _id: '3',
    title: 'कृषी क्रियाकलाप',
    description: 'गावातील शेती क्रियाकलाप आणि कृषी विकास',
    imageUrl: '/images/gallery/gallery3.jpg',
    altText: 'कृषी क्रियाकलाप',
    order: 3,
    isActive: true,
    createdAt: '2024-02-15T10:00:00Z',
    updatedAt: '2024-02-15T10:00:00Z'
  },
  {
    _id: '4',
    title: 'गावाची पायाभूत सुविधा',
    description: 'सार्वजनिक सुविधा आणि पायाभूत सुविधा सुधारणा',
    imageUrl: '/images/gallery/gallery5.jpg',
    altText: 'गावाची पायाभूत सुविधा',
    order: 4,
    isActive: true,
    createdAt: '2024-03-01T10:00:00Z',
    updatedAt: '2024-03-01T10:00:00Z'
  }
];

// Function to get gallery images based on language
export function getGalleryImagesByLanguage(lang: string): GalleryImage[] {
  return lang === 'mr' ? marathiGalleryImages : englishGalleryImages;
}

// Function to get all active gallery images sorted by order
export function getActiveGalleryImages(lang: string): GalleryImage[] {
  return getGalleryImagesByLanguage(lang)
    .filter(image => image.isActive)
    .sort((a, b) => a.order - b.order);
}
