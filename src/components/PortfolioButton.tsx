import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./PortfolioButton.module.scss";

type PortfolioButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  icon?: "down" | "diagonal";
};

export function PortfolioButton({
  href,
  children,
  variant = "secondary",
  icon = "diagonal",
}: PortfolioButtonProps) {
  const className = `${styles.button} ${styles[variant]}`;
  const content = (
    <>
      {children}
      <span aria-hidden="true" className={styles.icon}>
        {icon === "down" ? "↓" : "↗"}
      </span>
    </>
  );

  return href.startsWith("/") ? (
    <Link href={href} className={className}>
      {content}
    </Link>
  ) : (
    <a href={href} className={className}>
      {content}
    </a>
  );
}
