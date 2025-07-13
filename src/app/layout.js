import "./globals.css";
import { Geist } from "next/font/google";
import Header from "./components/header/Header";

export const metadata = {
  title: "TheDigiSeed",
  description: "Web Design Agency",
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
      </body>
    </html>
  );
}
