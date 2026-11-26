import Image from "next/image";
import { Meta, Schema } from "@once-ui-system/core";
import { about, baseURL, person } from "@/resources";
import { FaFigma, FaJira, FaSlack } from "react-icons/fa6";
import { SiAnthropic, SiNotion } from "react-icons/si";
import { BsOpenai } from "react-icons/bs";
import { AboutNavigation } from "./AboutNavigation";
import styles from "./About.module.scss";

const tools = [
  { name: "Figma", Icon: FaFigma, color: "#a259ff" },
  { name: "Claude", Icon: SiAnthropic, color: "#d97757" },
  { name: "ChatGPT", Icon: BsOpenai, color: "currentColor" },
  { name: "Notion", Icon: SiNotion, color: "currentColor" },
  { name: "Jira", Icon: FaJira, color: "#2684ff" },
  { name: "Slack", Icon: FaSlack, color: "#b45cb3" },
];

const expertise = [
  {
    title: "Product Design",
    description:
      "End-to-end design, from discovery and problem framing to interaction design and production-ready solutions.",
  },
  {
    title: "UI & Design Systems",
    description:
      "Accessible interfaces, scalable component libraries, design tokens and documentation.",
  },
  {
    title: "Research & Validation",
    description:
      "User research, usability testing, A/B testing and data-informed design decisions.",
  },
  {
    title: "Delivery & Collaboration",
    description:
      "Cross-functional collaboration, balancing user needs, business goals and technical constraints.",
  },
  {
    title: "Visual & Brand Design",
    description:
      "A strong foundation in visual communication, typography, branding and visual consistency.",
  },
  {
    title: "AI-Assisted Design",
    description:
      "Integrating AI into research, exploration, prototyping and iteration while maintaining human judgment.",
  },
];

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  return (
    <div className={styles.page}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <section id="introduction" aria-labelledby="about-intro">
        <header className={styles.hero}>
          <h1 id="about-intro">Curious by nature. A designer by choice.</h1>
          <p>
            A Product Designer with a background in visual design and a curiosity for how
            people, design and technology come together.
          </p>
        </header>
        <div className={styles.overview}>
          <div className={styles.portrait}>
            <Image
              src="/images/avatar_02.webp"
              alt="Andrea Schulz"
              fill
              sizes="(max-width: 720px) 100vw, 360px"
              priority
            />
          </div>
          <div className={`${styles.card} ${styles.experienceCard}`}>
            <p className={styles.years}>6+ years</p>
            <p>Design experience</p>
          </div>
          <div className={`${styles.card} ${styles.philosophyCard}`}>
            <h2>Clarity. Curiosity. Collaboration.</h2>
            <p>
              I believe in asking the right questions, looking beyond the obvious and creating
              shared understanding. I value thoughtful design, open collaboration and continuous
              learning.
            </p>
          </div>
          <div className={`${styles.card} ${styles.toolsCard}`}>
            <h2>Tools that shape my workflow</h2>
            <ul className={styles.tools}>
              {tools.map(({ name, Icon, color }) => (
                <li key={name}>
                  <Icon aria-hidden="true" style={{ color }} />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <AboutNavigation />
      </section>

      <section id="experience" aria-labelledby="experience-heading">
        <header className={styles.sectionHeading}>
          <h2 id="experience-heading">Work experience</h2>
          <p>
            From visual communication and early-stage startups to designing experiences for
            global travel platforms.
          </p>
        </header>
        <div className={styles.list}>
          {about.work.experiences.map((experience, index) => (
            <article className={styles.entry} key={experience.company}>
              <div className={styles.entryIdentity}>
                <h3>{experience.role}</h3>
                <span>{experience.company}</span>
              </div>
              <span className={styles.date}>{experience.timeframe}</span>
              {index < 4 && <p>{experience.description}</p>}
            </article>
          ))}
        </div>
      </section>

      <section id="education" aria-labelledby="education-heading">
        <header className={styles.sectionHeading}>
          <h2 id="education-heading">Education &amp; courses</h2>
        </header>
        <div className={styles.list}>
          {about.studies.institutions.map((institution) => (
            <article className={styles.entry} key={institution.name}>
              <div className={styles.entryIdentity}>
                <h3>{institution.name}</h3>
                <span>{institution.school}</span>
              </div>
              <span className={styles.date}>{institution.timeframe}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="expertise" aria-labelledby="expertise-heading">
        <header className={styles.sectionHeading}>
          <h2 id="expertise-heading">Professional expertise</h2>
        </header>
        <div className={styles.expertise}>
          {expertise.map(({ title, description }) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="personal" className={styles.personal} aria-labelledby="personal-heading">
        <header className={styles.sectionHeading}>
          <h2 id="personal-heading">A little more about me.</h2>
          <p>
            Originally from Germany, I now call Sweden home. Outside of design, I have a passion
            for photography and videography. I enjoy capturing everyday moments, exploring
            different perspectives and spending time in nature.
          </p>
        </header>
      </section>
    </div>
  );
}
