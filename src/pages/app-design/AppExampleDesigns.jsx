import DesignExample from "../../components/design/DesignExample.jsx";
import DesignExamplesSection from "../../components/design/DesignExamplesSection.jsx";

const APP_DESIGN_EXAMPLES = [
  {
    img: "/src/assets/app-design/desktop/image-airfilter.jpg",
    title: "Airfilter",
    siteHref: "airfilter",
    description:
      "Solving the problem of poor indoor air quality by filtering the air",
    key: "app-design-example-airfilter",
  },
  {
    img: "/src/assets/app-design/desktop/image-eyecam.jpg",
    title: "Eyecam",
    siteHref: "eyecam",
    description:
      "Product that lets you edit your favorite photos and videos at any time",
    key: "app-design-example-eyecam",
  },
  {
    img: "/src/assets/app-design/desktop/image-faceit.jpg",
    title: "Faceit",
    siteHref: "faceit",
    description:
      "Get to meet your favorite internet superstar with the faceit app",
    key: "app-design-example-faceit",
  },
  {
    img: "/src/assets/app-design/desktop/image-todo.jpg",
    title: "Todo",
    siteHref: "todo",
    description: "A todo app that features cloud sync with light and dark mode",
    key: "app-design-example-todo",
  },
  {
    img: "src/assets/app-design/desktop/image-loopstudios.jpg",
    title: "LoopStudios",
    siteHref: "loopstudios",
    description: "A VR experience app made for Loopstudios",
    key: "app-design-example-loopstudios",
  },
];
export default function ExampleDesignsSection() {
  return (
    <DesignExamplesSection
      designExamples={APP_DESIGN_EXAMPLES}
    ></DesignExamplesSection>
  );
}
