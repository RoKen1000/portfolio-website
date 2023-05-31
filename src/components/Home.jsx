import me from "../images/dummy-me.png"
import { HomeNavImages } from "./HomeNavImages"
import "../styles/Home.css"
import { motion } from "framer-motion"

export const Home = () => {

    return(
        <main>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {delay: 0.2}}}
                exit={{opacity: 0}}              
            >
                <div className="landing-page">
                    <div className="landing-titles-container">
                        <motion.div
                            initial={{x: -1800, rotate: -180}}
                            animate={{x: 0, rotate: 0, transition: {delay: 0.8, duration: 1}}}
                        >
                            <h1 id="landing-titles">Hello, I'm Ross</h1>
                        </motion.div>
                        <motion.div
                            initial={{x: 1500, rotate: 180}}
                            animate={{x: 0, rotate: 0, transition: {delay: 0.8, duration: 1}}}
                        >
                            <h2 id="landing-titles">A <strong>Full-Stack Developer</strong> looking for a Junior Developer Role</h2>
                        </motion.div>
                    </div>
                    <div className="image-container">
                        <img src={me} alt="Ross Kennedy" id="landing-image"></img>
                        <HomeNavImages />
                    </div>
                </div>
            </motion.div>
        </main>
    )
}