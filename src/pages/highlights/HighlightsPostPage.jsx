import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../sanityClient";
import { PortableText } from "@portabletext/react";
import { formatDate } from "../../utils/date";
import "../../partials/highlights/post.css";
import AnimatedContent from "../../components/animations/AnimatedContent";
import SkeletonLoader from "../../components/animations/SkeletonLoader";

const ptComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold my-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold my-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold my-4">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold my-4">{children}</h4>,
    normal: ({ children }) => <p className="text-lg my-4 text-justify">{children}</p>,
    blockquote: ({ children }) => <blockquote className="border-l-4 border-gray-500 pl-4 my-4">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside my-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside my-4">{children}</ol>,
  },
};

export default function HighlightsPostPage() {
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
    return <SkeletonLoader />;
  }

  return (
    <>
      <title>{post.title} - PT. Century Bearindo International</title>
      <meta
        name="description"
        content={`Baca artikel terbaru dari PT. Century Bearindo International: ${post.title}`}
      />
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        duration={1.5}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.2}
        delay={0.5}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-left mb-4">{post.title}</h1>
            <p className="text-gray-500 text-sm mb-8">{formatDate(post.publishedAt)}</p>
            {post.mainImage && (
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
                className="rounded-2xl shadow-lg mb-8"
              />
            )}
            <h5 className="text-xl font-bold mb-4">{post.excerpt}</h5>
            <PortableText value={post.body} components={ptComponents} />
          </div>
        </div>
      </AnimatedContent>
    </>
  );
}
