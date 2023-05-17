import { useLocation, Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimatePresence } from "framer-motion"

export const AnimatedRoutes = () => {

    const location = useLocation()

    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />}/>
                <Route path="/about" />
                <Route path="/tech-skills" />
                <Route path="/projects" />
                <Route path="/contact" />
            </Routes>
        </AnimatePresence>
    )
}