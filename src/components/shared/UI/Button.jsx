import classes from "./Button.module.css";
import { motion } from "framer-motion";

export default function Button({
  children,
  className = "",
  theme = "dark",
  ...props
}) {
  return (
    <motion.button
      className={`${classes.button} + ${classes[theme]} + ${className}`}
      {...props}
      whileHover={{
        cursor: "pointer",
        backgroundColor: "var(--light-peach)",
        color: "var(--white)",
        scale: 1.05,
        transition: {
          type: "just",
        },
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
