import DesignIntro from "../../components/design/DesignIntro";
import ProjectCategoriesSection from "../../components/design/project-categories/ProjectCategoriesSection";
import ExampleDesignsSection from "./WebExampleDesigns";

export default function WebDesign() {
  return (
    <>
      <DesignIntro title="Web Design">
        We build websites that serve as powerful marketing tools and bring
        memorable brand experiences.
      </DesignIntro>
      <ExampleDesignsSection />
      <ProjectCategoriesSection />
    </>
  );
}
