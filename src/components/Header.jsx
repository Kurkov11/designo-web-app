import classes from "./Header.module.css";

export default function Header({ onHamburgerToggle, hamburgerOpen }) {
  return (
    <header className={classes.header}>
      <img
        className={classes.logo}
        src="src/assets/shared/desktop/logo-dark.png"
        alt=""
      />
      <button className={classes["hamburger"]} onClick={onHamburgerToggle}>
        <img
          src={`src/assets/shared/mobile/${
            hamburgerOpen ? "icon-close.svg" : "icon-hamburger.svg"
          }`}
          alt=""
        />
      </button>
    </header>
  );
}
