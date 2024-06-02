import CompanyValuesSection from "../components/home/CompanyValuesSection.jsx";
import IntroSection from "../components/home/IntroSection.jsx";
import ProjectCategoriesSection from "../components/design/project-categories/ProjectCategoriesSection.jsx";
import classes from "./HomePage.module.css";
export default function Home() {
  return (
    <main className={classes.background}>
      <IntroSection />
      <ProjectCategoriesSection />
      <CompanyValuesSection />
    </main>
  );
}
