import { Row, SmartLink, Text } from "@once-ui-system/core";
import { person } from "@/resources";
import { SocialLinks } from "./PortfolioDetails";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Row as="footer" fillWidth padding="8" horizontal="center" s={{ direction: "column" }}>
      <Row
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="between"
        vertical="center"
        s={{
          direction: "column",
          horizontal: "center",
        }}
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">{person.name}</Text>
          <Text onBackground="neutral-weak">
            {/* Usage of this template requires attribution. Please don't remove the link to Once UI unless you have a Pro license. */}
            / Adapted from{" "}
            <SmartLink href="https://once-ui.com/products/magic-portfolio">Once UI</SmartLink>
            {" · "}
            <SmartLink href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</SmartLink>
          </Text>
        </Text>
        <Row gap="16" vertical="center">
          <SocialLinks />
        </Row>
      </Row>
    </Row>
  );
};
