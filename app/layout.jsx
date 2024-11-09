import "./globals.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
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
        url: "https://yourwebsite.com/image.jpg",
        width: 800,
        height: 600,
        alt: "Image description",
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
    image: "https://www.dilipmaurya.in/image.jpg",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
