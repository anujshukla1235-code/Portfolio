import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";

const rootDirectory = path.join(process.cwd(), "content", "projects");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
  [key: string]: any;
};

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);

  const { content: mdxContent } = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: "github-dark",
            },
          ],
        ],
      },
    },
    // components: { ...custom components }
  });

  return {
    meta: { ...data, slug: realSlug } as PostMeta,
    content: mdxContent,
  };
}

export async function getAllPosts(): Promise<PostMeta[]> {
  if (!fs.existsSync(rootDirectory)) {
    return [];
  }
  
  const files = fs.readdirSync(rootDirectory);
  
  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(rootDirectory, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);
      return { ...data, slug: file.replace(/\.mdx$/, "") } as PostMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
  return posts;
}
