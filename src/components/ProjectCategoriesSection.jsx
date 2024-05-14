import classes from "./ProjectCategoriesSection.module.css";
import ProjectCategory from "./ProjectCategory";

export default function ProjectCategoriesSection() {
  return (
    <section className={classes.section}>
      <ProjectCategory
        backgroundImage="src/assets/home/mobile/image-web-design.jpg"
        title="Web Design"
        href="/design"
      />
    </section>
  );
}
