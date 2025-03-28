import "./services.css";
// import Link from "next/link";

export default function Services() {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <div className="hero-section">
        <img src="/assets/house.jpg" alt="Modern home build" />
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
              At IBA Construction, we specialize in building high-quality,
              custom homes from the ground up. Our new construction services
              include site preparation, architectural planning, structural
              engineering, and complete project management. We work closely with
              clients, architects, and designers to ensure every detail, from
              layout and materials to finishes and systems, is executed to
              perfection. Whether you&apos;re building a single-family home or a
              multi-unit development, our team delivers with professionalism,
              precision, and a passion for craftsmanship.
            </p>
          </div>
          <div className="service-image">
            <img src="/assets/new_construction.jpg" alt="New construction" />
          </div>
        </div>

        {/* Additions */}
        <div className="service-block reverse" id="additions">
          <div className="service-text">
            <h2>Additions</h2>
            <p>
              Growing families and evolving lifestyles often call for additional
              space, and we make that happen seamlessly. Our home addition
              services include building extra bedrooms, expanding living areas,
              creating second stories, and integrating new spaces like sunrooms
              or garages. We take pride in designing additions that not only
              expand square footage but enhance the beauty, functionality, and
              value of your home while maintaining structural integrity and
              design consistency. From foundation to final inspection, we handle
              every aspect with care.
            </p>
          </div>
          <div className="service-image">
            <img src="/assets/new_construction.jpg" alt="Home addition" />
          </div>
        </div>

        {/* Remodeling */}
        <div className="service-block" id="remodeling">
          <div className="service-text">
            <h2>Remodeling</h2>
            <p>
              Our remodeling services are designed to reimagine and reinvigorate
              your living spaces. Whether it&apos;s a modern kitchen upgrade, a
              luxurious bathroom transformation, or a full interior renovation,
              we combine creative vision with top-tier construction practices.
              We focus on improving aesthetics, increasing energy efficiency,
              and optimizing space. With an emphasis on minimal disruption and
              maximum satisfaction, our remodeling process ensures a smooth
              experience with results that elevate how you live in your home.
            </p>
          </div>
          <div className="service-image">
            <img src="/assets/new_construction.jpg" alt="Remodeling" />
          </div>
        </div>

        {/* Water Damage Repairs */}
        <div className="service-block reverse" id="water-damage-repairs">
          <div className="service-text">
            <h2>Water Damage Repairs</h2>
            <p>
              Water damage can compromise both the appearance and safety of your
              property. Our specialized team acts quickly to assess the damage,
              remove affected materials, dry and sanitize the area, and restore
              the space to better-than-before condition. Whether caused by
              leaks, floods, or plumbing failures, our water damage repair
              services include mold remediation, structural drying, drywall and
              flooring replacement, and full reconstruction. We don&apos;t just
              repair damage, we restore peace of mind with expert care and
              lasting results.
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
    </div>
  );
}
