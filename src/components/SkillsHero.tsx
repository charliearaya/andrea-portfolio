import { Heading, Text } from "@once-ui-system/core";
import Link from "next/link";
import styles from "./SkillsHero.module.scss";

export function SkillsHero() {
  return (
    <section className={styles.section} aria-labelledby="expertise-heading">
      <div className={styles.intro}>
        <Heading as="h2" id="expertise-heading" variant="display-strong-s">
          Skills &amp; expertise
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          From understanding the problem to designing the details.
        </Text>
      </div>

      <dl className={styles.expertise}>
        <div className={styles.row}>
          <dt>Research &amp; strategy</dt>
          <dd>User interviews, usability testing, A/B testing, funnel analysis</dd>
        </div>
        <div className={styles.row}>
          <dt>Product &amp; UI design</dt>
          <dd>User flows, interaction design, visual design, accessibility, prototyping</dd>
        </div>
        <div className={styles.row}>
          <dt>Design systems</dt>
          <dd>Component libraries, design tokens, documentation, scalable UI</dd>
        </div>
        <div className={styles.row}>
          <dt>AI-assisted design</dt>
          <dd>
            Research synthesis, concept exploration, prototyping and iteration
            <Link href="/work/flow" className={styles.projectLink}>
              Flow case study <span aria-hidden="true">↗</span>
            </Link>
          </dd>
        </div>
        <div className={styles.row}>
          <dt>Collaboration &amp; delivery</dt>
          <dd>Facilitation, stakeholder alignment, agile teams, developer handoff</dd>
        </div>
      </dl>

      <div className={styles.toolkit}>
        <span>Tools I work with</span>
        <p>Figma, Zeroheight, Claude, Perplexity, Maze, Hotjar, Google Analytics, Jira</p>
      </div>
    </section>
  );
}

export default SkillsHero;
