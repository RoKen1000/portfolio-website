import { useLocation, Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { About } from "./About"
import { AnimatePresence } from "framer-motion"
import { Skills } from "./Skills"
import { Portfolio } from "./Portfolio"
import { BoardGameReviews } from "./portfolio-articles/BoardGameReviews"
import { MapYourDay } from "./portfolio-articles/MapYourDay"
import { useEffect } from "react"
import { ContactPage } from "./ContactPage"
import { TypeScriptCalculator } from "./portfolio-articles/TypeScriptCalculator"
import { RetroRecordsAPI } from "./portfolio-articles/RetroRecordsAPI"
import { ItalianConjugations } from "./portfolio-articles/ItalianConjugations"

export const AnimatedRoutes = ({setHeader, setButtonClicked}) => {

    const location = useLocation()
    
    useEffect(() => {
        if(location.pathname === "/"){
            setHeader(false)
            setButtonClicked("")
        }
        else setTimeout(() => setHeader(true), 270)
    }, [location.pathname])

    return(
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home setButtonClicked={setButtonClicked}/>}/>
                <Route path="/about" element={<About />}/>
                <Route path="/skills" element={<Skills />}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/portfolio/board-game-reviews" element={<BoardGameReviews/>}/>
                <Route path="/portfolio/map-your-day" element={<MapYourDay/>} />
                <Route path="/portfolio/typescript-calculator" element={<TypeScriptCalculator />} />
                <Route path="/portfolio/retro-records-api" element={<RetroRecordsAPI/>} />
                <Route path="/portfolio/conjugation-website" element={<ItalianConjugations/>} />
                <Route path="/contact" element={<ContactPage/>}/>
            </Routes>
        </AnimatePresence>
    )
}