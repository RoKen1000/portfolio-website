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
import calc from "../images/calc.png"
import flag from "../images/italian-flag.png"
import binoculars from "../images/binoculars.png"

export const Portfolio = () => {

    const {pathname} = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        window.scroll(0, 0)
    }, [pathname])

    return(
        <main className="portfolio-page">
            <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                > 
                <h1 className="page-heading">Portfolio</h1>
                <Container>
                    <Row xs={1} sm={1} md={1} lg={2}>
                        <Col>
                            <Card className="portfolio-cards">
                                <Card.Img variant="top" src={ncGamesLogo} id="nc-games-logo"/>
                                <Card.Body>
                                    <Card.Title><strong>NC Games<br></br>Board Game Review Website</strong></Card.Title>
                                    <Card.Text>
                                        This full-stack CRUD website written in JavaScript was a project I created as part of the Northcoders Boot Camp. The website allows users to read and interact with board-game reviews.
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
                                        This app allows users to create location-based to do lists. Users can place task locations on a map so they can track what they need to do and where a task needs to be done when out and about. 
                                    </Card.Text>
                                    <Button type="button" onClick={() => navigate("/portfolio/map-your-day")}  variant="primary">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row xs={1} sm={1} md={1} lg={2}>
                        <Col>
                            <Card className="portfolio-cards" id="second-row-card">
                                <Card.Img variant="top" src={calc} id="calc"/>
                                <Card.Body>
                                    <Card.Title><strong>TypeScript Calculator</strong></Card.Title>
                                    <Card.Text>
                                        My first project written in TypeScript. This calculator app can calculate simple arithmetic as well as more complex calculations while following BIDMAS order of operations.
                                    </Card.Text>
                                    <Button className="portfolio-card-buttons" type="button" onClick={() => navigate("/portfolio/typescript-calculator")} variant="primary">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="portfolio-cards">
                                <Card.Img variant="top" src={flag} id="italian-flag"/>
                                <Card.Body>
                                    <Card.Title><strong>Italian Conjugation Practice Website</strong></Card.Title>
                                    <Card.Text>
                                        Written in C# and using ASP.NET MVC, this website allows users to practice Italian verb conjugations in different tenses. 
                                    </Card.Text>
                                    <Button className="portfolio-card-buttons" type="button" onClick={() => navigate("/portfolio/conjugation-website")} variant="primary">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                    <Col>
                        <Card className="portfolio-cards" id="last-card">
                            <Card.Img variant="top" src={binoculars} id="binoculars"/>
                                <Card.Body>
                                    <Card.Title><strong>Opticron Website</strong></Card.Title>
                                    <Card.Text>
                                        This is a main page for a commercial website written in C# and ASP.NET MVC. The project also features a content management page to manipulate what appears on the page. 
                                    </Card.Text>
                                    <Button className="portfolio-card-buttons" type="button" onClick={() => navigate("/portfolio/opticron")} variant="primary">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>                 
                    </Row>                    
                    <Row>
                        <Col>
                            <Card className="portfolio-cards" id="website-portfolio-card">
                                <Card.Body>
                                    <Card.Title><strong>This Website</strong></Card.Title>
                                    <Card.Text>
                                        This website has been created using JavaScript, React, React Bootstrap, JSX, Framer Motion and CSS. <a rel="noreferrer" target="_blank" href="https://github.com/RoKen1000/portfolio-website">View the repo here.</a>
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