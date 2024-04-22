import React from "react";
import food1 from "../images/food1.avif";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return(
        <header className="main-header">
            <section className="header-content">
                <div className="header-info">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. Join us for an unforgettable dining experience!</p>
                    <Link to="/Booking"><button aria-label="Reserve Table">Reserve Table</button></Link>
                </div>
                <div className="header-image">
                    <img src={food1} alt="Delicious Food" />
                </div>
            </section>
        </header>
    );
};

export default Header;
