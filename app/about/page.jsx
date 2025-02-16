import Link from "next/link";
import TimeLine from "../components/Timeline";
import "./about.scss";
import Heading from "../components/Heading";
import Subheading from "../components/SubHeading";
export const metadata = {
  title: "About | Dilip Kumar Maurya",
  description:
    "Learn more about Dilip Kumar Maurya, a passionate Frontend Web Developer based in New Delhi, India. Discover my journey, skills, and professional goals.",
  keywords: "curiousdilip, web developer dilip",
  authors: [
    {
      name: "Dilip Kumar",
      url: "https://www.dilipmaurya.in",
    },
  ],
  openGraph: {
    title: "About | Dilip Kumar Maurya",
    description:
      "Learn more about Dilip Kumar Maurya, a passionate Frontend Web Developer based in New Delhi, India. Discover my journey, skills, and professional goals.",
    url: "https://www.dilipmaurya.in/about",
    siteName: "About | Dilip Kumar Maurya",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@curiousdilip",
    title: "About | Dilip Kumar Maurya",
    description:
      "Learn more about Dilip Kumar Maurya, a passionate Frontend Web Developer based in New Delhi, India. Discover my journey, skills, and professional goals.",
  },
  robots: "index, follow",
};
export default function About() {
  return (
    <section id="about">
      <div className="container">
        <Heading title="About" />

        <div className="info">
          <div className="content">
            <Subheading
              description=" I am a web developer with more than 1 year of experience, I'm very
              passionate about technology and computers. I am reliable, can work
              in a team, and can learn quickly my interests are in frontend web
              development. In my free time, I enjoy music, gaming, and reading."
              aboutSub="Dilip Kumar Maurya"
            />
            <TimeLine />
          </div>
        </div>
      </div>
    </section>
  );
}
