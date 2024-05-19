import classes from "./WorldClassSection.module.css";
export default function WorldClassSection() {
  return (
    <section>
      <div className={classes.img} />
      <div className={classes.text}>
        <h2>World-class talent</h2>
        {
          // Unicode single quote - prevent ide complaints
          // Unicode non-breaking space - create an empty paragraph that has a height
        }
        <p>
          We are a crew of strategists, problem-solvers, and technologists.
          Every design is thoughtfully crafted from concept to launch, ensuring
          success in its given market. We are constantly updating our skills in
          a myriad of platforms.
        </p>
        <p>&nbsp;</p>
        {
          // Unicode single quote - avoid ide complaints
        }
        <p>
          Our team is multi-disciplinary and we are not merely interested in
          form — content and meaning are just as important. We give great
          importance to craftsmanship, service, and prompt delivery. Clients
          have always been impressed with our high-quality outcomes that
          encapsulates their brand{"\u2018"}s story and mission.
        </p>
      </div>
    </section>
  );
}
