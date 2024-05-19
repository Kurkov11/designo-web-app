import SiteExample from "../UI/SiteExample";
import classes from "./ExampleDesignsSection.module.css";
export default function ExampleDesignsSection() {
  return (
    <section className={classes.section}>
      <SiteExample
        img="src/assets/graphic-design/desktop/image-change.jpg"
        title="Tim Brown"
      >
        A book cover designed for Tim Brown{"\u2018"}s new release, {"\u2018"}
        Change{"\u2018"}
      </SiteExample>
      <SiteExample
        img="src/assets/graphic-design/desktop/image-boxed-water.jpg"
        title="Boxed Water"
      >
        A simple packaging concept made for Boxed Water
      </SiteExample>
      <SiteExample
        img="src/assets/graphic-design/desktop/image-science.jpg"
        title="Science!"
      >
        A poster made in collaboration with the Federal Art Project
      </SiteExample>
    </section>
  );
}
