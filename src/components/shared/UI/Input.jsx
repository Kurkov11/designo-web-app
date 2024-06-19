import classes from "./Input.module.css";
import { AnimatePresence, motion } from "framer-motion";

/* Images */
import errorImg from "/src/assets/images/contact/desktop/icon-error.svg";

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
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={classes["error-msg"]}
            >
              <i>{errorMsg}</i>
              <img src={errorImg} alt="" className={classes["error-img"]} />
            </motion.div>
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
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={classes["error-msg"]}
          >
            <i>{errorMsg}</i>
            <img src={errorImg} alt="" className={classes["error-img"]} />
          </motion.div>
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
