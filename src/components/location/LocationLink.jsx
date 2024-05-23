import Button from "../shared/UI/Button";
import classes from "./LocationLink.module.css";
import { Link } from "react-router-dom";
import ImageInCircle from "../shared/UI/ImageInCircle";

export default function LocationLink({ img, title, circleRotation, to }) {
  return (
    <div className={classes.mainContainer}>
      <ImageInCircle
        img={img}
        circleRotation={circleRotation}
        className={classes.imgInCircle}
      />
      <h3 className={classes.title}>{title}</h3>
      <Link to={to}>
        <Button theme="light">See Location</Button>
      </Link>
    </div>
  );
}
