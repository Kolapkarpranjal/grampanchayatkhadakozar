"use client";
import { useState, useEffect } from "react";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Search,
  Users,
  FileText,
  Building,
  UserCheck
} from "lucide-react";

interface Member {
  _id: string;
  name: string;
  designation: string;
  birthDate: string;
  contactInfo: string;
  photo: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Scheme {
  _id: string;
  title: string;
  description: string;
  benefits: string;
  eligibility: string;
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}

interface Committee {
  _id: string;
  name: string;
  description: string;
  members: Array<{
    name: string;
    designation: string;
  }>;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function AdminDirectoryPage() {
  const [activeTab, setActiveTab] = useState<'members' | 'schemes' | 'committees'>('members');
  const [members, setMembers] = useState<Member[]>([]);
  const [schemes, setSchemes] = useState<Scheme[]>([]);
  const [committees, setCommittees] = useState<Committee[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [memberForm, setMemberForm] = useState({
    name: "",
    designation: "",
    birthDate: "",
    contactInfo: "",
    photo: "",
    isActive: true
  });

  const [schemeForm, setSchemeForm] = useState({
    title: "",
    description: "",
    benefits: "",
    eligibility: "",
    status: 'active' as 'active' | 'inactive'
  });

  const [committeeForm, setCommitteeForm] = useState({
    name: "",
    description: "",
    members: [{ name: "", designation: "" }],
    isActive: true
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      // In a real app, you'd fetch from your API endpoints
      // For now, we'll use mock data
      setMembers([]);
      setSchemes([]);
      setCommittees([]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission based on active tab
    setShowModal(false);
    fetchData();
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this item?')) {
      // Handle deletion based on active tab
      fetchData();
    }
  };

  const addCommitteeMember = () => {
    setCommitteeForm(prev => ({
      ...prev,
      members: [...prev.members, { name: "", designation: "" }]
    }));
  };

  const removeCommitteeMember = (index: number) => {
    setCommitteeForm(prev => ({
      ...prev,
      members: prev.members.filter((_, i) => i !== index)
    }));
  };

  const updateCommitteeMember = (index: number, field: string, value: string) => {
    setCommitteeForm(prev => ({
      ...prev,
      members: prev.members.map((member, i) => 
        i === index ? { ...member, [field]: value } : member
      )
    }));
  };

  const tabs = [
    { id: 'members', name: 'Members Directory', icon: Users },
    { id: 'schemes', name: 'Government Schemes', icon: FileText },
    { id: 'committees', name: 'Committees', icon: Building }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Directory Management</h1>
          <p className="text-gray-600 mt-2">Manage members, schemes, and committees</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Add New {activeTab === 'members' ? 'Member' : activeTab === 'schemes' ? 'Scheme' : 'Committee'}
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.name}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Search */}
        <div className="p-6 border-b border-gray-200">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder={`Search ${activeTab}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {loading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <UserCheck className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No {activeTab} found</p>
              <p className="text-sm text-gray-400 mt-2">
                Start by adding your first {activeTab === 'members' ? 'member' : activeTab === 'schemes' ? 'scheme' : 'committee'}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6">
              Add New {activeTab === 'members' ? 'Member' : activeTab === 'schemes' ? 'Scheme' : 'Committee'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {activeTab === 'members' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      required
                      value={memberForm.name}
                      onChange={(e) => setMemberForm({ ...memberForm, name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
                    <input
                      type="text"
                      required
                      value={memberForm.designation}
                      onChange={(e) => setMemberForm({ ...memberForm, designation: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Birth Date</label>
                    <input
                      type="date"
                      value={memberForm.birthDate}
                      onChange={(e) => setMemberForm({ ...memberForm, birthDate: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Info</label>
                    <input
                      type="text"
                      value={memberForm.contactInfo}
                      onChange={(e) => setMemberForm({ ...memberForm, contactInfo: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
                    <input
                      type="url"
                      value={memberForm.photo}
                      onChange={(e) => setMemberForm({ ...memberForm, photo: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </>
              )}

              {activeTab === 'schemes' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Scheme Title</label>
                    <input
                      type="text"
                      required
                      value={schemeForm.title}
                      onChange={(e) => setSchemeForm({ ...schemeForm, title: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      rows={3}
                      required
                      value={schemeForm.description}
                      onChange={(e) => setSchemeForm({ ...schemeForm, description: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Benefits</label>
                    <textarea
                      rows={3}
                      required
                      value={schemeForm.benefits}
                      onChange={(e) => setSchemeForm({ ...schemeForm, benefits: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Eligibility</label>
                    <textarea
                      rows={3}
                      required
                      value={schemeForm.eligibility}
                      onChange={(e) => setSchemeForm({ ...schemeForm, eligibility: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select
                      value={schemeForm.status}
                      onChange={(e) => setSchemeForm({ ...schemeForm, status: e.target.value as 'active' | 'inactive' })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </>
              )}

              {activeTab === 'committees' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Committee Name</label>
                    <input
                      type="text"
                      required
                      value={committeeForm.name}
                      onChange={(e) => setCommitteeForm({ ...committeeForm, name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      rows={3}
                      required
                      value={committeeForm.description}
                      onChange={(e) => setCommitteeForm({ ...committeeForm, description: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Members</label>
                    {committeeForm.members.map((member, index) => (
                      <div key={index} className="flex gap-2 mb-2">
                        <input
                          type="text"
                          placeholder="Member Name"
                          value={member.name}
                          onChange={(e) => updateCommitteeMember(index, 'name', e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                        />
                        <input
                          type="text"
                          placeholder="Designation"
                          value={member.designation}
                          onChange={(e) => updateCommitteeMember(index, 'designation', e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                        />
                        {committeeForm.members.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeCommitteeMember(index)}
                            className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addCommitteeMember}
                      className="flex items-center gap-2 px-3 py-2 text-green-600 hover:bg-green-50 rounded-lg"
                    >
                      <Plus className="h-4 w-4" />
                      Add Member
                    </button>
                  </div>
                </>
              )}

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Add {activeTab === 'members' ? 'Member' : activeTab === 'schemes' ? 'Scheme' : 'Committee'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}










