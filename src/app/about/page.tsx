import Image from "next/image";
import { Meta, Schema } from "@once-ui-system/core";
import { about, baseURL, person } from "@/resources";
import { SectionLabel } from "@/components/PortfolioDetails";
import styles from "./About.module.scss";

const principles = [
  {
    title: "Understand before designing",
    description:
      "Ask questions, explore assumptions and take time to understand the people and problems behind a brief.",
  },
  {
    title: "Make connections",
    description:
      "Look beyond individual screens to understand how design decisions affect the wider experience.",
  },
  {
    title: "Create together",
    description:
      "Bring different perspectives into the process and make design decisions accessible to everyone involved.",
  },
  {
    title: "Stay curious",
    description:
      "Explore new technologies and AI-assisted workflows while retaining creative ownership and critical judgment.",
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

      <section aria-labelledby="about-intro">
        <header className={styles.hero}>
          <SectionLabel>A little more about me</SectionLabel>
          <h1 id="about-intro">Curious by nature. A designer by choice.</h1>
        </header>
        <div className={styles.intro}>
          <div className={styles.portrait}>
            <Image
              src="/images/avatar_02.webp"
              alt="Andrea Schulz"
              fill
              sizes="(max-width: 720px) 100vw, 420px"
              priority
            />
          </div>
          <div className={styles.copy}>
            <h2>Hi, I’m Andrea.</h2>
            <p>
              My journey into product design started with a fascination for visual communication
              and how design influences the way we perceive and interact with the world.
            </p>
            <p>
              Over the years, that curiosity has grown beyond the visual layer into understanding
              people, questioning assumptions and exploring how things work together.
            </p>
            <p>
              Today, I enjoy working at the intersection of design, technology and human behaviour.
            </p>
            <div className={styles.details}>
              <span>Based in Stockholm, Sweden</span>
              <span>{person.languages?.join(" / ")}</span>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="experience-heading">
        <header className={styles.sectionHeading}>
          <SectionLabel>Experience</SectionLabel>
          <h2 id="experience-heading">My journey so far.</h2>
          <p>
            From visual communication and early-stage startups to designing experiences for
            global travel platforms.
          </p>
        </header>
        <div className={styles.list}>
          {about.work.experiences.map((experience, index) => (
            <article className={styles.entry} key={experience.company}>
              <div className={styles.entryIdentity}>
                <h3>{experience.company}</h3>
                <span>{experience.role}</span>
              </div>
              <span className={styles.date}>{experience.timeframe}</span>
              {index < 4 && <p>{experience.description}</p>}
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="principles-heading">
        <header className={styles.sectionHeading}>
          <SectionLabel>How I work</SectionLabel>
          <h2 id="principles-heading">Curiosity, collaboration and a willingness to learn.</h2>
        </header>
        <div className={styles.grid}>
          {principles.map((principle) => (
            <article className={styles.card} key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="education-heading">
        <header className={styles.sectionHeading}>
          <SectionLabel>Education</SectionLabel>
          <h2 id="education-heading">Always learning.</h2>
        </header>
        <div className={styles.list}>
          {about.studies.institutions.map((institution) => (
            <article className={styles.education} key={institution.name}>
              <h3>{institution.name}</h3>
              <div>{institution.description}</div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.personal} aria-labelledby="personal-heading">
        <header className={styles.sectionHeading}>
          <SectionLabel>Beyond design</SectionLabel>
          <h2 id="personal-heading">Finding inspiration outside the screen.</h2>
          <p>
            Originally from Germany and now living in Sweden, I enjoy exploring new perspectives,
            spending time in nature and finding creative inspiration in everyday life.
          </p>
        </header>
      </section>
    </div>
  );
}
