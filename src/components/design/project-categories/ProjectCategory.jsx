import classes from "./ProjectCategory.module.css";
import { Link } from "react-router-dom";
import DarkBackgroundCard from "../../shared/UI/DarkBackgroundCard";
import { forwardRef } from "react";

const ProjectCategory = forwardRef(function ProjectCategory(
  { className, containerClass, title, href },
  ref
) {
  return (
    <Link to={href} className={containerClass} ref={ref}>
      <DarkBackgroundCard className={className}>
        <div className={classes.text}>
          <h2>{title}</h2>
          <p>
            View Projects{" "}
            <span className={classes.arrow}>
              <img
                src="src/assets/home/mobile/project-category-arrow.svg"
                alt=""
              />
            </span>
          </p>
        </div>
      </DarkBackgroundCard>
    </Link>
  );
});
export default ProjectCategory;
