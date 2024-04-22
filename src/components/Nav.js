import React from "react";
import littlelemon_logo from "../images/littlelemon_logo.png";

const Nav = () => {
    return(
        <nav>
            <img src={littlelemon_logo} alt="Little Lemon Logo" />
            <ul>
                <li><a href="https://www.google.com">Home</a></li>
                <li><a href="https://www.google.com">About</a></li>
                <li><a href="https://www.google.com">Menu</a></li>
                <li><a href="https://www.google.com">Reservations</a></li>
                <li><a href="https://www.google.com">Order Online</a></li>
                <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Login</a></li>
            </ul>
        </nav>
    );
};

export default Nav;
