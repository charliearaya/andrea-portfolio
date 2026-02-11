import { Flex, Grid, Heading, Text } from "@once-ui-system/core";
import React from "react";
import SkillCard from "./SkillCard";

export const SkillsHero: React.FC<{}> = () => {

  return (
    <Flex direction="column" fillWidth center marginBottom="64">
      <Heading variant="display-strong-s" paddingBottom="8">
        Skills & Expertise
      </Heading>
      <Text variant="body-default-xl" onBackground="neutral-weak"  paddingBottom="64" align="center">
        Turning user insights into a scalable design language through research, UI design,<br />systems thinking, and collaboration
      </Text>

      <Grid columns="4" gap="16" m={{ columns: 2 }} s={{ columns: 1 }} fillWidth>
        <SkillCard
          icon="personSearch"
          iconSize="l"
          title="Research & Validation"
          bullets={["Interviews & usability testing", "A/B testing & funnel insights", "Hotjar · Maze · Google Analytics"]}
        />
        <SkillCard
          icon="palette"
          iconSize="l"
          title="UI Design & Prototyping"
          bullets={["Responsive layouts", "Accessibility & inclusive design", "High-fidelity prototypes"]}
        />
        <SkillCard
          icon="token"
          iconSize="l"
          title="Design Systems & Tokens"
          bullets={["Component libraries", "Tokens & documentation", "Zerohight · scalable UI"]}
        />
        <SkillCard
          icon="group"
          iconSize="l"
          title="Delivery & Collaboration"
          bullets={["Agile teams & iteration", "Jira-ready handoffs", "Cross-functional alignment"]}
        />
      </Grid>
    </Flex>
  );
};

export default SkillsHero;