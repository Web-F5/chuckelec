import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { client, urlFor } from "@/lib/sanity";

export const revalidate = 60;

type Post = {
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  mainImage?: { asset: object; alt?: string };
  body?: import("@portabletext/types").PortableTextBlock[];
};

async function getPost(slug: string): Promise<Post | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      title, slug, publishedAt, excerpt, mainImage, body
    }`,
    { slug }
  );
}

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(
    `*[_type == "post"]{ "slug": slug.current }`
  );
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <>
      <section className="bg-[#2a4861] text-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#f5b840] font-display font-bold text-sm tracking-widest uppercase mb-3">
            {new Date(post.publishedAt).toLocaleDateString("en-AU", {
              day: "numeric", month: "long", year: "numeric",
            })}
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl">{post.title}</h1>
        </div>
      </section>

      <article className="bg-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {post.mainImage && (
            <div className="relative w-full h-72 mb-8 rounded overflow-hidden">
              <Image
                src={urlFor(post.mainImage).width(900).height(500).url()}
                alt={post.mainImage.alt ?? post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {post.body && (
            <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-[#2a4861] prose-a:text-[#f5b840]">
              <PortableText value={post.body} />
            </div>
          )}
        </div>
      </article>
    </>
  );
}
