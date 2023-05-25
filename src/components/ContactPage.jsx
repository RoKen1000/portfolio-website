import {motion} from "framer-motion"
import { Button } from "react-bootstrap"
import "../styles/ContactPage.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export const ContactPage = () => {

    return(
        <main>
            <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                >
                <h1 className="page-heading">Contact</h1>
                <form className="email-form">
                    <label htmlFor="name">Name</label>
                    <input type="text" required></input>
                    <label htmlFor="email">Email</label>
                    <input type="email" required></input>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" required></input>
                    <label htmlFor="message">Message</label>
                    <textarea rows={6} cols={30} maxLength={2000} required></textarea>
                    <Button type="submit">Submit</Button>
                </form>
                <div className="social-icons">
                    <a href="https://github.com/RoKen1000">
                        <FontAwesomeIcon icon={faGithub} size="3x"/>
                    </a>
                    <a href="https://www.linkedin.com/in/ross-kennedy-2735a7237/">
                        <FontAwesomeIcon icon={faLinkedin} size="3x"/>
                    </a>
                </div>
            </motion.div>
        </main>
    )
}