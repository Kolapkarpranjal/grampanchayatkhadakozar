// Static member data for the website
// This data will be used for static export while keeping backend as fallback

export interface MemberImage {
  _id: string;
  title: string;
  imageUrl: string;
  memberName: string;
  memberDesignation: string;
  order: number;
}

// English member data
export const englishMembers: MemberImage[] = [
  {
    _id: '1',
    title: 'Sagar Vasantrao Pagar',
    imageUrl: '/images/members/sarpanch.jpg',
    memberName: 'Sagar Vasantrao Pagar',
    memberDesignation: 'Sarpanch (Head of Village Council)',
    order: 1
  },
  {
    _id: '2',
    title: 'Govind Tulshiram Pagar',
    imageUrl: '/images/members/upsarpanch.jpg',
    memberName: 'Govind Tulshiram Pagar',
    memberDesignation: 'Deputy Sarpanch (Deputy Head of Village Council)',
    order: 2
  },
  {
    _id: '3',
    title: 'Harshad Janardan Pagar',
    imageUrl: '/images/members/sadasya1.jpg',
    memberName: 'Harshad Janardan Pagar',
    memberDesignation: 'Member',
    order: 3
  },
  {
    _id: '4',
    title: 'Devidas Tatyaba Pagar',
    imageUrl: '/images/members/sadasya2.jpg',
    memberName: 'Devidas Tatyaba Pagar',
    memberDesignation: 'Member',
    order: 4
  },
  {
    _id: '5',
    title: 'Sharad Ramchandra Bhavar',
    imageUrl: '/images/members/sadyasya3.jpg',
    memberName: 'Sharad Ramchandra Bhavar',
    memberDesignation: 'Member',
    order: 5
  },
  {
    _id: '6',
    title: 'Shivaji Chindhu Ghodhade',
    imageUrl: '/images/members/sadyasya4.jpg',
    memberName: 'Shivaji Chindhu Ghodhade',
    memberDesignation: 'Member',
    order: 6
  },
  {
    _id: '7',
    title: 'Sarika Ashok Pagar',
    imageUrl: '/images/members/sadaysya4.jpg',
    memberName: 'Sarika Ashok Pagar',
    memberDesignation: 'Member (Female)',
    order: 7
  },
  {
    _id: '8',
    title: 'Ratna Atmaram Pagar',
    imageUrl: '/images/members/sadasya5.jpg',
    memberName: 'Ratna Atmaram Pagar',
    memberDesignation: 'Member (Female)',
    order: 8
  },
  {
    _id: '9',
    title: 'Sonali Sunil Bhavar',
    imageUrl: '/images/members/sadaysya6.jpg',
    memberName: 'Sonali Sunil Bhavar',
    memberDesignation: 'Member (Female)',
    order: 9
  },
  {
    _id: '10',
    title: 'Aruna Khanderao Pagar',
    imageUrl: '/images/members/sadaysya7.jpg',
    memberName: 'Aruna Khanderao Pagar',
    memberDesignation: 'Member (Female)',
    order: 10
  },
  {
    _id: '11',
    title: 'Laxmibai Chahadu Suryawanshi',
    imageUrl: '/images/members/sadasya8.jpg',
    memberName: 'Laxmibai Chahadu Suryawanshi',
    memberDesignation: 'Member (Female)',
    order: 11
  },
  {
    _id: '12',
    title: 'Priyanka Shivanath Kedare',
    imageUrl: '/images/members/sadasya9.jpg',
    memberName: 'Priyanka Shivanath Kedare',
    memberDesignation: 'Member (Female)',
    order: 12
  },
  {
    _id: '13',
    title: 'Roshan Balwant Suryavanshi',
    imageUrl: '/images/members/member1.jpg',
    memberName: 'Roshan Balwant Suryavanshi',
    memberDesignation: 'Gram Panchayat Officer',
    order: 13
  },
  {
    _id: '14',
    title: 'Sushil Rajendra Kedare',
    imageUrl: '/images/members/member2.jpg',
    memberName: 'Sushil Rajendra Kedare',
    memberDesignation: 'Computer Operator',
    order: 14
  },
  {
    _id: '15',
    title: 'Ganesh Kedu Pagar',
    imageUrl: '/images/members/member4.jpg',
    memberName: 'Ganesh Kedu Pagar',
    memberDesignation: 'Clerk Vasuli Karkun',
    order: 15
  },
  {
    _id: '16',
    title: 'Kailas Ramdas Pagar',
    imageUrl: '/images/members/member3.jpg',
    memberName: 'Kailas Ramdas Pagar',
    memberDesignation: 'Gram Rojgar Sahayak',
    order: 16
  },
  {
    _id: '17',
    title: 'Sahebrao Nivritti Kank',
    imageUrl: '/images/members/member5.jpg',
    memberName: 'Sahebrao Nivritti Kank',
    memberDesignation: 'Water Supply Employee',
    order: 17
  }
];

