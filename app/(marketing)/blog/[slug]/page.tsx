import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";
import { buildBlogPostingJsonLd } from "@/lib/blogSchema";
import { getBlogBySlugForStudiely } from "@/lib/blogs";
import { sanitizeBlogHtml } from "@/lib/security/sanitize-html";
import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";
import { buildBreadcrumbSchema } from "@/lib/seo";
import "../blog-content.module.css";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const dynamicParams = true;

const getStudielyBlogBySlug = cache(async (slug: string) => {
  const post = await getBlogBySlugForStudiely(slug);
  if (!post) return null;
  return post;
});

const formatDate = (value: string | null) => {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!slug) return { title: "Blog Post" };

  const blog = await getStudielyBlogBySlug(slug);
  if (!blog) return { title: "Blog Post" };

  const title = blog.meta_title || blog.title;
  const description =
    blog.meta_description ||
    blog.description ||
    "A Studiely blog article about smarter studying and AI-powered learning.";

  const canonical = `${SITE_URL}/blog/${blog.slug}`;
  const ogImage = blog.cover_image_url
    ? [{ url: blog.cover_image_url, alt: blog.title }]
    : [{ url: DEFAULT_OG_IMAGE_PATH, alt: "Studiely" }];

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title,
      description,
      url: canonical,
      siteName: "Studiely",
      locale: "en_US",
      publishedTime: blog.date_published
        ? new Date(blog.date_published).toISOString()
        : undefined,
      modifiedTime: blog.date_modified
        ? new Date(blog.date_modified).toISOString()
        : undefined,
      images: ogImage,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage.map((i) => i.url),
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  if (!slug) return notFound();

  const blog = await getStudielyBlogBySlug(slug);
  if (!blog) {
    if (slug !== "coming-soon") return notFound();
    const breadcrumbSchema = buildBreadcrumbSchema("Coming soon", "/blog/coming-soon");
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        <main className="min-h-screen bg-bg-base font-jakarta">
          <section className="pb-8 pt-[clamp(0.75rem,2vw,1.25rem)]">
            <div className="wrap">
              <div
                className="rounded-[32px] px-6 py-12 sm:rounded-[40px] sm:px-10 md:px-14"
                style={{ backgroundColor: BLUE }}
              >
                <span
                  className="mb-5 inline-flex rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1E1B4B]"
                  style={{ backgroundColor: LIME }}
                >
                  Studiely Blog
                </span>
                <h1 className="mb-4 font-hanken text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-white">
                  Coming soon
                </h1>
                <p className="m-0 max-w-[560px] text-[15px] leading-[1.75] text-white/85">
                  New Studiely articles will appear here once they are published.
                </p>
              </div>
            </div>
          </section>
          <div className="wrap pb-12">
            <article className="mx-auto max-w-[900px] rounded-[28px] bg-white p-6 shadow-[0_12px_36px_rgba(30,27,75,0.08)] sm:rounded-[32px] md:p-10">
              <p className="text-[#5B5A6A]">We’re working on new content. Check back soon.</p>
              <Link href="/blog" className="funky-link font-bold text-[#4F35F2]">
                View all articles →
              </Link>
            </article>
          </div>
        </main>
      </>
    );
  }

  const jsonLd = buildBlogPostingJsonLd(blog);
  const breadcrumbSchema = buildBreadcrumbSchema(blog.title, `/blog/${blog.slug}`);
  const published = formatDate(blog.date_published);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <main className="min-h-screen overflow-x-clip bg-bg-base font-jakarta">
        <section className="pb-[clamp(1.25rem,3vw,2rem)] pt-[clamp(0.75rem,2vw,1.25rem)]">
          <div className="wrap">
            <div
              className="relative overflow-hidden rounded-[28px] px-5 py-5 text-center sm:rounded-[32px] sm:px-8 sm:py-6 md:px-10"
              style={{ backgroundColor: BLUE }}
            >
              <div className="relative z-[1] w-full">
                <div className="mb-3 flex w-full items-center justify-between gap-4">
                  <span
                    className="inline-flex shrink-0 rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[#1E1B4B] sm:text-[11px]"
                    style={{ backgroundColor: LIME }}
                  >
                    {blog.category?.name || "Studiely Blog"}
                  </span>
                  {published && (
                    <span className="shrink-0 text-right text-[12px] font-semibold text-white/70 sm:text-[13px]">
                      {published}
                    </span>
                  )}
                </div>

                <h1 className="mx-auto mb-3 w-full max-w-none font-hanken text-[clamp(1.65rem,4vw,2.75rem)] font-extrabold leading-[1.1] tracking-[-0.035em] text-white">
                  {blog.title}
                </h1>
                <div className="mt-3 flex w-full items-start justify-between gap-6">
                  <p className="m-0 flex-1 text-left text-[13px] leading-[1.65] text-white/85 sm:text-[14px]">
                    {blog.description ||
                      "A Studiely blog article on smarter studying, exam strategies, and AI-powered learning."}
                  </p>
                  {blog.author_name && (
                    <p className="mb-0 shrink-0 whitespace-nowrap text-right text-[12px] font-semibold text-white/65 sm:text-[13px]">
                      By {blog.author_name}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="wrap pb-[clamp(3rem,6vw,5rem)]">
          <article className="mx-auto w-full max-w-[1200px] overflow-hidden rounded-[24px] bg-white px-4 py-7 text-[15px] leading-[1.8] text-[#2D2D35] shadow-[0_14px_40px_rgba(30,27,75,0.08)] sm:rounded-[28px] sm:px-7 sm:py-9 sm:text-[16px] md:rounded-[32px] md:px-10 md:py-11 lg:px-14">
            {blog.content ? (
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{
                  __html: sanitizeBlogHtml(blog.content),
                }}
              />
            ) : (
              <p className="font-jakarta text-[13px] text-[#5B5A6A]">
                Content for this article has not been added yet.
              </p>
            )}

            {blog.cover_image_url ? (
              <figure className="not-prose mx-auto mt-10 max-w-[min(100%,520px)] overflow-hidden rounded-[16px] shadow-[0_8px_24px_rgba(30,27,75,0.08)] sm:max-w-[560px] sm:rounded-[20px]">
                <Image
                  src={blog.cover_image_url}
                  alt={blog.title}
                  width={560}
                  height={315}
                  unoptimized
                  sizes="(max-width: 640px) 100vw, 560px"
                  className="block h-auto w-full max-w-full"
                />
              </figure>
            ) : null}

            <nav
              className="not-prose mt-10 border-t border-[#ECEEF6] pt-8"
              aria-label="Related pages"
            >
              <Link
                href="/blog"
                className="funky-button inline-flex items-center justify-center rounded-full px-5 py-3 text-[13px] font-bold text-white sm:text-[14px]"
                style={{ backgroundColor: BLUE }}
              >
                ← Back to all articles
              </Link>
            </nav>
          </article>
        </div>
      </main>
    </>
  );
}
