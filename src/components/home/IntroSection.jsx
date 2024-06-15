import Button from "../shared/UI/Button";
import classes from "./IntroSection.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className={classes.intro}>
      <motion.div
        className={classes.text}
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Link to="/about" className={classes.link}>
          <Button>Learn More</Button>
        </Link>
      </motion.div>
    </section>
  );
}
