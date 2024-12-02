import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Quicksand } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

// If loading a variable font, you don't need to specify the font weight
const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Dilip Kumar | Frontend Web Developer",
  description:
    "Hi my name is Dilip Kumar Maurya and I am a Web developer based in New Delhi, India.",
  keywords: "curiousdilip, web developer dilip",
  authors: [
    {
      name: "Dilip Kumar",
      url: "https://www.dilipmaurya.in",
    },
  ],
  openGraph: {
    title: "Dilip Kumar | Frontend Web Developer",
    description:
      "Hi my name is Dilip Kumar Maurya and I am a Web developer based in New Delhi, India.",
    url: "https://www.dilipmaurya.in",
    siteName: "Dilip Kumar | Frontend Web Developer",
    images: [
      {
        url: "https://website2025.vercel.app/home-page.png",
        width: 800,
        height: 600,
        alt: "home page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@curiousdilip",
    title: "Dilip Kumar | Frontend Web Developer",
    description:
      "Hi my name is Dilip Kumar Maurya and I am a Web developer based in New Delhi, India.",
    image: "https://website2025.vercel.app/home-page.png",
  },
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={quicksand.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
