import classes from "./ImageInCircle.module.css";

export default function ImageInCircle({ img, circleRotation, className }) {
  const combinedClassName = `${className} ${classes.imgContainer}`;
  return (
    <div className={combinedClassName}>
      <div
        className={classes.circle}
        style={{ transform: `rotate(${circleRotation})` }}
      />
      <img src={img} alt="" className={classes.img} />
    </div>
  );
}
