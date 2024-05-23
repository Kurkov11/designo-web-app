import classes from "./Address.module.css";

export default function Address({ title, lines, className = "" }) {
  const fullClassName = `${classes.address} ${className}`;
  return (
    <address className={fullClassName}>
      <strong>{title}</strong>
      <ol>
        {lines.map((line, index) => (
          <li key={title + index}>{line}</li>
        ))}
      </ol>
    </address>
  );
}
