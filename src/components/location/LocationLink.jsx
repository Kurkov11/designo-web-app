import Button from "../shared/UI/Button";
import classes from "./LocationLink.module.css";

export default function LocationLink({ img, title, circleRotation }) {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.imgContainer}>
        <div
          className={classes.circle}
          style={{ transform: `rotate(${circleRotation})` }}
        />
        <img src={img} alt="" className={classes.img} />
      </div>
      <h3 className={classes.title}>{title}</h3>
      <Button theme="light">See Location</Button>
    </div>
  );
}
