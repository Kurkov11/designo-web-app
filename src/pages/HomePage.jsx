import CompanyValuesSection from "../components/home/CompanyValuesSection.jsx";
import IntroSection from "../components/home/IntroSection.jsx";
import ProjectCategoriesSection from "../components/design/project-categories/ProjectCategoriesSection.jsx";

export default function Home() {
  return (
    <>
      <IntroSection />
      <ProjectCategoriesSection />
      <CompanyValuesSection />
    </>
  );
}
