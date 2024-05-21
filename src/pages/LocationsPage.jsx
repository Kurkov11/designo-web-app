import LocationSection from "../components/location/LocationSection";
import classes from "./LocationsPage.module.css";

export default function LocationsPage() {
  return (
    <>
      <LocationSection title="Canada">
        <address className={classes.address}>
          <p>
            <strong>Designo Central Office</strong>
            <br />
            Designo Central Office 3886 Wellington Street
            <br />
            Toronto, Ontario M9C 3J5
          </p>
        </address>
      </LocationSection>
    </>
  );
}
