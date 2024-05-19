import ProjectCategoriesSection from "../../components/design/project-categories/ProjectCategoriesSection";
import ExampleDesignsSection from "./AppExampleDesigns";
import DesignIntro from "../../components/design/DesignIntro";

export default function AppDesign() {
  return (
    <>
      <DesignIntro title="App Design">
        Our mobile designs bring intuitive digital solutions to your customers
        right at their fingertips.
      </DesignIntro>
      <ExampleDesignsSection />
      <ProjectCategoriesSection />
    </>
  );
}
