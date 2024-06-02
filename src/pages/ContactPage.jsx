import ContactSection from "../components/contact/ContactSection";
import LocationLinksSection from "../components/location/LocationLinksSection";
import classes from "./ContactPage.module.css";

export default function Contact() {
  return (
    <main className={classes.background}>
      <ContactSection />
      <LocationLinksSection />
    </main>
  );
}
