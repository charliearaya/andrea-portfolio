"use client";

import { useEffect, useState } from "react";

import {
  Badge,
  Carousel,
  Column,
  Flex,
  Heading,
  Text,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  ctaText?: string;
  autoScroll?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  ctaText,
  description,
  autoScroll = false,
}) => {
  const [canAutoScroll, setCanAutoScroll] = useState(!autoScroll || images.length < 2);

  useEffect(() => {
    if (!autoScroll || images.length < 2) {
      setCanAutoScroll(true);
      return;
    }

    let cancelled = false;

    const preloadImage = (src: string) =>
      new Promise<void>((resolve) => {
        const image = new window.Image();

        image.onload = () => resolve();
        image.onerror = () => resolve();
        image.src = src;
      });

    const prepareCarousel = async () => {
      await preloadImage(images[0]);
      await preloadImage(images[1]);

      if (!cancelled) {
        setCanAutoScroll(true);
      }

      void Promise.all(images.slice(2).map(preloadImage));
    };

    setCanAutoScroll(false);
    void prepareCarousel();

    return () => {
      cancelled = true;
    };
  }, [autoScroll, images]);

  return (
    <Column fillWidth gap="xs" radius="m" overflow="hidden">
      {/* TODO: Change with swiper? */}
      <Carousel
        className="carousel-fix"
        play={autoScroll && canAutoScroll ? { auto: true, interval: 5500, controls: true } : undefined}
        aspectRatio="16/9"
        indicator="line"
        sizes="(max-width: 960px) 100vw, 960px"
        items={images.map((image) => ({
          slide: image,
          alt: title,
        }))}
      />
      <Flex
        xs={{ direction: "column", horizontal: "center" }}
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        {title && (
          <Flex flex={5}>
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          </Flex>
        )}
        {(description?.trim() || content?.trim()) && (
          <Flex direction="column" flex={7} gap="16" xs={{ direction: "column", horizontal: "center" }}>
            {description?.trim() && (
              <Text variant="body-default-m" onBackground="neutral-weak">
                {description}
              </Text>
            )}
            <Flex gap="24" wrap>
              {content?.trim() && (
                <Badge
                  id={`badge-${String(href).split("/").pop() ?? "project"}`}
                  title={ctaText || "View project"}
                  arrow
                  href={href}
                  effect={false}
                  borderWidth={2}
                  border="brand-alpha-strong"
                  background="transparent"
                />
              )}
            </Flex>
          </Flex>
        )}
      </Flex>
    </Column>
  );
};
