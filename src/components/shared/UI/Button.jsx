import classes from "./Button.module.css";

export default function Button({
  children,
  className,
  theme = "dark",
  ...props
}) {
  return (
    <div
      className={`${classes.button} + ${classes[theme]} + ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
