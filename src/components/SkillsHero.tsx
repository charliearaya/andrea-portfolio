import { SectionLabel } from "./PortfolioDetails";
import styles from "./SkillsHero.module.scss";

export function SkillsHero() {
  return (
    <section className={styles.section} aria-labelledby="expertise-heading">
      <div>
        <SectionLabel>Expertise</SectionLabel>
        <h2 id="expertise-heading">A holistic approach, grounded in diverse design disciplines.</h2>
      </div>
      <ul className={styles.skills}>
        <li>Product design</li>
        <li>UX research</li>
        <li>UI design</li>
        <li>Design systems</li>
        <li>Interaction design</li>
        <li>AI-assisted design</li>
        <li>Prototyping</li>
        <li>Visual &amp; brand design</li>
        <li>Accessibility</li>
        <li>Design strategy</li>
      </ul>
    </section>
  );
}

export default SkillsHero;
