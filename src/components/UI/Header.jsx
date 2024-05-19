import HamburgerMenu from "./HamburgerMenu";
import classes from "./Header.module.css";
import { useState } from "react";

export default function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  function handleHamburgerToggle() {
    setHamburgerOpen((wasOpen) => !wasOpen);
  }
  return (
    <header className={classes.wrapper}>
      <div className={classes.header}>
        <img
          className={classes.logo}
          src="src/assets/shared/desktop/logo-dark.png"
          alt=""
        />
        <button
          className={classes["hamburger"]}
          onClick={handleHamburgerToggle}
        >
          <img
            src={`src/assets/shared/mobile/${
              hamburgerOpen ? "icon-close.svg" : "icon-hamburger.svg"
            }`}
            alt=""
          />
        </button>
      </div>
      {hamburgerOpen && <HamburgerMenu />}
    </header>
  );
}