// Marathi member data (same structure, names will be translated in component)
export const marathiMembers: MemberImage[] = [
  {
    _id: '1',
    title: 'सागर वसंतराव पगार',
    imageUrl: '/images/members/sarpanch.jpg',
    memberName: 'Sagar Vasantrao Pagar',
    memberDesignation: 'Sarpanch (Head of Village Council)',
    order: 1
  },
  {
    _id: '2',
    title: 'गोविंद तुळशीराम पगार',
    imageUrl: '/images/members/upsarpanch.jpg',
    memberName: 'Govind Tulshiram Pagar',
    memberDesignation: 'Deputy Sarpanch (Deputy Head of Village Council)',
    order: 2
  },
  {
    _id: '3',
    title: 'हर्षद जनार्दन पगार',
    imageUrl: '/images/members/sadasya1.jpg',
    memberName: 'Harshad Janardan Pagar',
    memberDesignation: 'Member',
    order: 3
  },
  {
    _id: '4',
    title: 'देविदास तात्याबा पगार',
    imageUrl: '/images/members/sadasya2.jpg',
    memberName: 'Devidas Tatyaba Pagar',
    memberDesignation: 'Member',
    order: 4
  },
  {
    _id: '5',
    title: 'शरद रामचंद्र भावर',
    imageUrl: '/images/members/sadyasya3.jpg',
    memberName: 'Sharad Ramchandra Bhavar',
    memberDesignation: 'Member',
    order: 5
  },
  {
    _id: '6',
    title: 'शिवाजी चिंधू घोढाडे',
    imageUrl: '/images/members/sadyasya4.jpg',
    memberName: 'Shivaji Chindhu Ghodhade',
    memberDesignation: 'Member',
    order: 6
  },
  {
    _id: '7',
    title: 'सारिका अशोक पगार',
    imageUrl: '/images/members/sadaysya4.jpg',
    memberName: 'Sarika Ashok Pagar',
    memberDesignation: 'Member (Female)',
    order: 7
  },
  {
    _id: '8',
    title: 'रत्ना आत्माराम पगार',
    imageUrl: '/images/members/sadasya5.jpg',
    memberName: 'Ratna Atmaram Pagar',
    memberDesignation: 'Member (Female)',
    order: 8
  },
  {
    _id: '9',
    title: 'सोनाली सुनील भावर',
    imageUrl: '/images/members/sadaysya6.jpg',
    memberName: 'Sonali Sunil Bhavar',
    memberDesignation: 'Member (Female)',
    order: 9
  },
  {
    _id: '10',
    title: 'अरुणा खंडेराव पगार',
    imageUrl: '/images/members/sadaysya7.jpg',
    memberName: 'Aruna Khanderao Pagar',
    memberDesignation: 'Member (Female)',
    order: 10
  },
  {
    _id: '11',
    title: 'लक्ष्मीबाई चहाडू सूर्यवंशी',
    imageUrl: '/images/members/sadasya8.jpg',
    memberName: 'Laxmibai Chahadu Suryawanshi',
    memberDesignation: 'Member (Female)',
    order: 11
  },
  {
    _id: '12',
    title: 'प्रियंका शिवनाथ केदारे',
    imageUrl: '/images/members/sadasya9.jpg',
    memberName: 'Priyanka Shivanath Kedare',
    memberDesignation: 'Member (Female)',
    order: 12
  },
  {
    _id: '13',
    title: 'रोशन बळवंत सुर्यवंशी',
    imageUrl: '/images/members/member1.jpg',
    memberName: 'Roshan Balwant Suryavanshi',
    memberDesignation: 'Gram Panchayat Officer',
    order: 13
  },
  {
    _id: '14',
    title: 'सुशील राजेंद्र केदारे',
    imageUrl: '/images/members/member2.jpg',
    memberName: 'Sushil Rajendra Kedare',
    memberDesignation: 'Computer Operator',
    order: 14
  },
  {
    _id: '15',
    title: 'गणेश केदू पगार',
    imageUrl: '/images/members/member4.jpg',
    memberName: 'Ganesh Kedu Pagar',
    memberDesignation: 'Clerk Vasuli Karkun',
    order: 15
  },
  {
    _id: '16',
    title: 'कैलास रामदास पगार',
    imageUrl: '/images/members/member3.jpg',
    memberName: 'Kailas Ramdas Pagar',
    memberDesignation: 'Gram Rojgar Sahayak',
    order: 16
  },
  {
    _id: '17',
    title: 'साहेबराव निवृत्ती कंक',
    imageUrl: '/images/members/member5.jpg',
    memberName: 'Sahebrao Nivritti Kank',
    memberDesignation: 'Water Supply Employee',
    order: 17
  }
];

// Function to get members based on language
export function getMembersByLanguage(lang: string): MemberImage[] {
  return lang === 'mr' ? marathiMembers : englishMembers;
}

// Function to get all members sorted by order
export function getAllMembers(lang: string): MemberImage[] {
  return getMembersByLanguage(lang).sort((a, b) => a.order - b.order);
}
