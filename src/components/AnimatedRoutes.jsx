import { useLocation, Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { About } from "./About"
import { AnimatePresence } from "framer-motion"
import { TechSkills } from "./TechSkills"
import { Portfolio } from "./Portfolio"
import { BoardGameReviews } from "./BoardGameReviews"
import { MapYourDay } from "./MapYourDay"
import { useEffect } from "react"
import { ContactPage } from "./ContactPage"

export const AnimatedRoutes = ({setHeader}) => {

    const location = useLocation()
    
    useEffect(() => {
        if(location.pathname === "/") setHeader(false)
        else setTimeout(() => setHeader(true), 270)
    }, [location.pathname])

    return(
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/tech-skills" element={<TechSkills />}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/portfolio/board-game-reviews" element={<BoardGameReviews/>}/>
                <Route path="/portfolio/map-your-day" element={<MapYourDay/>} />
                <Route path="/contact" element={<ContactPage/>}/>
            </Routes>
        </AnimatePresence>
    )
}