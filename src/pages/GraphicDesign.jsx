import ProjectCategoriesSection from "../components/UI/ProjectCategoriesSection";
import ExampleDesignsSection from "../components/GraphicDesign/ExampleDesignsSection";
import DesignIntro from "../components/UI/DesignIntro";

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
