import classes from "./DesignExamplesSection.module.css";
export default function DesignExamplesSection({ children }) {
  return <section className={classes.section}>{children}</section>;
}
