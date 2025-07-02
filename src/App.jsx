import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";

import "./App.css";

function App() {
  const location = useLocation();
  // Helper to check if a menu item is active
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const [count, setCount] = useState(0);
  /* Top Header Icons */
  const [phoneHovered, setPhoneHovered] = useState(false);
  const [emailHovered, setEmailHovered] = useState(false);
  const [instaHovered, setinstaHovered] = useState(false);
  const [linkedinHovered, setlinkedinHovered] = useState(false);

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
    }, 300); // 300ms fade out, then fade in
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeBanner((bannerIndex + 1) % bannerImages.length);
    }, 6000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, [bannerIndex]);

  return (
    <>
      <header>
        <div className="header-top">
          <div className="header-top-container">
            <span className="header-top-left">
              <span className="icon" id="phone">
                <a
                  href="tel:0315357878"
                  target="blank"
                  onMouseEnter={() => setPhoneHovered(true)}
                  onMouseLeave={() => setPhoneHovered(false)}
                >
                  <div className="icon-container">
                    <Icon
                      key={phoneHovered ? "phone-animated" : "phone-static"}
                      icon={
                        phoneHovered
                          ? "line-md:phone-call-loop"
                          : "line-md:phone"
                      }
                      width="1.5em"
                      height="1.5em"
                      className={phoneHovered ? "icon-hover" : "icon-default"}
                    />
                  </div>
                  <span className="icon-desc">(031) 5357878</span>
                </a>
              </span>
              <span className="icon" id="email">
                <a
                  href="mailto:cbi.sby@id.intbearing.com"
                  target="blank"
                  onMouseEnter={() => setEmailHovered(true)}
                  onMouseLeave={() => setEmailHovered(false)}
                >
                  <div className="icon-container">
                    <Icon
                      key={emailHovered ? "email-animated" : "email-static"}
                      icon={
                        emailHovered
                          ? "line-md:email-arrow-right"
                          : "line-md:email"
                      }
                      width="1.5em"
                      height="1.5em"
                      className={emailHovered ? "icon-hover" : "icon-default"}
                    />
                  </div>
                  <span className="icon-desc">cbi.sby@id.intbearing.com</span>
                </a>
              </span>
            </span>
            <span className="header-top-right">
              <span className="icon">
                <a
                  href="https://www.instagram.com/centurybearindo?utm_source=ig_web_button_share_sheet&igsh=MTNtaTc5d3FiZmxqaA=="
                  target="blank"
                  onMouseEnter={() => setinstaHovered(true)}
                  onMouseLeave={() => setinstaHovered(false)}
                >
                  <div className="icon-container">
                    <Icon
                      key={instaHovered ? "insta-animated" : "insta-static"}
                      icon={
                        instaHovered ? "line-md:instagram" : "line-md:instagram"
                      }
                      width="1.5em"
                      height="1.5em"
                      className={instaHovered ? "icon-hover" : "icon-default"}
                    />
                  </div>
                </a>
              </span>
              <span className="icon">
                <a
                  href="https://www.linkedin.com/company/centralbearindo/"
                  target="blank"
                  onMouseEnter={() => setlinkedinHovered(true)}
                  onMouseLeave={() => setlinkedinHovered(false)}
                >
                  <div className="icon-container" id="linkedin">
                    <Icon
                      key={
                        linkedinHovered
                          ? "linkedin-animated"
                          : "linkedin-static"
                      }
                      icon={
                        linkedinHovered
                          ? "line-md:linkedin"
                          : "line-md:linkedin"
                      }
                      width="1em"
                      height="1em"
                      className={
                        linkedinHovered ? "icon-hover" : "icon-default"
                      }
                    />
                  </div>
                </a>
              </span>
            </span>
          </div>
        </div>
        <nav className="header-nav">
          <img
            id="logo"
            src={`${import.meta.env.BASE_URL}identity/logo-century-bearindo-international.png`}
            alt="century bearindo international logo"
          />
          <div className="menu-group">
            <Link
              to="/"
              className={`menu-item${isActive("/") ? " active" : ""}`}
              id="beranda"
            >
              Beranda
            </Link>
            <Link
              to="/tentang"
              className={`menu-item${isActive("/tentang") ? " active" : ""}`}
              id="tentang"
            >
              Tentang
            </Link>
            <Link
              to="/produk"
              className={`menu-item${isActive("/produk") ? " active" : ""}`}
              id="produk"
            >
              Produk
            </Link>
            <Link
              to="/layanan"
              className={`menu-item${isActive("/layanan") ? " active" : ""}`}
              id="layanan"
            >
              Layanan
            </Link>
            <Link
              to="/katalog"
              className={`menu-item${isActive("/katalog") ? " active" : ""}`}
              id="katalog"
            >
              Katalog
            </Link>
            <Link
              to="/kontak"
              className={`menu-item${isActive("/kontak") ? " active" : ""}`}
              id="kontak"
            >
              Kontak
            </Link>
            <Link
              to="/galeri"
              className={`menu-item${isActive("/galeri") ? " active" : ""}`}
              id="galeri"
            >
              Galeri
            </Link>
            <Link
              to="/karir"
              className={`menu-item${isActive("/karir") ? " active" : ""}`}
              id="karir"
            >
              Karir
            </Link>
          </div>
          <button id="menu-button">
            {/* Animation */}

            <Icon icon={"line-md:close-to-menu-alt-transition"} />
          </button>
        </nav>
      </header>
      <figure id="banner-container">
        <img
          src={bannerImages[bannerIndex]}
          alt="banner"
          className={fade ? "fade-in" : "fade-out"}
          style={{ width: "100%" }}
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
          <Icon icon="line-md:chevron-small-left" className="w-6 h-6"/>
        </button>
        {/* Right Arrow */}
        <button
          className="banner-arrow right"
          onClick={() => changeBanner((bannerIndex + 1) % bannerImages.length)}
          aria-label="Next"
        >
          <Icon icon="line-md:chevron-small-right" className="w-6 h-6"/>
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
    </>
  );
}

export default App;
