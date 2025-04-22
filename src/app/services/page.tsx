import "./services.css";
import Link from "next/link";

export default function Services() {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <div className="hero-section">
        <img src="/assets/pictures/pp-home.jpg" alt="Modern home build" />
        <div className="title-card">
          <h1 className="header">Our Services</h1>
          <p>
            We offer a full range of professional construction services tailored
            to meet your unique vision and needs.
          </p>
        </div>
      </div>

      {/* Service Sections */}
      <div className="services-wrapper">
        {/* New Construction */}
        <div className="service-block" id="new-construction">
          <div className="service-text">
            <h2>New Construction</h2>
            <p>
              <i>
                Build from the ground up with precision, integrity, and lasting
                quality.
              </i>
            </p>
            <p>
              At IBA Construction, we specialize in building high-quality,
              custom homes from the ground up. Our new construction services
              include site preparation, planning, structural engineering, and
              complete project management. We work closely with clients to
              ensure every detail, from layout and materials to finishes and
              systems, is executed to perfection. Whether you&apos;re building a
              single-family home or a multi-unit development, our team delivers
              with professionalism, precision, and a passion for craftsmanship.
            </p>
            <p>
              <i>Start your dream home with a team you can trust.</i>
            </p>
          </div>
          <div className="service-image">
            <img
              src="/assets/pictures/outdoor-painting.jpeg"
              alt="New construction"
            />
          </div>
        </div>

        {/* Additions */}
        <div className="service-block reverse" id="additions">
          <div className="service-text">
            <h2>Additions</h2>
            <p>
              <i>Expand your space without compromising style or structure.</i>
            </p>
            <p>
              Need more room to grow? Our additions services are designed to
              blend seamlessly with your existing home while enhancing its
              comfort and function. From outdoor areas, extra bedrooms, expanded
              kitchens to second-story builds, we manage everything—design,
              permits, and construction—with care and precision. We ensure the
              new space complements your home and adds long-term value.
            </p>
            <p>
              <i>Let’s make your home work harder for your lifestyle.</i>
            </p>
          </div>
          <div className="service-image">
            <img
              src="/assets/pictures/outdoor-pathway.jpeg"
              alt="Home addition"
            />
          </div>
        </div>

        {/* Remodeling */}
        <div className="service-block" id="remodeling">
          <div className="service-text">
            <h2>Remodeling</h2>
            <p>
              <i>
                Reimagine your home with thoughtful upgrades and expert
                craftsmanship.
              </i>
            </p>
            <p>
              Whether you&apos;re updating a single room or rethinking your
              entire layout, our remodeling services are tailored to bring fresh
              life to your space. We specialize in kitchens, bathrooms, living
              spaces, and full interior renovations—handling everything from
              design consultation to the final finishes. With an eye for detail
              and a commitment to minimal disruption, we transform outdated
              spaces into modern, functional environments.
            </p>
            <p>
              <i>Turn the house you have into the home you love.</i>
            </p>
          </div>
          <div className="service-image">
            <img
              src="/assets/pictures/outdoor-remodeling.jpeg"
              alt="Remodeling"
            />
          </div>
        </div>

        {/* Water Damage Repairs */}
        <div className="service-block reverse" id="water-damage-repairs">
          <div className="service-text">
            <h2>Water Damage Repairs</h2>
            <p>
              <i>
                Restore your home safely, thoroughly, and with lasting results.
              </i>
            </p>
            <p>
              Water damage can be sudden and stressful—but we&apos;re here to
              help. Our team responds quickly to assess the situation, remove
              compromised materials, dry the area, and fully restore the space.
              We handle everything from flooring and drywall replacement to mold
              remediation and structural repairs. With licensed professionals
              and proven processes, we ensure your home is clean, safe, and
              secure again.
            </p>
            <p>
              <i>Do&apos;nt just repair damage—rebuild with confidence.</i>
            </p>
          </div>
          <div className="service-image">
            <img
              src="/assets/new_construction.jpg"
              alt="Water damage repairs"
            />
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
