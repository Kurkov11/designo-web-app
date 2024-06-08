import classes from "./Input.module.css";
import { motion } from "framer-motion";

export default function Input({ textarea, ...props }) {
  if (textarea) {
    return (
      <motion.textarea
        className={`${classes.input} ${classes.textarea}`}
        type="text"
        whileFocus={{ scale: 1.01 }}
        {...props}
      />
    );
  }
  return (
    <motion.input
      className={classes.input}
      type="text"
      {...props}
      whileFocus={{ scale: 1.01 }}
    />
  );
}
