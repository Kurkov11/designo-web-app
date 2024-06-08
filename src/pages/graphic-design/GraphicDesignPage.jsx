import ProjectCategoriesSection from "../../components/design/project-categories/ProjectCategoriesSection";
import ExampleDesignsSection from "./GraphicExampleDesigns";
import DesignIntro from "../../components/design/DesignIntro";
import classes from "./GraphicDesignPage.module.css";

export default function GraphicDesign() {
  return (
    <main className={classes.main}>
      <DesignIntro
        title="Graphic Design"
        classWithDesktopBg={classes["background-pattern"]}
      >
        We deliver eye-catching branding materials that are tailored to meet
        your business objectives.
      </DesignIntro>
      <ExampleDesignsSection />
      <ProjectCategoriesSection />
    </main>
  );
}
