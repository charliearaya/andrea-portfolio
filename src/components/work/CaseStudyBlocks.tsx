import type { ReactNode } from "react";
import Image from "next/image";
import styles from "./CaseStudyBlocks.module.scss";

export function EditorialSection({
  label,
  title,
  children,
}: {
  label?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className={`${styles.section} case-editorial`}>
      <div>
        {label && <p className={styles.label}>{label}</p>}
        <h2 className={styles.heading}>{title}</h2>
      </div>
      <div className={styles.copy}>{children}</div>
    </section>
  );
}

export function InsightGrid({ children }: { children: ReactNode }) {
  return <div className={styles.grid}>{children}</div>;
}

export function Insight({
  label,
  title,
  children,
}: {
  label?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className={styles.insight}>
      {label && <p className={styles.label}>{label}</p>}
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

export function Evidence({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <dl className={styles.evidence}>
      {items.map((item) => (
        <div key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function KeyInsight({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <aside className={label === "How might we" ? styles.question : styles.callout}>
      <p className={styles.label}>{label}</p>
      <div>{children}</div>
    </aside>
  );
}

export function FeatureBand({ children }: { children: ReactNode }) {
  return <div className={styles.band}>{children}</div>;
}

export function Feature({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className={styles.feature}>
      <h3>{title}</h3>
      <div className={styles.featureCopy}>{children}</div>
    </section>
  );
}

export function CaseFigure({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <figure className={styles.figure}>
      <Image src={src} alt={alt} width={1600} height={1000} sizes="(max-width: 768px) 100vw, 1100px" />
    </figure>
  );
}

export function CaseSplit({
  reverse = false,
  children,
}: {
  reverse?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={reverse ? "case-feature case-split case-split-reverse" : "case-feature case-split"}>
      {children}
    </div>
  );
}

export function CaseCopy({ children }: { children: ReactNode }) {
  return <div className="case-split-copy">{children}</div>;
}

export function CaseVisual({ children }: { children: ReactNode }) {
  return <div className="case-split-media">{children}</div>;
}

export function CaseGallery({ children }: { children: ReactNode }) {
  return <div className={styles.gallery}>{children}</div>;
}

export function CaseWide({ children }: { children: ReactNode }) {
  return <div className={`${styles.wide} case-wide`}>{children}</div>;
}

export function CaseStory({ children }: { children: ReactNode }) {
  return <div className={styles.story}>{children}</div>;
}
