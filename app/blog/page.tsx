import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { client, urlFor } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Electrical Blog | Tips & Advice from Central Victoria",
  description:
    "Electrical tips, safety advice, and industry news from the team at Chuck E Electrical — licensed electricians serving Central Victoria.",
};

export const revalidate = 60;

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  mainImage?: { asset: object; alt?: string };
};

async function getPosts(): Promise<Post[]> {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id, title, slug, publishedAt, excerpt, mainImage
    }`
  );
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <section className="bg-[#2a4861] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#f5b840] font-display font-bold text-sm tracking-widest uppercase mb-3">
            News & Advice
          </p>
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-4">
            ELECTRICAL BLOG
          </h1>
          <p className="text-[#a0bfd4] text-lg max-w-2xl">
            Electrical tips, safety advice, and updates from the team at Chuck E Electrical.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {posts.length === 0 ? (
            <p className="text-gray-500 text-lg">No posts yet — check back soon.</p>
          ) : (
            <div className="grid gap-8">
              {posts.map((post) => (
                <article key={post._id} className="border-b border-gray-200 pb-8 last:border-0">
                  <Link href={`/blog/${post.slug.current}`} className="group flex gap-6 items-start">
                    {post.mainImage && (
                      <div className="flex-shrink-0 w-40 h-28 relative overflow-hidden rounded">
                        <Image
                          src={urlFor(post.mainImage).width(320).height(224).url()}
                          alt={post.mainImage.alt ?? post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-gray-400 mb-1">
                        {new Date(post.publishedAt).toLocaleDateString("en-AU", {
                          day: "numeric", month: "long", year: "numeric",
                        })}
                      </p>
                      <h2 className="font-display font-bold text-2xl text-[#2a4861] group-hover:text-[#f5b840] transition-colors mb-2">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
                      )}
                      <span className="mt-2 inline-block text-[#f5b840] font-semibold text-sm">
                        Read more →
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
