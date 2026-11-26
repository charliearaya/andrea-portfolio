import Image from "next/image";
import { PortfolioButton } from "./PortfolioButton";
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
        <p className={styles.label}>About me</p>
        <h2 id="about-heading">Hi, I’m Andrea.</h2>
        <p className={styles.lead}>
          A Product Designer with 5+ years of experience and a background in visual design.
        </p>
        <p>
          I work across research, UX, UI and design systems, collaborating with product and
          engineering teams to solve complex problems and make informed trade-offs.
        </p>
        <p>
          I also integrate AI into research, concept exploration and prototyping, with critical
          thinking and human judgment at the centre of my process.
        </p>
        <PortfolioButton href="/about" variant="tertiary">More about me</PortfolioButton>
      </div>
    </section>
  );
}

export default AboutHero;
