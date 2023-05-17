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
        <div>
            <FontAwesomeIcon icon={faBars} onClick={handleShow}/>
            <Offcanvas show={show} onHide={handleClose} closeButton>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Where to?</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                        <NavLink to="/about" className="mobile-nav-link" onClick={handleClose} id="top">
                            <FontAwesomeIcon icon={faUser} className="mobile-nav-icons" size="3x"/>
                            <p>About</p>
                        </NavLink>
                        <NavLink to="/tech-skills" className="mobile-nav-link" onClick={handleClose}>
                            <FontAwesomeIcon icon={faCode} className="mobile-nav-icons" size="3x"/>
                            <p>Skills</p>
                        </NavLink>
                        <NavLink to="/projects" className="mobile-nav-link" onClick={handleClose}>
                            <FontAwesomeIcon icon={faFolderOpen} className="mobile-nav-icons" size="3x"/>
                            <p>Projects</p>
                        </NavLink>
                        <NavLink to="/contact" className="mobile-nav-link" onClick={handleClose}>
                            <FontAwesomeIcon icon={faEnvelope} className="mobile-nav-icons" size="3x"/>
                            <p>Contact</p>
                        </NavLink>
                        <NavLink to="/" className="mobile-nav-link" onClick={handleClose}>
                            <FontAwesomeIcon icon={faHome} className="mobile-nav-icons" size="3x"/>
                            <p>Home</p>
                        </NavLink>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}