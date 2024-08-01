import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      navigate("/");
    }
  }, []);
  return (
    <div className="container my-5">
      <div className="title text-left">
        <h5>About Us</h5>
        <p>
          Welcome to TextWizard, your ultimate destination for all your text
          manipulation needs. Whether you're looking to convert text to
          upper-case, lower-case, copy text with ease, or clear text quickly,
          we've got you covered. Our tools are designed to make text processing
          simple and efficient for everyone.
        </p>
      </div>
      <div className="title text-left">
        <h5>Our Story</h5>
        <p>
          Founded in 2024 by a dedicated team of developers, TextWizard was born
          out of a passion for creating innovative and user-friendly text
          manipulation tools. We understand the importance of having reliable
          and accessible tools, whether you're a student, professional, or just
          someone who needs to manage text efficiently. Our journey began with a
          single idea: to simplify text manipulation for everyone.
        </p>
      </div>
      <div className="title text-left">
        <h5>Our Mission</h5>
        <p>
          At TextWizard, our mission is straightforward: to make text
          manipulation easy and accessible for everyone. We aim to provide
          top-notch tools that save you time and effort, allowing you to focus
          on what matters most. Our commitment to quality and user satisfaction
          drives us to continuously improve and expand our services.
        </p>
      </div>
      <div className="title text-left">
        <h5>Meet the Team</h5>
        <p>
          Our team is a group of passionate professionals who are dedicated to
          technology and innovation. We work tirelessly to develop and improve
          our tools, ensuring that they meet the diverse needs of our users. Our
          commitment to excellence is reflected in every aspect of our work.
        </p>
      </div>
      <div className="title text-left">
        <h5>Our Values</h5>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Innovation:</b> We are constantly seeking new ways to enhance our
            tools and provide the best user experience possible.
          </li>
          <li className="list-group-item">
            <b>Customer Focus:</b> Your feedback is invaluable to us. We listen
            to our users and adapt our services to meet your needs.
          </li>
          <li className="list-group-item">
            <b>Quality:</b> We are dedicated to ensuring that our products are
            reliable, effective, and easy to use.
          </li>
        </ul>
      </div>
      <div className="title text-left my-2">
        <p>Sincerely,</p>
        <h4>The TextWizard Team</h4>
      </div>
    </div>
  );
}
