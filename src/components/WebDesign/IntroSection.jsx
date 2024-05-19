import ExampleDesignsSection from "./ExampleDesignsSection";
import classes from "./IntroSection.module.css";

export default function IntroSection() {
  return (
    <div className={classes["intro-section"]}>
      <h1>Web Design</h1>
      <p>
        We build websites that serve as powerful marketing tools and bring
        memorable brand experiences.
      </p>
    </div>
  );
}
