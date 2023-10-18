import { motion } from "framer-motion"
import "../../styles/PortfolioArticle.css"
import Button from "react-bootstrap/Button"
import { useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import apiMob from "../../images/api2.png"
import apiDesk from "../../images/api.png"

export const RetroRecordsAPI = () => {

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
                <h1>Retro Records API</h1>
                <article>
                    <ul className="portfolio-article-links">
                        <li><a rel="noreferrer" target="_blank" href="https://github.com/RoKen1000/RetroRecordsAPI.git">Link to project GitHub</a></li>                     
                    </ul>
                    <figure>
                        <img src={windowWidth < 600 ? apiMob : apiDesk} id="api-screenshot" alt="An example of a result of a GET request being made to the Retro Records API."></img>
                        <figcaption>An example of a GET request.</figcaption>
                    </figure>
                    <p>This is an API that is designed to store data on music records. It has been built using C#, .Net, and ASP.NET Web API. The database that works with the API uses MS SQL Server and Entity Framework Core for CRUD operations. The project is configured to use Swagger for API documentation and testing.</p> 
                    <p>The tech stack for this project is:</p>
                    <ul className="portfolio-article-tech-stack">
                        <li>C#</li>
                        <li>ASP.NET Web API</li>
                        <li>Entity Framework Core</li>
                        <li>MS SQL Server</li>
                    </ul>
                    <p>The API uses Newtonsoft Json and Json patch to make PATCH/PUT requests allowing for precise property replacement for records that are already in the database.</p>
                    <p>I wanted to experiment with more complex data structures rather than just have primitive data types for each Record property. I decided to use TimeSpan and DateTime for some properties such as a Record's release date, the Record's run time and when the Record object was created or updated in the database.</p>
                </article>
                <Button onClick={() => navigate("/portfolio")}>Back To Portfolio</Button>
            </motion.div>
        </main>
    )
}