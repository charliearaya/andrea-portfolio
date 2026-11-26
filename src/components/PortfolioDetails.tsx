import type { ReactNode } from "react";
import { social } from "@/resources";
import { FaLinkedin } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";
import styles from "./PortfolioDetails.module.scss";

export function SectionLabel({ children }: { children: ReactNode }) {
  return <span className={styles.label}>{children}</span>;
}

export function SocialLinks() {
  return (
    <div className={styles.socials} aria-label="Social and contact links">
      {social.map((item) => {
        const Icon = item.icon === "linkedin" ? FaLinkedin : item.icon === "email" ? HiOutlineEnvelope : null;
        if (!item.link || !Icon) return null;

        return (
          <a key={item.name} href={item.link} className={styles.social} aria-label={item.name}>
            <Icon aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
