import "../styles/TechSkills.css"
import { Card } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookOpenReader, faCodeBranch, faDatabase, faFlask, faPaintRoller, faPeopleGroup } from "@fortawesome/free-solid-svg-icons"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import { motion } from "framer-motion"

export const TechSkills = () => {

    return(
        <main>
            <motion.div
                className="landing-page"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >   
                <h1>Tech Skills</h1>
                <Container className="tech-card-grid" fluid>
                    <Row xs={1} sm={1} md={2} lg={3}>
                        <Col>
                            <Card className="tech-cards">
                                <Card.Body>
                                    <Card.Title><strong>Back-end</strong></Card.Title>
                                        <FontAwesomeIcon icon={faDatabase} size="4x" id="icon" /><br></br>
                                    <Card.Text >
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At odit quidem nostrum voluptatum quaerat repellat impedit, commodi perferendis veritatis pariatur maxime atque aliquid corporis autem, iste quia? Voluptates, veritatis dolorem?
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="tech-cards">
                                <Card.Body>
                                    <Card.Title><strong>Version Control</strong></Card.Title>
                                        <FontAwesomeIcon icon={faCodeBranch} size="4x" id="icon" /><br></br>
                                    <Card.Text >
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At odit quidem nostrum voluptatum quaerat repellat impedit, commodi perferendis veritatis pariatur maxime atque aliquid corporis autem, iste quia? Voluptates, veritatis dolorem?
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="tech-cards">
                                <Card.Body>
                                    <Card.Title><strong>Front-end</strong></Card.Title>
                                        <FontAwesomeIcon icon={faPaintRoller} size="4x" id="icon" /><br></br>
                                    <Card.Text >
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At odit quidem nostrum voluptatum quaerat repellat impedit, commodi perferendis veritatis pariatur maxime atque aliquid corporis autem, iste quia? Voluptates, veritatis dolorem?
                                    </Card.Text>
                                </Card.Body>
                            </Card>  
                            <Card className="tech-cards">
                                <Card.Body>
                                    <Card.Title><strong>Test-Driven Development</strong></Card.Title>
                                        <FontAwesomeIcon icon={faFlask} size="4x" id="icon" /><br></br>
                                    <Card.Text >
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At odit quidem nostrum voluptatum quaerat repellat impedit, commodi perferendis veritatis pariatur maxime atque aliquid corporis autem, iste quia? Voluptates, veritatis dolorem?
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="tech-cards">
                                <Card.Body>
                                    <Card.Title><strong>Agile</strong></Card.Title>
                                        <FontAwesomeIcon icon={faPeopleGroup} size="4x" id="icon" /><br></br>
                                    <Card.Text >
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At odit quidem nostrum voluptatum quaerat repellat impedit, commodi perferendis veritatis pariatur maxime atque aliquid corporis autem, iste quia? Voluptates, veritatis dolorem?
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="tech-cards">
                                <Card.Body>
                                    <Card.Title><strong>And more...</strong></Card.Title>
                                        <FontAwesomeIcon icon={faBookOpenReader} size="4x" id="icon" /><br></br>
                                    <Card.Text >
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At odit quidem nostrum voluptatum quaerat repellat impedit, commodi perferendis veritatis pariatur maxime atque aliquid corporis autem, iste quia? Voluptates, veritatis dolorem?
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </motion.div>
        </main>
    )
}