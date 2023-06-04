import { NavLink } from "react-router-dom"
import "../styles/DesktopNavBar.css"
import "../styles/ClickedButton.css"

export const DesktopNavBar = ({buttonClicked, setButtonClicked}) => {

    const handleClick = (button) => setButtonClicked(button);

    return(
        <div className="desktop-nav-bar-container">
            <div>
                <h1><strong>Ross Kennedy - Full Stack Developer</strong></h1>
            </div>
            <nav className="desktop-nav-link-container">
                <NavLink to="/">Home</NavLink>             
                <NavLink className={buttonClicked === "about-nav-button" ? "clicked-button" : null} onClick={() => handleClick("about-nav-button")} to="/about">About</NavLink>
                <NavLink className={buttonClicked === "skills-nav-button" ? "clicked-button" : null} onClick={() => handleClick("skills-nav-button")} to="/skills">Skills</NavLink>
                <NavLink className={buttonClicked === "portfolio-nav-button" ? "clicked-button" : null} onClick={() => handleClick("portfolio-nav-button")} to="/portfolio">Portfolio</NavLink>
                <NavLink className={buttonClicked === "contact-nav-button" ? "clicked-button" : null} onClick={() => handleClick("contact-nav-button")} to="/contact">Contact</NavLink>
            </nav>
        </div>
    )
}