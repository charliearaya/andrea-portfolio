import { AutoScroll, BlockQuote, Button, Column, Flex, Grid, Heading, Icon, Row, SmartLink, Text } from "@once-ui-system/core";
import React from "react";

type RecommendationProps = {
  recommendation: string;
  author: string;
  role: string;
  company: string;
  className?: string;
  url: string;
};

type RecommendationsProps = {
  recommendations: RecommendationProps[];
};

const recommendations: RecommendationProps[] = [
  {
    recommendation: "If you are looking for a designer with an eye for details and the ability to see the bigger picture, Andrea is an ambitious and thorough UI designer who thinks systematically and long-term from the start",
    author: "Martin Lysell",
    role: "Senior UI Designer",
    company: "SAS",
    url: "https://sas.se",
  },
  {
    recommendation: "Beyond that, Andrea is a great team player, can work independently, is well-organised, always does her research, and always turns feedback into an even better version of her work.",
    author: "Karo Kiessling",
    role: "Marketing Manager",
    company: "Netigate",
    url: "https://netigate.com",
  },
  {
    recommendation: "She brings thoughtful design decisions to every project and always aims to elevate the user experience to the next level.",
    author: "Ingrid Escriche-Ekström",
    role: "Senior UX Designer",
    company: "SAS",
    url: "https://sas.se",
  },
  {
    recommendation: "The recommendations she provided were detailed and of a very high standard. Her positive energy and ability to understand our product made the whole progress smooth and successful.",
    author: "Karlijn Korpershoek",
    role: "Client",
    company: "Potentialpark",
    url: "https://potentialpark.com",
  },
];

const Recommendations: React.FC<{}> = () => {
  return (
    <Grid fillWidth gap="24" columns={2} border="neutral-medium" radius="m" paddingY="32" paddingX="48" background="brand-alpha-strong">
      <Row vertical="center">
        <Text variant="display-strong-s" size="l">
          What Others Say
        </Text>
      </Row>
      <Row background="surface" radius="l" horizontal="end" vertical="center">
        <Button variant="secondary" arrowIcon>
          <SmartLink href="#">
            <Text variant="body-default-s">View full feedback</Text>
            <Icon name="arrowUpRightFromSquare" size="s" />
          </SmartLink>
        </Button>
      </Row>

      {recommendations.slice(0, 2).map((rec, index) => (
        <Flex key={index} paddingY="16" paddingRight="32">
          <div
            key={index}
          >
            <Column gap="4">
              <Text variant="body-default-s" marginBottom="16">“{rec.recommendation}”</Text>
              <Text variant="body-strong-s">{rec.author}</Text>
              <Text variant="body-default-s" onBackground="neutral-medium">{rec.role}, {rec.company}</Text>
            </Column>
          </div>
        </Flex>
      ))}
    </Grid>
  );
};

export default Recommendations;