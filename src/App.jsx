import { useState, useRef, useEffect, Fragment } from "react";
import { Icon } from "@iconify/react";
import { Link, useLocation, Outlet } from "react-router-dom";
import "./App.css";
import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
} from "flowbite-react";

const navLinks = [
  { path: "/", label: "Beranda", id: "beranda" },
  { path: "/tentang", label: "Tentang Kami", id: "tentang" },
  { path: "/produk", label: "Produk", id: "produk" },
  { path: "/layanan", label: "Layanan", id: "layanan" },
  /* { path: "/katalog", label: "Katalog", id: "katalog" }, */
  /* { path: "/galeri", label: "Galeri", id: "galeri" }, */
  { path: "/highlights", label: "Highlights", id: "highlights" },
  { path: "/karir", label: "Karir", id: "karir" },
  { path: "/kontak", label: "Kontak", id: "kontak" },
];

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
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
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
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={`${link.path}${location.search}`}
              className={`menu-item${isActive(link.path) ? " active" : ""}`}
              id={link.id}
            >
              {link.label}
            </Link>
          ))}
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
            <div
              className="menu-dropdown"
              ref={dropdownRef}
              style={{ maxHeight: "calc(100vh - 120px)", overflowY: "auto" }}
            >
              {navLinks.map((link, index) => (
                <Fragment key={link.id}>
                  <Link
                    to={`${link.path}${location.search}`}
                    className={`menu-item${
                      isActive(link.path) ? " active" : ""
                    }`}
                    style={{ padding: "0.75em 1.5em" }}
                    onClick={() => setDropdownOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {index < navLinks.length - 1 && <hr />}
                </Fragment>
              ))}
            </div>
          )}
        </div>
      </nav>
      <main style={{ overflowX: 'hidden' }}>
        <Outlet />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </main>
      <footer className="h-48">
        <div className="contact">
          <span>
            <img
              id="logo-footer"
              src={`${import.meta.env.BASE_URL}identity/logo-footer.webp`}
            ></img>
          </span>
          <span>
            <ul>
              <div className="list-title">Hubungi Kami :</div>
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
                      (031) 535 7878 (Industrial Sales Dept)
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
                      (031) 535 3882 (Distribution Sales Dept)
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
                    <span className="icon-desc show-always">
                      cbi.sby@id.intbearing.com
                    </span>
                  </a>
                </span>
              </li>
            </ul>
          </span>
          <span>
            <ul>
              <div className="list-title">Kantor Kami :</div>
              <li>Ruko Mutiara Dupak 65/A-26 Jl. Dupak, Gundih, Kec.</li>
              <li>Bubutan Kota Surabaya, Jawa Timur</li>
              <li>Senin - Jumat : 08.00 - 17.00</li>
            </ul>
          </span>
        </div>
        <hr className="border-[#f4efef88]  " />
        <div className="copyright">
          &copy; COPYRIGHT – CENTURY-BEARINDO-INTERNATIONAL.COM
        </div>
      </footer>
    </>
  );
}

export default App;
