import classes from "./ProjectCategoriesSection.module.css";
import ProjectCategory from "./ProjectCategory";
import { useLocation } from "react-router-dom";
export default function ProjectCategoriesSection() {
  const pathname = useLocation().pathname;

  return (
    <section className={classes.section}>
      {pathname !== "/web-design" && (
        <ProjectCategory
          backgroundImage="src/assets/home/mobile/image-web-design.jpg"
          title="Web Design"
          href="/web-design"
        />
      )}
      {pathname !== "/app-design" && (
        <ProjectCategory
          backgroundImage="src/assets/home/mobile/image-app-design.jpg"
          title="App Design"
          href="/app-design"
        />
      )}
      {pathname !== "/graphic-design" && (
        <ProjectCategory
          backgroundImage="src/assets/home/mobile/image-graphic-design.jpg"
          title="Graphic Design"
          href="/graphic-design"
        />
      )}
    </section>
  );
}
