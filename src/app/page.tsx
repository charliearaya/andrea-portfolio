import { Meta, Schema } from "@once-ui-system/core";
import { PortfolioButton } from "@/components/PortfolioButton";
import { SectionLabel } from "@/components/PortfolioDetails";
import { about, baseURL, home, person } from "@/resources";
import AboutHero from "@/components/AboutHero";
import SkillsHero from "@/components/SkillsHero";
import { KindWords } from "@/components/KindWords";
import { ProjectMarquee } from "@/components/work/ProjectMarquee";
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
          A selection of my product design work, combining UX, visual design and systems thinking
          across large-scale platforms and end-to-end user journeys.
        </p>
      </header>

      <section className={styles.marqueeSection} aria-label="Project gallery">
        <ProjectMarquee images={projectImages} />
        <div className={styles.galleryLink}>
          <PortfolioButton href="/work" variant="tertiary">
            View all projects
          </PortfolioButton>
        </div>
      </section>

      <SkillsHero />
      <AboutHero />
      <KindWords />

      <section className={styles.contact}>
        <SectionLabel>Contact</SectionLabel>
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
