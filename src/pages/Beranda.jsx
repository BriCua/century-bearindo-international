import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import FadeContent from "../FadeContent";
import AnimatedContent from "../AnimatedContent";
import { Link } from "react-router-dom";
// import { Tooltip } from "flowbite-react";
//import InfiniteScroll from '../InfiniteScroll';

export default function Beranda() {
  const carouselImages = [
    `${import.meta.env.BASE_URL}carousel/carousel-1.png`,
    `${import.meta.env.BASE_URL}carousel/carousel-2.png`,
    `${import.meta.env.BASE_URL}carousel/carousel-3.png`,
    `${import.meta.env.BASE_URL}carousel/carousel-4.png`,
    `${import.meta.env.BASE_URL}carousel/carousel-5.png`,
  ];
  const [carouselIndex, setcarouselIndex] = useState(0);
  const [fade, setFade] = useState(true);

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
  }, [carouselIndex]);

  const stackImages = [
    { id: 2, img: `${import.meta.env.BASE_URL}bearings/desc2.png` },
    { id: 3, img: `${import.meta.env.BASE_URL}bearings/desc3.png` },
    { id: 4, img: `${import.meta.env.BASE_URL}bearings/desc4.png` },
  ];
  const infinitems = [
    { content: `${import.meta.env.BASE_URL}bearings/desc.png` },
    { content: "Text Item 5" },
    { content: <p>Paragraph Item 6</p> },
    { content: "Text Item 7" },
    { content: <p>Paragraph Item 8</p> },
    { content: "Text Item 9" },
    { content: <p>Paragraph Item 10</p> },
    { content: "Text Item 11" },
    { content: <p>Paragraph Item 12</p> },
    { content: "Text Item 13" },
    { content: <p>Paragraph Item 14</p> },
  ];

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
          alt="carousel"
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
      <div className="divider" />

      <section className="desc-space">
        <div className="desc-content">
          <FadeContent
            blur={true}
            duration={500}
            easing="ease-in-out"
            initialOpacity={0}
            className="desc-image-container"
          >
            <img src="./bearings/desc.png" className="desc-image" />
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
              delay={1}
            >
              <h1>Distributor Bearings Resmi - Surabaya</h1>
            </AnimatedContent>
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
              delay={1}
            >
              <p>
                <strong>PT. Century Bearindo International</strong> didirikan
                pada tahun 2003 di Surabaya, Jawa Timur–Indonesia. Perusahaan
                ini merupakan bagian dari International Bearings Group yang
                berbasis di Singapura, dan dikenal sebagai distributor eksklusif
                serta resmi untuk berbagai merek bearing ternama dunia seperti
                NACHI, LUK_FAG_INA, FYH, SPX POWERTEAM, NMB, JNS, IJK, SAMICK,
                ILJIN, TIMKEN, FBJ, BANDO, dan lainnya.
              </p>
              <p id="p-opt">
                Didukung oleh kepemimpinan yang kuat dan sumber daya yang
                produktif, grup perusahaan ini telah mengembangkan jaringan yang
                luas selama lebih dari 50 tahun dan dua generasi. Hingga kini,
                International Bearings Group telah memiliki lebih dari 25 cabang
                di berbagai negara termasuk Indonesia (Jakarta, Surabaya, Medan,
                Palembang, Pekanbaru, dan lainnya), Malaysia, Thailand, Vietnam,
                dan China.
              </p>
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
              delay={1}
            >
              <div className="flex justify-end">
                <Link to="/tentang" className="menu-item read-more">
                  Baca Selengkapnya
                </Link>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>
      <div className="divider-reverse" />
      <section className="showcase">
        <h2 className="showcase-title"> Produk Unggulan </h2>
        <div className="white-divider" />
        <br />
        
        <div className="showcase-container">
          <Link class="card" to="/produk">
            <div class="card-details">
              <img src="./bearings/desc2.png" className="card-img" />
              <hr className="border-solid" />
              <p class="text-title">Service</p>
            </div>
            <button class="card-button">More info</button>
          </Link>
          <Link class="card" to="/produk">
            <div class="card-details">
              <img src="./bearings/desc2.png" className="card-img" />
              <hr className="border-solid" />
              <p class="text-title">Service</p>
            </div>
            <button class="card-button">More info</button>
          </Link>
          <Link class="card" to="/produk">
            <div class="card-details">
              <img src="./bearings/desc2.png" className="card-img" />
              <hr className="border-solid" />
              <p class="text-title">Service</p>
            </div>
            <button class="card-button">More info</button>
          </Link>
          <Link class="card" to="/produk">
            <div class="card-details">
              <img src="./bearings/desc2.png" className="card-img" />
              <hr className="border-solid" />
              <p class="text-title">Service</p>
            </div>
            <button class="card-button">More info</button>
          </Link>
          <Link class="card" to="/produk">
            <div class="card-details">
              <img src="./bearings/desc2.png" className="card-img" />
              <hr className="border-solid" />
              <p class="text-title">Service</p>
            </div>
            <button class="card-button">More info</button>
          </Link>
          <Link class="card" to="/produk">
            <div class="card-details">
              <img src="./bearings/desc2.png" className="card-img" />
              <hr className="border-solid" />
              <p class="text-title">Service</p>
            </div>
            <button class="card-button">More info</button>
          </Link>
          <Link class="card" to="/produk">
            <div class="card-details">
              <img src="./bearings/desc2.png" className="card-img" />
              <hr className="border-solid" />
              <p class="text-title">Service</p>
            </div>
            <button class="card-button">More info</button>
          </Link>
          <Link class="card" to="/produk">
            <div class="card-details">
              <img src="./bearings/desc2.png" className="card-img" />
              <hr className="border-solid" />
              <p class="text-title">Service</p>
            </div>
            <button class="card-button">More info</button>
          </Link>
        </div>
      </section>
    </>
  );
}
