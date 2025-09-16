import "./globals.css";
import LanguageProvider from "../components/LanguageProvider";

export const metadata = {
  title: "Gramvikas Panchayat",
  description: "Transparent Information Portal for Grampanchayat",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mr">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
