import classes from "./ContactForm.module.css";
import Button from "/src/components/shared/UI/Button.jsx";
export default function ContactForm({
  children,
  className: externalClass,
  ...props
}) {
  return (
    <form className={`${classes.form} ${externalClass}`} action="#" {...props}>
      {children}
      <Button className={classes.button}>Submit</Button>
    </form>
  );
}
