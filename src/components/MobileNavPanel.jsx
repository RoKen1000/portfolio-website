import { faBars, faCode, faEnvelope, faFolderOpen, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Offcanvas } from "react-bootstrap"
import { NavLink } from "react-router-dom"

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
                    <div>
                        <NavLink to="/about">
                            <FontAwesomeIcon icon={faUser} className="icons" size="3x"/>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/tech-skills">
                            <FontAwesomeIcon icon={faCode} className="icons" size="3x"/>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/projects">
                            <FontAwesomeIcon icon={faFolderOpen} className="icons" size="3x"/>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/contact">
                            <FontAwesomeIcon icon={faEnvelope} className="icons" size="3x"/>
                        </NavLink>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}