import classes from "./ContactSection.module.css";

import Button from "/src/components/shared/UI/Button.jsx";
import Input from "../shared/UI/Input";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className={classes.section}>
      <h1>Contact Us</h1>
      <p>
        Ready to take it to the next level? Let{"\u2018"}s talk about your
        project or idea and find out how we can help your business grow. If you
        are looking for unique digital experiences that{"\u2018"}s relatable to
        your users, drop us a line.
      </p>
      <ContactForm>
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Email Address" />
        <Input type="text" placeholder="Phone" />
        <Input textarea name="" id="" placeholder="Your Message"></Input>
      </ContactForm>
    </section>
  );
}
