
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../styles/HomeNavImages.css"
import { faCode, faEnvelope, faFolderOpen, faUser } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

export const HomeNavImages = () => {

    return (
        <nav>
            <div className="nav-image-grid">
                <div>
                    <Link to="/about">
                        <FontAwesomeIcon icon={faUser} className="icons" size="3x"/>
                    </Link>
                    <p>About</p>
                </div>
                <div>
                    <Link to="/skills">
                        <FontAwesomeIcon icon={faCode} className="icons" size="3x"/>
                    </Link>
                    <p>Skills</p>
                </div>
                <div>
                    <Link to="/portfolio">
                        <FontAwesomeIcon icon={faFolderOpen} className="icons" size="3x"/>
                    </Link>
                    <p>Portfolio</p>
                </div>
                <div>
                    <Link to="/contact">
                        <FontAwesomeIcon icon={faEnvelope} className="icons" size="3x"/>
                    </Link>
                    <p>Contact</p>
                </div>
            </div>
        </nav>
    )
}