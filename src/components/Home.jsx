import me from "../images/rk2-c.png"
import me2 from "../images/rk2.jpg"
import { HomeNavImages } from "./HomeNavImages"
import "../styles/Home.css"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export const Home = ({setButtonClicked}) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    useEffect(() => {
        const handleWindowResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize)
        return () => window.removeEventListener("resize", setWindowWidth)
    }, [])

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
                        {windowWidth < 800 && <img src={me} alt="Ross Kennedy" id="landing-image"></img>}
                        {windowWidth >= 800 && <img src={me2} alt="Ross Kennedy" id="larger-landing-image"></img>}
                        <HomeNavImages setButtonClicked={setButtonClicked} />
                    </div>
                </div>
            </motion.div>
        </main>
    )
}