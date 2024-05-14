import classes from "./ProjectCategory.module.css";
import { Link } from "react-router-dom";

export default function ProjectCategory({ backgroundImage, title, href }) {
  return (
    <Link
      to={href}
      className={classes.card}
      // A trick for darkening the background image
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
      }}
    >
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
    </Link>
  );
}
