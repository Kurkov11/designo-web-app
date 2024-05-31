import classes from "./DesignIntro.module.css";

export default function DesignIntro({
  title,
  children,
  classWithDesktopBg = "",
}) {
  return (
    <div className={`${classes.intro} ${classWithDesktopBg}`}>
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
}
