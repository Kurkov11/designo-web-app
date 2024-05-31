import classes from "./ProjectCategoriesSection.module.css";
import ProjectCategory from "./ProjectCategory";
import { useLocation } from "react-router-dom";
export default function ProjectCategoriesSection() {
  const pathname = useLocation().pathname;

  return (
    <section
      className={`${classes.section} ${
        pathname === "/" ? classes["two-row-grid"] : ""
      }`}
    >
      {pathname !== "/web-design" && (
        <ProjectCategory
          className={classes["web-design"]}
          containerClass={classes["project-category"]}
          title="Web Design"
          href="/web-design"
        />
      )}
      {pathname !== "/app-design" && (
        <ProjectCategory
          className={classes["app-design"]}
          containerClass={classes["project-category"]}
          title="App Design"
          href="/app-design"
        />
      )}
      {pathname !== "/graphic-design" && (
        <ProjectCategory
          className={classes["graphic-design"]}
          containerClass={classes["project-category"]}
          title="Graphic Design"
          href="/graphic-design"
        />
      )}
    </section>
  );
}
