"use client";

import { useEffect, useState } from "react";

export default function NoticesPage() {
  const [notices, setNotices] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/notices")
      .then((res) => res.json())
      .then((data) => setNotices(data));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Important Announcements & Notices</h1>
      <ul className="space-y-4">
        {notices.map((notice) => (
          <li key={notice.id} className="border-b pb-2">
            <a
              href={notice.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:underline font-semibold"
            >
              {notice.title}
            </a>
            <p className="text-sm text-gray-500">
              {new Date(notice.createdAt).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
