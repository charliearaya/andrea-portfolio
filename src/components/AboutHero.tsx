import { Column, Flex, Heading, Media, Row, SmartLink, Text } from "@once-ui-system/core";
import React from "react";

export const AboutHero: React.FC<{}> = () => {

  return (
    <Flex direction="column" fillWidth center>
      <Heading variant="display-strong-m" paddingBottom="8">
        About me
      </Heading>
      <Text variant="body-default-xl" onBackground="neutral-weak" paddingBottom="32" align="center">
        A passionate designer with 5+ years of experience turning <br />complex problems into elegant solutions
      </Text>

      <Column maxWidth={50}>
        <Row fillWidth gap="64" s={{ direction: "column" }}>
          <Row>
            <Flex center>
              <Media src="/images/avatar_02.png"
                objectFit="contain"
                sizes="(max-width: 768px) 100vw, 408px"
                radius="xl"
                border="neutral-alpha-medium"
                width={25}
              />
            </Flex>
          </Row>
          <Column gap="16" flex="1" vertical="center">
            <Text variant="body-default-m" onBackground="neutral-weak">
              I focus on creating clear, well-structured digital experiences that balance user needs, business goals, and technical constraints.
            </Text>
            <Text variant="body-default-m" onBackground="neutral-weak" paddingBottom="16">
              I collaborate closely with product, engineering, marketing, sales, and external partners, often helping teams align around a shared direction and make confident design decisions.
            </Text>
            <SmartLink
              suffixIcon="arrowRight"
              style={{ margin: "0", width: "fit-content" }}
              href="/about"
            >
              <Text variant="body-default-m">More about me</Text>
            </SmartLink>
          </Column>
        </Row>
      </Column>
    </Flex>
  );
};

export default AboutHero;