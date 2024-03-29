import { faBars, faCode, faEnvelope, faFolderOpen, faHome, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Offcanvas } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import "../styles/MobileNavPanel.css"

export const MobileNavPanel = () => {
    const [show, setShow] = useState(false)
    
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    return(
        <nav>
            <h1><strong>Ross Kennedy</strong></h1>
            <h2><strong>Full Stack Developer</strong></h2>
            <FontAwesomeIcon id="mobile-nav-icon" icon={faBars} onClick={handleShow}/>
            <Offcanvas show={show} onHide={handleClose} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Where to?</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                        <NavLink to="/" className="mobile-nav-link" id="top" onClick={handleClose}>
                            <FontAwesomeIcon icon={faHome} className="mobile-nav-icons" 
                            alt="Icon of a house linking to the home page." size="3x"/>
                            <p>Home</p>
                        </NavLink>
                        <NavLink to="/about" className="mobile-nav-link" onClick={handleClose}>
                            <FontAwesomeIcon icon={faUser} className="mobile-nav-icons"
                            alt="Icon of a person linking to the about page." size="3x"/>
                            <p>About</p>
                        </NavLink>
                        <NavLink to="/skills" className="mobile-nav-link" onClick={handleClose}>
                            <FontAwesomeIcon icon={faCode} className="mobile-nav-icons"
                            alt="Icon of a code bracket linking to the skills page." size="3x"/>
                            <p>Skills</p>
                        </NavLink>
                        <NavLink to="/portfolio" className="mobile-nav-link" onClick={handleClose}>
                            <FontAwesomeIcon icon={faFolderOpen} className="mobile-nav-icons"
                            alt="Icon of a folder linking to the portfolio page." size="3x"/>
                            <p>Portfolio</p>
                        </NavLink>
                </Offcanvas.Body>
            </Offcanvas>
        </nav>
    )
}