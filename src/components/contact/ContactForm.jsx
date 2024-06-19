import { AnimatePresence, motion, transform } from "framer-motion";
import classes from "./ContactForm.module.css";
import Button from "/src/components/shared/UI/Button.jsx";
export default function ContactForm({
  children,
  className: externalClass,
  isSubmitted,
  ...props
}) {
  return (
    <form className={`${classes.form} ${externalClass}`} action="#" {...props}>
      {children}
      {isSubmitted && (
        <motion.p
          className={classes["success-msg"]}
          initial={{ height: 0 }}
          animate={{ height: "fit-content" }}
        >
          Submitted!
        </motion.p>
      )}
      {!isSubmitted && <Button className={classes.button}>Submit</Button>}
    </form>
  );
}
