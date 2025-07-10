import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import FadeContent from "../FadeContent";
import AnimatedContent from "../AnimatedContent";
import { Link } from "react-router-dom";
import FlipCard from "../FlipCard";
import FlipGrid from "../FlipGrid";

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
      <section className="desc-space">
        <div className="desc-content">
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
            className="desc-image-container"
          >
            <img src="./identity/about.webp" className="desc-image" />
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
              delay={0.75}
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
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
          className="card-container"
        >
          <Link to="/produk" className="card float">
            <div className="card-details">
              <img
                src=".\produk\prod-1.png"
                className="card-img"
                alt="Bearings and Housing"
              />
              <hr className="border-solid" />
              <p className="card-title">Bearings & Housing</p>
            </div>
            <button className="card-button">Selengkapnya</button>
          </Link>
          <Link to="/produk" className="card float">
            <div className="card-details">
              <img
                src=".\produk\prod-2.png"
                className="card-img"
                alt="Bearing Otomotif"
              />
              <hr className="border-solid" />
              <p className="card-title">Bearing Otomotif</p>
            </div>
            <button className="card-button">Selengkapnya</button>
          </Link>
          <Link to="/produk" className="card float">
            <div className="card-details">
              <img
                src="./produk/prod-3.png"
                className="card-img"
                alt="Wiper Blades"
              />
              <hr className="border-solid" />
              <p className="card-title">Wiper Blades</p>
            </div>
            <button className="card-button">Selengkapnya</button>
          </Link>
          <Link to="/produk" className="card float">
            <div className="card-details">
              <img
                src="./produk/prod-4.png"
                className="card-img"
                alt="Maintenance Tools"
              />
              <hr className="border-solid" />
              <p className="card-title">Maintenance Tools</p>
            </div>
            <button className="card-button">Selengkapnya</button>
          </Link>
          <Link to="/produk" className="card float">
            <div className="card-details">
              <img
                src="./produk/prod-5.png"
                className="card-img"
                alt="Hydraulic Tools"
              />
              <hr className="border-solid" />
              <p className="card-title">Hydraulic Tools</p>
            </div>
            <button className="card-button">Selengkapnya</button>
          </Link>
          <Link to="/produk" className="card float">
            <div className="card-details">
              <img
                src="./produk/prod-6.png"
                className="card-img"
                alt="Pneumatic Control"
              />
              <hr className="border-solid" />
              <p className="card-title">Pneumatic Control</p>
            </div>
            <button className="card-button">Selengkapnya</button>
          </Link>
          <Link to="/produk" className="card float">
            <div className="card-details">
              <img
                src="./produk/prod-7.png"
                className="card-img"
                alt="Conveyour Belts & V-Belts"
              />
              <hr className="border-solid" />
              <p className="card-title">Conveyor Belts & V-Belts</p>
            </div>
            <button className="card-button">Selengkapnya</button>
          </Link>
          <Link to="/produk" className="card float">
            <div className="card-details">
              <img
                src="./produk/prod-8.png"
                className="card-img"
                alt="Motor & Gearboxes"
              />
              <hr className="border-solid" />
              <p className="card-title">Motor & Gearboxes</p>
            </div>
            <button className="card-button">Selengkapnya</button>
          </Link>
          {/* <Link to="/produk" className="card float">
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
            delay={0.75}
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
          delay={0.5}
        >
          <FlipCard />
        </AnimatedContent>
      </section>
      <section className="partners">
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
            delay={0.5}
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
            delay={0.75}
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
