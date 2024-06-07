import DesignIntro from "../../components/design/DesignIntro";
import ProjectCategoriesSection from "../../components/design/project-categories/ProjectCategoriesSection";
import ExampleDesignsSection from "./WebExampleDesigns";
import classes from "./WebDesignPage.module.css";

export default function WebDesign() {
  return (
    <main className={classes.main}>
      <DesignIntro
        title="Web Design"
        classWithDesktopBg={classes["background-pattern"]}
      >
        We build websites that serve as powerful marketing tools and bring
        memorable brand experiences.
      </DesignIntro>
      <ExampleDesignsSection />
      <ProjectCategoriesSection />
    </main>
  );
}
