import DesignExamplesSection from "../../components/design/DesignExamplesSection.jsx";

const APP_DESIGN_EXAMPLES = [
  {
    img: "/src/assets/images/app-design/desktop/image-airfilter.webp",
    title: "Airfilter",
    siteHref: "airfilter",
    description:
      "Solving the problem of poor indoor air quality by filtering the air",
    key: "app-design-example-airfilter",
  },
  {
    img: "/src/assets/images/app-design/desktop/image-eyecam.webp",
    title: "Eyecam",
    siteHref: "eyecam",
    description:
      "Product that lets you edit your favorite photos and videos at any time",
    key: "app-design-example-eyecam",
  },
  {
    img: "/src/assets/images/app-design/desktop/image-faceit.webp",
    title: "Faceit",
    siteHref: "faceit",
    description:
      "Get to meet your favorite internet superstar with the faceit app",
    key: "app-design-example-faceit",
  },
  {
    img: "/src/assets/images/app-design/desktop/image-todo.webp",
    title: "Todo",
    siteHref: "todo",
    description: "A todo app that features cloud sync with light and dark mode",
    key: "app-design-example-todo",
  },
  {
    img: "/src/assets/images/app-design/desktop/image-loopstudios.webp",
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
