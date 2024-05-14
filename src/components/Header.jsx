import classes from "./Header.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
      <img
        className={classes.logo}
        src="src/assets/shared/desktop/logo-dark.png"
        alt=""
      />
      <button>
        <img
          className={classes.hamburger}
          src="src/assets/shared/mobile/icon-hamburger.svg"
          alt=""
        />
      </button>
    </header>
  );
}
