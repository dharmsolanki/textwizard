import React from "react";
import { Link } from "react-router-dom";
import '../custom/custom.css';

export default function PageNotFound() {
  return (
    <div className="page-not-found">
      <h1 className="title">404</h1>
      <p className="message">
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/" className="home-link">
        Go to Homepage
      </Link>
    </div>
  );
}
