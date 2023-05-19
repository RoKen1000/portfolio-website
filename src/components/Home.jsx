import me from "../images/dummy-me.png"
import { NavImages } from "./NavImages"
import "../styles/Home.css"
import { delay, motion } from "framer-motion"

export const Home = () => {

    return(
        <main>
            <motion.div
                className="landing-page"
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {delay: 0.2}}}
                exit={{opacity: 0}}              
            >
                <h1>Hello</h1>
                <img src={me} alt="Ross Kennedy"/>
                <NavImages />
            </motion.div>
        </main>
    )
}