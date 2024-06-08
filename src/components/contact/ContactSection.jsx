import classes from "./ContactSection.module.css";

import Input from "../shared/UI/Input";
import ContactForm from "./ContactForm";
import { useState, useEffect } from "react";
import validateEmail from "../validateEmail";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [inputErrors, setInputErrors] = useState({
    name: null,
    email: null,
    phone: null,
    message: null,
  });
  const [submittedCorrect, setSubmittedCorrect] = useState(false);
  const [wasEverSubmitted, setWasEverSubmitted] = useState(false);

  useEffect(() => {
    if (
      Object.values(inputErrors).every((err) => err === null) &&
      wasEverSubmitted
    ) {
      setSubmittedCorrect(true);
    }
  }, [inputErrors]);
  function handleValueChange(valueName, e) {
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData, [valueName]: e.target.value };
      return newFormData;
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setWasEverSubmitted(true);

    const keyValArr = Object.entries(formData);
    keyValArr.forEach(([key, value]) => {
      setInputErrors((prevErrors) => {
        const newErrors = { ...prevErrors };

        if (key === "email") {
          const isEmail = validateEmail(value);
          if (value === "") {
            newErrors[key] = "Input cannot be empty!";
          } else if (!isEmail) {
            newErrors[key] = "Not a valid email!";
          } else {
            newErrors[key] = null;
          }
        }

        if (key !== "email") {
          if (value === "") {
            newErrors[key] = "Input cannot be empty!";
          } else {
            newErrors[key] = null;
          }
        }

        return newErrors;
      });
    });
  }
  return (
    <section className={classes.section}>
      <div className={classes["rotatable-bg"]} />
      <motion.div
        className={classes.text}
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Contact Us</h1>
        <p>
          Ready to take it to the next level? Let{"\u2018"}s talk about your
          project or idea and find out how we can help your business grow. If
          you are looking for unique digital experiences that{"\u2018"}s
          relatable to your users, drop us a line.
        </p>
      </motion.div>
      <ContactForm
        className={classes.form}
        onSubmit={handleSubmit}
        isSubmitted={submittedCorrect}
      >
        <Input
          type="text"
          placeholder="Name"
          onChange={(e) => handleValueChange("name", e)}
          errorMsg={inputErrors.name}
          className={submittedCorrect ? classes["input-disabled"] : ""}
          disabled={submittedCorrect}
        />
        <Input
          type="text"
          placeholder="Email Address"
          onChange={(e) => handleValueChange("email", e)}
          errorMsg={inputErrors.email}
          className={submittedCorrect ? classes["input-disabled"] : ""}
          disabled={submittedCorrect}
        />
        <Input
          type="text"
          placeholder="Phone"
          onChange={(e) => handleValueChange("phone", e)}
          errorMsg={inputErrors.phone}
          className={submittedCorrect ? classes["input-disabled"] : ""}
          disabled={submittedCorrect}
        />
        <Input
          textarea
          placeholder="Your Message"
          onChange={(e) => handleValueChange("message", e)}
          errorMsg={inputErrors.message}
          className={submittedCorrect ? classes["input-disabled"] : ""}
          disabled={submittedCorrect}
        />
      </ContactForm>
    </section>
  );
}
