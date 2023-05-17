
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../styles/NavImages.css"
import Button from "react-bootstrap/Button"
import { faCode, faEnvelope, faFolderOpen, faUser } from "@fortawesome/free-solid-svg-icons"


export const NavImages = () => {

    return (
        <div className="nav-image-grid">
            <div>
                <FontAwesomeIcon icon={faUser} className="icons" size="3x"/>
                <p>About</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faCode} className="icons" size="3x"/>
                <p>Skills</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faFolderOpen} className="icons" size="3x"/>
                <p>Projects</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faEnvelope} className="icons" size="3x"/>
                <p>Contact</p>
            </div>
        </div>
    )
}