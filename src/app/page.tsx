import { Meta, Schema } from "@once-ui-system/core";
import { PortfolioButton } from "@/components/PortfolioButton";
import { about, baseURL, home, person } from "@/resources";
import AboutHero from "@/components/AboutHero";
import SkillsHero from "@/components/SkillsHero";
import { ProjectMarquee } from "@/components/work/ProjectMarquee";
import { SelectedWork } from "@/components/work/SelectedWork";
import styles from "./Portfolio.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL,
    path: home.path,
    image: home.image,
  });
}

const projectImages = [
  "/images/projects/sas/cover_01.webp",
  "/images/projects/flow/entry.jpg",
  "/images/projects/exparang/cover_02.webp",
  "/images/projects/sas/image_04.webp",
  "/images/projects/youse/cover_01.webp",
  "/images/projects/sas/image_06.webp",
  "/images/projects/float/cover_03.webp",
  "/images/projects/sas/cover_04.webp",
  "/images/projects/mcm/cover_01.webp",
];

export default function Home() {
  return (
    <div className={styles.page}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={home.image}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <header className={`${styles.hero} ${styles.homeHero}`}>
        <h1>Design that turns complexity into confidence.</h1>
        <p className={styles.lead}>
          Stockholm-based Product Designer combining UX, visual design and systems thinking
          to create clear, useful and considered digital experiences.
        </p>
        <div className={styles.actions}>
          <PortfolioButton href="#selected-work" variant="primary" icon="down">
            Explore my work
          </PortfolioButton>
          <PortfolioButton href="/about">About me</PortfolioButton>
        </div>
      </header>

      <section className={styles.marqueeSection} aria-label="Project gallery">
        <ProjectMarquee images={projectImages} />
      </section>

      <section id="selected-work" className={styles.featuredSection} aria-labelledby="featured-heading">
        <header className={styles.featuredHeader}>
          <p className={styles.sectionPill}>Selected projects</p>
          <h2 id="featured-heading">From complex challenges to considered design.</h2>
        </header>
        <SelectedWork featured />
        <div className={styles.galleryLink}>
          <PortfolioButton href="/work" variant="tertiary">
            All projects
          </PortfolioButton>
        </div>
      </section>

      <AboutHero />
      <SkillsHero />

      <section className={styles.contact}>
        <p className={styles.kicker}>Get in touch</p>
        <h2>Let’s connect.</h2>
        <p>I’m open to new opportunities and conversations about design.</p>
        <div className={styles.actions}>
          <PortfolioButton href={`mailto:${person.email}`} variant="primary">
            Email me
          </PortfolioButton>
          <PortfolioButton href="https://www.linkedin.com/in/andreaschulz-uxui/">
            LinkedIn
          </PortfolioButton>
        </div>
      </section>
    </div>
  );
}
