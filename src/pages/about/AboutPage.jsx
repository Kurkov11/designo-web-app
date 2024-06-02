import IntroSection from "../../components/about/IntroSection";
import RealDealSection from "../../components/about/RealDealSection";
import WorldClassSection from "../../components/about/WorldClassSection";
import LocationLinksSection from "../../components/location/LocationLinksSection";
import classes from "./AboutPage.module.css";

export default function About() {
  return (
    <main className={classes.background}>
      <IntroSection />
      <WorldClassSection />
      <LocationLinksSection />
      <RealDealSection />
    </main>
  );
}
