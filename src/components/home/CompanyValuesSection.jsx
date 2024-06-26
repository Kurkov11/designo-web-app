import { useEffect } from "react";
import CompanyValue from "./CompanyValue.jsx";
import classes from "./CompanyValuesSection.module.css";
import { motion, useAnimate, useInView } from "framer-motion";

import imgValuePassionate from "/src/assets/images/home/desktop/illustration-passionate.svg";
import imgValueResourceful from "/src/assets/images/home/desktop/illustration-resourceful.svg";
import imgValueFriendly from "/src/assets/images/home/desktop/illustration-friendly.svg";
const COMPANY_VALUES = [
  {
    title: "Passionate",
    image: imgValuePassionate,
    description:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
    key: `company-value-passionate`,
  },
  {
    title: "Resourceful",
    image: imgValueResourceful,
    description:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
    key: `company-value-resourceful`,
    circleRotation: "-90deg",
  },
  {
    title: "Friendly",
    image: imgValueFriendly,
    description:
      "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
    key: `company-value-friendly`,
    circleRotation: "90deg",
  },
];
export default function CompanyValuesSection() {
  const [scope, animate] = useAnimate();
  const isSectionInView = useInView(scope, {
    once: true,
  });
  useEffect(() => {
    if (isSectionInView) {
      animate(scope.current, { opacity: 1 });
    }
  }, [isSectionInView]);

  const MotionCompanyValue = motion(CompanyValue);
  return (
    <motion.section
      className={classes.section}
      ref={scope}
      initial={{ opacity: 0 }}
    >
      {COMPANY_VALUES.map((value, i) => {
        return (
          <MotionCompanyValue
            {...value}
            key={value.key}
            initial={{ y: -30 }}
            animate={{ y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5, once: true }}
          >
            {value.description}
          </MotionCompanyValue>
        );
      })}
    </motion.section>
  );
}
