import classes from "./ProjectCategoriesSection.module.css";
import ProjectCategory from "./ProjectCategory";

export default function ProjectCategoriesSection() {
  return (
    <section className={classes.section}>
      <ProjectCategory
        backgroundImage="src/assets/home/mobile/image-web-design.jpg"
        title="Web Design"
        href="/web-design"
      />
      <ProjectCategory
        backgroundImage="src/assets/home/mobile/image-app-design.jpg"
        title="App Design"
        href="/app-design"
      />
      <ProjectCategory
        backgroundImage="src/assets/home/mobile/image-graphic-design.jpg"
        title="Graphic Design"
        href="/graphic-design"
      />
    </section>
  );
}
