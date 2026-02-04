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
    recommendation: "Working with Andrea has been a game-changer for our team. Their expertise in modern web technologies and collaborative approach have significantly boosted our productivity.",
    author: "Jane Smith",
    role: "Project Manager",
    company: "Innovatech",
    url: "https://innovatech.com",
  },
  {
    recommendation: "It was clear that shaping a design system together with others is something she is particularly passionate about.",
    author: "Martin Lysell",
    role: "Senior Developer",
    company: "SAS",
    url: "https://sas.se",
  },
  {
    recommendation: "Working with Andrea has been a game-changer for our team. Their expertise in modern web technologies and collaborative approach have significantly boosted our productivity.",
    author: "Jane Smith",
    role: "Project Manager",
    company: "Innovatech",
    url: "https://innovatech.com",
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
                {rec.recommendation}
              </BlockQuote>
            ))}
          </AutoScroll>
        </div>
      </div>
    </Column>
  );
};

export default Recommendations;