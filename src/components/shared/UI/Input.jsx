import classes from "./Input.module.css";
import { AnimatePresence, motion } from "framer-motion";

export default function Input({
  textarea,
  errorMsg,
  className: externalClass = "",
  ...props
}) {
  if (textarea) {
    return (
      <div className={classes.inputContainer}>
        <AnimatePresence>
          {errorMsg && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0, x: 10 }}
              className={classes.error}
            >
              {errorMsg}
            </motion.p>
          )}
        </AnimatePresence>
        <motion.textarea
          className={`${classes.input} ${classes.textarea} ${
            errorMsg ? classes["wrong-input"] : ""
          } ${externalClass}`}
          type="text"
          whileFocus={{ scale: 1.01 }}
          {...props}
        />
      </div>
    );
  }
  return (
    <div className={classes.inputContainer}>
      <AnimatePresence>
        {errorMsg && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={classes.error}
          >
            {errorMsg}
          </motion.p>
        )}
      </AnimatePresence>
      <motion.input
        type="text"
        {...props}
        whileFocus={{ scale: 1.01 }}
        className={`${classes.input} ${
          errorMsg ? classes["wrong-input"] : ""
        } ${externalClass}`}
      />
    </div>
  );
}
