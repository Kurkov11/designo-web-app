import classes from "./LocationSection.module.css";

export default function LocationSection({ title, children, className = "" }) {
  let fullClass = `${classes.section} ${className}`;
  return (
    <section className={fullClass}>
      <div className={classes.img} />
      <div className={classes.text}>
        <h2>{title}</h2>
        {
          // Unicode non-breaking space - create an empty paragraph that has a height
        }
        {children}
      </div>
    </section>
  );
}
