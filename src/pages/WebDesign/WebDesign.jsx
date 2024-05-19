import DesignIntro from "../../components/shared/design/DesignIntro";
import ProjectCategoriesSection from "../../components/shared/ProjectCategories/ProjectCategoriesSection";
import ExampleDesignsSection from "./ExampleDesignsSection";

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
