import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/utils/utils";
import styles from "./SelectedWork.module.scss";

const featuredProjects = ["sas", "flow", "float", "exparang"];

const featuredDetails: Record<string, { image: string; category: string; title: string }> = {
  sas: {
    image: "/images/projects/sas/cover_01.webp",
    category: "UI design · Design systems",
    title: "SAS — Scandinavian Airlines",
  },
  flow: {
    image: "/images/projects/flow/completion.jpg",
    category: "UX research · Product design",
    title: "Flow — Designing for AI confidence",
  },
  float: {
    image: "/images/projects/float/cover_01.webp",
    category: "Product design",
    title: "Float — Funding platform",
  },
  exparang: {
    image: "/images/projects/exparang/cover_02.webp",
    category: "Product design",
    title: "Exparang — Talent matching platform",
  },
};

export function SelectedWork({ featured = false }: { featured?: boolean }) {
  const projects = getPosts().sort(
    (a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime(),
  );
  const selected = featured
    ? featuredProjects.flatMap((slug) =>
        projects.filter((project) => project.slug === slug),
      )
    : projects;

  return (
    <div className={`${styles.grid} ${featured ? styles.featured : ""}`}>
      {selected.map(({ slug, metadata }, index) => (
        <Link href={`/work/${slug}`} className={styles.project} key={slug}>
          {metadata.images[0] && (
            <div className={styles.cover}>
              <Image
                src={(featured && featuredDetails[slug]?.image) || metadata.images[0]}
                alt={`${metadata.title} project`}
                fill
                priority={!featured && index < 2}
                quality={95}
                sizes="(max-width: 680px) 100vw, 50vw"
              />
            </div>
          )}
          <div className={styles.info}>
            <div>
              <h3>{(featured && featuredDetails[slug]?.title) || metadata.title}</h3>
              <p>{(featured && featuredDetails[slug]?.category) || metadata.summary}</p>
            </div>
            <span aria-hidden="true" className={styles.arrow}>↗</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
