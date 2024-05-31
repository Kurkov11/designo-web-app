import DesignExample from "../../components/design/DesignExample";
import DesignExamplesSection from "../../components/design/DesignExamplesSection";

export default function ExampleDesignsSection() {
  return (
    <DesignExamplesSection>
      <DesignExample
        img="src/assets/desktop/image-express.jpg"
        title="Express"
        siteHref="express"
      >
        A multi-carrier shipping website for ecommerce businesses
      </DesignExample>
      <DesignExample
        img="src/assets/desktop/image-transfer.jpg"
        title="Transfer"
        siteHref="transfer"
      >
        Site for low-cost money transfers and sending money within seconds
      </DesignExample>
      <DesignExample
        img="src/assets/desktop/image-photon.jpg"
        title="Photon"
        siteHref="photon"
      >
        A state-of-the-art music player with high-resolution audio and DSP
        effects
      </DesignExample>
      <DesignExample
        img="src/assets/desktop/image-builder.jpg"
        title="Builder"
        siteHref="builder"
      >
        Connects users with local contractors based on their location
      </DesignExample>
      <DesignExample
        img="src/assets/desktop/image-blogr.jpg"
        title="Blogr"
        siteHref="blogr"
      >
        Blogr is a platform for creating an online blog or publication
      </DesignExample>
      <DesignExample
        img="src/assets/desktop/image-camp.jpg"
        title="Camp"
        siteHref="camp"
      >
        Get expert training in coding, data, design, and digital marketing
      </DesignExample>
    </DesignExamplesSection>
  );
}
