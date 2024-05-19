import LocationLink from "./LocationLink";

export default function LocationLinksSection() {
  return (
    <section>
      <LocationLink
        img="src/assets/shared/desktop/illustration-canada.svg"
        circleRotation="90deg"
      />
      <LocationLink
        img="src/assets/shared/desktop/illustration-australia.svg"
        circleRotation="0deg"
      />
      <LocationLink
        img="src/assets/shared/desktop/illustration-united-kingdom.svg"
        circleRotation="-90deg"
      />
    </section>
  );
}
