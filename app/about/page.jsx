import Link from "next/link";
import TimeLine from "../components/Timeline";
import ProfileCard from "../components/ProfileCard";

export default function About() {
  return <section id="about">
    <div className="container">
      <h1 className="about-heading">about</h1>
      <ProfileCard/>
      <div className="info">
      <h3>Dilip Kumar Maurya</h3>
                <p>
                  I am a web developer with more than 1 year of
                  experience, I'm very passionate about technology and
                  computers. I am reliable, can work in a team, and can learn
                  quickly my interests are in frontend web development. In my
                  free time, I enjoy music, gaming, and reading.
                </p>
                <h4>Professional milestones of my career:</h4>
                <TimeLine />
                <p className="reach-me">
                  You can always reach out to me to have a coffee together and
                  discuss Code, Community or Collaboration. Ping me on <a href="https://t.me/curiousdilip">Telegram</a>,
                  or reach out to me at <a href="mailto:curiousdilip@gmail.com"> curiousdilip@gmail.com</a>.
                </p>
                <p>See more about my working experiences at my <Link href="/resume">resume</Link> page.</p>
      </div>
    </div>
  </section>;
}
