import { Link } from "react-router-dom";
import classes from "./HamburgerMenu.module.css";

export default function HamburgerMenu() {
  return (
    <nav>
      <ul className={classes["hamburger-menu"]}>
        <li>
          <Link to="/about">Our Company</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
