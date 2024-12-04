import Link from "next/link";
import TimeLine from "../components/Timeline";
import "./about.css";
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
        <h1 className="about-heading">about</h1>

        <div className="info">
          <div className="content">
            <h2>Dilip Kumar Maurya</h2>
            <p className="text">
              I am a web developer with more than 1 year of experience, I'm very
              passionate about technology and computers. I am reliable, can work
              in a team, and can learn quickly my interests are in frontend web
              development. In my free time, I enjoy music, gaming, and reading.
            </p>
            <h3>Professional milestones of my career:</h3>
            <TimeLine />
            <p className="reach-me">
              You can always reach out to me to have a coffee together and
              discuss Code, Community or Collaboration. Ping me on{" "}
              <a href="https://t.me/curiousdilip">Telegram</a>, or reach out to
              me at{" "}
              <a href="mailto:curiousdilip@gmail.com">
                {" "}
                curiousdilip@gmail.com
              </a>
              .
            </p>
            <p>
              See more about my working experiences at my{" "}
              <Link href="/resume">resume</Link> page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
