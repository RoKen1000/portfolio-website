import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import { Card } from "react-bootstrap"
import ncGamesLogo from "../images/logo.png"
import mydLogo from "../images/mydLogo.png"
import "../styles/Portfolio.css"
import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

export const Portfolio = () => {

    const navigate = useNavigate()

    return(
        <main className="portfolio-page">
            <motion.div
                    className="landing-page"
                    initial={{opacity: 0}}
                    animate={{opacity: 2}}
                    exit={{opacity: 0}}
                > 
                <h1>Portfolio</h1>
                <Container className="portfolio-grid">
                    <Row xs={1} sm={1} md={1} lg={2}>
                        <Col>
                            <Card className="portfolio-cards">
                                <Card.Img variant="top" src={ncGamesLogo} id="nc-games-logo"/>
                                <Card.Body>
                                    <Card.Title><strong>Board Game Review Website</strong></Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, reiciendis mollitia beatae hic nulla aut et, impedit consequuntur sapiente quas omnis quo? Culpa reiciendis mollitia ipsam aut iste ab non.
                                    </Card.Text>
                                    <Button type="button" onClick={() => navigate("/portfolio/board-game-reviews")} variant="primary">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="portfolio-cards">
                                <Card.Img variant="top" src={mydLogo} id="myd-logo"/>
                                <Card.Body>
                                    <Card.Title><strong>Geo-Data To Do List App</strong></Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, reiciendis mollitia beatae hic nulla aut et, impedit consequuntur sapiente quas omnis quo? Culpa reiciendis mollitia ipsam aut iste ab non.
                                    </Card.Text>
                                    <Button type="button" onClick={() => navigate("/portfolio/map-your-day")}  variant="primary">Learn More</Button>
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