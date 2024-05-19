import SiteExample from "../UI/SiteExample";
import classes from "./ExampleDesignsSection.module.css";
export default function ExampleDesignsSection() {
  return (
    <section className={classes.section}>
      <SiteExample img="src/assets/desktop/image-express.jpg" title="Express">
        A multi-carrier shipping website for ecommerce businesses
      </SiteExample>
      <SiteExample img="src/assets/desktop/image-transfer.jpg" title="Transfer">
        Site for low-cost money transfers and sending money within seconds
      </SiteExample>
      <SiteExample img="src/assets/desktop/image-photon.jpg" title="Photon">
        A state-of-the-art music player with high-resolution audio and DSP
        effects
      </SiteExample>
      <SiteExample img="src/assets/desktop/image-builder.jpg" title="Builder">
        Connects users with local contractors based on their location
      </SiteExample>
      <SiteExample img="src/assets/desktop/image-blogr.jpg" title="Blogr">
        Blogr is a platform for creating an online blog or publication
      </SiteExample>
      <SiteExample img="src/assets/desktop/image-camp.jpg" title="Camp">
        Get expert training in coding, data, design, and digital marketing
      </SiteExample>
    </section>
  );
}
