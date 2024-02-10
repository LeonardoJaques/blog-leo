import path from "node:path";
import fs from "node:fs/promises";
import matter from "gray-matter";

export interface Post {
  metadata: {
    date: string;
    url: string;
    excerpt: string;
    tags: string[];
  }
  slug: string; // identificador único do post
  title: string;
  content: string;
}
export default function PostsService() {
  return {
    async getAll(): Promise<Post[]> {
      const PATH_POSTS = path.resolve('.', '_data', 'posts');
      const POST_FILES = await fs.readdir(PATH_POSTS, { encoding: 'utf-8' });
      const postsPromise = POST_FILES.map(async (postFileName) => {
        const filePath = path.resolve(PATH_POSTS, postFileName);
        const postFile = await fs.readFile(filePath, { encoding: 'utf-8' });
        const { data, content } = matter(postFile);
        const post: Post = {
          metadata: {
            date: new Date(data.date).toISOString(),
            url: data.url,
            excerpt: data.excerpt,
            tags: data.tags,
          },
          slug: postFileName.replace('.md', ''),
          title: data.title,
          content,
        }
        return post;
      });
      const posts = Promise.all(postsPromise);
      return posts;
    }
  }
}
