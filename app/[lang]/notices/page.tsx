"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { 
  Upload, 
  Download, 
  Eye, 
  Calendar, 
  FileText, 
  Image, 
  Search,
  Filter,
  Plus,
  X
} from "lucide-react";

// Import all locales
import en from "../../../locales/en/common.json";
import mr from "../../../locales/mr/common.json";

export default function NoticesPage() {
  const params = useParams();
  const lang = params?.lang as string;

  // Choose correct language JSON
  let t: any = en;
  if (lang === "mr") t = mr;

  t = t.notices; // focus on notices section

  // State for filters and search
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [filterType, setFilterType] = useState("all");
  const [showUploadModal, setShowUploadModal] = useState(false);

  // State for notices from API
  const [notices, setNotices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch notices from API
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch('/api/notices');
        const data = await response.json();
        setNotices(data);
      } catch (error) {
        console.error('Error fetching notices:', error);
        // Fallback to sample data if API fails
        setNotices([
          {
            _id: "1",
            title: "Gram Panchayat Election Schedule 2024",
            description: "Official schedule for upcoming Gram Panchayat elections in Maharashtra",
            type: "announcement",
            publishDate: "2024-01-15",
            expiryDate: "2024-03-15",
            fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            fileType: "pdf",
            fileName: "election-schedule-2024.pdf"
          },
          {
            _id: "2",
            title: "Sample Notice Document",
            description: "This is a sample notice for testing purposes",
            type: "tender",
            publishDate: "2024-01-10",
            expiryDate: "2024-02-10",
            fileUrl: "https://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf-file.pdf",
            fileType: "pdf",
            fileName: "sample-notice.pdf"
          },
          {
            _id: "3",
            title: "Government Scheme Guidelines",
            description: "Detailed guidelines for various government schemes available to citizens",
            type: "circular",
            publishDate: "2024-01-05",
            expiryDate: "2024-12-31",
            fileUrl: "https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf",
            fileType: "pdf",
            fileName: "scheme-guidelines.pdf"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  // Filter and sort notices
  const filteredNotices = notices
    .filter(notice => {
      const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           notice.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = filterType === "all" || notice.type === filterType;
      return matchesSearch && matchesType;
    })
    .sort((a, b) => {
      if (sortBy === "recent") {
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      } else if (sortBy === "oldest") {
        return new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime();
      } else if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

  // Upload form state
  const [uploadForm, setUploadForm] = useState({
    title: "",
    description: "",
    type: "announcement",
    publishDate: "",
    expiryDate: "",
    file: null as File | null
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadForm({ ...uploadForm, file });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/notices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: uploadForm.title,
          description: uploadForm.description,
          type: uploadForm.type,
          publishDate: uploadForm.publishDate,
          expiryDate: uploadForm.expiryDate,
          fileName: uploadForm.file?.name || 'document.pdf',
          fileType: uploadForm.file?.type.includes('pdf') ? 'pdf' : 'image',
          fileUrl: URL.createObjectURL(uploadForm.file || new Blob())
        })
      });

      if (response.ok) {
        // Refresh notices list
        const updatedNotices = await fetch('/api/notices').then(res => res.json());
        setNotices(updatedNotices);
        setShowUploadModal(false);
        setUploadForm({
          title: "",
          description: "",
          type: "announcement",
          publishDate: "",
          expiryDate: "",
          file: null
        });
      }
    } catch (error) {
      console.error('Error uploading notice:', error);
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "announcement": return "bg-blue-100 text-blue-800";
      case "tender": return "bg-green-100 text-green-800";
      case "circular": return "bg-yellow-100 text-yellow-800";
      case "order": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          {t.title}
        </h1>
        <p className="text-lg text-gray-600">
          {t.subtitle}
        </p>
      </div>

      {/* Controls Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Sort By */}
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              >
                <option value="recent">{t.recent}</option>
                <option value="oldest">{t.oldest}</option>
                <option value="title">{t.title_sort}</option>
              </select>
            </div>

            {/* Filter by Type */}
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            >
              <option value="all">{t.all}</option>
              <option value="announcement">{t.announcement}</option>
              <option value="tender">{t.tender}</option>
              <option value="circular">{t.circular}</option>
              <option value="order">{t.order}</option>
            </select>

            {/* Upload Button */}
          
          </div>
        </div>
      </div>

      {/* Notices List */}
      <div className="space-y-4">
        {filteredNotices.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">{t.noNotices}</p>
          </div>
        ) : (
          filteredNotices.map((notice) => (
            <div key={notice._id || notice.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{notice.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(notice.type)}`}>
                      {t[notice.type as keyof typeof t]}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{notice.description}</p>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{t.publishDate}: {formatDate(notice.publishDate)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{t.expiryDate}: {formatDate(notice.expiryDate)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    {notice.fileType === "pdf" ? (
                      <FileText className="h-4 w-4" />
                    ) : (
                      <Image className="h-4 w-4" />
                    )}
                    <span>{notice.fileName}</span>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => {
                        try {
                          // Check if it's a valid web URL or relative path
                          if (notice.fileUrl.startsWith('http') || notice.fileUrl.startsWith('/')) {
                            window.open(notice.fileUrl, '_blank');
                          } else if (notice.fileUrl.startsWith('blob:')) {
                            // Handle blob URLs (for uploaded files)
                            window.open(notice.fileUrl, '_blank');
                          } else {
                            // For local file paths or other cases, show a message
                            alert('File preview not available for local files. Please download the file.');
                          }
                        } catch (error) {
                          console.error('Error opening file:', error);
                          alert('Unable to open file. Please try downloading it.');
                        }
                      }}
                      className="flex items-center gap-1 px-3 py-1 text-green-600 hover:bg-green-50 rounded transition-colors"
                    >
                      <Eye className="h-4 w-4" />
                      {t.view}
                    </button>
                    <button 
                      onClick={() => {
                        try {
                          // Check if it's a valid web URL or relative path
                          if (notice.fileUrl.startsWith('http') || notice.fileUrl.startsWith('/')) {
                            const link = document.createElement('a');
                            link.href = notice.fileUrl;
                            link.download = notice.fileName;
                            link.target = '_blank';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                          } else if (notice.fileUrl.startsWith('blob:')) {
                            // Handle blob URLs (for uploaded files)
                            const link = document.createElement('a');
                            link.href = notice.fileUrl;
                            link.download = notice.fileName;
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                          } else {
                            // For local file paths or other cases, show a message
                            alert('File download not available for local files. Please contact the administrator.');
                          }
                        } catch (error) {
                          console.error('Error downloading file:', error);
                          alert('Unable to download file. Please try again.');
                        }
                      }}
                      className="flex items-center gap-1 px-3 py-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                    >
                      <Download className="h-4 w-4" />
                      {t.download}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">{t.uploadNotice}</h2>
              <button
                onClick={() => setShowUploadModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.noticeTitle}
                </label>
                <input
                  type="text"
                  required
                  value={uploadForm.title}
                  onChange={(e) => setUploadForm({ ...uploadForm, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.noticeDescription}
                </label>
                <textarea
                  required
                  rows={3}
                  value={uploadForm.description}
                  onChange={(e) => setUploadForm({ ...uploadForm, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.type}
                  </label>
                  <select
                    value={uploadForm.type}
                    onChange={(e) => setUploadForm({ ...uploadForm, type: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  >
                    <option value="announcement">{t.announcement}</option>
                    <option value="tender">{t.tender}</option>
                    <option value="circular">{t.circular}</option>
                    <option value="order">{t.order}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.fileType}
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                    <option value="pdf">{t.pdf}</option>
                    <option value="image">{t.image}</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.publishDate}
                  </label>
                  <input
                    type="date"
                    required
                    value={uploadForm.publishDate}
                    onChange={(e) => setUploadForm({ ...uploadForm, publishDate: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.expiryDate}
                  </label>
                  <input
                    type="date"
                    value={uploadForm.expiryDate}
                    onChange={(e) => setUploadForm({ ...uploadForm, expiryDate: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.selectFile}
                </label>
                <input
                  type="file"
                  required
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileUpload}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {t.cancel}
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  {t.submit}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}


