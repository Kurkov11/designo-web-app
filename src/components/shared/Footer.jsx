import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
import Button from "./UI/Button";
import Address from "./Address";

export default function Footer() {
  return (
    <footer>
      <div className={classes.card}>
        <h2>Let's talk about your project</h2>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
        <Link to="/contact" className={classes.link}>
          <Button>Get in touch</Button>
        </Link>
      </div>
      <div className={classes.main}>
        <div className={classes["logo-nav-container"]}>
          <img
            src="/src/assets/shared/desktop/logo-light.png"
            alt=""
            className={classes.logo}
          />
          <hr className={classes.line} />
          <nav className={classes.nav}>
            <ul>
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
        </div>
        <hr className={classes["tablet-line"]} />
        <div className={classes["info-container"]}>
          <div className={classes["address-container"]}>
            <Address
              title="Designo Central Office"
              lines={["3886 Wellington Street", "Toronto, Ontario M9C 3J5"]}
              className={classes.address}
            />
            <Address
              title="Contact Us (Central Office)"
              lines={["P : +1 253-863-8967", "M : contact@designo.co"]}
              className={`${classes.address} ${classes["contact-address"]}`}
            />
          </div>
          <div className={classes["social-icons"]}>
            <a href="#facebook">
              <img
                src="/src/assets/shared/desktop/icon-facebook.svg"
                alt="facebook icon"
              />
            </a>
            <a href="#youtube">
              <img
                src="/src/assets/shared/desktop/icon-youtube.svg"
                alt="youtube icon"
              />
            </a>
            <a href="#twitter">
              <img
                src="/src/assets/shared/desktop/icon-twitter.svg"
                alt="twitter icon"
              />
            </a>
            <a href="#pinterest">
              <img
                src="/src/assets/shared/desktop/icon-pinterest.svg"
                alt="pinterest icon"
              />
            </a>
            <a href="#instagram">
              <img
                src="/src/assets/shared/desktop/icon-instagram.svg"
                alt="instagram icon"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
