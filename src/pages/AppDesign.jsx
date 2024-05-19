import ProjectCategoriesSection from "../components/UI/ProjectCategoriesSection";
import ExampleDesignsSection from "../components/AppDesign/ExampleDesignsSection";
import DesignIntro from "../components/UI/DesignIntro";

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
