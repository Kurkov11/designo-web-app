import DarkeningOverlay from "./DarkeningOverlay";
import HamburgerMenu from "./HamburgerMenu";
import classes from "./Header.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TABLET_QUERY = 768;
export default function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [isTabletQuery, setIsTabletQuery] = useState(false);

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

  useEffect(() => addResizeListener, []);
  useEffect(() => handleHamburgerClose, [isTabletQuery === true]);

  return (
    <header className={classes.wrapper}>
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
              <Link to="/about">Our company</Link>
            </li>
            <li>
              <Link to="/locations">Locations</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      {hamburgerOpen && <HamburgerMenu onClose={handleHamburgerClose} />}
      {hamburgerOpen && <DarkeningOverlay />}
    </header>
  );
}
