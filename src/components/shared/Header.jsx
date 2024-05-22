import DarkeningOverlay from "./DarkeningOverlay";
import HamburgerMenu from "./HamburgerMenu";
import classes from "./Header.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  function handleHamburgerToggle() {
    setHamburgerOpen((wasOpen) => !wasOpen);
  }
  function handleHamburgerClose() {
    setHamburgerOpen(false);
  }
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
      </div>
      {hamburgerOpen && <HamburgerMenu onClose={handleHamburgerClose} />}
      {hamburgerOpen && <DarkeningOverlay />}
    </header>
  );
}
