// Static events data for the website
// This data will be used for static export while keeping backend as fallback

export interface Event {
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

// English events data
export const englishEvents: Event[] = [
  {
    _id: '1',
    title: 'Innovative Initiatives',
    description: 'Various innovative programs and initiatives for village development and welfare.',
    imageUrl: '/images/events/event1.jpg',
    altText: 'Innovative Initiatives',
    order: 1,
    isActive: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    _id: '2',
    title: 'Ambulance Service',
    description: 'Emergency medical services and ambulance facility for the village community.',
    imageUrl: '/images/events/event2.jpg',
    altText: 'Ambulance Service',
    order: 2,
    isActive: true,
    createdAt: '2024-02-01T10:00:00Z',
    updatedAt: '2024-02-01T10:00:00Z'
  },
  {
    _id: '3',
    title: 'Drinking Water Tanker',
    description: 'Due to continuous drought, there was a shortage of drinking water. As a solution, the Gram Panchayat purchased a tanker.',
    imageUrl: '/images/events/event5.jpg',
    altText: 'Drinking Water Tanker',
    order: 3,
    isActive: true,
    createdAt: '2024-02-15T10:00:00Z',
    updatedAt: '2024-02-15T10:00:00Z'
  },
  {
    _id: '4',
    title: 'Shelter Construction',
    description: 'Construction of community shelters and infrastructure development projects.',
    imageUrl: '/images/events/event6.jpg',
    altText: 'Shelter Construction',
    order: 4,
    isActive: true,
    createdAt: '2024-03-01T10:00:00Z',
    updatedAt: '2024-03-01T10:00:00Z'
  },
  {
    _id: '5',
    title: 'Community Development',
    description: 'Community development programs and social welfare initiatives.',
    imageUrl: '/images/events/event4.jpg',
    altText: 'Community Development',
    order: 5,
    isActive: true,
    createdAt: '2024-03-15T10:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  }
];

// Marathi events data
export const marathiEvents: Event[] = [
  {
    _id: '1',
    title: 'नाविन्यपूर्ण उपक्रम',
    description: 'गावाच्या विकास आणि कल्याणासाठी विविध नाविन्यपूर्ण कार्यक्रम आणि उपक्रम.',
    imageUrl: '/images/events/event1.jpg',
    altText: 'नाविन्यपूर्ण उपक्रम',
    order: 1,
    isActive: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    _id: '2',
    title: 'अम्बुलंस',
    description: 'गावकरी समुदायासाठी आणीबाणी वैद्यकीय सेवा आणि अम्बुलंस सुविधा.',
    imageUrl: '/images/events/event2.jpg',
    altText: 'अम्बुलंस',
    order: 2,
    isActive: true,
    createdAt: '2024-02-01T10:00:00Z',
    updatedAt: '2024-02-01T10:00:00Z'
  },
  {
    _id: '3',
    title: 'पिण्याच्या पाण्याचा टँकर',
    description: 'सततच्या दुष्काळामुळे पिण्याच्या पाण्याची टंचाई निर्माण होते. यावर उपाय म्हणून, ग्रामपणचायतने टँकर खरेदी केला.',
    imageUrl: '/images/events/event5.jpg',
    altText: 'पिण्याच्या पाण्याचा टँकर',
    order: 3,
    isActive: true,
    createdAt: '2024-02-15T10:00:00Z',
    updatedAt: '2024-02-15T10:00:00Z'
  },
  {
    _id: '4',
    title: 'शेड उभारणी',
    description: 'समुदाय शेड आणि पायाभूत सुविधा विकास प्रकल्पांचे बांधकाम.',
    imageUrl: '/images/events/event6.jpg',
    altText: 'शेड उभारणी',
    order: 4,
    isActive: true,
    createdAt: '2024-03-01T10:00:00Z',
    updatedAt: '2024-03-01T10:00:00Z'
  },
  {
    _id: '5',
    title: 'समुदाय विकास',
    description: 'समुदाय विकास कार्यक्रम आणि सामाजिक कल्याण उपक्रम.',
    imageUrl: '/images/events/event4.jpg',
    altText: 'समुदाय विकास',
    order: 5,
    isActive: true,
    createdAt: '2024-03-15T10:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  }
];

// Function to get events based on language
export function getEventsByLanguage(lang: string): Event[] {
  return lang === 'mr' ? marathiEvents : englishEvents;
}

// Function to get all active events sorted by order
export function getActiveEvents(lang: string): Event[] {
  return getEventsByLanguage(lang)
    .filter(event => event.isActive)
    .sort((a, b) => a.order - b.order);
}
