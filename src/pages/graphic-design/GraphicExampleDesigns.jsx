import DesignExamplesSection from "../../components/design/DesignExamplesSection";

const GRAPHIC_DESIGN_EXAMPLES = [
  {
    img: "/src/assets/images/graphic-design/desktop/image-change.webp",
    title: "Tim Brown",
    siteHref: "tim-brown",
    description: "A book cover designed for Tim Brown's new release, 'Change'",
    key: "graphic-design-example-tim-brown",
  },
  {
    img: "/src/assets/images/graphic-design/desktop/image-boxed-water.webp",
    title: "Boxed Water",
    siteHref: "boxed-water",
    description: "A simple packaging concept made for Boxed Water",
    key: "graphic-design-boxed-water",
  },
  {
    img: "/src/assets/images/graphic-design/desktop/image-science.webp",
    title: "Science",
    siteHref: "science",
    description: "A poster made in collaboration with the Federal Art Project",
    key: "graphic-design-example-science",
  },
];
export default function ExampleDesignsSection() {
  return <DesignExamplesSection designExamples={GRAPHIC_DESIGN_EXAMPLES} />;
}
