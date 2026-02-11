import { Flex, Heading, Icon, List, ListItem, Row } from "@once-ui-system/core";
import React from "react";

import styles from "./SkillCard.module.scss";

type SkillCardProps = {
  icon: string;
  iconSize?: "xs" | "s" | "m" | "l" | "xl";
  title: string;
  bullets: string[];
  rotate?: number;
  children?: React.ReactNode;
};

export const SkillCard: React.FC<SkillCardProps> = ({ icon, iconSize = "m", title, rotate = 0, bullets }) => {
  return (
    <Flex direction="column" fillWidth fillHeight horizontal="center" border="neutral-medium" radius="m" padding="16" paddingTop="24" paddingBottom="32">
      <Icon name={icon} size={iconSize} onBackground="accent-medium" marginBottom="16" radius="full" padding="16" border="transparent" background="brand-alpha-weak" style={{ transform: `rotate(${rotate}deg)` }} />
      <Heading variant="heading-strong-xs" paddingBottom="16">
        {title}
      </Heading>
      <List as="ul" gap="4" className={styles.custom}>
        {bullets.map((bullet, index) => (
          <Row key={index}>
            <Icon name="checkCircle" size="s" onBackground="accent-medium" />
            <ListItem variant="body-default-m" marginBottom="4" >
              {bullet}
            </ListItem>
          </Row>
        ))}
      </List>

    </Flex >
  );
};

export default SkillCard;