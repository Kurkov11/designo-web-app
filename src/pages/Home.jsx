import Button from "../components/UI/Button";
import classes from "./Home.module.css";

export default function Home() {
  return (
    <section className={classes.intro}>
      <div className={classes["intro-text"]}>
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Button>Learn More</Button>
      </div>
      <img
        src="src/assets/home/desktop/image-hero-phone.png"
        className={classes.phone}
        alt=""
      />
    </section>
  );
}
