import {motion} from "framer-motion"
import { Button } from "react-bootstrap"
import "../styles/ContactPage.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export const ContactPage = () => {

    return(
        <footer>       
                <div className="social-icons">
                    <a href="https://github.com/RoKen1000" rel="noreferrer" target="_blank" name="GitHub">
                        <FontAwesomeIcon icon={faGithub} size="3x" alt="GitHub"/>
                    </a>
                    <a href="https://www.linkedin.com/in/ross-kennedy-2735a7237/" rel="noreferrer" target="_blank" name="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} size="3x" alt="LinkedIn"/>
                    </a>
                </div>
        </footer>
    )
}