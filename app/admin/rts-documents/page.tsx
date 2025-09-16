"use client";
import { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Download, FileText, Upload } from "lucide-react";

interface RTSDocument {
  _id: string;
  name: string;
  description: string;
  fileUrl: string;
  fileType: 'form' | 'document';
  isActive: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export default function AdminRTSDocumentsPage() {
  const [documents, setDocuments] = useState<RTSDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingDocument, setEditingDocument] = useState<RTSDocument | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    fileType: "form" as 'form' | 'document',
    isActive: true,
    order: 0
  });
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const response = await fetch('/api/rts-documents');
      const data = await response.json();
      setDocuments(data);
    } catch (error) {
      console.error('Error fetching RTS documents:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedFile) {
      alert('Please select a file to upload');
      return;
    }

    setUploading(true);
    try {
      // Upload file first
      const uploadFormData = new FormData();
      uploadFormData.append('file', selectedFile);
      
      const uploadResponse = await fetch('/api/upload', {
        method: 'POST',
        body: uploadFormData
      });
      
      if (!uploadResponse.ok) {
        throw new Error('File upload failed');
      }
      
      const uploadData = await uploadResponse.json();
      
      // Create document with uploaded file URL
      const documentData = {
        ...formData,
        fileUrl: uploadData.url
      };
      
      const url = editingDocument ? `/api/rts-documents/${editingDocument._id}` : '/api/rts-documents';
      const method = editingDocument ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(documentData)
      });

      if (response.ok) {
        setShowAddModal(false);
        setEditingDocument(null);
        setFormData({
          name: "",
          description: "",
          fileType: "form",
          isActive: true,
          order: 0
        });
        setSelectedFile(null);
        fetchDocuments();
      }
    } catch (error) {
      console.error('Error saving RTS document:', error);
      alert('Error saving document. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleEdit = (doc: RTSDocument) => {
    setEditingDocument(doc);
    setFormData({
      name: doc.name,
      description: doc.description,
      fileType: doc.fileType,
      isActive: doc.isActive,
      order: doc.order
    });
    setSelectedFile(null);
    setShowAddModal(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this RTS document?')) {
      try {
        const response = await fetch(`/api/rts-documents/${id}`, {
          method: 'DELETE'
        });

        if (response.ok) {
          fetchDocuments();
        }
      } catch (error) {
        console.error('Error deleting RTS document:', error);
      }
    }
  };

  const handleToggleActive = async (id: string, currentStatus: boolean) => {
    try {
      const response = await fetch(`/api/rts-documents/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isActive: !currentStatus })
      });

      if (response.ok) {
        fetchDocuments();
      }
    } catch (error) {
      console.error('Error updating RTS document:', error);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">RTS Documents & Forms</h1>
          <p className="text-gray-600 mt-2">Manage RTS documents and forms for the frontend</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Add New Document/Form
        </button>
      </div>

      {/* Documents List */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-gray-200 animate-pulse rounded-lg h-64"></div>
          ))}
        </div>
      ) : documents.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No RTS documents found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documents.map((doc) => (
            <div key={doc._id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    doc.fileType === 'form' ? 'bg-blue-100' : 'bg-green-100'
                  }`}>
                    <FileText className={`h-5 w-5 ${
                      doc.fileType === 'form' ? 'text-blue-600' : 'text-green-600'
                    }`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{doc.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      doc.fileType === 'form' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {doc.fileType === 'form' ? 'Form' : 'Document'}
                    </span>
                  </div>
                </div>
                <div className="flex gap-1">
                  <button
                    onClick={() => handleEdit(doc)}
                    className="p-1 text-blue-600 hover:bg-blue-50 rounded"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(doc._id)}
                    className="p-1 text-red-600 hover:bg-red-50 rounded"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{doc.description}</p>
              
              {doc.fileUrl && (
                <div className="mb-4">
                  <a
                    href={doc.fileUrl}
                    download
                    className="flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs hover:bg-gray-200"
                  >
                    <Download className="h-3 w-3" />
                    Download File
                  </a>
                </div>
              )}
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Order: {doc.order}</span>
                <button
                  onClick={() => handleToggleActive(doc._id, doc.isActive)}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                    doc.isActive
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {doc.isActive ? 'Active' : 'Inactive'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add/Edit Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6">
              {editingDocument ? 'Edit RTS Document' : 'Add New RTS Document/Form'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  placeholder="Document or Form name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  rows={3}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  placeholder="Description of the document or form"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                <select
                  value={formData.fileType}
                  onChange={(e) => setFormData({ ...formData, fileType: e.target.value as 'form' | 'document' })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                >
                  <option value="form">Form</option>
                  <option value="document">Document</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {editingDocument ? 'New File (Optional)' : 'File Upload'}
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  required={!editingDocument}
                />
                {selectedFile && (
                  <p className="text-sm text-green-600 mt-1">
                    ✓ Selected: {selectedFile.name}
                  </p>
                )}
                {editingDocument && !selectedFile && (
                  <p className="text-sm text-gray-500 mt-1">
                    Current file will be kept if no new file is selected
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Order</label>
                  <input
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="flex items-center gap-2 pt-6">
                  <input
                    type="checkbox"
                    id="isActive"
                    checked={formData.isActive}
                    onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <label htmlFor="isActive" className="text-sm text-gray-700">
                    Active (visible on website)
                  </label>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddModal(false);
                    setEditingDocument(null);
                    setFormData({
                      name: "",
                      description: "",
                      fileType: "form",
                      isActive: true,
                      order: 0
                    });
                    setSelectedFile(null);
                  }}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={uploading}
                  className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                >
                  {uploading ? 'Uploading...' : (editingDocument ? 'Update Document' : 'Add Document')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

