
import { useState, useEffect } from 'react';
import sanityClient from '../../sanityClient';
import BlogPostCard from '../../components/BlogPostCard';
import '../../partials/blog/card.css';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          publishedAt,
          excerpt,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          "name": author->name,
        }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <title>Blog - PT. Century Bearindo International</title>
      <meta name="description" content="Baca artikel terbaru dari PT. Century Bearindo International mengenai industri, produk, dan layanan kami."/>
      <meta name="keywords" content="blog, artikel, berita, informasi, industri, bearing" />
      <div className=" mt-16 mb-16">
        <h1>Blog</h1>
        <div className="post-list flex justify-self-center justify-center flex-wrap gap-2">
          {posts.map(post => (
            <BlogPostCard key={post.slug.current} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}

