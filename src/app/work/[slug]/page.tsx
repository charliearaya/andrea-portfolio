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
        <Link href="/work">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5m6-6-6 6 6 6" />
          </svg>
          <span>Selected work</span>
        </Link>
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
          <p className={styles.projectName}>
            {post.metadata.projectName || post.metadata.title}
          </p>
          <h1 className={styles.title}>
            {post.metadata.introHeadline || post.metadata.description || post.metadata.title}
          </h1>
        </div>
        <div className={styles.introNarrative}>
          {(post.metadata.intro || [post.metadata.summary]).map((paragraph, index) => (
            <p key={index} className={styles.lead}>{paragraph}</p>
          ))}
          <dl className={styles.introDetails}>
            <div>
              <dt>{["flow", "brides-unite", "youse"].includes(post.slug) ? "Project" : "Client"}</dt>
              <dd>{post.metadata.clientName || post.metadata.title}</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>
                {post.metadata.projectDetails?.role ||
                  post.metadata.subheading.split(/[·•]/).slice(1).join(" · ").trim()}
              </dd>
            </div>
            <div>
              <dt>Year</dt>
              <dd>{post.metadata.projectDetails?.timeline || post.metadata.publishedAt.slice(0, 4)}</dd>
            </div>
          </dl>
        </div>
      </header>
      <div className={styles.content}>
        <article className={styles.article}>
          <CustomMDX source={post.content} />
        </article>
      </div>
      <div className={styles.next}>
        <Column fillWidth gap="40" horizontal="center">
          <Heading as="h2" variant="heading-strong-xl">Next projects</Heading>
          <Projects current={post.slug} nextOnly editorial />
        </Column>
      </div>
      <ScrollToHash />
    </div>
  );
}
