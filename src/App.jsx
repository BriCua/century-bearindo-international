import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Link, useLocation, Outlet } from "react-router-dom";
import "./App.css";
import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
} from "flowbite-react";

function App() {
  const location = useLocation();
  // Helper to check if a menu item is active
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  // Top Header Icons hover state
  const [phoneHovered, setPhoneHovered] = useState(false);
  const [emailHovered, setEmailHovered] = useState(false);
  const [instaHovered, setinstaHovered] = useState(false);
  const [linkedinHovered, setlinkedinHovered] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!dropdownOpen) return;
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

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
                  className="icon-link"
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
                  className="icon-link"
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
      </header>
      <nav className="header-nav">
        <img
          id="logo"
          src={`${
            import.meta.env.BASE_URL
          }identity/logo-century-bearindo-international.png`}
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
            Tentang Kami
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
        <div style={{ position: "relative", display: "inline-block" }}>
          <button
            id="menu-button"
            ref={menuButtonRef}
            onClick={() => setDropdownOpen((open) => !open)}
          >
            <Icon icon={"line-md:close-to-menu-alt-transition"} />
          </button>
          {dropdownOpen && (
            <div className="menu-dropdown" ref={dropdownRef}>
              <Link
                to="/"
                className={`menu-item${isActive("/") ? " active" : ""}`}
                style={{ padding: "0.75em 1.5em" }}
                onClick={() => setDropdownOpen(false)}
              >
                Beranda
              </Link>
              <hr />
              <Link
                to="/tentang"
                className={`menu-item${isActive("/tentang") ? " active" : ""}`}
                style={{ padding: "0.75em 1.5em" }}
                onClick={() => setDropdownOpen(false)}
              >
                Tentang Kami
              </Link>
              <hr />
              <Link
                to="/produk"
                className={`menu-item${isActive("/produk") ? " active" : ""}`}
                style={{ padding: "0.75em 1.5em" }}
                onClick={() => setDropdownOpen(false)}
              >
                Produk
              </Link>
              <hr />
              <Link
                to="/layanan"
                className={`menu-item${isActive("/layanan") ? " active" : ""}`}
                style={{ padding: "0.75em 1.5em" }}
                onClick={() => setDropdownOpen(false)}
              >
                Layanan
              </Link>
              <hr />
              <Link
                to="/katalog"
                className={`menu-item${isActive("/katalog") ? " active" : ""}`}
                style={{ padding: "0.75em 1.5em" }}
                onClick={() => setDropdownOpen(false)}
              >
                Katalog
              </Link>
              <hr />
              <Link
                to="/kontak"
                className={`menu-item${isActive("/kontak") ? " active" : ""}`}
                style={{ padding: "0.75em 1.5em" }}
                onClick={() => setDropdownOpen(false)}
              >
                Kontak
              </Link>
              <hr />
              <Link
                to="/galeri"
                className={`menu-item${isActive("/galeri") ? " active" : ""}`}
                style={{ padding: "0.75em 1.5em" }}
                onClick={() => setDropdownOpen(false)}
              >
                Galeri
              </Link>
              <hr />
              <Link
                to="/karir"
                className={`menu-item${isActive("/karir") ? " active" : ""}`}
                style={{ padding: "0.75em 1.5em" }}
                onClick={() => setDropdownOpen(false)}
              >
                Karir
              </Link>
            </div>
          )}
        </div>
      </nav>
      <main>
        <Outlet />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </main>
      <footer className="h-48">
        <div className="contact">
          <span>
            <img id="logo-footer" src="./identity/logo-footer.webp"></img>
          </span>
          <span>
            <ul>
              <div className="footer-title">Hubungi Kami :</div>
              <li>
                <span className="icon" id="phone">
                  <a
                    href="tel:0315357878"
                    target="blank"
                    onMouseEnter={() => setPhoneHovered(true)}
                    onMouseLeave={() => setPhoneHovered(false)}
                    className="icon-link"
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
                    <span className="icon-desc show-always">
                      (031) 5357878 (Industrial Sales Dept)
                    </span>
                  </a>
                </span>
              </li>
              <li>
                <span className="icon" id="phone">
                  <a
                    href="tel:0315353882"
                    target="blank"
                    onMouseEnter={() => setPhoneHovered(true)}
                    onMouseLeave={() => setPhoneHovered(false)}
                    className="icon-link"
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
                    <span className="icon-desc show-always">
                      (031) 5353882 (Distribution Sales Dept)
                    </span>
                  </a>
                </span>
              </li>
              <li>
                <span className="icon" id="email">
                  <a
                    href="mailto:cbi.sby@id.intbearing.com"
                    target="blank"
                    onMouseEnter={() => setEmailHovered(true)}
                    onMouseLeave={() => setEmailHovered(false)}
                    className="icon-link"
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
                    <span className="icon-desc show-always">cbi.sby@id.intbearing.com</span>
                  </a>
                </span>
              </li>
            </ul>
          </span>
          <span>
            <ul>
              <div className="footer-title">Kantor Kami :</div>
              <li>Ruko Mutiara Dupak 65/A-26 Jl. Dupak, Gundih, Kec.</li>
              <li>Bubutan Kota Surabaya, Jawa Timur</li>
              <li>Senin - Jumat : 08.00 - 17.00</li>
            </ul>
          </span>
        </div>
        <hr className="border-[#f4efef88]  "/>
        <div className="copyright">&copy; COPYRIGHT – CENTURY-BEARINDO-INTERNATIONAL.COM</div>
      </footer>
    </>
  );
}

export default App;
