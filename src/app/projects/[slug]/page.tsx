import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { format } from "date-fns";
import { Metadata } from "next";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const { meta } = await getPostBySlug(params.slug);
    return {
      title: `${meta.title} | Vrittant`,
      description: meta.description,
    };
  } catch (e) {
    return { title: "Not Found" };
  }
}

export default async function ProjectCaseStudy({ params }: { params: { slug: string } }) {
  try {
    const { meta, content } = await getPostBySlug(params.slug);

    return (
      <article className="max-w-3xl mx-auto prose dark:prose-invert prose-zinc lg:prose-lg py-16 px-6 lg:px-8">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-zinc-900 dark:text-zinc-50">{meta.title}</h1>
          <time className="text-zinc-500 text-sm font-medium">
            {meta.date ? format(new Date(meta.date), "MMMM yyyy") : ""}
          </time>
          {meta.tags && (
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {meta.tags.map((tag: string) => (
                <span 
                  key={tag} 
                  className="inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>
        <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800 mb-10"></div>
        <div className="mdx-content">
          {content}
        </div>
      </article>
    );
  } catch (error) {
    notFound();
  }
}
