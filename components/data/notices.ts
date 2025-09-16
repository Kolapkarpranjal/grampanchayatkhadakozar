// Static notices data for the website
// This data will be used for static export while keeping backend as fallback

export interface Notice {
  _id: string;
  title: string;
  description: string;
  type: string;
  publishDate: string;
  expiryDate: string;
  fileUrl: string;
  fileType: string;
  fileName: string;
}

// English notices data
export const englishNotices: Notice[] = [
  {
    _id: "1",
    title: "Gram Panchayat Election Schedule 2024",
    description: "Official schedule for upcoming Gram Panchayat elections in Maharashtra. All citizens are requested to participate in the democratic process.",
    type: "announcement",
    publishDate: "2024-01-15",
    expiryDate: "2024-03-15",
    fileUrl: "/uploads/election-schedule-2024.pdf",
    fileType: "pdf",
    fileName: "election-schedule-2024.pdf"
  },
  {
    _id: "2",
    title: "Water Supply Maintenance Notice",
    description: "Scheduled maintenance work for water supply system in Khadak Ozar village. Water supply will be temporarily interrupted.",
    type: "announcement",
    publishDate: "2024-01-20",
    expiryDate: "2024-02-20",
    fileUrl: "/uploads/water-supply-maintenance.pdf",
    fileType: "pdf",
    fileName: "water-supply-maintenance.pdf"
  },
  {
    _id: "3",
    title: "Road Construction Tender",
    description: "Invitation for tender for road construction work in the village. Interested contractors can apply with proper documentation.",
    type: "tender",
    publishDate: "2024-01-10",
    expiryDate: "2024-02-10",
    fileUrl: "/uploads/road-construction-tender.pdf",
    fileType: "pdf",
    fileName: "road-construction-tender.pdf"
  },
  {
    _id: "4",
    title: "Government Scheme Guidelines",
    description: "Detailed guidelines for various government schemes available to citizens including housing, education, and healthcare benefits.",
    type: "circular",
    publishDate: "2024-01-05",
    expiryDate: "2024-12-31",
    fileUrl: "/uploads/scheme-guidelines.pdf",
    fileType: "pdf",
    fileName: "scheme-guidelines.pdf"
  },
  {
    _id: "5",
    title: "Village Development Committee Meeting",
    description: "Notice for upcoming village development committee meeting. All members are requested to attend and participate in discussions.",
    type: "announcement",
    publishDate: "2024-01-25",
    expiryDate: "2024-02-25",
    fileUrl: "/uploads/development-meeting.pdf",
    fileType: "pdf",
    fileName: "development-meeting.pdf"
  },
  {
    _id: "6",
    title: "Health Camp Announcement",
    description: "Free health camp will be organized in the village for all residents. Medical check-ups and consultations will be provided.",
    type: "announcement",
    publishDate: "2024-01-18",
    expiryDate: "2024-02-18",
    fileUrl: "/uploads/health-camp.pdf",
    fileType: "pdf",
    fileName: "health-camp.pdf"
  },
  {
    _id: "7",
    title: "Agricultural Support Program",
    description: "Information about agricultural support programs and subsidies available for farmers in the village.",
    type: "circular",
    publishDate: "2024-01-12",
    expiryDate: "2024-06-12",
    fileUrl: "/uploads/agricultural-support.pdf",
    fileType: "pdf",
    fileName: "agricultural-support.pdf"
  },
  {
    _id: "8",
    title: "School Infrastructure Tender",
    description: "Tender for school infrastructure development including classroom construction and playground setup.",
    type: "tender",
    publishDate: "2024-01-08",
    expiryDate: "2024-02-08",
    fileUrl: "/uploads/school-infrastructure-tender.pdf",
    fileType: "pdf",
    fileName: "school-infrastructure-tender.pdf"
  }
];

