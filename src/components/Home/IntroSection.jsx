import Button from "../shared/UI/Button";
import classes from "./IntroSection.module.css";
import { Link } from "react-router-dom";

export default function IntroSection() {
  return (
    <section className={classes.intro}>
      <div className={classes["intro-text"]}>
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Link to="/about" className={classes.link}>
          <Button>Learn More</Button>
        </Link>
      </div>
      <img
        src="/src/assets/home/desktop/image-hero-phone.png"
        className={classes.phone}
        alt=""
      />
    </section>
  );
}
