import Image from "next/image";
import Projects from "../components/Projects";
import "./resume.css";
import Link from "next/link";
export const metadata = {
  title: "Resume | Dilip Kumar",
  description:
    "Explore the professional resume of Dilip Kumar Maurya, a skilled Frontend Web Developer based in New Delhi, India. View my work experience, skills, and education.",
  keywords: "curiousdilip, web developer dilip",
  authors: [
    {
      name: "Dilip Kumar",
      url: "https://www.dilipmaurya.in/uses",
    },
  ],
  openGraph: {
    title: "Resume | Dilip Kumar",
    description:
      "Explore the professional resume of Dilip Kumar Maurya, a skilled Frontend Web Developer based in New Delhi, India. View my work experience, skills, and education.",
    url: "https://www.dilipmaurya.in/projects",
    siteName: "Resume | Dilip Kumar",
    images: [
      {
        url: "https://www.dilipmaurya.in/image.jpg",
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
    title: "Resume | Dilip Kumar",
    description:
      "Explore the professional resume of Dilip Kumar Maurya, a skilled Frontend Web Developer based in New Delhi, India. View my work experience, skills, and education.",
    image: "https://www.dilipmaurya.in/image.jpg",
  },
  robots: "index, follow",
};
export default function Resume() {
  return (
    <>
      <section id="resume">
        <div className="container">
          <h1 className="resume-heading">Resume</h1>
          <p>
            I am a Frontend Web Developer passionate about crafting stylish,
            modern websites, web services, and online stores.With a keen eye for
            detail and a love for creating exceptional digital experiences, I
            specialize in designing and developing services that cater to the
            unique needs of each client.
          </p>
          <a href="/contact">Say Hello!</a>

          <div className="ongoing-project">
            <Image
              src="/img/frontend-mentor.png"
              alt="frontend end mentor"
              width={300}
              height={200}
            />
            <div className="detail">
              <h2>Frontend Mentor Challenges</h2>
              <div className="description">
                Frontend Projects is a curated collection of exercises I
                undertake to enhance my skills in frontend development through
                the Frontend Mentor platform. Frontend Mentor offers a range of
                real-world challenges designed to simulate the tasks and
                complexities faced in professional frontend development.
              </div>
              <Link href="https://www.frontendmentor.io">Know More</Link>
            </div>
          </div>

          <div className="work-experience">
            <h2>Work Experience</h2>
            <div className="box">
              <div className="year-company">
                <h3>Sept 2023 - Present</h3>
                <h3>World Health Organization</h3>
              </div>
              <div className="text">
                <h4>Web Content Executive</h4>
                <p>
                  In overseeing the WHO India website, my responsibilities
                  encompass updating reports, posting job listings, and making
                  minor UI/UX improvements. This dynamic role demands precision
                  to maintain the site's credibility and relevance. Timely
                  report updates enhance information accuracy, while job
                  postings attract qualified professionals. Implementing minor
                  UI/UX changes ensures a seamless and user-friendly experience,
                  optimizing accessibility to crucial health-related content.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="year-company">
                <h3>Feb 2022 - July 2023</h3>
                <h3>Taknik Bharti</h3>
              </div>
              <div className="text">
                <h4>Frontend web Developer</h4>
                <p>
                  Taknik Bharti is a leading provider of Software solutions for
                  small and medium-sized businesses. As a Frontend Web Developer
                  at Taknik Bharti, I have had the opportunity to work on a
                  variety of projects for clients in the tech industry. Our team
                  is dedicated to delivering high-quality, innovative solutions
                  that help our clients streamline their operations and improve
                  their bottom line. I have been able to learn and grow as a
                  developer in this dynamic and collaborative environment, and
                  am excited to continue contributing to the success of the
                  company.
                </p>
              </div>
            </div>
          </div>

          <div className="skills">
            <h2>Skills</h2>
            <div className="skill-container">
              <p>HTML</p>
              <p>CSS</p>
              <p>JS</p>
              <p>Wordpress</p>
              <p>React</p>
              <p>Git</p>
              <p>Github</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
