import classes from "./SiteExample.module.css";

export default function SiteExample({ img, title, children }) {
  return (
    <div>
      <div
        className={classes.example}
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className={classes.text}>
        <h4>{title}</h4>
        <p>{children}</p>
      </div>
    </div>
  );
}
