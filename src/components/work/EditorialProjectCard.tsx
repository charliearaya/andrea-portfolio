import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import styles from "./EditorialProjectCard.module.scss";

type EditorialProjectCardProps = {
  href: string;
  title: string;
  headline: string;
  category?: string;
  image?: string;
  period?: string;
  priority?: boolean;
};

export function EditorialProjectCard({
  href,
  title,
  headline,
  category,
  image,
  period,
  priority = false,
}: EditorialProjectCardProps) {
  return (
    <article className={styles.project}>
      <Link href={href} className={styles.link}>
        {image && (
          <div className={styles.cover}>
            <Image
              src={image}
              alt=""
              fill
              priority={priority}
              sizes="(max-width: 1000px) 100vw, 1000px"
            />
          </div>
        )}
        <div className={styles.meta}>
          <span>{title}{period ? ` · ${period}` : ""}</span>
          <HiArrowUpRight aria-hidden="true" />
        </div>
        <h2>{headline}</h2>
        {category && <p>{category}</p>}
      </Link>
    </article>
  );
}
