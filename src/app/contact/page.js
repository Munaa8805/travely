"use client";
import { Fragment, useState } from "react";
import css from "./contact.module.css";
// const Nodemailer = require("nodemailer");
// const { MailtrapTransport } = require("mailtrap");
// const TOKEN = "ebaba667c8cbda74f8add68d2b7e4763";

export default function ContactPage() {
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     subject: "",
  //     summary: "",
  //   });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [summary, setSummary] = useState("");

  async function submitHandler(e) {
    e.preventDefault();

    console.log(name, email, subject, summary);
  }

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  return (
    <Fragment>
      <header>Header</header>
      <main className={css.main}>
        <form className={css.form} onSubmit={submitHandler}>
          <div className={css.wrapper}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              minLength={2}
              required
              placeholder="Write your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={css.wrapper}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              placeholder="test@test.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={css.wrapper}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              minLength={2}
              id="subject"
              required
              name="subject"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className={css.wrapper}>
            <label htmlFor="summary">Message</label>
            <textarea
              text="text"
              minLength={10}
              id="summary"
              name="summary"
              required
              placeholder="Message"
              rows={4}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            ></textarea>
          </div>
          <div className={css.btnwrapper}>
            <button
              type="text"
              onClick={() => {
                setName("");
                setEmail("");
                setSubject("");
                setSummary("");
              }}
            >
              Clear
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </main>
    </Fragment>
  );
}
