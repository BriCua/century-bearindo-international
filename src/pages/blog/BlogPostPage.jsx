import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // In a real application, you would fetch the post content from an API or a markdown file
    // For now, we'll use dummy content
    const dummyPost = {
      frontmatter: {
        title: `Title for ${slug}`,
        date: '2025-07-12',
      },
      content: `This is the full content for the blog post with slug: **${slug}**.`
    };
    setPost(dummyPost);
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <title>{post.frontmatter.title} - PT. Century Bearindo International</title>
      <meta name="description" content={`Baca artikel terbaru dari PT. Century Bearindo International: ${post.frontmatter.title}`}/>
      <div className="container">
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </>
  );
}
