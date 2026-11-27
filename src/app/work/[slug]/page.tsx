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
import { ProjectSummary } from "@/components/work/ProjectSummary";
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
      {post.slug === "sas" ? (
        <>
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
              <p className={styles.projectName}>SAS – Scandinavian Airlines</p>
              <h1 className={styles.title}>One brand. A more connected digital experience.</h1>
              <p className={styles.lead}>
                Translating a new brand identity into a cohesive digital experience, from shared
                design system foundations to customer-facing travel services.
              </p>
            </div>
            {post.metadata.projectDetails && (
              <dl className={styles.introDetails}>
                <div>
                  <dt>Client</dt>
                  <dd>Scandinavian Airlines</dd>
                </div>
                <div>
                  <dt>Period</dt>
                  <dd>{post.metadata.projectDetails.timeline}</dd>
                </div>
                <div>
                  <dt>Role</dt>
                  <dd>{post.metadata.projectDetails.role}</dd>
                </div>
                <div>
                  <dt>Scope</dt>
                  <dd>{post.metadata.projectDetails.scope}</dd>
                </div>
                <div>
                  <dt>Collaboration</dt>
                  <dd>{post.metadata.projectDetails.team}</dd>
                </div>
              </dl>
            )}
          </header>
        </>
      ) : (
        <>
          <header className={styles.hero}>
            <div className={styles.heroInner}>
              <div className={styles.heroTop}>
                <Link href="/work">← Selected work</Link>
                <span>{post.metadata.projectDetails?.timeline || post.metadata.subheading}</span>
              </div>
              <p className={styles.eyebrow}>{post.metadata.title}</p>
              <h1 className={styles.title}>
                {post.metadata.description || post.metadata.title}
              </h1>
              <p className={styles.lead}>
                {post.metadata.summary}
              </p>
            </div>
          </header>
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
        </>
      )}
      <div className={styles.content}>
        {post.slug !== "sas" && post.metadata.projectDetails && (
          <ProjectSummary details={post.metadata.projectDetails} />
        )}
        <article className={styles.article}>
          <CustomMDX source={post.content} />
        </article>
      </div>
      <div className={styles.next}>
        <Column fillWidth gap="40" horizontal="center">
          <Heading as="h2" variant="heading-strong-xl">Next project</Heading>
          <Projects current={post.slug} nextOnly />
        </Column>
      </div>
      <ScrollToHash />
    </div>
  );
}
