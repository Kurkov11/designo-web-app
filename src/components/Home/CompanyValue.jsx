import classes from "./CompanyValue.module.css";
import ImageInCircle from "../shared/UI/ImageInCircle";
import { forwardRef } from "react";

const CompanyValue = forwardRef(function CompanyValue(
  { image, title, children, circleRotation },
  ref
) {
  return (
    <div className={classes.value} ref={ref}>
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
});
export default CompanyValue;
