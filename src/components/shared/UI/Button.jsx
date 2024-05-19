import classes from "./Button.module.css";

export default function Button({ children, className, ...props }) {
  return (
    <div className={`${classes.button} + ${className}`} {...props}>
      {children}
    </div>
  );
}
