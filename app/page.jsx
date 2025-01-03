"use client"
import Link from "next/link";
import "./page.css";
import { motion } from "framer-motion";
// export const metadata = {
//   title: "Dilip Kumar | Frontend Web Developer",
//   description:
//     "Hi my name is Dilip Kumar Maurya and I am a Web developer based in New Delhi, India.",
//   keywords: "curiousdilip, web developer dilip",
//   authors: [
//     {
//       name: "Dilip Kumar",
//       url: "https://www.dilipmaurya.in",
//     },
//   ],
//   openGraph: {
//     title: "Dilip Kumar | Frontend Web Developer",
//     description:
//       "Hi my name is Dilip Kumar Maurya and I am a Web developer based in New Delhi, India.",
//     url: "https://www.dilipmaurya.in",
//     siteName: "Dilip Kumar | Frontend Web Developer",
//     images: [
//       {
//         url: "https://www.dilipmaurya.in/home-page.png",
//         width: 800,
//         height: 600,
//         alt: "home page",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "@curiousdilip",
//     title: "Dilip Kumar | Frontend Web Developer",
//     description:
//       "Hi my name is Dilip Kumar Maurya and I am a Web developer based in New Delhi, India.",
//     image: "https://www.dilipmaurya.in/home-page.png",
//   },
//   robots: "index, follow",
// };

export default function Home() {
  return (
    <>
      <section id="hero">
        <div className="container">
          <div className="info">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                ease: "anticipate",
              }}
            >
              <h1>Dilip Kumar Maurya</h1>
            </motion.div>
            
            <h2>Frontend Web Developer</h2>
            <p>
              Passionate about crafting stylish, modern websites, web services,
              and online stores, specializing in designing and developing
              services tailored to each client's unique needs.
            </p>
            <ul>
              <li>
                <Link href="/projects">
                  <i className="bi bi-laptop"></i> What I have Built?
                </Link>
              </li>{" "}
              <li>
                <Link href="/about">
                  <i className="bi bi-person-vcard"></i> More about myself
                </Link>
              </li>{" "}
              <li>
                <Link href="/resume">
                  <i className="bi bi-file-earmark-text"></i> My Latest Resume
                </Link>
              </li>{" "}
              <li>
                <Link href="/contact">
                  <i className="bi bi-telephone"></i> Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
