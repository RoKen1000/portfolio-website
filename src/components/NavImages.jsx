
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../styles/NavImages.css"
import { faCode, faEnvelope, faFolderOpen, faUser } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

export const NavImages = () => {

    return (
        <div className="nav-image-grid">
            <div>
                <Link to="/about">
                    <FontAwesomeIcon icon={faUser} className="icons" size="3x"/>
                </Link>
                <p>About</p>
            </div>
            <div>
                <Link to="/tech-skills">
                    <FontAwesomeIcon icon={faCode} className="icons" size="3x"/>
                </Link>
                <p>Skills</p>
            </div>
            <div>
                <Link to="/projects">
                    <FontAwesomeIcon icon={faFolderOpen} className="icons" size="3x"/>
                </Link>
                <p>Projects</p>
            </div>
            <div>
                <Link to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} className="icons" size="3x"/>
                </Link>
                <p>Contact</p>
            </div>
        </div>
    )
}