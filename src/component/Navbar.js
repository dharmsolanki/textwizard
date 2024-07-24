import React, { useState } from 'react';
import '../custom/custom.css';
import { Link } from 'react-router-dom';
import { Switch } from '@mui/material';

export default function Navbar() {
    const [isToggled, setIsToggled] = useState(false);
    const [myStyle, setMyStyle] = useState("light");

    const handleChange = () => {
        setIsToggled(!isToggled);
        if (!isToggled) {
            setMyStyle("dark")
        } else {
            setMyStyle("light")        
        }
    };

    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${myStyle} bg-${myStyle}`}>
                <Link className="navbar-brand" to="/">TextWizard</Link>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link class="nav-link" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/about">About Us</Link>
                    </li>
                </ul>
                <Switch color="warning" onChange={handleChange} />
            </nav>
        </div>
    );
}