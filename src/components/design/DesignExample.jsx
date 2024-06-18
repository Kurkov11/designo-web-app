import { forwardRef } from "react";
import classes from "./DesignExample.module.css";
import { color, motion } from "framer-motion";

const SiteExample = forwardRef(function SiteExample(
  { img, title, children, siteHref = "example-site" },
  ref
) {
  const containerVariants = {
    hover: "",
  };
  const textVariants = {
    hover: {
      backgroundColor: "var(--peach)",
    },
  };
  const paragraphVariants = {
    hover: {
      color: "var(--white)",
    },
  };
  return (
    <motion.a
      href={`#${siteHref}`}
      ref={ref}
      className={classes.container}
      variants={containerVariants}
      whileHover="hover"
    >
      <div
        className={classes.example}
        style={{ backgroundImage: `url("${img}")` }}
      />
      <motion.div variants={textVariants} className={classes.text}>
        <motion.h4 variants={paragraphVariants}>{title}</motion.h4>
        <motion.p variants={paragraphVariants}>{children}</motion.p>
      </motion.div>
    </motion.a>
  );
});
export default SiteExample;
