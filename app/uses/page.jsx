import Image from "next/image";
import "./uses.css";
import Heading from "../components/Heading";
import Subheading from "../components/SubHeading";
import MyComputerSetup from "../components/MyComputerSetup";
import TechStack from "../components/TechStack";
export const metadata = {
  title: "Uses | Dilip Kumar Maurya",
  description:
    "Below is the collection of tools and tech I rely on for development, gaming, content creation, and daily tasks.",
  keywords: "curiousdilip, web developer dilip",
  authors: [
    {
      name: "Dilip Kumar",
      url: "https://www.dilipmaurya.in",
    },
  ],
  openGraph: {
    title: "Uses | Dilip Kumar Maurya",
    description:
      "Below is the collection of tools and tech I rely on for development, gaming, content creation, and daily tasks.",
    url: "https://www.dilipmaurya.in/uses",
    siteName: "Uses | Dilip Kumar Maurya",
  },
  twitter: {
    card: "summary_large_image",
    site: "@curiousdilip",
    title: "Uses | Dilip Kumar Maurya",
    description:
      "Below is the collection of tools and tech I rely on for development, gaming, content creation, and daily tasks.",
  },
  robots: "index, follow",
};
export default function Uses() {
  return (
    <>
      <section id="uses">
        <div className="container">
          <Heading title=" Tools & Technologies" />
          <Subheading
            description=" Below is the collection of tools and tech I rely on for development,
            gaming, content creation, and daily tasks."
          />
          <MyComputerSetup />
          <TechStack />
        </div>
      </section>
    </>
  );
}
