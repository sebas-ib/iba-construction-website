import Image from "next/image";
import "../legal-pages.css";

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <Image
          src="/assets/pictures/living_room.jpg"
          alt="Sunlit living room interior"
          fill
          priority
          sizes="100vw"
          className="legal-hero-image"
        />
        <div className="legal-title-card">
          <p className="eyebrow">Privacy Policy</p>
          <h1>How we protect and respect your personal information.</h1>
          <p>Transparent data practices you can trust.</p>
        </div>
      </div>

      <div className="legal-content">
        <h2>Effective Date: March 28, 2025</h2>

        <h3>1. Information We Collect</h3>
        <p>
          When you fill out our contact form, we collect your name, email
          address, and any message or information you submit.
        </p>

        <h3>2. How We Use Your Information</h3>
        <p>
          We use your information to respond to inquiries, schedule
          consultations, and improve our website. We do not sell or share your
          personal data with third parties, except as required to fulfill
          services or by law.
        </p>

        <h3>3. Data Security</h3>
        <p>
          We implement reasonable security measures to protect your data.
          However, no method of transmission over the internet is 100% secure.
        </p>

        <h3>4. Cookies & Tracking</h3>
        <p>
          Our website may use cookies or analytics tools to understand user
          behavior and improve our site. You can control cookie preferences
          through your browser settings.
        </p>

        <h3>5. Your Rights</h3>
        <p>
          You may request access to, correction of, or deletion of your data at
          any time by contacting us.
        </p>

        <h3>6. Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact
          us:
        </p>
        <p>
          IBA Construction
          <br />
          (858) 527-8989
          <br />
          ibaconstruction23@gmail.com
          <br />
          License #1092544
        </p>
      </div>
    </div>
  );
}
