import "../styles/Header.css"
import { useLocation } from "react-router-dom"
import { MobileNavPanel } from "./MobileNavPanel"

export const Header = () => {

    const location = useLocation()

    return(
        <header className="header">
            <h1>Ross Kennedy</h1>
            <h2>Full Stack Developer</h2>
            {location.pathname !== "/" && <MobileNavPanel />}
        </header>
    )
}