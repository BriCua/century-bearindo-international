import { useState, useEffect } from "react";
import sanityClient from "../../sanityClient";
import HighlightPostCard from "../../components/HighlightsPostCard";
import "../../partials/highlights/card.css";
import AnimatedContent from "../../components/animations/AnimatedContent";

export default function HighlightPage() {
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
      <title>Highlights - PT. Century Bearindo International</title>
      <meta
        name="description"
        content="Baca artikel terbaru dari PT. Century Bearindo International mengenai industri, produk, dan layanan kami."
      />
      <meta
        name="keywords"
        content="Highlight, artikel, berita, informasi, industri, bearing"
      />
      <div className=" mt-16 mb-16">
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={true}
          duration={1.5}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.2}
          delay={0.5}
        >
        <div className="items-center flex-col group w-fit justify-self-center origin-center mb-12">
            <h1 className="def-ease-out  group-hover:tracking-[0.15em] ">Highlights</h1>
            <hr className="line def-ease-out group-hover:scale-x-500"></hr>
          </div>
        </AnimatedContent>
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
        <div className="post-list flex justify-self-center justify-center flex-wrap gap-2">
          {posts.map((post) => (
            <HighlightPostCard key={post.slug.current} post={post} />
          ))}
        </div>
        </AnimatedContent>
      </div>
    </>
  );
}
