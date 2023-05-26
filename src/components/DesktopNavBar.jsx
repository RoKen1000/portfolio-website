import { NavLink } from "react-router-dom"
import "../styles/DesktopNavBar.css"

export const DesktopNavBar = () => {

    return(
        <nav className="desktop-nav-link-container">
            <NavLink className="desktop-nav-button" to="/about">About</NavLink>
            <NavLink className="desktop-nav-button" to="/tech-skills">Skills</NavLink>
            <NavLink className="desktop-nav-button" to="/portfolio">Portfolio</NavLink>
            <NavLink className="desktop-nav-button" to="/contact">Contact</NavLink>
            <NavLink className="desktop-nav-button" to="/">Home</NavLink>             
        </nav>
    )
}