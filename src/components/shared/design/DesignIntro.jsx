import classes from "./DesignIntro.module.css";

export default function DesignIntro({ title, children }) {
  return (
    <div className={classes.intro}>
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
}
