import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-200 mt-12">
      {/* Top Quick Links */}
      <div className="border-b border-gray-700 py-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/feedback" className="hover:text-white">Feedback</Link>
          <Link href="/policies" className="hover:text-white">Website Policies</Link>
          <Link href="/sitemap" className="hover:text-white">Site Map</Link>
          <Link href="/contact" className="hover:text-white">Contact Us</Link>
          <Link href="/help" className="hover:text-white">Help</Link>
          <Link href="/web-info" className="hover:text-white">Web Information Manager</Link>
          <Link href="/visitors" className="hover:text-white">Visitor Summary</Link>
        </div>
      </div>

      {/* Department Info */}
      <div className="max-w-6xl mx-auto text-center py-6 px-4">
        <p className="text-sm mb-2">
          Content Owned by <span className="font-semibold">Rural Development & Panchayat Raj Department</span>
        </p>
        <p className="text-sm mb-2">
          Developed and hosted by <span className="font-semibold">National Informatics Centre</span>,<br />
          Ministry of Electronics & Information Technology, Government of India
        </p>
        <p className="text-xs text-gray-400">Last Updated: Sep 04, 2025</p>
      </div>

      {/* Logos Row */}
      <div className="bg-black py-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-6">
          <img src="/images/footer/S3WaaS.svg" alt="S3WaaS" width={120} height={40} className="h-10 w-auto" />
          <img src="/images/footer/NIC.svg" alt="NIC" width={120} height={40} className="h-10 w-auto" />
          <img src="/images/footer/Digital-India.svg" alt="Digital India" width={120} height={40} className="h-10 w-auto" />
        </div>
      </div>
    </footer>
  );
}
