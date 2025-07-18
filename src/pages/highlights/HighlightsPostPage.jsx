import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../sanityClient";
import { PortableText } from "@portabletext/react";
import { formatDate } from "../../utils/date";
import "../../partials/highlights/post.css";
import FullScreenShrinker from "../../components/animations/FullScreenShrinker";
import AnimatedContent from "../../components/animations/AnimatedContent";

const ptComponents = {
  block: {
    // Ex-level scope render
    normal: ({ children }) => (
      <p className="portable-text-paragraph">{children}</p>
    ),
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
    return <div>Loading...</div>;
  }

  return (
    <>
      <title>{post.title} - PT. Century Bearindo International</title>
      <meta
        name="description"
        content={`Baca artikel terbaru dari PT. Century Bearindo International: ${post.title}`}
      />
      <div className="justify-self-center w-7/8 mt-16 mb-16 group">
        {/* <FullScreenShrinker/> */}
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
          <h1 className="text-center">{post.title}</h1>
        </AnimatedContent>
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={1.4}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.2}
          delay={0.6}
        >
        {post.mainImage && (
          <img
            src={post.mainImage.asset.url}
            alt={post.title}
            className="rounded-2xl justify-self-center mt-8 mb-2"
          />
        )}
        
        <figcaption className="post-date font-sans justify-self-center mb-6">{formatDate(post.publishedAt)}</figcaption>
        </AnimatedContent>
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            duration={1.25}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={0.75}
          >
            <h5 className="post-excerpt">{post.excerpt}</h5>
          </AnimatedContent>
        <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={0.8}
          >
        <PortableText value={post.body} components={ptComponents} />
        </AnimatedContent>
      </div>
    </>
  );
}
