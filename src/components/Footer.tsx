import styles from "./Footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        {/* Business Info */}
        <div className={styles["footer-section"]}>
          <p>IBA Construction</p>
          {/* <p>1234 Main Street, San Diego, CA</p> */}
          <p>
            <a href="tel:+8585278989">(858) 527-8989</a> |{" "}
            <a href="mailto:ibaconstruction23@gmail.com">
              ibaconstruction23@gmail.com
            </a>
          </p>
          <p>License #1092544</p>
        </div>

        {/* Quick Links */}
        <div className={styles["footer-section"]}>
          <nav className={styles["nav-links"]}>
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>

        {/* Social Media */}
        <div className={styles["footer-section"]}>
          {/* <a href="https://facebook.com" aria-label="Facebook">
            Facebook
          </a> */}
          <a
            href="https://www.instagram.com/construction.iba?igsh=NTc4MTIwNjQ2YQ=="
            aria-label="Instagram"
          >
            Instagram
          </a>
          {/* <a href="https://linkedin.com" aria-label="LinkedIn">
            LinkedIn
          </a> */}
        </div>
      </div>

      {/* Legal Info */}
      <div className={styles["legal-info"]}>
        <p>
          © {new Date().getFullYear()} IBA Construction. All rights reserved.
        </p>
        <nav className={styles["nav-links"]}>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <span aria-hidden="true">|</span>
          <Link href="/terms">Terms of Service</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
