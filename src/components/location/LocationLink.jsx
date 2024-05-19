import classes from "./LocationLink.module.css";

export default function LocationLink({ img, location, circleRotation, to }) {
  return (
    <div className={classes.imgContainer}>
      <div
        className={classes.circle}
        style={{ transform: `rotate(${circleRotation})` }}
      />
      <img src={img} alt="" className={classes.img} />
    </div>
  );
}
