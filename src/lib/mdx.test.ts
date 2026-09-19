import { describe, it, expect } from 'vitest';
import { getAllPosts, getPostBySlug } from './mdx';

describe('MDX Parser', () => {
  it('should fetch all posts and ensure they have required metadata', async () => {
    const posts = await getAllPosts();
    expect(posts.length).toBeGreaterThan(0);
    
    // Check first post has title and date
    expect(posts[0]).toHaveProperty('title');
    expect(posts[0]).toHaveProperty('date');
  });

  it('should get a specific post by slug correctly', async () => {
    const post = await getPostBySlug('01-purvabhas');
    
    expect(post.meta).toHaveProperty('title');
    expect(post.meta.title).toBe('Purvabhas: Demand Forecasting & Inventory Optimization');
    expect(post.content).toBeDefined();
  });

  it('should throw an error for non-existent slug', async () => {
    await expect(getPostBySlug('invalid-non-existent')).rejects.toThrow();
  });
});
