
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../../sanityClient';
import { PortableText } from '@portabletext/react';
import { formatDate } from '../../utils/date';
import '../../partials/blog/post.css';

const ptComponents = {
  block: {
    // Ex-level scope render
    normal: ({children}) => <p className="portable-text-paragraph">{children}</p>,
  },
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post" && slug.current == $slug][0]{
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
          body,
          "name": author->name,
        }`,
        { slug }
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <title>{post.title} - PT. Century Bearindo International</title>
      <meta name="description" content={`Baca artikel terbaru dari PT. Century Bearindo International: ${post.title}`}/>
      <div className="justify-self-center w-7/8 mt-16 mb-16">
        <h1>{post.title}</h1>
        <p className="post-date">{formatDate(post.publishedAt)}</p>
        {post.mainImage && <img src={post.mainImage.asset.url} alt={post.title} />}
        <h5 className='post-excerpt'>{post.excerpt}</h5>
        <PortableText value={post.body} components={ptComponents} />
      </div>
    </>
  );
}

