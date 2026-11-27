import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import {
  Meta,
  Schema,
  Column,
  Heading,
} from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { ScrollToHash, CustomMDX } from "@/components";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Projects } from "@/components/work/Projects";
import styles from "./CaseStudy.module.scss";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts();
  let post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: `Projects ● ${post.metadata.title}`,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
    path: `${work.path}/${post.slug}`,
  });
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  let post = getPosts().find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  // const avatars =
  //   post.metadata.team?.map((person) => ({
  //     src: person.avatar,
  //   })) || [];

  return (
    <div className={styles.page} data-project={post.slug}>
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.description}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={
          post.metadata.image || `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
        }
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <div className={styles.backLink}>
        <Link href="/work">← Selected work</Link>
      </div>
      {post.metadata.images.length > 0 && (
        <div className={styles.cover}>
          <Image
            src={post.metadata.images[0]}
            alt={`${post.metadata.title} project cover`}
            width={1600}
            height={1000}
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />
        </div>
      )}
      <header className={styles.imageFirstIntro}>
        <div className={styles.introStory}>
          <h1 className={styles.title}>
            {post.slug === "sas"
              ? "One brand. A more connected digital experience."
              : post.metadata.description || post.metadata.title}
          </h1>
          <p className={styles.lead}>
            {post.slug === "sas"
              ? "Translating a new brand identity into a cohesive digital experience, from shared design system foundations to customer-facing travel services."
              : post.metadata.summary}
          </p>
        </div>
        <dl className={styles.introDetails}>
          <div>
            <dt>{post.slug === "flow" || post.slug === "brides-unite" || post.slug === "youse" ? "Project" : "Client"}</dt>
            <dd>{post.slug === "sas" ? "Scandinavian Airlines" : post.metadata.title}</dd>
          </div>
          <div>
            <dt>Period</dt>
            <dd>{post.metadata.projectDetails?.timeline || post.metadata.subheading.split(/[·•]/)[0].trim() || post.metadata.publishedAt}</dd>
          </div>
          {post.metadata.projectDetails?.role && (
            <div>
              <dt>Role</dt>
              <dd>{post.metadata.projectDetails.role}</dd>
            </div>
          )}
          <div>
            <dt>Scope</dt>
            <dd>{post.metadata.projectDetails?.scope || post.metadata.subheading.split(/[·•]/).slice(1).join(" · ").trim()}</dd>
          </div>
          {post.metadata.projectDetails?.team && (
            <div>
              <dt>Collaboration</dt>
              <dd>{post.metadata.projectDetails.team}</dd>
            </div>
          )}
          {post.slug === "flow" && post.metadata.projectDetails?.context && (
            <div>
              <dt>Context</dt>
              <dd>{post.metadata.projectDetails.context}</dd>
            </div>
          )}
        </dl>
      </header>
      <div className={styles.content}>
        <article className={styles.article}>
          <CustomMDX source={post.content} />
        </article>
      </div>
      <div className={styles.next}>
        <Column fillWidth gap="40" horizontal="center">
          <Heading as="h2" variant="heading-strong-xl">Next project</Heading>
          <Projects current={post.slug} nextOnly editorial />
        </Column>
      </div>
      <ScrollToHash />
    </div>
  );
}
