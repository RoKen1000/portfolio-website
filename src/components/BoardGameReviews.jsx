import "../styles/PortfolioArticle.css"
import example from "../images/nc-games-example.png"
import Button from "react-bootstrap/Button"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

export const BoardGameReviews = () => {

    const navigate = useNavigate()
    
    return(
        <main className="portfolio-article-page">
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            > 
                <h1>Board Game Review Website - NC Games</h1>
                <article>
                    <ul>
                        <li><a href="https://github.com/RoKen1000/RK-Backend-Games-Portfolio-Piece">Link to back-end GitHub</a></li>
                        <li><a href="https://nc-games-service.onrender.com/api">Link to hosted back-end</a></li>
                        <li><a href="https://github.com/RoKen1000/RK-Frontend-Games-Portfolio-Piece">Link to front-end GitHub</a></li>
                        <li><a href="https://nc-game-review-site.netlify.app/">Link to final website</a></li>
                    </ul>
                    <figure>                   
                        <img src={example} alt="Screenshot of an article taken from the NC Games website."></img>
                        <figcaption>Screenshot of an article taken from the NC Games website.</figcaption>
                    </figure>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit deserunt repellat eum provident necessitatibus voluptate, exercitationem atque incidunt consectetur voluptas dolore, pariatur voluptatum odio ratione laudantium sint quae deleniti nesciunt?</p>
                </article>
                <Button onClick={() => navigate("/portfolio")}>Back To Portfolio</Button>
            </motion.div>
        </main>
    )
}