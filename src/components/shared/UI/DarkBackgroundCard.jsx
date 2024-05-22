import classes from "./DarkBackgroundCard.module.css";

export default function DarkBackgroundCard({ children, className }) {
  const finalClassName = `${classes.card} ${className}`;
  return (
    <>
      <div className={finalClassName}>
        <div className={classes.overlay}>{children}</div>
      </div>
    </>
  );
}
