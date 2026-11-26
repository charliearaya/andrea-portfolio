"use client";

import { usePathname } from "next/navigation";
import { person } from "@/resources";
import { FaLinkedin } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const isContact = usePathname() === "/contact";
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {!isContact && (
          <section className={styles.contact} aria-labelledby="footer-contact-heading">
            <h2 id="footer-contact-heading">Let’s connect.</h2>
            <p>I’m open to new opportunities and conversations about design.</p>
            <div className={styles.actions}>
              <a className={styles.button} href={`mailto:${person.email}`}>
                <HiOutlineEnvelope aria-hidden="true" />
                Email me
              </a>
              <a
                className={styles.button}
                href="https://www.linkedin.com/in/andreaschulz-uxui/"
              >
                <FaLinkedin aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </section>
        )}
        <div className={styles.bottom}>
          <span>© {currentYear} {person.name}</span>
          <span className={styles.attribution}>
            Adapted from{" "}
            <a href="https://once-ui.com/products/magic-portfolio">Once UI</a>
            {" · "}
            <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>
          </span>
          <span>Stockholm, Sweden</span>
        </div>
      </div>
    </footer>
  );
};
