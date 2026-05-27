import "./globals.css";
import { Geist } from "next/font/google";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export const metadata = {
  title: "TheDigiSeed",
  description: "Web Design Agency",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const geist = Geist({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
