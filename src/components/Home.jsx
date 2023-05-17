import me from "../images/dummy-me.png"
import { NavImages } from "./NavImages"
import "../styles/Home.css"
import { motion } from "framer-motion"

export const Home = () => {

    return(
        <motion.div
            className="landing-page"
            initial={{opacity: 0}}
            animate={{opacity: 2}}
            exit={{opacity: 0}}
        >
            <main>
                <h2>Welcome!</h2>
                <img src={me} alt="Ross Kennedy"/>
                <NavImages />
            </main>
        </motion.div>
    )
}