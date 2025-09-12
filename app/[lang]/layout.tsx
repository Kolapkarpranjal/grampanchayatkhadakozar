import { notFound } from 'next/navigation';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const languages = ['en', 'mr'];

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  // Validate that the incoming `lang` parameter is valid
  const { lang } = params;
  if (!languages.includes(lang as any)) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
