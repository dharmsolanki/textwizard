import React, { useEffect, useState } from "react";
import "../custom/custom.css";
import { Link, useNavigate } from "react-router-dom";
import { Switch } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);
  const newTheme = checked ? "dark" : "light";

  const handleChange = () => {
    setChecked(!checked);
    window.localStorage.setItem("setToggle", !checked);
    document.body.classList.add(!checked ? "dark" : "light");
    document.body.classList.remove(checked ? "dark" : "light");
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  useEffect(() => {
    const getLocalStorage = window.localStorage.getItem("setToggle");
    if (getLocalStorage === "true") {
      setChecked(true);
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      setChecked(false);
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, []);

  return (
    <>
      <div>
        <nav
          className={`navbar navbar-expand-lg navbar-${newTheme} bg-${newTheme}`}
        >
          <Link
            className="navbar-brand"
            to={localStorage.getItem("isLoggedIn") ? "user/home" : "/"}
          >
            TextWizard
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link"
                to={localStorage.getItem("isLoggedIn") ? "user/home" : "/"}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              {localStorage.getItem("isLoggedIn") ? (
                <Link
                  className="nav-link"
                  to={localStorage.getItem("isLoggedIn") ? "user/about" : "/"}
                >
                  About Us
                </Link>
              ) : (
                ""
              )}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              {localStorage.getItem("isLoggedIn") ? (
                <Link className="nav-link" to="/" onClick={handleLogout}>
                  Logout
                </Link>
              ) : (
                <Link className="nav-link" to="/">
                  Login
                </Link>
              )}
            </li>
            <li className="nav-item">
              <Switch
                color="warning"
                onChange={handleChange}
                checked={checked}
              />
              <FontAwesomeIcon icon={!checked ? faMoon : faSun} />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
