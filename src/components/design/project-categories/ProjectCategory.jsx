import classes from "./ProjectCategory.module.css";
import { Link } from "react-router-dom";
import DarkBackgroundCard from "../../shared/UI/DarkBackgroundCard";

export default function ProjectCategory({ className, title, href }) {
  return (
    <Link to={href}>
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
}
