import classes from "./DarkeningOverlay.module.css";
import { motion } from "framer-motion";

export default function DarkeningOverlay() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={classes.overlay}
    />
  );
}
