import { getPosts } from "@/utils/utils";
import { EditorialProjectCard } from "./EditorialProjectCard";
import styles from "./EditorialProjectCard.module.scss";
import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
  current?: string;
  nextOnly?: boolean;
  editorial?: boolean;
}

export function Projects({ range, exclude, current, nextOnly, editorial }: Readonly<ProjectsProps>) {
  const allProjects = getPosts()
    .filter((post) => !exclude?.includes(post.slug))
    .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime());

  let displayedProjects = allProjects;
  
  if (nextOnly) {
    const currentIndex = allProjects.findIndex((post) => post.slug === current);
    displayedProjects = [allProjects[(currentIndex + 1) % allProjects.length]];
  } else if (range) {
    displayedProjects = allProjects.slice(range[0] - 1, range[1] ?? allProjects.length);
  }

  if (editorial) {
    return (
      <div className={styles.gallery}>
        {displayedProjects.map((post, index) => (
          <EditorialProjectCard
            key={post.slug}
            href={`/work/${post.slug}`}
            title={post.metadata.title}
            headline={post.slug === "sas"
              ? "Building a cohesive digital experience for SAS."
              : post.metadata.description || post.metadata.title}
            category={post.metadata.projectDetails?.scope || post.metadata.subheading}
            image={post.metadata.images[0]}
            period={post.metadata.projectDetails?.timeline || post.metadata.publishedAt}
            priority={index === 0}
          />
        ))}
      </div>
    );
  }

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 1}
          key={post.slug}
          href={`/work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
        />
      ))}
    </Column>
  );
  // TODO: Add scroll to top
}
