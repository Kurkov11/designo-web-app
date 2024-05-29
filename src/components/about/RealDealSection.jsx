import CompanyQualitySection from "./CompanyQualitySection";
import classes from "./RealDealSection.module.css";

export default function RealDealSection() {
  return (
    <CompanyQualitySection
      title="The real deal"
      classWithBg={classes.img}
      className={classes.section}
      textClass={classes.text}
      reversedOrder
    >
      <p>
        As strategic partners in our clients{"\u2019"} businesses, we are ready
        to take on any challenge as our own. Solving real problems require
        empathy and collaboration, and we strive to bring a fresh perspective to
        every opportunity. We make design and technology more accessible and
        give you tools to measure success.
      </p>
      <p>&nbsp;</p>
      <p>
        We are visual storytellers in appealing and captivating ways. By
        combining business and marketing strategies, we inspire audiences to
        take action and drive real results.
      </p>
    </CompanyQualitySection>
  );
}
