import classes from "./DesignIntro.module.css";
import { motion } from "framer-motion";

export default function DesignIntro({
  title,
  children,
  classWithDesktopBg = "",
}) {
  return (
    <div className={`${classes.intro} ${classWithDesktopBg}`}>
      <motion.div
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>{title}</h1>
        <p>{children}</p>
      </motion.div>
    </div>
  );
}
