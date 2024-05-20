import IntroSection from "../../components/about/IntroSection";
import RealDealSection from "../../components/about/RealDealSection";
import WorldClassSection from "../../components/about/WorldClassSection";
import LocationLinksSection from "../../components/location/LocationLinksSection";

export default function About() {
  return (
    <>
      <IntroSection />
      <WorldClassSection />
      <LocationLinksSection />
      <RealDealSection />
    </>
  );
}
