import SiteExample from "../../components/design/DesignExample";
import DesignExamplesSection from "../../components/design/DesignExamplesSection";

export default function ExampleDesignsSection() {
  return (
    <DesignExamplesSection>
      <SiteExample
        img="src/assets/graphic-design/desktop/image-change.jpg"
        title="Tim Brown"
        siteHref="tim-brown"
      >
        A book cover designed for Tim Brown{"\u2018"}s new release, {"\u2018"}
        Change{"\u2018"}
      </SiteExample>
      <SiteExample
        img="src/assets/graphic-design/desktop/image-boxed-water.jpg"
        title="Boxed Water"
        siteHref="boxed-water"
      >
        A simple packaging concept made for Boxed Water
      </SiteExample>
      <SiteExample
        img="src/assets/graphic-design/desktop/image-science.jpg"
        title="Science!"
        siteHref="science"
      >
        A poster made in collaboration with the Federal Art Project
      </SiteExample>
    </DesignExamplesSection>
  );
}
