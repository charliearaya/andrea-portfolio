import { Badge, Column, Flex, Heading, Media, Row, SmartLink, Text } from "@once-ui-system/core";
import React from "react";

export const AboutHero: React.FC<{}> = () => {

  return (
    <Flex direction="column" fillWidth center marginBottom="l">
      <Heading variant="display-strong-m" paddingBottom="8">
        How I work
      </Heading>
      <Text variant="body-default-xl" onBackground="neutral-weak" paddingBottom="64" align="center">
        Product designer with 5+ years of experience turning complex product challenges into clear, effective solutions.
      </Text>

      <Column maxWidth={50}>
        <Row fillWidth gap="64" s={{ direction: "column" }}>
          <Flex center>
            <Media src="/images/avatar_02.png"
              objectFit="contain"
              sizes="(max-width: 768px) 100vw, 408px"
              radius="xl"
              width={25}
            />
          </Flex>
          <Flex direction="column" gap="16" vertical="center" s={{ direction: "column", horizontal: "center" }}>
            <Text variant="body-default-m" onBackground="neutral-weak" paddingBottom="16">
              I design clear, structured digital products by working closely with product and engineering teams to solve complex problems and make informed trade-offs.
              <br />
              <br />
              I’m used to collaborating across disciplines – aligning stakeholders, navigating constraints, and helping teams move forward with confidence.
            </Text>
            <Badge
              id="badge-about-hero"
              title="More about me"
              arrow
              href="/about"
              effect={false}
              borderWidth={2}
              border="brand-alpha-strong"
            />
          </Flex>
        </Row>
      </Column>
    </Flex>
  );
};

export default AboutHero;