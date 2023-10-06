import { motion } from "framer-motion"
import "../../styles/PortfolioArticle.css"
import Button from "react-bootstrap/Button"
import { useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import opticronMob from "../../images/opticron-mobile.png"
import opticronDesk from "../../images/opticron-desktop.png"

export const Opticron = () => {

    const {pathname} = useLocation()
    const navigate = useNavigate()
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.scroll(0, 0)
    }, [pathname])

    useEffect(() => {
        const handleWindowResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize)
        return () => window.removeEventListener("resize", setWindowWidth)
    }, [])

    return(
        <main className="portfolio-article-page">
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >
                <h1>Opticron Website</h1>
                <article>
                    <ul className="portfolio-article-links">
                        <li><a rel="noreferrer" target="_blank" href="https://github.com/RoKen1000/website-project">Link to project GitHub</a></li>
                    </ul>
                    <figure>
                        <img id="opticron-screenshot" src={windowWidth < 600 ? opticronMob : opticronDesk} alt="Screenshot of some articles on the Optricron website."></img>
                        <figcaption>Screenshot of articles on the Optricron website.</figcaption>
                    </figure>
                    <p>This was a website I developed as part of a tech test. This was my frst real project getting to grips with C#, .NET Core and ASP.NET, and was a tremendously valuable learning opportunity. It features a main page for the website as well as a content management system that can be used to perform CRUD operations to control some of the elements shown on the main page.</p>
                    <p>The tech stack for this project is:</p>
                    <ul className="portfolio-article-tech-stack">
                        <li>C#</li>
                        <li>ASP.NET MVC</li>
                        <li>Entity Framework Core</li>
                        <li>SQLite</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                    <p>The project also makes use of the front-end libraries Foundation Framework and Slick.js. The carousel effect of Slick.js is used to animate and cycle through the various different categories and their associated images. Foundation Framework's grid system was used to responsively space the various articles and special offeres found in the main page.</p> 
                    <p>The database was set up using a code-first design paradigm. There are class objects for the categories, articles and special offers.</p>
                </article>
                <Button onClick={() => navigate("/portfolio")}>Back To Portfolio</Button>
            </motion.div>
        </main>
    )
}