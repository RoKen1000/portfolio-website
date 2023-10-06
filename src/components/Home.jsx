import me3 from "../images/rk1-c.png"
import { HomeNavImages } from "./HomeNavImages"
import "../styles/Home.css"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState, useRef } from "react"

export const Home = ({setButtonClicked}) => {

    const techWords = ["HTML", "CSS", "JavaScript", "Node.js", "C#", "ASP.NET", "EF Core", "SQL Server", "jQuery",  "PSQL", "React"]

    const [currentPhrase, setCurrentPhrase] = useState(techWords[0])
    const index = useRef(0)

    const cyclePhrases = () => {
        setTimeout(() => setCurrentPhrase(techWords[index.current]), 2000)
        index.current += 1
        if(index.current >= techWords.length) index.current = 0;
    }

    useEffect(() => {
        cyclePhrases()
    }, [currentPhrase])

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
                            initial={{opacity: 0, y: -50}}
                            animate={{y: 0, opacity: 1, transition: {delay: 0.8, duration: 1}}}
                        >
                            <h1 id="landing-titles">Hello, I'm Ross</h1>
                        </motion.div>
                        <motion.div
                            initial={{opacity: 0, y: 50}}
                            animate={{y: 0, opacity: 1, transition: {delay: 1.8, duration: 1}}}
                        >
                            <h2 id="landing-titles">A <strong>Full-Stack Developer</strong> looking for a Junior Developer Role</h2>
                        </motion.div>
                    </div>
                        <motion.div className="image-container"
                            initial={{opacity: 0}}
                            animate={{opacity: 1, transition: {delay: 2.8}}}>

                            {windowWidth < 800 && <img src={me3} alt="Ross Kennedy" id="landing-image"></img>}
                            {windowWidth >= 800 && <img src={me3} alt="Ross Kennedy" id="larger-landing-image"></img>}
                                

                        </motion.div>
                        <motion.div
                        initial={{opacity: 0, y: -50}}
                        animate={{opacity: 1, y: 0, transition: {delay: 3.8, duration: 0.5}}}>
                            <HomeNavImages setButtonClicked={setButtonClicked} />
                        </motion.div>

                        <motion.div 
                            initial={{opacity: 0}}
                            animate={{opacity: 1, transition: {delay: 4.8, duration: 0.5}}}>
                                {windowWidth >= 800 && <p id="experience-in" className="landing-page-tech-words">Experienced in{"\u00A0"} 
                                <AnimatePresence mode="wait">
                                    <motion.span
                                    key={currentPhrase}
                                    initial={{opacity: 0, y: -10}}
                                    animate={{opacity: 1, y: 0, transition: {duration: 0.5 }}}
                                    exit={{opacity: 0, y: 10}}
                                    >
                                        <strong>{currentPhrase}</strong>
                                    </motion.span>
                                </AnimatePresence>
                                </p>}

                        </motion.div>
                </div>
            </motion.div>
        </main>
    )
}