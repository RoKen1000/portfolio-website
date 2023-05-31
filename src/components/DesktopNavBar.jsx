import { NavLink } from "react-router-dom"
import "../styles/DesktopNavBar.css"
import "../styles/ClickedButton.css"
import { useState } from "react"

export const DesktopNavBar = () => {

    const [buttonClicked, setButtonClicked] = useState("")

    const handleClick = (e) => setButtonClicked(e.target.id);

    return(
        <nav className="desktop-nav-link-container">
            <NavLink className={buttonClicked === "button-1" ? "clicked-button" : null} onClick={handleClick} id="button-1" to="/about">About</NavLink>
            <NavLink className={buttonClicked === "button-2" ? "clicked-button" : null} onClick={handleClick} id="button-2" to="/skills">Skills</NavLink>
            <NavLink className={buttonClicked === "button-3" ? "clicked-button" : null} onClick={handleClick} id="button-3"to="/portfolio">Portfolio</NavLink>
            <NavLink className={buttonClicked === "button-4" ? "clicked-button" : null} onClick={handleClick} id="button-4"to="/contact">Contact</NavLink>
            <NavLink className={buttonClicked === "button-5" ? "clicked-button" : null} onClick={handleClick} id="button-5"to="/">Home</NavLink>             
        </nav>
    )
}