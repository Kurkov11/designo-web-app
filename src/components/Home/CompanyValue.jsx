import classes from "./CompanyValue.module.css";
import ImageInCircle from "../shared/UI/ImageInCircle";

export default function CompanyValue({
  image,
  title,
  children,
  circleRotation,
}) {
  return (
    <div className={classes.value}>
      <ImageInCircle
        img={image}
        className={classes.image}
        circleRotation={circleRotation}
      />
      <div>
        <h4>{title}</h4>
        <p>{children}</p>
      </div>
    </div>
  );
}
