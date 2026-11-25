import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/utils/utils";
import styles from "./SelectedWork.module.scss";

export function SelectedWork({ featured = false }: { featured?: boolean }) {
  const projects = getPosts(["src", "app", "work", "projects"]).sort(
    (a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime(),
  );
  const selected = featured
    ? ["sas", "flow", "exparang", "youse"].flatMap((slug) =>
        projects.filter((project) => project.slug === slug),
      )
    : projects;

  return (
    <div className={styles.grid}>
      {selected.map(({ slug, metadata }, index) => (
        <Link href={`/work/${slug}`} className={styles.project} key={slug}>
          {metadata.images[0] && (
            <div className={styles.cover}>
              <Image
                src={metadata.images[0]}
                alt={`${metadata.title} project`}
                fill
                priority={index < 2}
                sizes="(max-width: 680px) 100vw, 50vw"
              />
            </div>
          )}
          <div className={styles.info}>
            <div>
              <h3>{metadata.title}</h3>
              <p>{metadata.summary}</p>
            </div>
            <span aria-hidden="true" className={styles.arrow}>↗</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
