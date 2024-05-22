import CompanyValue from "./CompanyValue.jsx";
import classes from "./CompanyValuesSection.module.css";

export default function CompanyValuesSection() {
  return (
    <section className={classes.section}>
      <CompanyValue
        title="Passionate"
        image="/src/assets/home/desktop/illustration-passionate.svg"
      >
        Each project starts with an in-depth brand research to ensure we only
        create products that serve a purpose. We merge art, design, and
        technology into exciting new solutions.
      </CompanyValue>
      <CompanyValue
        title="Resourceful"
        image="/src/assets/home/desktop/illustration-resourceful.svg"
      >
        Everything that we do has a strategic purpose. We use an agile approach
        in all of our projects and value customer collaboration. It guarantees
        superior results that fulfill our clients’ needs.
      </CompanyValue>
      <CompanyValue
        title="Friendly"
        image="/src/assets/home/desktop/illustration-friendly.svg"
      >
        We are a group of enthusiastic folks who know how to put people first.
        Our success depends on our customers, and we strive to give them the
        best experience a company can provide.
      </CompanyValue>
    </section>
  );
}
