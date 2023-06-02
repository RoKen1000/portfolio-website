import { motion } from "framer-motion"
import "../styles/About.css"
import me from "../images/dummy-me.png"

export const About = () => {

    return(
        <main>
            <motion.div
                initial={{opacity: 0 }}
                animate={{opacity: 1 }}
                exit={{opacity: 0}}
                >
                    <h1 className="page-heading">About</h1>
                    <div className="about-container">
                        <img src={me} alt="Ross Kennedy"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt vel, rerum deserunt repellendus praesentium quasi quo magni nulla suscipit quia eos quidem minus vitae laborum placeat magnam molestiae, modi nihil?</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque vero quibusdam vel, fugiat nisi repellendus minima, excepturi a odio dolorem iure error nam sapiente reiciendis, mollitia animi totam illum fuga?</p>
                    </div>
                </motion.div>
        </main>
    )
}