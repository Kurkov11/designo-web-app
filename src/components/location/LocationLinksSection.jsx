import LocationLink from "./LocationLink";
import classes from "./LocationLinksSection.module.css";
import imgCanada from "/src/assets/images/shared/desktop/illustration-canada.svg";
import imgAustralia from "/src/assets/images/shared/desktop/illustration-australia.svg";
import imgUK from "/src/assets/images/shared/desktop/illustration-united-kingdom.svg";

export default function LocationLinksSection() {
  return (
    <section className={classes.section}>
      <LocationLink
        img={imgCanada}
        circleRotation="90deg"
        title="Canada"
        to="/locations/canada"
      />
      <LocationLink
        img={imgAustralia}
        circleRotation="0deg"
        title="Australia"
        to="/locations/australia"
      />
      <LocationLink
        img={imgUK}
        circleRotation="-90deg"
        title="United Kingdom"
        to="/locations/united-kingdom"
      />
    </section>
  );
}
