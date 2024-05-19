import ProjectCategoriesSection from "../../components/design/project-categories/ProjectCategoriesSection";
import ExampleDesignsSection from "./GraphicExampleDesigns";
import DesignIntro from "../../components/design/DesignIntro";

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
