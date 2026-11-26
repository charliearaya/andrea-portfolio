import Image from "next/image";
import { PortfolioButton } from "./PortfolioButton";
import { SectionLabel } from "./PortfolioDetails";
import styles from "./AboutHero.module.scss";

export function AboutHero() {
  return (
    <section className={styles.section} aria-labelledby="about-heading">
      <div className={styles.portrait}>
        <Image
          src="/images/avatar_02.webp"
          alt="Andrea Schulz"
          fill
          sizes="(max-width: 720px) 100vw, 420px"
        />
      </div>
      <div className={styles.copy}>
        <SectionLabel>About</SectionLabel>
        <h2 id="about-heading">Hi, I’m Andrea.</h2>
        <p className={styles.lead}>
          A Product Designer with 6 years of experience and a background in visual design.
        </p>
        <p>
          I enjoy making experiences feel clearer, more intuitive and thoughtfully considered,
          helping people navigate with confidence and make informed decisions.
        </p>
        <p>
          That philosophy extends to how I work with others. I value shared understanding, open
          collaboration and finding the right balance between user needs, business goals and
          technical possibilities.
        </p>
        <p>
          Curious about how design continues to evolve, I actively explore how AI can enrich my
          design process, while keeping critical thinking and human judgment at its core.
        </p>
        <PortfolioButton href="/about" variant="tertiary">
          More about me
        </PortfolioButton>
      </div>
    </section>
  );
}

export default AboutHero;
