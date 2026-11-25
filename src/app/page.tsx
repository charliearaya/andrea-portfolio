import { Meta, Schema } from "@once-ui-system/core";
import Link from "next/link";
import { about, baseURL, home, person } from "@/resources";
import AboutHero from "@/components/AboutHero";
import SkillsHero from "@/components/SkillsHero";
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
      <header className={styles.hero}>
        <p className={styles.kicker}>Andrea Schulz · Product Designer · Stockholm</p>
        <h1>I design digital products from idea to delivery, and beyond.</h1>
        <p className={styles.lead}>
          Combining UX, visual design and systems thinking to make complex digital experiences
          clear, useful and considered.
        </p>
        <div className={styles.actions}>
          <a className={styles.primary} href="#selected-work">Explore my work <span>↓</span></a>
          <Link className={styles.secondary} href="/about">About me <span>↗</span></Link>
        </div>
      </header>

      <section id="selected-work" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Selected work</h2>
          <Link className={styles.secondary} href="/work">All projects <span>↗</span></Link>
        </div>
        <SelectedWork featured />
      </section>

      <AboutHero />
      <SkillsHero />

      <section className={styles.contact}>
        <p className={styles.kicker}>Get in touch</p>
        <h2>Let’s connect.</h2>
        <p>I’m open to new opportunities and conversations about design.</p>
        <div className={styles.actions}>
          <a className={styles.primary} href={`mailto:${person.email}`}>Email me <span>↗</span></a>
          <a className={styles.secondary} href="https://www.linkedin.com/in/andreaschulz-uxui/">LinkedIn <span>↗</span></a>
        </div>
      </section>
    </div>
  );
}
