import { PortfolioButton } from "@/components/PortfolioButton";
import styles from "./About.module.scss";

const sections = [
  { id: "experience", label: "Work experience" },
  { id: "education", label: "Education & courses" },
];

export function AboutNavigation() {
  return (
    <nav className={styles.jumpLinks} aria-label="Jump to a section">
      {sections.map(({ id, label }) => (
        <PortfolioButton key={id} href={`#${id}`} variant="secondary" icon="down">
          {label}
        </PortfolioButton>
      ))}
    </nav>
  );
}
