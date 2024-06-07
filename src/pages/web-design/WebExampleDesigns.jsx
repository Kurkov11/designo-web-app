import DesignExample from "../../components/design/DesignExample";
import DesignExamplesSection from "../../components/design/DesignExamplesSection";

const WEB_DESIGN_EXAMPLES = [
  {
    img: "/src/assets/desktop/image-express.jpg",
    title: "Express",
    siteHref: "express",
    description: "A multi-carrier shipping website for ecommerce businesses",
    key: "web-design-example-express",
  },
  {
    img: "/src/assets/desktop/image-transfer.jpg",
    title: "Transfer",
    siteHref: "transfer",
    description:
      "Site for low-cost money transfers and sending money within seconds",
    key: "web-design-example-transfer",
  },
  {
    img: "/src/assets/desktop/image-photon.jpg",
    title: "Photon",
    siteHref: "photon",
    description:
      "A state-of-the-art music player with high-resolution audio and DSP effects",
    key: "web-design-example-photon",
  },
  {
    img: "/src/assets/desktop/image-builder.jpg",
    title: "Builder",
    siteHref: "builder",
    description:
      "Connects users with local contractors based on their location",
    key: "web-design-example-builder",
  },
  {
    img: "src/assets/desktop/image-blogr.jpg",
    title: "Blogr",
    siteHref: "blogr",
    description:
      "Blogr is a platform for creating an online blog or publication",
    key: "web-design-example-express-blogr",
  },
  {
    img: "src/assets/desktop/image-camp.jpg",
    title: "Camp",
    siteHref: "camp",
    description:
      "Get expert training in coding, data, design, and digital marketing",
    key: "web-design-example-image-camp",
  },
];
export default function ExampleDesignsSection() {
  return (
    <DesignExamplesSection
      designExamples={WEB_DESIGN_EXAMPLES}
    ></DesignExamplesSection>
  );
}
