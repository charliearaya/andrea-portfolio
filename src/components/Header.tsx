import { HeaderNav } from "@/components/HeaderNav";
import styles from "./Header.module.scss";

export const Header = () => (
  <header className={styles.position}>
    <HeaderNav />
  </header>
);
