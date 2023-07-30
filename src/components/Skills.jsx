import "../styles/Skills.css"
import { Card } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookOpenReader, faCodeBranch, faDatabase, faFileCode, faFlask, faPaintRoller, faPeopleGroup } from "@fortawesome/free-solid-svg-icons"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import { motion } from "framer-motion"

export const Skills = () => {

    return(
        <main>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >   
                <h1 className="page-heading">Skills</h1>
                <Container className="tech-card-grid" fluid>
                    <Row xs={1} sm={1} md={2} lg={2} xl={4}>
                        <Col>
                            <Card className="tech-cards">
                                <Card.Body>
                                    <Card.Title><strong>Back-end</strong></Card.Title>
                                        <FontAwesomeIcon icon={faDatabase} size="4x" id="icon" /><br></br>
                                    <Card.Text >
                                        I have experience in working with both <strong>SQL</strong> and <strong>NoSQL</strong> databases. My previous projects have involved using <strong>PostgreSQL</strong> to create CRUD applications as well as <strong>Firebase</strong> to create data collections unique to each user. I also have experience in developing <strong>REST APIs</strong>.
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
                                        Using essential tools such as <strong>HTML</strong>, <strong>CSS</strong> and <strong>JavaScript</strong> I have experience of creating websites and applications. I am experienced in <strong>React.js</strong> as well as libraries such as <strong>Bootstrap</strong> to create attractive and responsive websites. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="tech-cards">
                                <Card.Body>
                                    <Card.Title><strong>Version Control</strong></Card.Title>
                                        <FontAwesomeIcon icon={faCodeBranch} size="4x" id="icon" /><br></br>
                                    <Card.Text >
                                        Version control is critical to iterative software development. I have strong experience of utilising <strong>Git</strong> and <strong>GitHub</strong> to ensure that version control is kept to a high standard. This ensures that projects are safely and reliably updated with good record keeping.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>  
                            <Card className="tech-cards">
                                <Card.Body>
                                    <Card.Title><strong>Test-Driven Development</strong></Card.Title>
                                        <FontAwesomeIcon icon={faFlask} size="4x" id="icon" /><br></br>
                                    <Card.Text >
                                        The central part of my development process has
                                        test-drive development at the heart of everything. From very early on in my Software Development career I have used <strong>Jest</strong> to ensure that code is robust, functional and not prone to bugs during further development.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row xs={1} sm={1} md={2} lg={2} xl={4} className="tech-card-grid-last-row">
                        <Col>
                            <Card className="tech-cards">
                                <Card.Body>
                                    <Card.Title><strong>Agile</strong></Card.Title>
                                        <FontAwesomeIcon icon={faPeopleGroup} size="4x" id="icon" /><br></br>
                                    <Card.Text >
                                        During the bootcamp I regularly participated in groups for <strong>pair programming</strong> exercises as well as projects involving <strong>Agile Methodology</strong>. During these projects I have participated in <strong>code reviews</strong> and daily <strong>stand up</strong> meetings.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="tech-cards">
                                <Card.Body>
                                    <Card.Title><strong>Multi-Paradigm</strong></Card.Title>
                                        <FontAwesomeIcon icon={faFileCode} size="4x" id="icon" /><br></br>
                                    <Card.Text >
                                       I am experienced in different Software Development paradigms, having experience in <strong>Functional Programming</strong> as well as <strong>Object Oriented Programming</strong>. In addition I am versed in the <strong>Model-View-Controller (MVC)</strong> paradigm for developing back-end infrastructure.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="tech-cards">
                                <Card.Body>
                                    <Card.Title><strong>And more...</strong></Card.Title>
                                        <FontAwesomeIcon icon={faBookOpenReader} size="4x" id="icon" /><br></br>
                                    <Card.Text >
                                        My Software Development journey has only just begun. As well as building on the foundation of skills I learned at Northcoders, 
                                        I am currently learning how to use <strong>TypeScript</strong>, <strong>C#</strong>, <strong>.NET Core</strong> and <strong>ASP.NET</strong>. Portfolio projects utilising these new frameworks and languages are soon to follow.
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