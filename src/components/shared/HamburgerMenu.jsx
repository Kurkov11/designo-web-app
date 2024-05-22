import { Link } from "react-router-dom";
import classes from "./HamburgerMenu.module.css";

export default function HamburgerMenu({ onClose }) {
  return (
    <nav>
      <ul className={classes["hamburger-menu"]}>
        <li>
          <Link onClick={onClose} to="/about">
            Our Company
          </Link>
        </li>
        <li>
          <Link onClick={onClose} to="/locations">
            Locations
          </Link>
        </li>
        <li>
          <Link onClick={onClose} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
