
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
                        <FontAwesomeIcon onClick={() => handleClick("about-nav-button")} icon={faUser} className="icons" alt="Icon of a person linking to the about page." size="3x"/>
                    </Link>
                    <p>About</p>
                </div>
                <div>
                    <Link to="/skills" >
                        <FontAwesomeIcon onClick={() => handleClick("skills-nav-button")} icon={faCode} className="icons" alt="Icon of a code bracket linking to the skills page." size="3x"/>
                    </Link>
                    <p>Skills</p>
                </div>
                <div>
                    <Link to="/portfolio" >
                        <FontAwesomeIcon onClick={() => handleClick("portfolio-nav-button")} icon={faFolderOpen} alt="Icon of a folder linking to the portfolio page." className="icons" size="3x"/>
                    </Link>
                    <p>Portfolio</p>
                </div>
                <div>
                    <Link to="/contact" >
                        <FontAwesomeIcon onClick={() => handleClick("contact-nav-button")} icon={faEnvelope} className="icons" alt="Icon of an envelope linking to the contact page." size="3x"/>
                    </Link>
                    <p>Contact</p>
                </div>
            </div>
        </nav>
    )
}