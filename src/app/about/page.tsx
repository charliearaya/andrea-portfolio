import Image from "next/image";
import { Meta, Schema } from "@once-ui-system/core";
import { about, baseURL, person } from "@/resources";
import { HiOutlinePaintBrush, HiOutlineArrowPath, HiOutlineSquares2X2, HiOutlineUserGroup } from "react-icons/hi2";
import { ExpertiseIllustration } from "./ExpertiseIllustration";
import { ToolkitMarquee } from "./ToolkitMarquee";
import { AboutNavigation } from "./AboutNavigation";
import styles from "./About.module.scss";

const expertise = [
  {
    title: "Creative foundations",
    description: "Visual design, branding & UI craft",
    Icon: HiOutlinePaintBrush,
  },
  {
    title: "End-to-end design",
    description: "Research, interaction design & validation",
    Icon: HiOutlineArrowPath,
  },
  {
    title: "Designing at scale",
    description: "Design systems, accessibility & scalability",
    Icon: HiOutlineSquares2X2,
  },
  {
    title: "Connecting perspectives",
    description: "User needs, business goals & technology",
    Icon: HiOutlineUserGroup,
  },
];

const professionalExpertise = [
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
          <h1 id="about-intro">A designer who likes to understand the why.</h1>
          <p>
            With a background in visual design and experience across UX, UI and design systems,
            I bring curiosity, creative thinking and a structured approach to solving complex
            problems.
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
            <p className={styles.years}>6+</p>
            <p>Years of design experience</p>
          </div>
          <div className={`${styles.card} ${styles.toolsCard}`}>
            <ToolkitMarquee />
          </div>
          <div
            className={`${styles.card} ${styles.expertiseCard}`}
            role="group"
            aria-label="Professional expertise"
          >
            {expertise.map(({ title, description, Icon }) => (
              <div className={styles.expertiseItem} key={title}>
                <Icon aria-hidden="true" />
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            ))}
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
          {professionalExpertise.map(({ title, description }, index) => (
            <article key={title}>
              <ExpertiseIllustration index={index} />
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
