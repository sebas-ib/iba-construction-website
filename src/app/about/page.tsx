import "./about.css";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="about">
      {/* Hero Section — as-is */}
      <div className="hero-section">
        <Image
          src="/assets/pictures/new_construction.jpg"
          alt="New construction framing"
          width={1920}
          height={1080}
          priority
        />

        <div className="title-card">
          <h1 className="header">About Us</h1>
          <p>
            We are a team of skilled professionals dedicated to providing
            top-quality construction services.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="our-story">
        <h4>Our Story</h4>
        <h1>Who We Are</h1>
        <div className="story-container">
          <div className="left-side">
            <p>
              IBA Construction was founded with a commitment to delivering
              high-quality, dependable construction services that truly make a
              difference. As a licensed general contractor, we bring years of
              industry expertise to every project—earning a reputation for
              precision, reliability, and client-focused service. Our team is
              driven by a passion for turning visions into reality, building
              functional and beautiful spaces that our clients are proud to call
              their own.
            </p>
          </div>
          <div className="right-side">
            <Image
              src="/assets/pictures/outdoor_painting.jpeg"
              alt="Exterior painting in progress"
              className="section-image"
              width={1200}
              height={800}
            />
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="our-values">
        <h4>Our Values</h4>
        <h1>What We Stand For</h1>
        <div className="our-values-box">
          <div className="values-container">
            <div className="value-item">
              <Image
                src="/assets/icons/integrity.png"
                alt="Integrity"
                className="icon-image"
                width={80}
                height={80}
              />
              <h4>Integrity</h4>
              <p>We maintain honesty and transparency in everything we do.</p>
            </div>
            <div className="value-item">
              <Image
                src="/assets/icons/quality.png"
                alt="Quality"
                className="icon-image"
                width={80}
                height={80}
              />
              <h4>Quality</h4>
              <p>
                We take pride in delivering only the highest quality
                craftsmanship.
              </p>
            </div>
            <div className="value-item">
              <Image
                src="/assets/icons/satisfaction.png"
                alt="Customer Satisfaction"
                className="icon-image"
                width={80}
                height={80}
              />
              <h4>Customer Satisfaction</h4>
              <p>
                Our goal is to exceed our client&apos;s expectations in every
                project.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="contact-section">
        <h1>Contact Us</h1>
        <p>
          Interested in working with us? We&apos;d love to hear from you. Get in
          touch with us today, and let&apos;s build something great together!
        </p>
        <div className="contact-button">
          <Link href="/contact">Get in Touch</Link>
        </div>
      </div>
    </div>
  );
}
