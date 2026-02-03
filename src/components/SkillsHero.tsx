import { Flex, Heading, Text } from "@once-ui-system/core";
import React from "react";
import SkillCard from "./SkillCard";

export const SkillsHero: React.FC<{}> = () => {

  return (
    <Flex direction="column" fillWidth center>
      <Heading variant="heading-strong-xl" paddingBottom="8">
        Product Design Skills - end to end
      </Heading>
      <Text variant="body-default-xl" onBackground="neutral-weak" paddingBottom="32" align="center">
        Turning user insights into a scalable design language through research, UI design,<br />systems thinking, and collaboration
      </Text>

      <Flex gap="16" s={{ direction: "column" }} fillWidth center>
        <SkillCard
          icon="personSearch"
          title="Research & Validation"
          description="Validate the right problems fast"
          bullets={["Interviews & usability testing", "A/B testing & funnel insights", "Hotjar · Maze · Google Analytics"]}
        />
        <SkillCard
          icon="palette"
          title="UI Design & Prototyping"
          description="Design experiences that feel effortless"
          bullets={["Responsive layouts", "Accessibility & inclusive design", "High-fidelity prototypes"]}
        />
        <SkillCard
          icon="token"
          title="Design Systems & Tokens"
          description="Create consistency that scales across teams"
          bullets={["Component libraries", "Tokens & documentation", "Zerohight · scalable UI"]}
        />
        <SkillCard
          icon="group"
          title="Delivery & Collaboration"
          description="Work smoothly with teams and stakeholders"
          bullets={["Agile teams & iteration", "Jira-ready handoffs", "Cross-functional alignment"]}
        />
      </Flex>
    </Flex>
  );
};

export default SkillsHero;