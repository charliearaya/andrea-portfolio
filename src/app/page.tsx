import {
  Heading,
  Button,
  Avatar,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
} from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import { Connect, ProjectCard } from "@/components";
import AboutHero from "@/components/AboutHero";
import SkillsHero from "@/components/SkillsHero";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

const projectImages = [
  "/images/projects/sas/cover_01.webp",
  "/images/projects/youse/cover_01.webp",
  "/images/projects/exparang/cover_02.webp",
  "/images/projects/sas/cover_04.webp",
  "/images/projects/float/cover_03.webp",
  "/images/projects/sas/image_06.webp",
  "/images/projects/mcm/cover_01.webp",
  "/images/projects/sas/image_04.webp",
];

export default function Home() {

  // TODO: use FadingLettersFx?
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <Row
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </Row>
          )}
          <Row translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-m" style={{ lineHeight: 1.2 }}>
              {home.headline}
            </Heading>
          </Row>
          <Row paddingTop="12" horizontal="center" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
              style={{ borderWidth: "2px"}}
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Row>
            </Button>
          </Row>
        </Column>
      </Column>
      <ProjectCard
        key="projects-carousel"
        priority
        href="/work"
        images={projectImages}
        title="Selected product work"
        description="Shipped work across large-scale platforms, complex user journeys, and design systems used by cross-functional teams."
        content="there is content"
        ctaText="View all projects"
      />
      <AboutHero />
      <SkillsHero />
      {/* <Recommendations /> */}
      {/* <Projects range={[2]} /> */}
      <Connect />
    </Column>
  );
}
