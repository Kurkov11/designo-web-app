import classes from "./SiteExample.module.css";

export default function SiteExample({ img }) {
  return (
    <div>
      <div
        className={classes.example}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className={classes.text}>
        <h4>Express</h4>
        <p>A multi-carrier shipping website for ecommerce businesses</p>
      </div>
    </div>
  );
}
