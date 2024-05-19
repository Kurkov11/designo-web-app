import DesignIntro from "../components/UI/DesignIntro";
import ProjectCategoriesSection from "../components/UI/ProjectCategoriesSection";
import ExampleDesignsSection from "../components/WebDesign/ExampleDesignsSection";

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
