import classes from "./CompanyQualitySection.module.css";

export default function CompanyQualitySection({
  className,
  classWithBg,
  textClass,
  title,
  children,
  reversedOrder,
}) {
  const finalImgClass = `${classes.img} ${classWithBg || ""}`;
  const finalTextClass = `${classes.text} ${textClass}`;

  const finalSectionClass = `${classes.section} ${className || ""} ${
    reversedOrder ? classes.reversedOrder : ""
  }`;
  return (
    <section className={finalSectionClass}>
      <div className={finalImgClass} />
      <div className={finalTextClass}>
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}
