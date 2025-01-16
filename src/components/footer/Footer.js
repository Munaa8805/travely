import Link from "next/link"
import css from "./footer.module.css" 

export default function Footer() {
    const getYear = new Date().getFullYear()
  return (
    <footer className={css.footer}>
      <p>
        &copy; {getYear} All rights reserved. Developed by{" "}
        <a href="https://www.munaa.dev" target="_blank">www.munaa.dev</a>
      </p>
    </footer>
  );
}
