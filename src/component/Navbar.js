import React, { useEffect, useState } from 'react';
import '../custom/custom.css';
import { Link } from 'react-router-dom';
import { Switch } from '@mui/material';

export default function Navbar({onChangeX}) {
    const [isToggled, setIsToggled] = useState(false);
    const [myStyle, setMyStyle] = useState("light");

    const handleChange = () => {
        const newTheme = !isToggled ? "dark" : "light";
        setIsToggled(!isToggled);
        setMyStyle(newTheme);
        document.body.classList.add(!isToggled ? "dark" : "light");
        document.body.classList.remove(isToggled ? "dark" : "light");
    };

    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${myStyle} bg-${myStyle}`}>
                <Link className="navbar-brand" to="/">TextWizard</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About Us</Link>
                    </li>
                </ul>
                <Switch color="warning" onChange={handleChange} />
            </nav>
        </div>
    );
}