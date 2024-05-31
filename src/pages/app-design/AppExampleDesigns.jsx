import DesignExample from "../../components/design/DesignExample.jsx";
import DesignExamplesSection from "../../components/design/DesignExamplesSection.jsx";

export default function ExampleDesignsSection() {
  return (
    <DesignExamplesSection>
      <DesignExample
        img="src/assets/app-design/desktop/image-airfilter.jpg"
        title="Airfilter"
        siteHref="airfilter"
      >
        Solving the problem of poor indoor air quality by filtering the air
      </DesignExample>
      <DesignExample
        img="src/assets/app-design/desktop/image-eyecam.jpg"
        title="Eyecam"
        siteHref="eyecam"
      >
        Product that lets you edit your favorite photos and videos at any time
      </DesignExample>
      <DesignExample
        img="src/assets/app-design/desktop/image-faceit.jpg"
        title="Faceit"
        siteHref="faceit"
      >
        Get to meet your favorite internet superstar with the faceit app
      </DesignExample>
      <DesignExample
        img="src/assets/app-design/desktop/image-todo.jpg"
        title="Todo"
        siteHref="todo"
      >
        A todo app that features cloud sync with light and dark mode
      </DesignExample>
      <DesignExample
        img="src/assets/app-design/desktop/image-loopstudios.jpg"
        title="LoopStudios"
        siteHref="loop-studies"
      >
        A VR experience app made for Loopstudios
      </DesignExample>
    </DesignExamplesSection>
  );
}
