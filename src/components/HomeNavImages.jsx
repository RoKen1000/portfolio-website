
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../styles/HomeNavImages.css"
import { faCode, faEnvelope, faFolderOpen, faUser } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

export const HomeNavImages = ({setButtonClicked}) => {

    const handleClick = (button) => setButtonClicked(button);

    return (
        <nav>
            <div className="nav-image-grid">
                <div>
                    <Link to="/about" >
                        <FontAwesomeIcon onClick={() => handleClick("about-nav-button")} icon={faUser} className="icons" size="3x"/>
                    </Link>
                    <p>About</p>
                </div>
                <div>
                    <Link to="/skills" >
                        <FontAwesomeIcon onClick={() => handleClick("skills-nav-button")} icon={faCode} className="icons" size="3x"/>
                    </Link>
                    <p>Skills</p>
                </div>
                <div>
                    <Link to="/portfolio" >
                        <FontAwesomeIcon onClick={() => handleClick("portfolio-nav-button")} icon={faFolderOpen} className="icons" size="3x"/>
                    </Link>
                    <p>Portfolio</p>
                </div>
                <div>
                    <Link to="/contact" >
                        <FontAwesomeIcon onClick={() => handleClick("contact-nav-button")} icon={faEnvelope} className="icons" size="3x"/>
                    </Link>
                    <p>Contact</p>
                </div>
            </div>
        </nav>
    )
}