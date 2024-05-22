import classes from "./Input.module.css";

export default function Input({ textarea, ...props }) {
  if (textarea) {
    return (
      <textarea
        className={`${classes.input} ${classes.textarea}`}
        type="text"
        {...props}
      />
    );
  }
  return <input className={classes.input} type="text" {...props} />;
}
