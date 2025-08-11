import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import FadeContent from "../components/animations/FadeContent";
import AnimatedContent from "../components/animations/AnimatedContent";
import { Link } from "react-router-dom";
import FlipCard from "../components/animations/FlipCard";
import FlipGrid from "../components/animations/FlipGrid";
import sanityClient from "../sanityClient";
import useViewport from "../utils/useViewport";

// import { Tooltip } from "flowbite-react";
//import InfiniteScroll from '../InfiniteScroll';

export default function Beranda() {
  const carouselImages = [
    `${import.meta.env.BASE_URL}carousel/carousel-1.png`,
    /* `${import.meta.env.BASE_URL}carousel/carousel-2.png`, */
    `${import.meta.env.BASE_URL}carousel/carousel-3.png`,
    `${import.meta.env.BASE_URL}carousel/carousel-4.png`,
    `${import.meta.env.BASE_URL}carousel/carousel-5.png`,
  ];
  const [products, setProducts] = useState([]);
  const [posts, setPosts] = useState([]);
  const { width } = useViewport();
  const [carouselIndex, setcarouselIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "product"] | order(_createdAt asc){
          _id,
          name,
          "images": images[0].asset->url,
          desc
        }`
      )
      .then((data) => setProducts(data))
      .catch(console.error);

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
          },
          excerpt
        }`
      )
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error("Gagal memuat highlights:", error);
      });
  }, []);

  const changecarousel = (newIndex) => {
    setFade(false);
    setTimeout(() => {
      setcarouselIndex(newIndex);
      setFade(true);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changecarousel((carouselIndex + 1) % carouselImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [carouselIndex, carouselImages.length]);

  useEffect(() => {
    const floatElements = document.querySelectorAll(".float");
    floatElements.forEach((el) => {
      const delay = Math.random() * 2; // 0 - 2 seconds
      el.style.animationDelay = `${delay}s`;
    });
  }, []);

  return (
    <>
      <figure
        id="carousel-container"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          let x;
          if (e.touches && e.touches.length) {
            x = e.touches[0].clientX;
          } else {
            x = e.clientX;
          }
          const relX = x - rect.left;
          const width = rect.width;
          if (relX < width * 0.1) {
            changecarousel(
              (carouselIndex - 1 + carouselImages.length) %
                carouselImages.length
            );
          } else if (relX > width * 0.9) {
            changecarousel((carouselIndex + 1) % carouselImages.length);
          }
        }}
        style={{ touchAction: "manipulation" }}
      >
        <img
          src={carouselImages[carouselIndex]}
          alt=""
          className={fade ? "fade-in" : "fade-out"}
          style={{ width: "100%" }}
          id="carousel"
        />
        {/* Left Arrow */}
        <button
          className="carousel-arrow left "
          onClick={(e) => {
            e.stopPropagation();
            changecarousel(
              (carouselIndex - 1 + carouselImages.length) %
                carouselImages.length
            );
          }}
          aria-label="Previous"
        >
          <Icon icon="line-md:chevron-small-left" className="w-6 h-6" />
        </button>
        {/* Right Arrow */}
        <button
          className="carousel-arrow right"
          onClick={(e) => {
            e.stopPropagation();
            changecarousel((carouselIndex + 1) % carouselImages.length);
          }}
          aria-label="Next"
        >
          <Icon icon="line-md:chevron-small-right" className="w-6 h-6" />
        </button>
        {/* Dots */}
        <div className="carousel-dots">
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot${
                idx === carouselIndex ? " active" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                changecarousel(idx);
              }}
              aria-label={`Go to carousel ${idx + 1}`}
            />
          ))}
        </div>
      </figure>
      <section className="desc-space" id="tentang-section">
        <div className="desc-content">
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
            className="desc-image-container"
          >
            <img
              src={`${import.meta.env.BASE_URL}identity/about.webp`}
              className="desc-image"
            />
          </FadeContent>
          <div className="desc-text">
            <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={false}
              duration={1.5}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={0.25}
            >
              <h1 className="desc-title ">
                Distributor Bearings Resmi di Surabaya - Jawa Timur
              </h1>
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
              delay={0.25}
            >
              <p className="desc-p">
                PT Century Bearindo International adalah perusahaan distribusi
                bearing, power transmission, dan komponen industri ternama,
                menyediakan produk merek dunia berkualitas tinggi untuk berbagai
                sektor seperti manufaktur, otomotif, pertambangan, pertanian,
                dan kelautan, didukung jaringan distribusi luas, tim
                berpengalaman, harga kompetitif, serta layanan purna jual andal.
                <strong className="mt-2">- Sejak tahun 2003</strong>
              </p>
            </AnimatedContent>
            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              duration={1}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={0}
            >
              <div className="flex justify-end">
                <Link to="/tentang" className="read-more">
                  Baca Selengkapnya
                </Link>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>
      <section className="showcase overflow-hidden"id="produk-section">
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={1}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.2}
          delay={0.25}
        >
          <Link to="/produk" className="showcase-title-container">
            <h2 className="showcase-title"> Produk Unggulan </h2>
            <hr className="line" />
          </Link>
        </AnimatedContent>
        <br />

        <FadeContent
          blur={true}
          duration={500}
          easing="ease-out"
          initialOpacity={0}
          className="card-container"
        >
          {products.map((product) => (
            <Link
              to={`/produk?open=${product._id}`}
              className="card float w-64"
              key={product._id}
            >
              <div className="card-details">
                <img
                  src={product.images}
                  className="card-img"
                  alt={product.name}
                />
                <hr className="border-solid" />
                <p className="card-title">{product.name}</p>
              </div>
              <button className="card-button">Selengkapnya</button>
            </Link>
          ))}
        </FadeContent>
      </section>
      <section className="services "id="layanan-section">
        <div className="services-desc">
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
            delay={0.25}
            
          >
            <Link to="/layanan" className="services-title-container">
              <div className="decor-vert mr-4 origin-left "></div>
              <h2 className="services-title">Layanan Kami</h2>
              <hr className="line" />
            </Link>
          </AnimatedContent>
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={true}
            duration={1.25}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={0.25}
          >
            <p className="desc-p">
              PT. Century Bearindo International menyediakan berbagai layanan
              komprehensif untuk melengkapi penawaran produknya.
            </p>
          </AnimatedContent>
        </div>
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={1.5}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.2}
          delay={0.25}
        >
          <FlipCard />
        </AnimatedContent>
      </section>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="mt-68"
      >
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={1}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.2}
          delay={0.25}
        >
          <Link to="/highlights" className="showcase-title-container">
            <h2 className="showcase-title">Highlights</h2>
            <hr className="line" />
          </Link>
        </AnimatedContent>
      </div>
      <section className="highlights-section" id="highlights-section">
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={1}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.2}
          delay={0.35}
        >
          <div className="highlights-grid">
            {posts
              .slice(0, width <= 768 ? 1 : width <= 1024 ? 2 : 3)
              .map((post) => (
                <Link
                  to={`/highlights/${post.slug.current}`}
                  key={post._id}
                  className="highlight-card"
                >
                  <img
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    className="highlight-card-image"
                  />
                  <div className="highlight-card-content">
                    <h3 className="highlight-card-title">{post.title}</h3>
                    <p
                      className="highlight-card-desc"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {post.excerpt}
                    </p>
                    <div className="highlight-card-readmore">
                      Baca Selengkapnya →
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </AnimatedContent>
      </section>
      <section className="partners overflow-hidden">
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
          delay={0.25}
        >
          <FlipGrid />
        </AnimatedContent>

        <div className="partners-desc">
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            duration={1.5}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={0.25}
          >
            <div className="partners-title-container group">
              <h2 className="partners-title">Mitra Kami</h2>
              <div className="decor-vert mr-0 ml-4 origin-right group-hover:scale-x-2000 group-hover:scale-y-75 " />
              <hr className="line" />
            </div>
          </AnimatedContent>
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={true}
            duration={1.25}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={0.25}
          >
            <p className="desc-p p-partners">
              20+ tahun pengalaman dalam kerja sama dengan mitra merek
              terpercaya.
            </p>
          </AnimatedContent>
        </div>
      </section>
    </>
  );
}
