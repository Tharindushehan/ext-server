import React from "react";

function Header() {                 // Navidation Bar
    return (
        <div className="topnav">
            <a className="active" href="#home">Home</a>
            <a href="#contact">About</a>
            <a href="#about">Contact Us</a>
        </div>

    )
}

export default Header