import DesignExamplesSection from "../../components/design/DesignExamplesSection";
import changeImg from "/src/assets/images/graphic-design/desktop/image-change.webp";
import boxedWaterImg from "/src/assets/images/graphic-design/desktop/image-boxed-water.webp";
import scienceImg from "/src/assets/images/graphic-design/desktop/image-science.webp";

const GRAPHIC_DESIGN_EXAMPLES = [
  {
    img: changeImg,
    title: "Tim Brown",
    siteHref: "tim-brown",
    description: "A book cover designed for Tim Brown's new release, 'Change'",
    key: "graphic-design-example-tim-brown",
  },
  {
    img: boxedWaterImg,
    title: "Boxed Water",
    siteHref: "boxed-water",
    description: "A simple packaging concept made for Boxed Water",
    key: "graphic-design-boxed-water",
  },
  {
    img: scienceImg,
    title: "Science",
    siteHref: "science",
    description: "A poster made in collaboration with the Federal Art Project",
    key: "graphic-design-example-science",
  },
];
export default function ExampleDesignsSection() {
  return <DesignExamplesSection designExamples={GRAPHIC_DESIGN_EXAMPLES} />;
}
