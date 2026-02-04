import { Column, Flex, Heading, Icon, List, ListItem, Text } from "@once-ui-system/core";
import React from "react";

type SkillCardProps = {
  icon: string;
  title: string;
  description?: string;
  bullets: string[];
  children?: React.ReactNode;
};

export const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, bullets }) => {
  return (
    <Flex direction="column" fillWidth fillHeight horizontal="center"  border="neutral-medium" radius="m" paddingY="24" paddingX="16">
      <Icon name={icon} size="m" onBackground="brand-strong" marginBottom="16" radius="full" padding="16" border="transparent" background="neutral-medium" />
      <Heading variant="heading-strong-xs" paddingBottom="8">
        {title}
      </Heading>
      {description && (
        <Text variant="body-default-s" onBackground="neutral-strong" marginBottom="32" align="center" paddingX="8">
          {description}
        </Text>
      )}
      <List as="ul" gap="4">
        {bullets.map((bullet, index) => (
          <ListItem key={index} variant="body-default-s" paddingLeft="0">
            {bullet}
          </ListItem>
        ))}
      </List>

    </Flex>
  );
};

export default SkillCard;