import classes from "./DarkBackgroundCard.module.css";
import { motion } from "framer-motion";

export default function DarkBackgroundCard({ children, className }) {
  const finalClassName = `${classes.card} ${className}`;

  const overlayVariants = {
    rest: {},
    hover: {
      backgroundColor: "rgba(231, 129, 107, 0.7)",
      paddingBottom: "10px",
    },
  };
  return (
    <>
      <motion.div
        initial="rest"
        animate="rest"
        whileHover="hover"
        className={finalClassName}
      >
        <motion.div variants={overlayVariants} className={classes.overlay}>
          {children}
        </motion.div>
      </motion.div>
    </>
  );
}
