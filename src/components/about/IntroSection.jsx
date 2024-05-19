import classes from "./IntroSection.module.css";

export default function IntroSection() {
  return (
    <section>
      <div className={classes["intro-img"]} />
      <div className={classes.intro}>
        <h1>About Us</h1>
        {
          // Unicode single quotes - prevent ide complaints
        }
        <p>
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We&#2018;ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We&#2018;re always looking forward to creating brands,
          products, and digital experiences that connect with our clients&#2018;
          audiences.
        </p>
      </div>
    </section>
  );
}
