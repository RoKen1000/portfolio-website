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
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >
                <h1>Map Your Day</h1>
                <article>
                    <ul className="portfolio-article-links">
                        <li><a href="https://github.com/Little-Wolfie/listodo">Link to project GitHub</a></li>
                        <li><a href="https://map-your-day-app.netlify.app">Link to hosted app</a></li>
                    </ul>
                    <figure>
                        <img src={myd} alt="Screenshot of the dashboard of the Map Your Day app."></img>
                        <figcaption>Screenshot of the dashboard of the Map Your Day app.</figcaption>
                    </figure>
                    <p>This was the final portfolio project I worked on as part of the Northcoders Bootcamp. This was a group project in which we created Map Your Day; an app that allows users to place tasks on a map and order them based on priority so they can plan what they need to do when out and about. The tech stack for this project is:</p>
                    <ul className="portfolio-article-tech-stack">
                        <li>JavaScript</li>
                        <li>Node.js</li>
                        <li>Firebase (Firestore, Storage and Authentication)</li>
                        <li>React.js</li>
                        <li>JSX</li>
                        <li>CSS</li>
                        <li>React Bootstrap</li>
                        <li>MapBox</li>
                    </ul>
                    <p>Firebase was used for the back-end portion of this app. We used Firebase Authentication to allow users to register as a user on the app and to allow them to log in to their account on subsequent visits. The user's user ID is utilised to create their own task collection and to also ensure that users can only view task collections that belong to them.</p> 
                    <p>Firestore was used to contain each user's document collection of tasks.  After logging in, the user is then taken to the task dashboard where a request is sent to Firestore to retrieve current outstanding tasks. A user can create a new task which is then posted to the database and can also mark tasks as complete which patches the users task collection. On subsequent reloads tasks marked as "complete" will not be retrieved from Firestore. Should a user create a task by accident, they can swipe on a task to delete it and have it removed from their document collection entirely.</p>
                    <p>Should a user wish, they can also go to the profile section of the app to change their password or upload a profile picture which would then be stored in Firebase storage.</p>
                    <p>The geo-data API that provides the map seen at the bottom of the app is MapBox. This provides the map itself as well as the ability to place pins on the map that correspond to each task's location. When a task is created the user is prompted to input a location, and when the task is posted to Firestore a set of coordinates are generated and stored as part the task's document. The task dashboard also allows zooming to a specified task pin on the map using these coordinates.</p>
                </article>
                <Button onClick={() => navigate("/portfolio")}>Back To Portfolio</Button>
            </motion.div>
        </main>
    )
}