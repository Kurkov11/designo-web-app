import classes from "./ProjectCategory.module.css";
import { Link } from "react-router-dom";
import DarkBackgroundCard from "../../shared/UI/DarkBackgroundCard";
import { forwardRef } from "react";
import orangeArrowImg from "/src/assets/images/home/mobile/project-category-arrow.webp";

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
              <svg width="6" height="10" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M 0 0 L 5 5 L 0 10"
                  strokeWidth="2px"
                  stroke="var(--peach)"
                  fill="none"
                />
              </svg>
            </span>
          </p>
        </div>
      </DarkBackgroundCard>
    </Link>
  );
});
export default ProjectCategory;
