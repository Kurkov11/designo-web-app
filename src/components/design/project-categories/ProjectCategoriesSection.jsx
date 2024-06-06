import classes from "./ProjectCategoriesSection.module.css";
import ProjectCategory from "./ProjectCategory";
import { useLocation } from "react-router-dom";
import { useInView, motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ProjectCategoriesSection() {
  const pathname = useLocation().pathname;

  const containerRef = useRef();
  const isContainerInView = useInView(containerRef, {
    margin: "-200px",
  });

  const controls = useAnimation();
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { y: -10 },
    visible: { y: 0 },
  };
  useEffect(() => {
    console.log(isContainerInView);
    if (isContainerInView) {
      controls.start("visible");
    }
  }, [isContainerInView]);

  const MotionProjectCategory = motion(ProjectCategory);
  return (
    <motion.section
      className={`${classes.section} ${
        pathname === "/" ? classes["two-row-grid"] : ""
      }`}
      variants={variants}
      ref={containerRef}
      initial="hidden"
      animate={controls}
    >
      {pathname !== "/web-design" && (
        <MotionProjectCategory
          className={classes["web-design"]}
          containerClass={classes["project-category"]}
          title="Web Design"
          href="/web-design"
        />
      )}
      {pathname !== "/app-design" && (
        <MotionProjectCategory
          className={classes["app-design"]}
          containerClass={classes["project-category"]}
          title="App Design"
          href="/app-design"
        />
      )}
      {pathname !== "/graphic-design" && (
        <MotionProjectCategory
          className={classes["graphic-design"]}
          containerClass={classes["project-category"]}
          title="Graphic Design"
          href="/graphic-design"
        />
      )}
    </motion.section>
  );
}
