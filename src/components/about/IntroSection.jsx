import classes from "./IntroSection.module.css";
import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className={classes.section}>
      <div className={classes["intro-img"]} />
      <div className={classes.intro}>
        <div className={classes["intro-bg"]} />
        <motion.div
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1>About Us</h1>
          {
            // Unicode single quotes - prevent ide complaints
          }
          <p>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We{"\u2018"}ve partnered with many
            startups, corporations, and nonprofits alike to craft designs that
            make real impact. We{"\u2018"}re always looking forward to creating
            brands, products, and digital experiences that connect with our
            clients
            {"\u2018"} audiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
