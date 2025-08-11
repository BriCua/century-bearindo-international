import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../sanityClient";
import AnimatedContent from "./animations/AnimatedContent";

export default function HighlightsCards() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(_createdAt desc)[0...3]{
          _id,
          title,
          slug,
          mainImage{
            asset->{
              url
            }
          }
        }`
      )
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Gagal memuat highlights.');
        setLoading(false);
      });
  }, []);

  return (
    <section
      style={{
        background: '#e60000',
        padding: '3rem 0 2.5rem 0',
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={1}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.2}
        delay={0.15}
      >
        <h2
          style={{
            fontSize: '2.1rem',
            fontWeight: 700,
            color: 'white',
            marginBottom: '2rem',
            textAlign: 'center',
            letterSpacing: '-1px',
          }}
        >
          Highlight Terbaru
        </h2>
      </AnimatedContent>
      <div
        className="highlights-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          maxWidth: 1200,
          width: '100%',
          justifyItems: 'center',
        }}
      >
        {loading ? (
          <div style={{ gridColumn: '1/-1', textAlign: 'center', color: 'white', fontSize: '1.2rem' }}>
            Memuat highlights...
          </div>
        ) : error ? (
          <div style={{ gridColumn: '1/-1', textAlign: 'center', color: 'white', fontSize: '1.2rem' }}>{error}</div>
        ) : posts.length === 0 ? (
          <div style={{ gridColumn: '1/-1', textAlign: 'center', color: 'white', fontSize: '1.2rem' }}>
            Belum ada highlight.
          </div>
        ) : (
          posts.map((post, idx) => (
            <AnimatedContent
              key={post._id}
              distance={80}
              direction="vertical"
              reverse={false}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={0.15 * (idx + 1)}
            >
              <Link
                to={`/highlights/${post.slug.current}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'white',
                  borderRadius: 12,
                  overflow: 'hidden',
                  textDecoration: 'none',
                  color: '#222',
                  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.04)',
                  transition: 'box-shadow 0.2s',
                  minHeight: 340,
                  width: '100%',
                  maxWidth: 350,
                  alignItems: 'center',
                }}
                className="highlight-card"
              >
                <img
                  src={post.mainImage?.asset?.url}
                  alt={post.title}
                  style={{
                    width: '100%',
                    height: 180,
                    objectFit: 'cover',
                    background: '#eee',
                  }}
                />
                <div
                  style={{
                    padding: '1.25rem 1rem 1rem 1rem',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      marginBottom: 10,
                      color: '#e60000',
                      textAlign: 'left',
                    }}
                  >
                    {post.title}
                  </h3>
                  <div style={{ marginTop: 'auto', textAlign: 'right' }}>
                    <span style={{ color: '#e60000', fontWeight: 500, fontSize: '0.97rem' }}>
                      Baca Selengkapnya →
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedContent>
          ))
        )}
      </div>
      <style>{`
        @media (max-width: 900px) {
          .highlights-grid .highlight-card {
            max-width: 100% !important;
          }
          .highlights-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .highlights-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
