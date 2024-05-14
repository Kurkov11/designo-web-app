import classes from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <h1>Award-winning custom designs and digital branding solutions</h1>
      <p>
        With over 10 years in the industry, we are experienced in creating fully
        responsive websites, app design, and engaging brand experiences. Find
        out more about our services.
      </p>
      <button>Learn more</button>
      <div className={classes.phone} />
    </div>
  );
}
