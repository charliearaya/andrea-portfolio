import { Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { SelectedWork } from "@/components/work/SelectedWork";
import styles from "../Portfolio.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <div className={styles.page}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <header className={styles.hero}>
        <p className={styles.kicker}>Portfolio</p>
        <h1>Selected work.</h1>
        <p className={styles.lead}>
          Product design, digital experiences and design systems across established organisations
          and early-stage startups.
        </p>
      </header>
      <section className={styles.section} aria-label="Projects">
        <SelectedWork />
      </section>
    </div>
  );
}
