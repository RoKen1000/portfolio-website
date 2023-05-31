import { NavLink } from "react-router-dom"
import "../styles/DesktopNavBar.css"
import "../styles/ClickedButton.css"

export const DesktopNavBar = ({buttonClicked, setButtonClicked}) => {

    const handleClick = (button) => setButtonClicked(button);

    return(
        <nav className="desktop-nav-link-container">
            <NavLink className={buttonClicked === "about-nav-button" ? "clicked-button" : null} onClick={() => handleClick("about-nav-button")} to="/about">About</NavLink>
            <NavLink className={buttonClicked === "skills-nav-button" ? "clicked-button" : null} onClick={() => handleClick("skills-nav-button")} to="/skills">Skills</NavLink>
            <NavLink className={buttonClicked === "portfolio-nav-button" ? "clicked-button" : null} onClick={() => handleClick("portfolio-nav-button")} to="/portfolio">Portfolio</NavLink>
            <NavLink className={buttonClicked === "contact-nav-button" ? "clicked-button" : null} onClick={() => handleClick("contact-nav-button")} to="/contact">Contact</NavLink>
            <NavLink to="/">Home</NavLink>             
        </nav>
    )
}