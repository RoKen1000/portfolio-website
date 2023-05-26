import { useEffect, useState } from "react"
import "../styles/Header.css"
import { MobileNavPanel } from "./MobileNavPanel"
import { AnimatePresence, motion } from "framer-motion"
import { DesktopNavBar } from "./DesktopNavBar"

export const Header = ({header}) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    useEffect(() => {
        const handleWindowResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize)
        return () => window.removeEventListener("resize", setWindowWidth)
    }, [])

    return(
        <AnimatePresence mode="wait">
            <motion.div
                    initial={{y: -200}}
                    animate={{y: 0}}
                    exit={{y: -200}}
                > 
                <header className="header">
                    <h1>Ross Kennedy</h1>
                    <h2>Full Stack Developer</h2>
                    {windowWidth < 1000 && <MobileNavPanel />}
                    {windowWidth >= 1000 && <DesktopNavBar/>}
                </header>
             </motion.div>
        </AnimatePresence>
    )
}