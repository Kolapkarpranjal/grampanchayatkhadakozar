"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, Clock, Users, FileText } from "lucide-react";

// Import all locales
import en from "../../../locales/en/common.json";
import mr from "../../../locales/mr/common.json";

// Import static events data
import { getActiveEvents, Event } from "../../../components/data/events";

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const params = useParams();
  const lang = params?.lang as string || 'mr';

  // Choose correct language JSON
  let t: any = en;
  if (lang === "mr") t = mr;

  const eventsT = t.events; // focus on events section

  useEffect(() => {
    // Load static events (for static export compatibility)
    const staticEvents = getActiveEvents(lang);
    setEvents(staticEvents);
    setLoading(false);
  }, [lang]);

  const handleViewDetails = (event: Event) => {
    setSelectedEvent(event);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-8">
          <nav className="text-sm text-gray-600 mb-4">
            <span className="text-gray-900 font-semibold">{eventsT.title}</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{eventsT.pageTitle}</h1>
          <p className="text-lg text-gray-600">{eventsT.description}</p>
        </div>

        {/* Events Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 animate-pulse rounded mb-3"></div>
                  <div className="h-4 bg-gray-200 animate-pulse rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : events.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl text-gray-300 mb-4">📅</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">{eventsT.noEvents}</h3>
            <p className="text-gray-500">{eventsT.noEventsMessage}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event._id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.imageUrl}
                    alt={event.altText}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                  <button
                    onClick={() => handleViewDetails(event)}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    {eventsT.viewDetails}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox Modal */}
        {isLightboxOpen && selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={selectedEvent.imageUrl}
                  alt={selectedEvent.altText}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 rounded-full p-2 transition-all duration-200"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedEvent.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-sm text-gray-500">{eventsT.eventLocation}</p>
                      <p className="font-semibold">{eventsT.gramPanchayatOffice}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-sm text-gray-500">{eventsT.eventTime}</p>
                      <p className="font-semibold">{eventsT.eventTimeRange}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-sm text-gray-500">{eventsT.attendees}</p>
                      <p className="font-semibold">{eventsT.expectedAttendees}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{eventsT.eventDescription}</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedEvent.description}</p>
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={closeLightbox}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200"
                  >
                    {eventsT.close}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
