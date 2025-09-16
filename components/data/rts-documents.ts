// Static RTS documents data for the website
// This data will be used for static export while keeping backend as fallback

export interface RTSDocument {
  _id: string;
  name: string;
  description: string;
  fileUrl: string;
  fileType: 'form' | 'document';
  isActive: boolean;
  order: number;
}

export interface RTSCategory {
  _id: string;
  name: string;
  description: string;
  documents: RTSDocument[];
  isActive: boolean;
  order: number;
}

// English RTS categories data
export const englishRTSCategories: RTSCategory[] = [
  {
    _id: "1",
    name: "Birth Certificate Applications",
    description: "All forms and documents related to birth certificate applications",
    documents: [
      {
        _id: "1-1",
        name: "Birth Certificate Application Form",
        description: "Official form to apply for birth certificate from Gram Panchayat office",
        fileUrl: "/uploads/birth-certificate-form.pdf",
        fileType: "form",
        isActive: true,
        order: 1
      },
      {
        _id: "1-2",
        name: "Required Documents List",
        description: "List of documents required for birth certificate application",
        fileUrl: "/uploads/birth-certificate-documents.pdf",
        fileType: "document",
        isActive: true,
        order: 2
      }
    ],
    isActive: true,
    order: 1
  },
  {
    _id: "2",
    name: "Death Certificate Applications",
    description: "Forms and procedures for death certificate applications",
    documents: [
      {
        _id: "2-1",
        name: "Death Certificate Application Form",
        description: "Form to apply for death certificate for legal and administrative purposes",
        fileUrl: "/uploads/death-certificate-form.pdf",
        fileType: "form",
        isActive: true,
        order: 1
      },
      {
        _id: "2-2",
        name: "Death Certificate Guidelines",
        description: "Complete guidelines for death certificate application process",
        fileUrl: "/uploads/death-certificate-guidelines.pdf",
        fileType: "document",
        isActive: true,
        order: 2
      }
    ],
    isActive: true,
    order: 2
  },
  {
    _id: "3",
    name: "Income Certificate Applications",
    description: "Forms for income certificate required for government schemes",
    documents: [
      {
        _id: "3-1",
        name: "Income Certificate Application Form",
        description: "Application form for income certificate required for various government schemes",
        fileUrl: "/uploads/income-certificate-form.pdf",
        fileType: "form",
        isActive: true,
        order: 1
      },
      {
        _id: "3-2",
        name: "Income Certificate Requirements",
        description: "Document requirements and procedures for income certificate",
        fileUrl: "/uploads/income-certificate-requirements.pdf",
        fileType: "document",
        isActive: true,
        order: 2
      }
    ],
    isActive: true,
    order: 3
  },
  {
    _id: "4",
    name: "Caste Certificate Applications",
    description: "Forms for caste certificate required for reservations",
    documents: [
      {
        _id: "4-1",
        name: "Caste Certificate Application Form",
        description: "Form to apply for caste certificate required for educational and employment reservations",
        fileUrl: "/uploads/caste-certificate-form.pdf",
        fileType: "form",
        isActive: true,
        order: 1
      },
      {
        _id: "4-2",
        name: "Caste Certificate Verification Process",
        description: "Step-by-step verification process for caste certificate",
        fileUrl: "/uploads/caste-verification-process.pdf",
        fileType: "document",
        isActive: true,
        order: 2
      }
    ],
    isActive: true,
    order: 4
  },
  {
    _id: "5",
    name: "Building Permission Applications",
    description: "Forms and documents for building construction permissions",
    documents: [
      {
        _id: "5-1",
        name: "Building Permission Application Form",
        description: "Application form for building construction permission in the village",
        fileUrl: "/uploads/building-permission-form.pdf",
        fileType: "form",
        isActive: true,
        order: 1
      },
      {
        _id: "5-2",
        name: "Building Permission Guidelines",
        description: "Complete guidelines and requirements for building permission",
        fileUrl: "/uploads/building-permission-guidelines.pdf",
        fileType: "document",
        isActive: true,
        order: 2
      },
      {
        _id: "5-3",
        name: "Architect Certificate Template",
        description: "Template for architect certificate required for building permission",
        fileUrl: "/uploads/architect-certificate-template.pdf",
        fileType: "document",
        isActive: true,
        order: 3
      }
    ],
    isActive: true,
    order: 5
  },
  {
    _id: "6",
    name: "Marriage Registration",
    description: "Forms and procedures for marriage registration certificates",
    documents: [
      {
        _id: "6-1",
        name: "Marriage Registration Application Form",
        description: "Application form for marriage registration certificate",
        fileUrl: "/uploads/marriage-registration-form.pdf",
        fileType: "form",
        isActive: true,
        order: 1
      },
      {
        _id: "6-2",
        name: "Marriage Registration Requirements",
        description: "Document requirements and procedures for marriage registration",
        fileUrl: "/uploads/marriage-registration-requirements.pdf",
        fileType: "document",
        isActive: true,
        order: 2
      }
    ],
    isActive: true,
    order: 6
  }
];

