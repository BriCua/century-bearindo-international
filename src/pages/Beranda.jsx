import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import FadeContent from "../FadeContent";
import AnimatedContent from "../AnimatedContent";

export default function Beranda() {
  const bannerImages = [
    `${import.meta.env.BASE_URL}banner/banner-1.png`,
    `${import.meta.env.BASE_URL}banner/banner-2.png`,
    `${import.meta.env.BASE_URL}banner/banner-3.png`,
    `${import.meta.env.BASE_URL}banner/banner-4.png`,
    `${import.meta.env.BASE_URL}banner/banner-5.png`,
  ];
  const [bannerIndex, setBannerIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const changeBanner = (newIndex) => {
    setFade(false);
    setTimeout(() => {
      setBannerIndex(newIndex);
      setFade(true);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeBanner((bannerIndex + 1) % bannerImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [bannerIndex]);

  const stackImages = [
    { id: 1, img: `${import.meta.env.BASE_URL}bearings/desc.png` },
    { id: 2, img: `${import.meta.env.BASE_URL}bearings/desc2.png` },
    { id: 3, img: `${import.meta.env.BASE_URL}bearings/desc3.png` },
    { id: 4, img: `${import.meta.env.BASE_URL}bearings/desc4.png` }
  ];
  return (
    <>
      <figure
        id="banner-container"
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
            changeBanner((bannerIndex - 1 + bannerImages.length) % bannerImages.length);
          } else if (relX > width * 0.9) {
            changeBanner((bannerIndex + 1) % bannerImages.length);
          }
        }}
        style={{ touchAction: "manipulation" }}
      >
        <img
          src={bannerImages[bannerIndex]}
          alt="banner"
          className={fade ? "fade-in" : "fade-out"}
          style={{ width: "100%" }}
          id="banner"
        />
        {/* Left Arrow */}
        <button
          className="banner-arrow left "
          onClick={(e) => {
            e.stopPropagation();
            changeBanner((bannerIndex - 1 + bannerImages.length) % bannerImages.length);
          }}
          aria-label="Previous"
        >
          <Icon icon="line-md:chevron-small-left" className="w-6 h-6" />
        </button>
        {/* Right Arrow */}
        <button
          className="banner-arrow right"
          onClick={(e) => {
            e.stopPropagation();
            changeBanner((bannerIndex + 1) % bannerImages.length);
          }}
          aria-label="Next"
        >
          <Icon icon="line-md:chevron-small-right" className="w-6 h-6" />
        </button>
        {/* Dots */}
        <div className="banner-dots">
          {bannerImages.map((_, idx) => (
            <button
              key={idx}
              className={`banner-dot${idx === bannerIndex ? " active" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                changeBanner(idx);
              }}
              aria-label={`Go to banner ${idx + 1}`}
            />
          ))}
        </div>
      </figure>
      <div className="divider" />

      <section className="desc-space">
        <FadeContent
          blur={true}
          duration={500}
          easing="ease-in-out"
          initialOpacity={0}
          className="desc-content"
        >
          <img src="./bearings/desc.png" className="desc-image" />
          <div className="desc-text">
            <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={false}
              duration={1}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={0}
            >
              <h1>Distributor Bearings Resmi - Surabaya</h1>
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
                Didukung oleh kepemimpinan yang kuat dan sumber daya
                yang produktif, grup perusahaan ini telah mengembangkan jaringan
                yang luas selama lebih dari 50 tahun dan dua generasi. Hingga
                kini, International Bearings Group telah memiliki lebih dari 25
                cabang di berbagai negara termasuk Indonesia (Jakarta, Surabaya,
                Medan, Palembang, Pekanbaru, dan lainnya), Malaysia, Thailand,
                Vietnam, dan China.
              </p>
            </AnimatedContent>
          </div>
        </FadeContent>
      </section>
      <p>this is test</p>
    </>
  );
}
