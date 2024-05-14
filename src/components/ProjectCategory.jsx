import classes from "./ProjectCategory.module.css";

export default function ProjectCategory({ backgroundImage }) {
  return (
    <div
      className={classes.card}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
  );
}
