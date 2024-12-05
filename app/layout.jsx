import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Quicksand } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from "next/script";

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
        url: "https://www.dilipmaurya.in/home-page.png",
        width: 800,
        height: 600,
        alt: "home page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@curiousdilip",
    title: "Dilip Kumar | Frontend Web Developer",
    description:
      "Hi my name is Dilip Kumar Maurya and I am a Web developer based in New Delhi, India.",
    image: "https://www.dilipmaurya.in/home-page.png",
  },
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={quicksand.className}>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-W78VYNSQ67"
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-W78VYNSQ67');
          `,
        }}
      />

      <Script
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TMR7S6CR');
          `,
        }}
      />
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TMR7S6CR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
