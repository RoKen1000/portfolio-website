import { motion } from "framer-motion"
import "../styles/PortfolioArticle.css"
import Button from "react-bootstrap/Button"
import { useNavigate, useLocation } from "react-router-dom"
import myd from "../images/myd-app.png"
import { useEffect } from "react"

export const MapYourDay = () => {

    const {pathname} = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        window.scroll(0, 0)
    }, [pathname])
    
    return(
        <main className="portfolio-article-page">
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 2}}
                exit={{opacity: 0}}
            >
                <h1>Map Your Day</h1>
                <article>
                    <ul>
                        <li><a href="https://github.com/Little-Wolfie/listodo">Link to project GitHub</a></li>
                        <li><a href="https://map-your-day-app.netlify.app">Link to hosted app</a></li>
                    </ul>
                    <figure>
                        <img src={myd} alt="Screenshot of the dashboard of the Map Your Day app."></img>
                        <figcaption>Screenshot of the dashboard of the Map Your Day app.</figcaption>
                    </figure>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus commodi nemo nisi temporibus, vero vitae illum veniam corporis dolores ut, quas suscipit at. Dignissimos blanditiis vitae deserunt laborum saepe accusantium.</p>
                </article>
                <Button onClick={() => navigate("/portfolio")}>Back To Portfolio</Button>
            </motion.div>
        </main>
    )
}