import classes from "./Footer.module.css";
import Button from "./UI/Button";

export default function Footer() {
  return (
    <footer>
      <div className={classes.card}>
        <h2>Let's talk about your project</h2>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
        <Button style={{ marginInline: "auto" }}>Get in touch</Button>
      </div>
      <div className={classes.main}></div>
    </footer>
  );
}
