import { motion } from "framer-motion"
import "../../styles/PortfolioArticle.css"
import Button from "react-bootstrap/Button"
import { useNavigate, useLocation } from "react-router-dom"
import { useEffect } from "react"
import conjPractice from "../../images/conj-practice.png"

export const ItalianConjugations = () => {

    const {pathname} = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        window.scroll(0, 0)
    }, [pathname])

    return(
        <main className="portfolio-article-page">
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >
                <h1>Italian Conjugation Website</h1>
                <article>
                    <ul className="portfolio-article-links">
                        <li><a rel="noreferrer" target="_blank" href="https://github.com/RoKen1000/ItalianConjugationPractice">Link to project GitHub</a></li>                     
                    </ul>
                    <figure>
                        <img src={conjPractice} id="conj-screenshot" alt="An example of conjugation practice from the Italian Conjugation Practice website."></img>
                        <figcaption>An example of a conjugation practice form.</figcaption>
                    </figure>
                    <p>This site was inspired by a very old and very basically styled site I used years ago when learning noun declinations and verb conjugations with Latin. I can no longer remember the name of that site, but it was instrumental for cementing the various declinations and conjugations in my mind through the exercise of typing the various verb and noun forms. I was searching for a similar website that could do the same with Italian and decided to create the site myself as a dual-exercise in the languages C# and Italian!</p> 
                    <p>The tech stack for this website is:</p>
                    <ul className="portfolio-article-tech-stack">
                        <li>C#</li>
                        <li>ASP.NET MVC</li>
                        <li>Entity Framework Core</li>
                        <li>MS SQL Server</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                    <p>This is a project that allows users to practice Italian verb conjugations. A word is chosen at random from the database in the relevant tense and then passed to the client. The user can then type their answers into a form and on submit the answers are validated with a script and are compared against the answers held in the class object taken from the word database. The script then makes a message appear in the conjugation form informing the user whether their answers are correct or not. This project also offers a content management system that can interact with the database so that new verbs can be added/edited/removed easily instead of having to repeatedly add seed data to the database.</p>
                    <p>More updates to this project will come in the future, as I have a lot of ideas for how the website could be improved.</p>
                </article>
                <Button onClick={() => navigate("/portfolio")}>Back To Portfolio</Button>
            </motion.div>
        </main>
    )
}