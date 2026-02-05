import { AutoScroll, BlockQuote, Column, Flex, Grid, Text } from "@once-ui-system/core";
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
    recommendation: "It was clear that shaping a design system together with others is something she is particularly passionate about.",
    author: "Martin Lysell",
    role: "Senior Developer",
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
    recommendation: "The recommendations she provided were detailed and of a very high standard. Her positive energy and ability to understand our product made the whole progress smooth and succesful.",
    author: "Karlijn Korpershoek",
    role: "Client",
    company: "Potentialpark",
    url: "https://potentialpark.com",
  },
];

const Recommendations: React.FC<{}> = () => {
  return (
    <Column fillWidth horizontal="center">
      {/* <Grid fillWidth gap="24" columns={2}>
        {recommendations.map((rec, index) => (
          <Flex key={index} padding="16" border="neutral-medium" radius="m">
            <div
              key={index}
            >
              <Column gap="4">
                <Text variant="body-default-s" marginBottom="16">"{rec.recommendation}"</Text>
                <Text variant="body-strong-s">{rec.author}</Text>
                <Text variant="body-default-s" onBackground="neutral-medium">{rec.role}, {rec.company}</Text>
              </Column>
            </div>
          </Flex>
        ))}
      </Grid> */}

      <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <div
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <AutoScroll speed="slow">
            {recommendations.map((rec, index) => (
              <BlockQuote
                key={index}
                minWidth="xs"
                author={{
                  name: rec.author,
                  avatar: "/images/avatar_01.png",
                }}
                link={{
                  href: rec.url,
                  label: "Read more",
                }}
              >
                <Text variant="heading-default-l" marginBottom="16">"{rec.recommendation}"</Text>
              </BlockQuote>
            ))}
          </AutoScroll>
        </div>
      </div>
    </Column>
  );
};

export default Recommendations;