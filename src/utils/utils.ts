import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { ProjectDetails } from "@/components/work/ProjectSummary";

type Metadata = {
  title: string;
  subtitle?: string;
  publishedAt: string;
  summary: string;
  description: string;
  subheading: string;
  image?: string;
  images: string[];
  tag?: string;
  link?: string;
  projectDetails?: ProjectDetails;
};

import { notFound } from "next/navigation";

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    notFound();
  }

  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);

  const metadata: Metadata = {
    title: data.title || "",
    subtitle: data.subtitle || "",
    publishedAt: data.publishedAt,
    summary: data.summary || "",
    description: data.description || "",
    subheading: data.subheading || "",
    image: data.image || "",
    images: data.images || [],
    tag: data.tag || [],
    link: data.link || "",
    projectDetails: data.projectDetails,
  };

  return { metadata, content };
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPosts() {
  const postsDir = path.join(process.cwd(), "src", "app", "work", "projects");
  return getMDXData(postsDir);
}
