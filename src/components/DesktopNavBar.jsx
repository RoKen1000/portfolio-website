import { NavLink } from "react-router-dom"
import "../styles/DesktopNavBar.css"
import "../styles/ClickedButton.css"
import { useState } from "react"

export const DesktopNavBar = ({buttonClicked, setButtonClicked}) => {

    // const [buttonClicked, setButtonClicked] = useState("")

    const handleClick = (e) => setButtonClicked(e.target.id);

    return(
        <nav className="desktop-nav-link-container">
            <NavLink className={buttonClicked === "about-nav-button" ? "clicked-button" : null} onClick={handleClick} id="about-nav-button" to="/about">About</NavLink>
            <NavLink className={buttonClicked === "skills-nav-button" ? "clicked-button" : null} onClick={handleClick} id="skills-nav-button" to="/skills">Skills</NavLink>
            <NavLink className={buttonClicked === "portfolio-nav-button" ? "clicked-button" : null} onClick={handleClick} id="portfolio-nav-button" to="/portfolio">Portfolio</NavLink>
            <NavLink className={buttonClicked === "contact-nav-button" ? "clicked-button" : null} onClick={handleClick} id="contact-nav-button" to="/contact">Contact</NavLink>
            <NavLink className={buttonClicked === "home-nav-button" ? "clicked-button" : null} onClick={handleClick} id="home-nav-button" to="/">Home</NavLink>             
        </nav>
    )
}