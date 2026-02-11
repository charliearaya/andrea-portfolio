import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
  current?: string;
  nextOnly?: boolean;
}

export function Projects({ range, exclude, current, nextOnly }: ProjectsProps) {
  const allProjects = getPosts(["src", "app", "work", "projects"])
    .filter((post) => !exclude?.includes(post.slug))
    .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime());

  let displayedProjects = allProjects;
  
  if (nextOnly) {
    const currentIndex = allProjects.findIndex((post) => post.slug === current);
    displayedProjects = [allProjects[(currentIndex + 1) % allProjects.length]];
  } else if (range) {
    displayedProjects = allProjects.slice(range[0] - 1, range[1] ?? allProjects.length);
  }

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
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
}
