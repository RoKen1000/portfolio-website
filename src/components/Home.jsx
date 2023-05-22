import me from "../images/dummy-me.png"
import { NavImages } from "./NavImages"
import "../styles/Home.css"
import { motion } from "framer-motion"

export const Home = () => {

    return(
        <main>
            <motion.div
                className="landing-page"
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {delay: 0.2}}}
                exit={{opacity: 0}}              
            >
                    <h1>Hello, I'm Ross</h1>
                    <h2>A <strong>Full-Stack Developer</strong> looking for a Junior Developer Role</h2>
                    <div className="image-container">
                        <img src={me}></img>
                        <NavImages />
                    </div>
                    {/* <NavImages /> */}
            </motion.div>
        </main>
    )
}