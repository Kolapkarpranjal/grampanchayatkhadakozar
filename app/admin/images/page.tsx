"use client";
import { useState, useEffect } from "react";
import { Upload, Trash2, Edit, Eye } from "lucide-react";

interface ImageData {
  _id: string;
  type: string;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  order: number;
  isActive: boolean;
  memberName: string;
  memberDesignation: string;
  bannerText: string;
  bannerLink: string;
}

export default function AdminImagesPage() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedType, setSelectedType] = useState("gallery");
  const [uploadForm, setUploadForm] = useState({
    type: "gallery",
    title: "",
    description: "",
    altText: "",
    order: 0,
    isActive: true,
    memberName: "",
    memberDesignation: "",
    bannerText: "",
    bannerLink: "",
    imageUrl: ""
  });

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch('/api/images');
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/images', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(uploadForm)
      });

      if (response.ok) {
        setShowUploadModal(false);
        setUploadForm({
          type: "gallery",
          title: "",
          description: "",
          altText: "",
          order: 0,
          isActive: true,
          memberName: "",
          memberDesignation: "",
          bannerText: "",
          bannerLink: "",
          imageUrl: ""
        });
        fetchImages();
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this image?')) {
      try {
        const response = await fetch(`/api/images/${id}`, {
          method: 'DELETE'
        });

        if (response.ok) {
          fetchImages();
        }
      } catch (error) {
        console.error('Error deleting image:', error);
      }
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "banner": return "bg-red-100 text-red-800";
      case "gallery": return "bg-blue-100 text-blue-800";
      case "event": return "bg-green-100 text-green-800";
      case "member": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Image Management</h1>
        <button
          onClick={() => setShowUploadModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Upload className="h-4 w-4" />
          Add New Image
        </button>
      </div>

      {/* Filter by type */}
      <div className="mb-6">
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
        >
          <option value="all">All Types</option>
          <option value="banner">Banners</option>
          <option value="gallery">Gallery</option>
          <option value="event">Events</option>
          <option value="member">Members</option>
        </select>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          [...Array(6)].map((_, index) => (
            <div key={index} className="bg-gray-200 animate-pulse rounded-lg h-64"></div>
          ))
        ) : (
          images
            .filter(img => selectedType === "all" || img.type === selectedType)
            .map((image) => (
              <div key={image._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <img
                    src={image.imageUrl}
                    alt={image.altText}
                    className="w-full h-48 object-cover"
                  />
                  <span className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(image.type)}`}>
                    {image.type}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{image.title}</h3>
                  {image.memberName && (
                    <p className="text-sm text-gray-600 mb-1">{image.memberName}</p>
                  )}
                  {image.memberDesignation && (
                    <p className="text-sm text-gray-600 mb-1">{image.memberDesignation}</p>
                  )}
                  {image.bannerText && (
                    <p className="text-sm text-gray-600 mb-1">{image.bannerText}</p>
                  )}
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() => window.open(image.imageUrl, '_blank')}
                      className="flex items-center gap-1 px-2 py-1 text-blue-600 hover:bg-blue-50 rounded text-sm"
                    >
                      <Eye className="h-3 w-3" />
                      View
                    </button>
                    <button
                      onClick={() => handleDelete(image._id)}
                      className="flex items-center gap-1 px-2 py-1 text-red-600 hover:bg-red-50 rounded text-sm"
                    >
                      <Trash2 className="h-3 w-3" />
                      Delete
                    </button>
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
            <h2 className="text-2xl font-bold mb-6">Add New Image</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                  <select
                    value={uploadForm.type}
                    onChange={(e) => setUploadForm({ ...uploadForm, type: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  >
                    <option value="banner">Banner</option>
                    <option value="gallery">Gallery</option>
                    <option value="event">Event</option>
                    <option value="member">Member</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Order</label>
                  <input
                    type="number"
                    value={uploadForm.order}
                    onChange={(e) => setUploadForm({ ...uploadForm, order: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  required
                  value={uploadForm.title}
                  onChange={(e) => setUploadForm({ ...uploadForm, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                <input
                  type="url"
                  required
                  value={uploadForm.imageUrl}
                  onChange={(e) => setUploadForm({ ...uploadForm, imageUrl: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Alt Text</label>
                <input
                  type="text"
                  required
                  value={uploadForm.altText}
                  onChange={(e) => setUploadForm({ ...uploadForm, altText: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>

              {uploadForm.type === "member" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Member Name</label>
                    <input
                      type="text"
                      value={uploadForm.memberName}
                      onChange={(e) => setUploadForm({ ...uploadForm, memberName: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Member Designation</label>
                    <input
                      type="text"
                      value={uploadForm.memberDesignation}
                      onChange={(e) => setUploadForm({ ...uploadForm, memberDesignation: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </>
              )}

              {uploadForm.type === "banner" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Banner Text</label>
                    <input
                      type="text"
                      value={uploadForm.bannerText}
                      onChange={(e) => setUploadForm({ ...uploadForm, bannerText: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Banner Link</label>
                    <input
                      type="url"
                      value={uploadForm.bannerLink}
                      onChange={(e) => setUploadForm({ ...uploadForm, bannerLink: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </>
              )}

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Add Image
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}










