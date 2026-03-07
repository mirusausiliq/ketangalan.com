// API layer - designed for easy migration to Strapi
// Currently reads from local data, but structure supports API fetching

import { posts, type BlogPost } from '@/data/posts';

// For future Strapi integration, replace these with fetch calls to:
// - /api/posts
// - /api/posts/:slug
// - /api/research
// - /api/resources

export const api = {
  // Blog posts
  async getPosts(): Promise<BlogPost[]> {
    // TODO: Replace with fetch('/api/posts')
    return Promise.resolve(posts);
  },

  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    // TODO: Replace with fetch(`/api/posts/${slug}`)
    const post = posts.find(p => p.slug === slug);
    return Promise.resolve(post || null);
  },

  async getFeaturedPosts(limit: number = 3): Promise<BlogPost[]> {
    // TODO: Replace with fetch(`/api/posts?featured=true&limit=${limit}`)
    const featured = posts
      .filter(p => p.featured)
      .slice(0, limit);
    return Promise.resolve(featured);
  },

  async getPostsByCategory(category: string): Promise<BlogPost[]> {
    // TODO: Replace with fetch(`/api/posts?category=${category}`)
    const filtered = posts.filter(p => p.category === category);
    return Promise.resolve(filtered);
  },

  // Research data (placeholder for future implementation)
  async getResearchProjects() {
    // TODO: Implement research projects fetching
    return Promise.resolve([]);
  },

  // Resources data (placeholder for future implementation)
  async getResources() {
    // TODO: Implement resources fetching
    return Promise.resolve([]);
  },
};
