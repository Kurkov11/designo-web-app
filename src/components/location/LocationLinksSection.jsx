import LocationLink from "./LocationLink";
import classes from "./LocationLinksSection.module.css";

export default function LocationLinksSection() {
  return (
    <section className={classes.section}>
      <LocationLink
        img="/src/assets/images/shared/desktop/illustration-canada.svg"
        circleRotation="90deg"
        title="Canada"
        to="/locations/canada"
      />
      <LocationLink
        img="/src/assets/images/shared/desktop/illustration-australia.svg"
        circleRotation="0deg"
        title="Australia"
        to="/locations/australia"
      />
      <LocationLink
        img="/src/assets/images/shared/desktop/illustration-united-kingdom.svg"
        circleRotation="-90deg"
        title="United Kingdom"
        to="/locations/united-kingdom"
      />
    </section>
  );
}
