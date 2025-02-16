import "./resume.scss";
import Heading from "../components/Heading";
import Subheading from "../components/SubHeading";
import ResumeEl from "../components/resume";
export const metadata = {
  title: "Resume | Dilip Kumar Maurya",
  description:
    "Explore the professional resume of Dilip Kumar Maurya, a skilled Frontend Web Developer based in New Delhi, India. View my work experience, skills, and education.",
  keywords: "curiousdilip, web developer dilip",
  authors: [
    {
      name: "Dilip Kumar",
      url: "https://www.dilipmaurya.in",
    },
  ],
  openGraph: {
    title: "Resume | Dilip Kumar Maurya",
    description:
      "Explore the professional resume of Dilip Kumar Maurya, a skilled Frontend Web Developer based in New Delhi, India. View my work experience, skills, and education.",
    url: "https://www.dilipmaurya.in/resume",
    siteName: "Resume | Dilip Kumar Maurya",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@curiousdilip",
    title: "Resume | Dilip Kumar Maurya",
    description:
      "Explore the professional resume of Dilip Kumar Maurya, a skilled Frontend Web Developer based in New Delhi, India. View my work experience, skills, and education.",
  },
  robots: "index, follow",
};
export default function Resume() {
  return (
    <>
      <section id="resume">
        <div className="container">
          <Heading title="Resume" />

          <Subheading
            description="  I am a Frontend Web Developer passionate about crafting stylish,
            modern websites, web services, and online stores.With a keen eye for
            detail and a love for creating exceptional digital experiences, I
            specialize in designing and developing services that cater to the
            unique needs of each client."
          />

          <ResumeEl />
        </div>
      </section>
    </>
  );
}
