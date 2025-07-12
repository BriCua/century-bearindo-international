import { useState, useEffect } from 'react';
import BlogPostCard from '../../components/BlogPostCard';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // In a real application, you would fetch the list of posts from an API
    // For now, we'll use a dummy list
    const dummyPosts = [
      {
        slug: 'post-1',
        frontmatter: {
          title: 'First Blog Post',
          excerpt: 'This is the excerpt for the first blog post.',
          date: '2025-07-12',
          thumbnail: 'https://via.placeholder.com/150'
        }
      },
      {
        slug: 'post-2',
        frontmatter: {
          title: 'Second Blog Post',
          excerpt: 'This is the excerpt for the second blog post.',
          date: '2025-07-13',
          thumbnail: 'https://via.placeholder.com/150'
        }
      }
    ];
    setPosts(dummyPosts);
  }, []);

  return (
    <>
      <title>Blog - PT. Century Bearindo International</title>
      <meta name="description" content="Baca artikel terbaru dari PT. Century Bearindo International mengenai industri, produk, dan layanan kami."/>
      <meta name="keywords" content="blog, artikel, berita, informasi, industri, bearing" />
      <div className="container">
        <h1>Blog</h1>
        <div className="post-list">
          {posts.map(post => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
