import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">
          <img
            src="/assets/iba-logo-cropped.png"
            alt="Our team working on a site"
            className={`${styles.logoImage}`}
          />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <ul className={`${styles.navLinks} ${styles.desktopNavLinks}`}>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <div className={styles.navRight}>
        <div className={styles.contactButton}>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Hamburger Menu */}
        <div className={styles.hamburgerMenu}>
          <div
            className={`${styles.hamburgerIcon} ${
              isMenuOpen ? styles.open : ""
            }`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul
            className={`${styles.hamburgerLinks} ${
              isMenuOpen ? styles.open : ""
            }`}
          >
            <li>
              <Link href="/home" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/services" onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/gallery" onClick={toggleMenu}>
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
