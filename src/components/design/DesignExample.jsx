import { forwardRef } from "react";
import classes from "./DesignExample.module.css";

const SiteExample = forwardRef(function SiteExample(
  { img, title, children, siteHref = "example-site" },
  ref
) {
  return (
    <a href={`#${siteHref}`} ref={ref} className={classes.container}>
      <div
        className={classes.example}
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className={classes.text}>
        <h4>{title}</h4>
        <p>{children}</p>
      </div>
    </a>
  );
});
export default SiteExample;
