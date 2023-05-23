import me from "../images/dummy-me.png"
import { NavImages } from "./NavImages"
import "../styles/Home.css"
import { motion } from "framer-motion"

export const Home = () => {

    return(
        <main>
            <motion.div
                // className="landing-page"
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {delay: 0.2}}}
                exit={{opacity: 0}}              
            >
                <div className="landing-page">
                    <h1 id="landing-titles">Hello, I'm Ross</h1>
                    <h2 id="landing-titles">A <strong>Full-Stack Developer</strong> looking for a Junior Developer Role</h2>
                    <div className="image-container">
                        <img src={me} alt="Ross Kennedy" id="landing-image"></img>
                        <NavImages />
                    </div>
                </div>
            </motion.div>
        </main>
    )
}