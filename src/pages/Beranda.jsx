import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import FadeContent from "../FadeContent";

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

  return (
    <>
      <figure id="banner-container">
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
          onClick={() =>
            changeBanner(
              (bannerIndex - 1 + bannerImages.length) % bannerImages.length
            )
          }
          aria-label="Previous"
        >
          <Icon icon="line-md:chevron-small-left" className="w-6 h-6" />
        </button>
        {/* Right Arrow */}
        <button
          className="banner-arrow right"
          onClick={() => changeBanner((bannerIndex + 1) % bannerImages.length)}
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
              onClick={() => changeBanner(idx)}
              aria-label={`Go to banner ${idx + 1}`}
            />
          ))}
        </div>
      </figure>
      <div className="divider" />
      <FadeContent
            blur={true}
            duration={500}
            easing="ease-out"
            initialOpacity={0}
            className="z-10"
          >
      <section className="desc-space">
        <div className="desc-content">
            <div className="desc-text">
              <h1>Hello World</h1>
              <p>This text is on top of the background image and overlay.</p>
            </div>
        </div>
        
      </section>
      </FadeContent>
      <p>this is test</p>
    </>
  );
}
