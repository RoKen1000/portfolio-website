import { useEffect, useState } from "react"
import "../styles/Header.css"
import { MobileNavPanel } from "./MobileNavPanel"
import { motion } from "framer-motion"
import { DesktopNavBar } from "./DesktopNavBar"

export const Header = ({header}) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    useEffect(() => {
        const handleWindowResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize)
        return () => window.removeEventListener("resize", setWindowWidth)
    }, [])

    return(
            <motion.div
                    key="modal"
                    initial={{y: -200}}
                    animate={{y: 0}}
                    exit={{y: -200}}
                > 
                <header className="header">
                    <h1><strong>Ross Kennedy</strong></h1>
                    <h2><strong>Full Stack Developer</strong></h2>
                    {windowWidth < 600 && <MobileNavPanel />}
                    {windowWidth >= 600 && <DesktopNavBar/>}
                </header>
             </motion.div>
    )
}