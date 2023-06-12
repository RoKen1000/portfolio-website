import "../styles/PortfolioArticle.css"
import example from "../images/nc-games-example.png"
import Button from "react-bootstrap/Button"
import { motion } from "framer-motion"
import { useNavigate, useLocation } from "react-router-dom"
import { useEffect } from "react"

export const BoardGameReviews = () => {

    const navigate = useNavigate()
    const {pathname} = useLocation()

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
                <h1>Board Game Review Website - NC Games</h1>
                <article>
                    <ul className="portfolio-article-links">
                        <li><a rel="noreferrer" target="_blank" href="https://github.com/RoKen1000/RK-Backend-Games-Portfolio-Piece">Link to back-end GitHub</a></li>
                        <li><a rel="noreferrer" target="_blank" href="https://nc-games-service.onrender.com/api">Link to hosted back-end</a></li>
                        <li><a rel="noreferrer" target="_blank" href="https://github.com/RoKen1000/RK-Frontend-Games-Portfolio-Piece">Link to front-end GitHub</a></li>
                        <li><a rel="noreferrer" target="_blank" href="https://nc-game-review-site.netlify.app/">Link to hosted website</a></li>
                    </ul>
                    <figure>                   
                        <img src={example} alt="Screenshot of an article taken from the NC Games website."></img>
                        <figcaption>Screenshot of an article taken from the NC Games website.</figcaption>
                    </figure>
                    <p>This was the first of my portfolio projects that I created as part of the Northcoders Bootcamp. This is a CRUD website that allows users to browse and comment on reviews of board games. The tech stack used to create this application is:</p>
                    <ul className="portfolio-article-tech-stack">
                        <li>JavaScript</li>
                        <li>Node.js with express and node-postgres</li>
                        <li>PostgreSQL</li>
                        <li>React.js</li>
                        <li>JSX</li>
                        <li>CSS</li>
                        <li>Jest with SuperTest</li>
                    </ul>
                    <p>The back-end API was created using Node.js with the express and node-postrgres modules. Testing for each end point was done using Jest and SuperTest. The back-end is hosted using Render. On the database data is stored for the reviews, users, comments made by users, as well as for the categories linked to each review.</p>
                    <p>The front-end for this project was created using JSX, React.js and CSS.The design for viewing reviews is based on a selection of cards that a user can click on to be taken to the full review. Each review is based on a standard article layout.</p>
                    <p>This allows interaction with the back-end server in a user friendly way. Users can retrieve and read reviews on the site as well as apply several filters to change how results are retrieved. There is a separate page that users can access to only view reviews linked to a certain category. On each review a user can like or dislike a review and increment a review's score. Finally, a user can post comments on a review, and delete comments provided that the comment was made by themselves.</p>
                </article>
                <Button onClick={() => navigate("/portfolio")}>Back To Portfolio</Button>
            </motion.div>
        </main>
    )
}