import { useEffect, useState } from "react"
import "../styles/Header.css"
import { MobileNavPanel } from "./MobileNavPanel"
import { motion } from "framer-motion"
import { DesktopNavBar } from "./DesktopNavBar"

export const Header = ({buttonClicked, setButtonClicked}) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    useEffect(() => {
        const handleWindowResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize)
        return () => window.removeEventListener("resize", setWindowWidth)
    }, [])

    return(
            <motion.div
                    initial={{y: -200}}
                    animate={{y: 0}}
                    exit={{y: -200}}
                > 
                <header className="header">
                    {windowWidth < 600 && <MobileNavPanel />}
                    {windowWidth >= 600 && <DesktopNavBar buttonClicked={buttonClicked} setButtonClicked={setButtonClicked}/>}
                </header>
             </motion.div>
    )
}