import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import '../custom/custom.css';
import $ from "jquery";

export default function Navbar() {
    const [isToggled, setIsToggled] = useState(false);

    const handleChange = () => {
        setIsToggled(!isToggled);
        if (!isToggled) {
            document.body.style.background = "#1E1E1E";
            document.body.style.color = "white";
            $("#myInput").css("background-color", "gray");
            $("#myInput").css("color", "white");
        } else {
            document.body.style.background = "";
            document.body.style.color = "";
            $("#myInput").css("background-color", "");
            $("#myInput").css("color", "");
        }
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">TextWizard</a>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" onChange={handleChange} role="switch" id="flexSwitchCheckChecked" checked={isToggled} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                        <FontAwesomeIcon style={{ color: "white" }} icon={isToggled ? faSun : faMoon} />
                    </label>
                </div>
            </nav>
        </div>
    );
}