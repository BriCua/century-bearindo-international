import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import FadeContent from "../FadeContent";
import AnimatedContent from "../AnimatedContent";
import { Link } from "react-router-dom";
import FlipCard from "../FlipCard";

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
      <section className="desc-space">
        <div className="desc-content">
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
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
              delay={0.5}
            >
              <h1 className="desc-title">
                Distributor & Supplier Bearing Surabaya
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
              delay={0.5}
            >
              <p className="desc-p">
                Bergerak di bidang solusi bearing dan komponen mekanikal dari
                merek-merek global seperti SKF, FAG, NTN, dan NSK. Mengutamakan
                kebutuhan industri serta mendukung performa dan efisiensi
                operasional secara maksimal. <strong>- Sejak tahun 2003</strong>
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
      <section className="showcase">
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
          delay={0.5}
          className="w-dvw"
        >
          <h2 className="showcase-title"> Produk Unggulan </h2>
          <hr className="line" />
        </AnimatedContent>
        <br />

        <FadeContent
          blur={true}
          duration={500}
          easing="ease-out"
          initialOpacity={0}
          className="card-container"
        >
          <Link to="/produk" className="card">
            <div className="card-details">
              <img
                src=".\produk\prod-1.png"
                className="card-img"
                alt="produk"
              />
              <hr className="border-solid" />
              <p className="card-title">Bearings & Housing</p>
            </div>
            <button className="card-button">Selengkapnya</button>
          </Link>
          <Link to="/produk" className="card">
            <div className="card-details">
              <img
                src=".\produk\prod-2.png"
                className="card-img"
                alt="produk"
              />
              <hr className="border-solid" />
              <p className="card-title">Bearing Otomotif</p>
            </div>
            <button className="card-button">Selengkapnya</button>
          </Link>
          <Link to="/produk" className="card">
            <div className="card-details">
              <img
                src="./produk/prod-3.png"
                className="card-img"
                alt="produk"
              />
              <hr className="border-solid" />
              <p className="card-title">Wiper Blades</p>
            </div>
            <button className="card-button">Selengkapnya</button>
          </Link>
          <Link to="/produk" className="card">
            <div className="card-details">
              <img
                src="./produk/prod-4.png"
                className="card-img"
                alt="produk"
              />
              <hr className="border-solid" />
              <p className="card-title">Maintenance Tools</p>
            </div>
            <button className="card-button">Selengkapnya</button>
          </Link>
          <Link to="/produk" className="card">
            <div className="card-details">
              <img
                src="./produk/prod-5.png"
                className="card-img"
                alt="produk"
              />
              <hr className="border-solid" />
              <p className="card-title">Hydraulic Tools</p>
            </div>
            <button className="card-button">Selengkapnya</button>
          </Link>
          <Link to="/produk" className="card">
            <div className="card-details">
              <img
                src="./produk/prod-6.png"
                className="card-img"
                alt="produk"
              />
              <hr className="border-solid" />
              <p className="card-title">Pneumatic Control</p>
            </div>
            <button className="card-button">Selengkapnya</button>
          </Link>
          <Link to="/produk" className="card">
            <div className="card-details">
              <img
                src="./produk/prod-7.png"
                className="card-img"
                alt="produk"
              />
              <hr className="border-solid" />
              <p className="card-title">Conveyor Belts & V-Belts</p>
            </div>
            <button className="card-button">Selengkapnya</button>
          </Link>
          <Link to="/produk" className="card">
            <div className="card-details">
              <img
                src="./produk/prod-8.png"
                className="card-img"
                alt="produk"
              />
              <hr className="border-solid" />
              <p className="card-title">Motor & Gearboxes</p>
            </div>
            <button className="card-button">Selengkapnya</button>
          </Link>
          {/* <Link to="/produk" className="card">
            <div className="card-details">
              <img
                src=".\produk\prod-9.png"
                className="card-img"
                alt="produk"
              />
              <hr className="border-solid" />
              <p className="card-title">Belt Fastener & Cleaning System</p>
            </div>
            <button className="card-button">Selengkapnya</button>
          </Link> */}
        </FadeContent>
      </section>
      <section className="services">
            <div className="services-desc">
            <Link to="/layanan" className="services-title-container"><div className="decor-vert"></div><h2 className="services-title">Layanan Kami</h2><hr className="line"/></Link>
          <p className="desc-p">PT. Century Bearindo International menyediakan berbagai layanan komprehensif untuk melengkapi penawaran produknya.</p>
          </div>
            <FlipCard/>
      </section>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  );
}
