import classes from "./Address.module.css";

export default function Address({ title, lines }) {
  return (
    <address className={classes.address}>
      <strong>{title}</strong>
      <ol>
        {lines.map((line, index) => (
          <li key={title + index}>{line}</li>
        ))}
      </ol>
    </address>
  );
}
