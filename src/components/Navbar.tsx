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
          <Link href="/home">HOME</Link>
        </li>
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
        <li>
          <Link href="/services">SERVICES</Link>
        </li>
        <li>
          <Link href="/gallery">GALLERY</Link>
        </li>
        <li>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>

      <div className={styles.navRight}>
        <div className={styles.contactButton}>
          <Link href="/contact">CONTACT</Link>
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
                HOME
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={toggleMenu}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="/services" onClick={toggleMenu}>
                SERVICES
              </Link>
            </li>
            <li>
              <Link href="/gallery" onClick={toggleMenu}>
                GALLERY
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={toggleMenu}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
