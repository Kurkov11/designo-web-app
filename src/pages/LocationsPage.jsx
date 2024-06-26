import LocationSection from "../components/location/LocationSection";
import classes from "./LocationsPage.module.css";

export default function LocationsPage() {
  // ids are used because of the automatical scroll applied when the id is withing the url
  return (
    <main>
      <LocationSection
        title="Canada"
        id="canada"
        coordinates={[43.6440941, -79.3953249]}
        className={classes.reversedSection}
      >
        {
          //Fix lack of space between two addresses in mobile mode
        }
        <address className={classes.address}>
          <p>
            <strong>Designo Central Office</strong>
            <br />
            3886 Wellington Street
            <br />
            Toronto, Ontario M9C 3J5
          </p>
          <p>
            <strong>Contact</strong>
            <br />
            P : +1 253-863-8967
            <br />M : contact@designo.co
          </p>
        </address>
      </LocationSection>
      <LocationSection
        title="Australia"
        id="australia"
        coordinates={[-30.3293938, 149.785665]}
      >
        <address className={classes.address}>
          <p>
            <strong>Designo AU Office</strong> <br />
            19 Balonne Street <br />
            New South Wales 2443
          </p>
          <p>
            <strong>Contact</strong>
            <br />
            P : (02) 6720 9092
            <br />M : contact@designo.au
          </p>
        </address>
      </LocationSection>
      <LocationSection
        title="United Kingdom"
        className={`${classes["bottom-section"]} ${classes.reversedSection}`}
        id="united-kingdom"
        coordinates={[51.7320575, -3.8721996]}
      >
        <address className={classes.address}>
          <p>
            <strong>Designo UK Office</strong> <br />
            13 Colorado Way <br />
            Rhyd-y-fro SA8 9GA
          </p>
          <p>
            <strong>Contact</strong>
            <br />
            P : 078 3115 1400
            <br />M : contact@designo.uk
          </p>
        </address>
      </LocationSection>
    </main>
  );
}
