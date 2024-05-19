import classes from "./DarkBackgroundCard.module.css";

export default function DarkBackgroundCard({ children, backgroundImage }) {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className={classes.card}
      >
        <div className={classes.overlay}>{children}</div>
      </div>
    </>
  );
}
