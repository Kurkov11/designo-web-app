import classes from "./CompanyValue.module.css";

export default function CompanyValue({ image, title, children }) {
  return (
    <div className={classes.value}>
      <div className={classes.image}>
        <img src={image} alt="" />
      </div>
      <div>
        <h4>{title}</h4>
        <p>{children}</p>
      </div>
    </div>
  );
}
