import DarkeningOverlay from "./DarkeningOverlay";
import HamburgerMenu from "./HamburgerMenu";
import classes from "./Header.module.css";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const TABLET_QUERY = 768;
export default function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [isTabletQuery, setIsTabletQuery] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  function handleHamburgerToggle() {
    setHamburgerOpen((wasOpen) => {
      // Disable or Enable Scroll
      document.querySelector("body").style.overflow = wasOpen
        ? "visible"
        : "hidden";

      return !wasOpen;
    });
  }
  function handleHamburgerClose() {
    setHamburgerOpen(false);
    // Enable scroll
    document.querySelector("body").style.overflow = "visible";
  }

  function addResizeListener() {
    window.addEventListener("resize", () => {
      console.log(window.matchMedia(`(min-width: ${TABLET_QUERY}px)`).matches);
      if (window.matchMedia(`(min-width: ${TABLET_QUERY}px)`).matches) {
        setIsTabletQuery(true);
        console.log("tablet");
      } else {
        setIsTabletQuery(false);
        console.log("not tablet");
      }
    });
  }
  function addScrollListener() {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 150);
    });
  }
  useEffect(() => {
    addResizeListener();
    addScrollListener();
  }, []);

  useEffect(() => handleHamburgerClose, [isTabletQuery === true]);
  function handleIsScrolledChange() {
    if (isScrolled) {
      document.querySelector("main").style.paddingTop =
        "calc(var(--header-margin-block) * 2 + var(--header-height))";
    } else {
      document.querySelector("main").style.paddingTop = 0;
    }
  }
  useEffect(handleIsScrolledChange, [isScrolled]);

  return (
    <header
      className={`${classes.wrapper} ${isScrolled ? classes.scrolled : ""}`}
    >
      <div className={classes.header}>
        <Link to="/">
          <img
            className={classes.logo}
            src="/src/assets/shared/desktop/logo-dark.png"
            alt=""
          />
        </Link>
        <button
          className={classes["hamburger"]}
          onClick={handleHamburgerToggle}
        >
          <img
            src={`/src/assets/shared/mobile/${
              hamburgerOpen ? "icon-close.svg" : "icon-hamburger.svg"
            }`}
            alt=""
          />
        </button>
        <nav className={classes["tablet-nav"]}>
          <ul className={classes["tablet-nav__list"]}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes["active-link"] : ""
                }
                to="/about"
              >
                Our company
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes["active-link"] : ""
                }
                to="/locations"
              >
                Locations
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes["active-link"] : ""
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      {hamburgerOpen && <HamburgerMenu onClose={handleHamburgerClose} />}
      {hamburgerOpen && <DarkeningOverlay />}
    </header>
  );
}
