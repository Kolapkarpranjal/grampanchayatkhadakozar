"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/en');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-green-700 mb-4">
        GramPanchayat Khadak Ozar
        </h1>
        <p className="text-gray-600">Redirecting to the website...</p>
      </div>
    </div>
  );
}