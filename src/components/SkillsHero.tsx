import { Heading, Icon, SmartLink, Text } from "@once-ui-system/core";
import styles from "./SkillsHero.module.scss";

const expertise = [
  {
    title: "Research & validation",
    description:
      "Turning user insights into informed product decisions through qualitative and quantitative research.",
    methods: "Interviews · Usability testing · A/B testing · Funnel insights",
    tools: "Hotjar, Maze, Google Analytics",
  },
  {
    title: "Product & interaction design",
    description:
      "Shaping clear, intuitive digital experiences, from early concepts and user flows to high-fidelity interfaces.",
    methods: "UX · UI · Responsive design · Accessibility · Prototyping",
    tools: "Figma",
  },
  {
    title: "Design systems",
    description:
      "Building scalable design foundations that connect product, brand, and engineering across touchpoints.",
    methods: "Component libraries · Design tokens · Documentation",
    tools: "Figma, Zeroheight",
  },
  {
    title: "Delivery & collaboration",
    description:
      "Bringing teams together around user needs, business goals, and technical constraints throughout delivery.",
    methods: "Agile iteration · Developer handoff · Stakeholder alignment",
    tools: "Jira",
  },
];

export function SkillsHero() {
  return (
    <section className={styles.section} aria-labelledby="expertise-heading">
      <div className={styles.intro}>
        <div>
          <p className={styles.eyebrow}>My practice</p>
          <Heading as="h2" id="expertise-heading" variant="display-strong-m">
            Skills &amp; expertise
          </Heading>
        </div>
        <Text variant="body-default-l" onBackground="neutral-weak">
          I bring together research, visual craft, systems thinking, and collaboration to design
          digital products that work for people and businesses.
        </Text>
      </div>

      <div className={styles.grid}>
        {expertise.map((skill, index) => (
          <article key={skill.title} className={styles.skill}>
            <span className={styles.number} aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <Heading as="h3" variant="heading-strong-l">
              {skill.title}
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {skill.description}
            </Text>
            <p className={styles.methods}>{skill.methods}</p>
            <p className={styles.tools}>{skill.tools}</p>
          </article>
        ))}

        <article className={styles.ai}>
          <div className={styles.aiTitle}>
            <span className={styles.eyebrow}>05 / An evolving practice</span>
            <Heading as="h3" variant="heading-strong-xl">
              AI-assisted design
            </Heading>
          </div>
          <div className={styles.aiCopy}>
            <Text variant="body-default-m" onBackground="neutral-weak">
              Integrating AI into research, concept exploration, prototyping, and iteration.
              Exploring connected workflows while maintaining critical judgment and creative ownership.
            </Text>
            <p className={styles.methods}>
              Research synthesis · Concept exploration · AI-assisted prototyping
            </p>
            <p className={styles.tools}>Claude, Perplexity, Figma + MCP</p>
            <SmartLink href="/work/flow">
              <span className={styles.link}>
                Explore my AI design project <Icon name="arrowUpRight" size="s" />
              </span>
            </SmartLink>
          </div>
        </article>
      </div>
    </section>
  );
}

export default SkillsHero;
