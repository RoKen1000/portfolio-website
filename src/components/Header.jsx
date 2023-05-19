import "../styles/Header.css"
import { MobileNavPanel } from "./MobileNavPanel"
import { AnimatePresence, motion } from "framer-motion"

export const Header = ({header}) => {
    return(
        <AnimatePresence mode="wait">
            {header &&
            <motion.div
                    key={"me"}
                    initial={{y: -200}}
                    animate={{y: 0}}
                    exit={{y: -200}}
                > 
                <header className="header">
                    <h1>Ross Kennedy</h1>
                    <h2>Full Stack Developer</h2>
                    <MobileNavPanel />
                </header>
             </motion.div>
            }
        </AnimatePresence>
    )
}