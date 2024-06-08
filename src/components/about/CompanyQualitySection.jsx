import { useEffect } from "react";
import classes from "./CompanyQualitySection.module.css";
import { motion, useInView, useAnimate } from "framer-motion";

export default function CompanyQualitySection({
  className,
  classWithBg,
  textClass,
  title,
  children,
  reversedOrder,
}) {
  const finalImgClass = `${classes.img} ${classWithBg || ""}`;
  const finalTextClass = `${classes.text} ${textClass}`;

  const finalSectionClass = `${classes.section} ${className || ""} ${
    reversedOrder ? classes.reversedOrder : ""
  }`;

  const [textScope, animate] = useAnimate();
  const isTextInView = useInView(textScope, { margin: "-100px", once: true });
  useEffect(() => {
    if (isTextInView) {
      animate(textScope.current, { y: 0, opacity: 1 }, { duration: 0.5 });
    }
  }, [isTextInView]);
  return (
    <section className={finalSectionClass}>
      <div className={finalImgClass} />
      <div className={finalTextClass}>
        <motion.div initial={{ y: -15, opacity: 0 }} ref={textScope}>
          <h2>{title}</h2>
          {children}
        </motion.div>
      </div>
    </section>
  );
}
