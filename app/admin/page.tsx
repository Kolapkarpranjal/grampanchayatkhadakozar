"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Image, 
  FileText, 
  Users, 
  Megaphone,
  TrendingUp,
  Eye,
  Plus,
  Settings
} from "lucide-react";

interface DashboardStats {
  banners: number;
  gallery: number;
  events: number;
  members: number;
  notices: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    banners: 0,
    gallery: 0,
    events: 0,
    members: 0,
    notices: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch counts for each type
        const [bannersRes, galleryRes, eventsRes, membersRes, noticesRes] = await Promise.all([
          fetch('/api/images?type=banner'),
          fetch('/api/images?type=gallery'),
          fetch('/api/images?type=event'),
          fetch('/api/images?type=member'),
          fetch('/api/notices')
        ]);

        const [banners, gallery, events, members, notices] = await Promise.all([
          bannersRes.json(),
          galleryRes.json(),
          eventsRes.json(),
          membersRes.json(),
          noticesRes.json()
        ]);

        setStats({
          banners: banners.length,
          gallery: gallery.length,
          events: events.length,
          members: members.length,
          notices: notices.length
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const quickActions = [
    {
      title: "Images Management",
      description: "Manage banners, gallery, events & members",
      href: "/admin/banners",
      icon: Image,
      color: "bg-blue-500",
      category: "Images"
    },
    {
      title: "Content Management",
      description: "Manage directory, notices & announcements",
      href: "/admin/directory",
      icon: FileText,
      color: "bg-green-500",
      category: "Content"
    },
    {
      title: "System Settings",
      description: "Configure website settings",
      href: "/admin/settings",
      icon: Settings,
      color: "bg-purple-500",
      category: "System"
    }
  ];

  const statCards = [
    {
      title: "Banners",
      count: stats.banners,
      icon: Megaphone,
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      title: "Gallery Images",
      count: stats.gallery,
      icon: Image,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Events",
      count: stats.events,
      icon: FileText,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Members",
      count: stats.members,
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Notices",
      count: stats.notices,
      icon: FileText,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage your website content and settings</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className={`${stat.bgColor} rounded-lg p-6`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {loading ? "..." : stat.count}
                  </p>
                </div>
                <Icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Link
                key={index}
                href={action.href}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 hover:border-green-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`${action.color} p-3 rounded-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-gray-900">{action.title}</h3>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {action.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{action.description}</p>
                  </div>
                  <Plus className="h-5 w-5 text-gray-400" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-center py-8">
            <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No recent activity to display</p>
            <p className="text-sm text-gray-400 mt-2">
              Start adding content to see activity here
            </p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <Eye className="h-5 w-5 text-gray-600" />
            <div>
              <p className="font-medium text-gray-900">View Website</p>
              <p className="text-sm text-gray-600">Preview your website</p>
            </div>
          </Link>
          <Link
            href="/admin/settings"
            className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <FileText className="h-5 w-5 text-gray-600" />
            <div>
              <p className="font-medium text-gray-900">Settings</p>
              <p className="text-sm text-gray-600">Configure website settings</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}