import ProjectCategoriesSection from "../../components/shared/ProjectCategories/ProjectCategoriesSection";
import ExampleDesignsSection from "./ExampleDesignsSection";
import DesignIntro from "../../components/shared/design/DesignIntro";

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
