import { Flex, Heading, Icon, List, ListItem } from "@once-ui-system/core";
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
    <Flex direction="column" fillWidth fillHeight horizontal="center" border="neutral-medium" radius="m" paddingY="24" paddingX="16">
      <Icon name={icon} size={iconSize} onBackground="brand-medium" marginBottom="16" radius="full" padding="16" border="transparent" background="brand-alpha-weak" style={{ transform: `rotate(${rotate}deg)`}}/>
      <Heading variant="heading-strong-xs" paddingBottom="16">
        {title}
      </Heading>
      <List as="ul" gap="4" className={styles.custom}>
        {bullets.map((bullet, index) => (
          <ListItem key={index} variant="body-default-s" paddingLeft="0">
            {bullet}
          </ListItem>
        ))}
      </List>

    </Flex >
  );
};

export default SkillCard;