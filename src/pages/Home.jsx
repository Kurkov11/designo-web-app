import CompanyValuesSection from "../components/Home/CompanyValuesSection.jsx";
import IntroSection from "../components/Home/IntroSection";
import ProjectCategoriesSection from "../components/shared/ProjectCategories/ProjectCategoriesSection.jsx";

export default function Home() {
  return (
    <>
      <IntroSection />
      <ProjectCategoriesSection />
      <CompanyValuesSection />
    </>
  );
}
