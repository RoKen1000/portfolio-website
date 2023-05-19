import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import { Card } from "react-bootstrap"
import ncGamesLogo from "../images/logo.png"
import mydLogo from "../images/mydLogo.png"
import "../styles/Portfolio.css"
import Button from "react-bootstrap/Button"
import { useNavigate, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { useEffect } from "react"

export const Portfolio = () => {

    const {pathname} = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        window.scroll(0, 0)
    }, [pathname])

    return(
        <main className="portfolio-page">
            <motion.div
                    className="landing-page"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                > 
                <h1>Portfolio</h1>
                <Container className="portfolio-grid">
                    <Row xs={1} sm={1} md={1} lg={2}>
                        <Col>
                            <Card className="portfolio-cards">
                                <Card.Img variant="top" src={ncGamesLogo} id="nc-games-logo"/>
                                <Card.Body>
                                    <Card.Title><strong>NC Games<br></br>Board Game Review Website</strong></Card.Title>
                                    <Card.Text>
                                        This <strong>full-stack CRUD</strong> website written in <strong>JavaScript</strong> was a project I created as part of the Northcoders Boot Camp. The website allows users to read and filter board-game reviews. They can also vote and post comments on the reviews. This project uses <strong>PostgreSQL</strong> for the back-end database and <strong>React</strong> for the front-end.
                                    </Card.Text>
                                    <Button type="button" onClick={() => navigate("/portfolio/board-game-reviews")} variant="primary">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="portfolio-cards">
                                <Card.Img variant="top" src={mydLogo} id="myd-logo"/>
                                <Card.Body>
                                    <Card.Title><strong>Map Your Day<br></br>Map-Based To Do List App</strong></Card.Title>
                                    <Card.Text>
                                        This was a group project as part of the Northcoders Boot Camp. The app allows users to create to do lists and to place the task locations on a map so they can track what they need to do when on the go. This <strong>JavaScript</strong> project uses <strong>Firebase</strong> for the back-end and <strong>React</strong> for the front-end. The <strong>MapBox API</strong> is used to provide the map and geodata.
                                    </Card.Text>
                                    <Button type="button" onClick={() => navigate("/portfolio/map-your-day")}  variant="primary">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className="portfolio-cards" id="website-portfolio-card">
                                <Card.Body>
                                    <Card.Title><strong>This Website</strong></Card.Title>
                                    <Card.Text>
                                        This website has been created using <strong>JavaScript, React, React Bootstrap, JSX, Framer Motion and CSS</strong>.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <h2>More to come!</h2>
            </motion.div>
        </main>
    )
}