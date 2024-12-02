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
              <h3 className="title">Web Content Executive</h3>
              <h4 className="location">
                <strong>World Health Organization </strong>, New Delhi, India
              </h4>
              <p className="duration">Sept 2023 - Present</p>
            </div>
            <div className="box">
              <h3 className="title">Frontend Web Developer</h3>
              <h4 className="location">
                <strong>Taknik Bharti </strong>, Rajasthan, India
              </h4>
              <p className="duration">Feb 2022 - July 2023</p>
            </div>
          </div>

          <div className="education">
            <h2>Education</h2>
            <div className="box">
              <h3 className="title">Master of Computer Application</h3>
              <h4 className="location">
                <strong>Chandigarh University (CU) </strong>, Punjab, India
              </h4>
              <p className="duration">July 2024 - Present</p>
            </div>
            <div className="box">
              <h3 className="title">Bachelors of Computer Application</h3>
              <h4 className="location">
                <strong>Guru Gobind Singh Indraprastha University </strong>, New
                Delhi, India
              </h4>
              <p className="duration">Aug 2019 - July 2022</p>
            </div>
            <div className="box">
              <h3 className="title">Intermediate</h3>
              <h4 className="location">
                <strong>Mount Carmel School, Dwarka </strong>, New Delhi, India
              </h4>
              <p className="duration">April 2017 - May 2029</p>
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
