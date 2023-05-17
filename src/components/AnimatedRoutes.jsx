import { useLocation, Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { About } from "./About"
import { AnimatePresence } from "framer-motion"

export const AnimatedRoutes = () => {

    const location = useLocation()

    return(
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/tech-skills" />
                <Route path="/projects" />
                <Route path="/contact" />
            </Routes>
        </AnimatePresence>
    )
}