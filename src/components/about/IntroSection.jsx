import classes from "./IntroSection.module.css";

export default function IntroSection() {
  return (
    <section className={classes.section}>
      <div className={classes["intro-img"]} />
      <div className={classes.intro}>
        <div className={classes["intro-bg"]} />
        <div>
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
        </div>
      </div>
    </section>
  );
}
