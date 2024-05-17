import SiteExample from "../UI/SiteExample";
import classes from "./ExampleDesignsSection.module.css";
export default function ExampleDesignsSection() {
  return (
    <section className={classes.section}>
      <SiteExample img="src/assets/desktop/image-express.jpg" />
      <SiteExample img="src/assets/desktop/image-express.jpg" />
    </section>
  );
}
