"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Calendar, MapPin, Clock, FileText } from "lucide-react";

// Import all locales
import en from "../locales/en/common.json";
import mr from "../locales/mr/common.json";

interface Event {
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

export default function AboutEventsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();
  const lang = params?.lang as string || 'en';

  // Choose correct language JSON
  let t: any = en;
  if (lang === "mr") t = mr;

  // Fetch events from API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/images?type=event');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        // Filter only active events and sort by order
        const activeEvents = data
          .filter((event: Event) => event.isActive)
          .sort((a: Event, b: Event) => a.order - b.order)
          .slice(0, 4); // Show only first 4 events
        setEvents(activeEvents);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Failed to load events');
        // Fallback to static events if API fails
        setEvents([
          { 
            _id: '1', 
            title: 'Cultural Program', 
            description: 'Traditional cultural event',
            imageUrl: '/images/events/event1.jpg',
            altText: 'Cultural Program',
            order: 1,
            isActive: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          { 
            _id: '2', 
            title: 'Village Meeting', 
            description: 'Monthly village meeting',
            imageUrl: '/images/events/event2.jpg',
            altText: 'Village Meeting',
            order: 2,
            isActive: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        
        {/* About Us Section */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4 text-green-700">{t.home.aboutEvents.aboutUs.title}</h2>
          <p className="text-gray-700 mb-4">
            {t.home.aboutEvents.aboutUs.content}
          </p>
          <Link
            href={`/${lang}/about`}
            className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            {t.home.aboutEvents.aboutUs.readMore}
          </Link>
        </div>

        {/* Events Section */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4 text-green-700">
            {t.home.aboutEvents.recentEvents.title}
          </h2>
          
          {loading ? (
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 rounded-lg h-32"></div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-red-600 mb-4">{error}</p>
              <p className="text-gray-500 text-sm">Showing sample events</p>
            </div>
          ) : events.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No events available</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {events.map((event) => (
                <div
                  key={event._id}
                  className="cursor-pointer group"
                  onClick={() => setSelectedImage(event.imageUrl)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src={event.imageUrl}
                      alt={event.altText}
                      width={300}
                      height={200}
                      className="rounded-lg object-cover w-full h-32 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg">
                      <h3 className="text-white font-semibold text-sm truncate">{event.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar className="w-3 h-3 text-white/80" />
                        <span className="text-white/80 text-xs">
                          {new Date(event.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-4 text-right">
            <Link
              href={`/${lang}/events`}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              {t.home.aboutEvents.recentEvents.viewAllEvents}
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox (Image Popup) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const event = events.find(e => e.imageUrl === selectedImage);
              return event ? (
                <div>
                  <div className="relative">
                    <Image
                      src={event.imageUrl}
                      alt={event.altText}
                      width={800}
                      height={400}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        <span className="text-gray-700">
                          Added: {new Date(event.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">Order: {event.order}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-6">
                  <Image
                    src={selectedImage}
                    alt="Event"
                    width={800}
                    height={600}
                    className="rounded-lg"
                  />
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </section>
  );
}
