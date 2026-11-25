import type { ReactNode } from "react";
import styles from "./CaseStudyBlocks.module.scss";

export function EditorialSection({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className={styles.section}>
      <div>
        <p className={styles.label}>{label}</p>
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
    <aside className={styles.callout}>
      <p className={styles.label}>{label}</p>
      <div>{children}</div>
    </aside>
  );
}
