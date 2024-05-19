import ProjectCategoriesSection from "../../components/shared/ProjectCategories/ProjectCategoriesSection";
import ExampleDesignsSection from "./ExampleDesignsSection";
import DesignIntro from "../../components/shared/design/DesignIntro";

export default function GraphicDesign() {
  return (
    <>
      <DesignIntro title="Graphic Design">
        We deliver eye-catching branding materials that are tailored to meet
        your business objectives.
      </DesignIntro>
      <ExampleDesignsSection />
      <ProjectCategoriesSection />
    </>
  );
}
