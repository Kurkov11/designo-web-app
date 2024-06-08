import ProjectCategoriesSection from "../../components/design/project-categories/ProjectCategoriesSection";
import ExampleDesignsSection from "./AppExampleDesigns";
import DesignIntro from "../../components/design/DesignIntro";
import classes from "./AppDesignPage.module.css";

export default function AppDesign() {
  return (
    <main className={classes.main}>
      <DesignIntro
        title="App Design"
        classWithDesktopBg={classes["background-pattern"]}
      >
        Our mobile designs bring intuitive digital solutions to your customers
        right at their fingertips.
      </DesignIntro>
      <ExampleDesignsSection />
      <ProjectCategoriesSection />
    </main>
  );
}
