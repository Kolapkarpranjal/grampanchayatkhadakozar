"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Image, 
  FileText, 
  Users, 
  Megaphone,
  Settings,
  Menu,
  X,
  Home,
  Calendar,
  Shield
} from "lucide-react";

const sidebarSections = [
  {
    title: "Dashboard",
    items: [
      {
        name: "Overview",
        href: "/admin",
        icon: LayoutDashboard
      }
    ]
  },
  {
    title: "Images Management",
    items: [
      {
        name: "Banners",
        href: "/admin/banners",
        icon: Megaphone,
        description: "Homepage slider images"
      },
      {
        name: "Gallery",
        href: "/admin/gallery",
        icon: Image,
        description: "Gallery section images"
      },
      {
        name: "Events",
        href: "/admin/events",
        icon: Calendar,
        description: "Event images & details"
      },
      {
        name: "Members",
        href: "/admin/members",
        icon: Users,
        description: "Member photos & info"
      }
    ]
  },
  {
    title: "Content Management",
    items: [
      {
        name: "Directory",
        href: "/admin/directory",
        icon: FileText,
        description: "Members directory & schemes"
      },
      {
        name: "Notices",
        href: "/admin/notices",
        icon: Megaphone,
        description: "Announcements & notices"
      },
      {
        name: "RTS Documents",
        href: "/admin/rts-documents",
        icon: Shield,
        description: "RTS forms & documents"
      }
    ]
  },
  {
    title: "System",
    items: [
      {
        name: "Settings",
        href: "/admin/settings",
        icon: Settings,
        description: "Website configuration"
      }
    ]
  }
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-72 bg-gradient-to-b from-gray-50 to-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 lg:flex-shrink-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">GP</span>
            </div>
            <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-6">
          <div className="px-3 mb-6">
            <Link
              href="/"
              className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Home className="h-4 w-4" />
              Back to Website
            </Link>
          </div>
          
          <div className="px-3 space-y-6">
            {sidebarSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  {section.title}
                </h3>
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`group flex items-start gap-3 px-3 py-3 text-sm rounded-lg transition-all duration-200 ${
                          isActive
                            ? 'bg-green-100 text-green-700 font-medium shadow-sm'
                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                        }`}
                        onClick={() => setSidebarOpen(false)}
                      >
                        <Icon className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                          isActive ? 'text-green-600' : 'text-gray-400 group-hover:text-gray-600'
                        }`} />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium">{item.name}</div>
                          {item.description && (
                            <div className={`text-xs mt-0.5 ${
                              isActive ? 'text-green-600' : 'text-gray-500'
                            }`}>
                              {item.description}
                            </div>
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <div className="bg-white shadow-sm border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center justify-between h-16 px-6">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100"
            >
              <Menu className="h-5 w-5" />
            </button>
            
            <div className="flex items-center gap-4">
              <div className="hidden sm:block">
                <span className="text-sm text-gray-500">
                  Welcome to Admin Panel
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-medium text-sm">A</span>
                </div>
                <span className="text-sm font-medium text-gray-700 hidden sm:block">Admin</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
