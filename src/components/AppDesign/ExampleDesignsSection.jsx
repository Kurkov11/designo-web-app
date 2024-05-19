import SiteExample from "../UI/DesignExample";
import classes from "./ExampleDesignsSection.module.css";
export default function ExampleDesignsSection() {
  return (
    <section className={classes.section}>
      <SiteExample
        img="src/assets/app-design/desktop/image-airfilter.jpg"
        title="Airfilter"
      >
        Solving the problem of poor indoor air quality by filtering the air
      </SiteExample>
      <SiteExample
        img="src/assets/app-design/desktop/image-eyecam.jpg"
        title="Eyecam"
      >
        Product that lets you edit your favorite photos and videos at any time
      </SiteExample>
      <SiteExample
        img="src/assets/app-design/desktop/image-faceit.jpg"
        title="Faceit"
      >
        Get to meet your favorite internet superstar with the faceit app
      </SiteExample>
      <SiteExample
        img="src/assets/app-design/desktop/image-todo.jpg"
        title="Todo"
      >
        A todo app that features cloud sync with light and dark mode
      </SiteExample>
      <SiteExample
        img="src/assets/app-design/desktop/image-loopstudios.jpg"
        title="LoopStudios"
      >
        A VR experience app made for Loopstudios
      </SiteExample>
    </section>
  );
}
