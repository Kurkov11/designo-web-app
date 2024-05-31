import classes from "./DesignExamplesSection.module.css";
export default function DesignExamplesSection({ children }) {
  return (
    <div className={classes.background}>
      <section className={classes.section}>{children}</section>
    </div>
  );
}
