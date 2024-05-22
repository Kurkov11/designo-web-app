import classes from "./ContactForm.module.css";
import Button from "/src/components/shared/UI/Button.jsx";
export default function ContactForm({ children }) {
  return (
    <form className={classes.form} action="#">
      {children}
      <Button className={classes.button}>Submit</Button>
    </form>
  );
}
