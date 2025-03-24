import "./home.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <img src="/home_image.webp" alt="Remodeled kitchen" />

        <div className="title-card">
          <h1 className="header">Excellence in Every Build</h1>
          <p>
            Innovative designs, meticulous craftsmanship, and unmatched quality.
          </p>
        </div>
      </div>

      <div className="services">
        <h4>What We Do?</h4>
        <h1>Our Services</h1>

        <div className="service-container">
          <div className="service-item">
            <img
              src="/assets/new_construction.jpg"
              alt="New Construction"
              className="service-img"
            />
            <div className="service-info">
              <h4>New Construction</h4>
              <p>Building your dream from the ground up.</p>
            </div>
          </div>

          <div className="service-item">
            <img
              src="/assets/new_construction.jpg"
              alt="Additions"
              className="service-img"
            />
            <div className="service-info">
              <h4>Additions</h4>
              <p>Expanding your space to meet your growing needs.</p>
            </div>
          </div>

          <div className="service-item">
            <img
              src="/assets/new_construction.jpg"
              alt="Remodeling"
              className="service-img"
            />
            <div className="service-info">
              <h4>Remodeling</h4>
              <p>Updating and refreshing your existing space.</p>
            </div>
          </div>

          <div className="service-item">
            <img
              src="/assets/new_construction.jpg"
              alt="Water Damage Repairs"
              className="service-img"
            />
            <div className="service-info">
              <h4>Water Damage Repairs</h4>
              <p>Restoring your property after water damage.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="area-section">
        <div className="area-left">
          <h1>Our Service Area</h1>
          <p>
            IBA Construction is a trusted, licensed, and insured general
            contractor dedicated to transforming homes with expert renovations
            and remodeling. Based in San Diego, we proudly serve the city and
            surrounding communities, delivering quality craftsmanship and
            personalized service tailored to each project.
          </p>
        </div>

        <div className="area-right">
          <img
            src="/assets/san-diego.jpg"
            alt="san diego skyline"
            className="service-img"
          />
        </div>
      </div>

      <div className="build-section">
        <div className="area-left">
          <img
            src="/assets/house.jpg"
            alt="san diego skyline"
            className="service-img"
          />
        </div>

        <div className="area-right">
          <h1>Ready to Build With Us?</h1>
          <p>
            Every great project starts with an idea. Whether you&apos;re
            building a new home, expanding your space, or creating something
            entirely unique, we&apos;re here to turn your vision into reality.
            Let&apos;s build something incredible together.
          </p>
          <div className="contact-button">
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
