import Link from "next/link";
import "./page.scss";
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
export default function Home() {
  return (
    <>
      <section id="hero">
        <div className="container">
          <div className="info">
            <h1>Dilip Kumar Maurya</h1>
            <h2>Frontend Web Developer</h2>
            <p>
              I am improving myself every day, even if it’s just a little bit.
              Small steps lead to big changes.
            </p>
            <ul>
              <li>
                <Link href="/work">
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
