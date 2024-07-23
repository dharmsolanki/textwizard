import React from 'react';

export default function About() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>About Us</h1>
      <section>
        <h2>Our Story</h2>
        <p>
          Welcome to TextWizard, your number one source for all things text manipulation. We're dedicated to providing you the best of text tools, with a focus on dependability, customer service, and uniqueness.
        </p>
        <p>
          Founded in 2024 by a passionate team of developers, TextWizard has come a long way from its beginnings. When we first started out, our passion for creating innovative and easy-to-use text manipulation tools drove us to start our own business.
        </p>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Our Mission</h2>
        <p>
          At TextWizard, our mission is simple: to make text manipulation easy and accessible for everyone. Whether you're a student, professional, or hobbyist, our tools are designed to help you achieve your text processing needs efficiently and effectively.
        </p>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Our Values</h2>
        <ul>
          <li><strong>Innovation:</strong> Continuously improving our tools to provide the best user experience.</li>
          <li><strong>Customer Focus:</strong> Listening to our users and adapting to their needs.</li>
          <li><strong>Quality:</strong> Ensuring our products are reliable and effective.</li>
        </ul>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Meet the Team</h2>
        <p>
          Our team is a group of dedicated professionals who are passionate about technology and innovation. We work tirelessly to develop and improve our tools to meet the needs of our diverse user base.
        </p>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Contact Us</h2>
        <p>
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us. We're here to help!
        </p>
        <p>Email: support@textwizard.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </section>

      <section style={{ marginTop: '20px', textAlign: 'center' }}>
        <p>
          Sincerely,<br />
          <strong>The TextWizard Team</strong>
        </p>
      </section>
    </div>
  );
}
