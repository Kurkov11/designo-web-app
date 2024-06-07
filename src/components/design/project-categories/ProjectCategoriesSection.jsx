import classes from "./ProjectCategoriesSection.module.css";
import ProjectCategory from "./ProjectCategory";
import { useLocation } from "react-router-dom";
import { useInView, motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

const MOTION_PROJECT_CATEGORIES = [
  {
    className: classes["web-design"],
    title: "Web Design",
    href: "/web-desgin",
    key: `motion-project-cat-web-design`,
  },
  {
    className: classes["app-design"],
    title: "App Design",
    href: "/app-desgin",
    key: `motion-project-cat-app-design`,
  },
  {
    className: classes["graphic-design"],
    title: "Graphic Design",
    href: "/graphic-desgin",
    key: `motion-project-cat-graphic-design`,
  },
];
export default function ProjectCategoriesSection() {
  const pathname = useLocation().pathname;
  const [scope, animate] = useAnimate();

  const MotionProjectCategory = motion(ProjectCategory);

  const isContainerInView = useInView(scope, { margin: "-200px", once: true });
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  useEffect(() => {
    if (isContainerInView) {
      animate(scope.current, { opacity: 1 });
    }
  }, [isContainerInView]);
  return (
    <motion.section
      className={`${classes.section} ${
        pathname === "/" ? classes["two-row-grid"] : ""
      }`}
      initial={{ opacity: 0 }}
      ref={scope}
      variants={containerVariants}
    >
      {MOTION_PROJECT_CATEGORIES.map((cat, i) => {
        if (pathname !== cat.href) {
          return (
            <MotionProjectCategory
              href={cat.href}
              title={cat.title}
              className={cat.className}
              initial={{ y: -30 }}
              animate={{ y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
              key={cat.key}
            />
          );
        }
      })}
    </motion.section>
  );
}
