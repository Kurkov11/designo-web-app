import classes from "./ContactForm.module.css";
import Button from "/src/components/shared/UI/Button.jsx";
export default function ContactForm({ children, className: externalClass }) {
  return (
    <form className={`${classes.form} ${externalClass}`} action="#">
      {children}
      <Button className={classes.button}>Submit</Button>
    </form>
  );
}
