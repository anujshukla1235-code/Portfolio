import RSS from 'rss';
import { getAllPosts } from '@/lib/mdx';

export async function GET() {
  const posts = await getAllPosts();

  const feed = new RSS({
    title: 'Vrittant - Anuj Shukla',
    description: 'Data Science & Machine Learning Portfolio of Anuj Shukla',
    site_url: 'https://anujshukla.com', // Update with actual domain
    feed_url: 'https://anujshukla.com/rss.xml',
    language: 'en',
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Anuj Shukla`,
  });

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description || '',
      url: `https://anujshukla.com/projects/${post.slug}`,
      date: post.date,
      categories: post.tags || [],
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
