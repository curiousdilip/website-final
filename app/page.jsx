import Link from "next/link";

export default function Home() {
  return (
    <>
      <section id="hero">
        <div className="container">
          <div className="info">
            <h1>My name is Dilip</h1>
            <p>
              I'm Dilip Kumar Maurya, a web developer with over a year of
              experience. I'm currently working as a Web Content Executive at
              the World Health Organization.
            </p>
            <p>
              I'm passionate about technology and computers, and I'm always
              eager to learn new things. I've previously done freelance work,
              and I'm always looking for new challenges.
            </p>
            <ul>
              <li>
                <Link href="/work">What I have Built?</Link>
              </li>{" "}
              <li>
                <Link href="/about">More about myself</Link>
              </li>{" "}
              <li>
                <Link href="/resume">My Latest Resume</Link>
              </li>{" "}
              <li>
                <Link href="/contact">Contact Me</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
