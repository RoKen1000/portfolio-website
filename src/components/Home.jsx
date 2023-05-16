import homer from "../images/Homer_Simpson_2006.png"
import { NavImages } from "./NavImages"

export const Home = () => {

    return(
        <main>
            <h1>Ross Kennedy - Full Stack Developer</h1>
            <h2>Welcome!</h2>
            <img src={homer} alt="Ross Kennedy"/>
            <NavImages />
        </main>
    )
}