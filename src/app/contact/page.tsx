import type { Metadata } from "next";
import { person } from "@/resources";
import { socialLinks } from "@/resources/content";
import { PortfolioButton } from "@/components/PortfolioButton";
import { FaLinkedin } from "react-icons/fa6";
import { HiOutlineEnvelope, HiOutlineMapPin } from "react-icons/hi2";
import { CopyEmail } from "./CopyEmail";
import styles from "./Contact.module.scss";

export const metadata: Metadata = {
  title: `Contact – ${person.name}`,
  description: "Get in touch about design opportunities and collaborations.",
};

export default function Contact() {
  return (
    <main className={styles.page}>
      <h1>Let’s start a conversation.</h1>
      <p className={styles.intro}>
        I'm open to new opportunities, collaborations and conversations about design. I'd love
        to hear from you.
      </p>
      <div className={styles.actions}>
        <PortfolioButton href={`mailto:${person.email}`}>
          <HiOutlineEnvelope aria-hidden="true" />
          Email me
        </PortfolioButton>
        <PortfolioButton href={socialLinks.LinkedIn}>
          <FaLinkedin aria-hidden="true" />
          LinkedIn
        </PortfolioButton>
      </div>
      <p className={styles.location}>
        <HiOutlineMapPin aria-hidden="true" />
        Based in Stockholm, Sweden
      </p>
      <div className={styles.card}>
        <p>Prefer to reach out directly?</p>
        <CopyEmail email={person.email} />
      </div>
    </main>
  );
}