// Marathi notices data
export const marathiNotices: Notice[] = [
  {
    _id: "1",
    title: "ग्राम पंचायत निवडणूक वेळापत्रक २०२४",
    description: "महाराष्ट्रातील आगामी ग्राम पंचायत निवडणुकांसाठी अधिकृत वेळापत्रक. सर्व नागरिकांना लोकशाही प्रक्रियेत सहभागी होण्याची विनंती.",
    type: "announcement",
    publishDate: "2024-01-15",
    expiryDate: "2024-03-15",
    fileUrl: "/uploads/election-schedule-2024.pdf",
    fileType: "pdf",
    fileName: "election-schedule-2024.pdf"
  },
  {
    _id: "2",
    title: "पाणीपुरवठा देखभाल सूचना",
    description: "खडक ओझर गावातील पाणीपुरवठा प्रणालीच्या नियोजित देखभाल कामासाठी. पाणीपुरवठा तात्पुरता बंद राहील.",
    type: "announcement",
    publishDate: "2024-01-20",
    expiryDate: "2024-02-20",
    fileUrl: "/uploads/water-supply-maintenance.pdf",
    fileType: "pdf",
    fileName: "water-supply-maintenance.pdf"
  },
  {
    _id: "3",
    title: "रस्ते बांधकाम निविदा",
    description: "गावातील रस्ते बांधकाम कामासाठी निविदा आमंत्रण. इच्छुक ठेकेदार योग्य कागदपत्रांसह अर्ज करू शकतात.",
    type: "tender",
    publishDate: "2024-01-10",
    expiryDate: "2024-02-10",
    fileUrl: "/uploads/road-construction-tender.pdf",
    fileType: "pdf",
    fileName: "road-construction-tender.pdf"
  },
  {
    _id: "4",
    title: "सरकारी योजना मार्गदर्शक तत्त्वे",
    description: "नागरिकांसाठी उपलब्ध विविध सरकारी योजनांसाठी तपशीलवार मार्गदर्शक तत्त्वे, गृहनिर्माण, शिक्षण आणि आरोग्यसेवा लाभांसह.",
    type: "circular",
    publishDate: "2024-01-05",
    expiryDate: "2024-12-31",
    fileUrl: "/uploads/scheme-guidelines.pdf",
    fileType: "pdf",
    fileName: "scheme-guidelines.pdf"
  },
  {
    _id: "5",
    title: "ग्राम विकास समिती बैठक",
    description: "आगामी ग्राम विकास समिती बैठकीसाठी सूचना. सर्व सदस्यांना उपस्थित राहून चर्चांमध्ये सहभागी होण्याची विनंती.",
    type: "announcement",
    publishDate: "2024-01-25",
    expiryDate: "2024-02-25",
    fileUrl: "/uploads/development-meeting.pdf",
    fileType: "pdf",
    fileName: "development-meeting.pdf"
  },
  {
    _id: "6",
    title: "आरोग्य शिबिर घोषणा",
    description: "गावातील सर्व रहिवाशांसाठी विनामूल्य आरोग्य शिबिर आयोजित केले जाईल. वैद्यकीय तपासणी आणि सल्लागार सेवा प्रदान केली जाईल.",
    type: "announcement",
    publishDate: "2024-01-18",
    expiryDate: "2024-02-18",
    fileUrl: "/uploads/health-camp.pdf",
    fileType: "pdf",
    fileName: "health-camp.pdf"
  },
  {
    _id: "7",
    title: "कृषी सहाय्य कार्यक्रम",
    description: "गावातील शेतकऱ्यांसाठी उपलब्ध कृषी सहाय्य कार्यक्रम आणि अनुदानांबद्दल माहिती.",
    type: "circular",
    publishDate: "2024-01-12",
    expiryDate: "2024-06-12",
    fileUrl: "/uploads/agricultural-support.pdf",
    fileType: "pdf",
    fileName: "agricultural-support.pdf"
  },
  {
    _id: "8",
    title: "शाळा पायाभूत सुविधा निविदा",
    description: "वर्गखोल्या बांधकाम आणि खेळाच्या मैदानाच्या सेटअपसह शाळा पायाभूत सुविधा विकासासाठी निविदा.",
    type: "tender",
    publishDate: "2024-01-08",
    expiryDate: "2024-02-08",
    fileUrl: "/uploads/school-infrastructure-tender.pdf",
    fileType: "pdf",
    fileName: "school-infrastructure-tender.pdf"
  }
];

// Function to get notices based on language
export function getNoticesByLanguage(lang: string): Notice[] {
  return lang === 'mr' ? marathiNotices : englishNotices;
}

// Function to get all notices sorted by publish date (newest first)
export function getAllNotices(lang: string): Notice[] {
  return getNoticesByLanguage(lang).sort((a, b) => 
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}