// Marathi RTS categories data
export const marathiRTSCategories: RTSCategory[] = [
  {
    _id: "1",
    name: "जन्म प्रमाणपत्र अर्ज",
    description: "जन्म प्रमाणपत्र अर्जाशी संबंधित सर्व फॉर्म आणि दस्तऐवज",
    documents: [
      {
        _id: "1-1",
        name: "जन्म प्रमाणपत्र अर्ज फॉर्म",
        description: "ग्राम पंचायत कार्यालयातून जन्म प्रमाणपत्रासाठी अधिकृत फॉर्म",
        fileUrl: "/uploads/birth-certificate-form.pdf",
        fileType: "form",
        isActive: true,
        order: 1
      },
      {
        _id: "1-2",
        name: "आवश्यक कागदपत्रांची यादी",
        description: "जन्म प्रमाणपत्र अर्जासाठी आवश्यक असलेल्या कागदपत्रांची यादी",
        fileUrl: "/uploads/birth-certificate-documents.pdf",
        fileType: "document",
        isActive: true,
        order: 2
      }
    ],
    isActive: true,
    order: 1
  },
  {
    _id: "2",
    name: "मृत्यू प्रमाणपत्र अर्ज",
    description: "मृत्यू प्रमाणपत्र अर्जासाठी फॉर्म आणि प्रक्रिया",
    documents: [
      {
        _id: "2-1",
        name: "मृत्यू प्रमाणपत्र अर्ज फॉर्म",
        description: "कायदेशीर आणि प्रशासकीय हेतूंसाठी मृत्यू प्रमाणपत्रासाठी अर्ज फॉर्म",
        fileUrl: "/uploads/death-certificate-form.pdf",
        fileType: "form",
        isActive: true,
        order: 1
      },
      {
        _id: "2-2",
        name: "मृत्यू प्रमाणपत्र मार्गदर्शक तत्त्वे",
        description: "मृत्यू प्रमाणपत्र अर्ज प्रक्रियेसाठी संपूर्ण मार्गदर्शक तत्त्वे",
        fileUrl: "/uploads/death-certificate-guidelines.pdf",
        fileType: "document",
        isActive: true,
        order: 2
      }
    ],
    isActive: true,
    order: 2
  },
  {
    _id: "3",
    name: "उत्पन्न प्रमाणपत्र अर्ज",
    description: "सरकारी योजनांसाठी आवश्यक असलेल्या उत्पन्न प्रमाणपत्रासाठी फॉर्म",
    documents: [
      {
        _id: "3-1",
        name: "उत्पन्न प्रमाणपत्र अर्ज फॉर्म",
        description: "विविध सरकारी योजनांसाठी आवश्यक असलेल्या उत्पन्न प्रमाणपत्रासाठी अर्ज फॉर्म",
        fileUrl: "/uploads/income-certificate-form.pdf",
        fileType: "form",
        isActive: true,
        order: 1
      },
      {
        _id: "3-2",
        name: "उत्पन्न प्रमाणपत्र आवश्यकता",
        description: "उत्पन्न प्रमाणपत्रासाठी कागदपत्र आवश्यकता आणि प्रक्रिया",
        fileUrl: "/uploads/income-certificate-requirements.pdf",
        fileType: "document",
        isActive: true,
        order: 2
      }
    ],
    isActive: true,
    order: 3
  },
  {
    _id: "4",
    name: "जात प्रमाणपत्र अर्ज",
    description: "आरक्षणासाठी आवश्यक असलेल्या जात प्रमाणपत्रासाठी फॉर्म",
    documents: [
      {
        _id: "4-1",
        name: "जात प्रमाणपत्र अर्ज फॉर्म",
        description: "शैक्षणिक आणि रोजगार आरक्षणासाठी आवश्यक असलेल्या जात प्रमाणपत्रासाठी अर्ज फॉर्म",
        fileUrl: "/uploads/caste-certificate-form.pdf",
        fileType: "form",
        isActive: true,
        order: 1
      },
      {
        _id: "4-2",
        name: "जात प्रमाणपत्र सत्यापन प्रक्रिया",
        description: "जात प्रमाणपत्रासाठी चरण-दर-चरण सत्यापन प्रक्रिया",
        fileUrl: "/uploads/caste-verification-process.pdf",
        fileType: "document",
        isActive: true,
        order: 2
      }
    ],
    isActive: true,
    order: 4
  },
  {
    _id: "5",
    name: "बांधकाम परवानगी अर्ज",
    description: "बांधकाम परवानगीसाठी फॉर्म आणि दस्तऐवज",
    documents: [
      {
        _id: "5-1",
        name: "बांधकाम परवानगी अर्ज फॉर्म",
        description: "गावात बांधकाम परवानगीसाठी अर्ज फॉर्म",
        fileUrl: "/uploads/building-permission-form.pdf",
        fileType: "form",
        isActive: true,
        order: 1
      },
      {
        _id: "5-2",
        name: "बांधकाम परवानगी मार्गदर्शक तत्त्वे",
        description: "बांधकाम परवानगीसाठी संपूर्ण मार्गदर्शक तत्त्वे आणि आवश्यकता",
        fileUrl: "/uploads/building-permission-guidelines.pdf",
        fileType: "document",
        isActive: true,
        order: 2
      },
      {
        _id: "5-3",
        name: "आर्किटेक्ट प्रमाणपत्र नमुना",
        description: "बांधकाम परवानगीसाठी आवश्यक असलेल्या आर्किटेक्ट प्रमाणपत्रासाठी नमुना",
        fileUrl: "/uploads/architect-certificate-template.pdf",
        fileType: "document",
        isActive: true,
        order: 3
      }
    ],
    isActive: true,
    order: 5
  },
  {
    _id: "6",
    name: "विवाह नोंदणी",
    description: "विवाह नोंदणी प्रमाणपत्रासाठी फॉर्म आणि प्रक्रिया",
    documents: [
      {
        _id: "6-1",
        name: "विवाह नोंदणी अर्ज फॉर्म",
        description: "विवाह नोंदणी प्रमाणपत्रासाठी अर्ज फॉर्म",
        fileUrl: "/uploads/marriage-registration-form.pdf",
        fileType: "form",
        isActive: true,
        order: 1
      },
      {
        _id: "6-2",
        name: "विवाह नोंदणी आवश्यकता",
        description: "विवाह नोंदणीसाठी कागदपत्र आवश्यकता आणि प्रक्रिया",
        fileUrl: "/uploads/marriage-registration-requirements.pdf",
        fileType: "document",
        isActive: true,
        order: 2
      }
    ],
    isActive: true,
    order: 6
  }
];

// Function to get RTS categories based on language
export function getRTSCategoriesByLanguage(lang: string): RTSCategory[] {
  return lang === 'mr' ? marathiRTSCategories : englishRTSCategories;
}

// Function to get all active RTS categories sorted by order
export function getActiveRTSCategories(lang: string): RTSCategory[] {
  return getRTSCategoriesByLanguage(lang)
    .filter(category => category.isActive)
    .sort((a, b) => a.order - b.order);
}
