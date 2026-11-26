import { PortfolioButton } from "./PortfolioButton";
import { SectionLabel } from "./PortfolioDetails";
import styles from "./KindWords.module.scss";

const recommendations = [
  {
    quote:
      "One of her greatest strengths is how easy and enjoyable she makes collaboration. She communicates clearly and openly, is approachable, receptive to feedback, and brings a calm, solution-oriented attitude to the team.",
    author: "Dimitrios Petrou",
    role: "Tech Team Lead",
  },
  {
    quote:
      "Her deliverables were consistently clear, well organized, and ready for the team to work with, which made refinement and development much smoother. She understands business goals as well as technical constraints, and she explains her design decisions in a way that both sides can follow.",
    author: "Maria Kouiroukidou",
    role: "Product Owner at Etraveli",
  },
  {
    quote:
      "If you are looking for a designer with an eye for details and the ability to see the bigger picture, Andrea is an ambitious and thorough UI designer who thinks systematically and long-term from the start.",
    author: "Martin Lysell",
    role: "Senior UI Designer at SAS",
  },
  {
    quote:
      "Andrea is a talented UI designer with a strong sense of user needs and a passion for improving the overall experience. She brings thoughtful design decisions to every project and always aims to elevate the user experience to the next level.",
    author: "Ingrid Escriche-Ekström",
    role: "Senior UX & Product Designer",
  },
];

export function KindWords() {
  return (
    <section className={styles.section} aria-labelledby="kind-words-heading">
      <header className={styles.heading}>
        <SectionLabel>Kind words</SectionLabel>
        <h2 id="kind-words-heading">Good design is a team effort.</h2>
      </header>
      <div className={styles.grid}>
        {recommendations.map(({ quote, author, role }) => (
          <figure className={styles.card} key={author}>
            <blockquote>
              <p>“{quote}”</p>
            </blockquote>
            <figcaption>
              <span className={styles.author}>{author}</span>
              <span className={styles.role}>{role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className={styles.action}>
        <PortfolioButton
          href="https://www.linkedin.com/in/andreaschulz-uxui/"
          variant="tertiary"
        >
          More on LinkedIn
        </PortfolioButton>
      </div>
    </section>
  );
}
