import classes from "./CompanyQualitySection.module.css";

export default function CompanyQualitySection({
  className,
  classWithBg,
  title,
  children,
}) {
  const finalImgClass = `${classes.img} ${classWithBg}`;
  const finalSectionClass = `${classes.section} ${className}`;
  return (
    <section className={finalSectionClass}>
      <div className={finalImgClass} />
      <div className={classes.text}>
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}
