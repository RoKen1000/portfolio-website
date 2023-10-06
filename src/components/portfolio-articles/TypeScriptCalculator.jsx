import Button from "react-bootstrap/Button"
import { motion } from "framer-motion"
import { useNavigate, useLocation } from "react-router-dom"
import { useEffect } from "react"
import "../../styles/PortfolioArticle.css"
import calculator from "../../images/calculator.png"

export const TypeScriptCalculator = () => {

    const navigate = useNavigate()
    const {pathname} = useLocation()

    useEffect(() => {
        window.scroll(0, 0)
    }, [pathname])

    return(
        <main className="portfolio-article-page">
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            > 
                <h1>TypeScript Calculator</h1>
                <article>
                    <ul className="portfolio-article-links">
                        <li><a rel="noreferrer" target="_blank" href="https://github.com/RoKen1000/typescript-calculator">Link to GitHub repository</a></li>
                        <li><a rel="noreferrer" target="_blank" href="https://typescript-calculator-rk.netlify.app/">Link to hosted app</a></li>  
                    </ul>
                    <figure>                   
                        <img id="calculator-screenshot" src={calculator} alt="Screenshot of calculator app."></img>
                        <figcaption>Screenshot of calculator app.</figcaption>
                    </figure>
                    <p>This is the first project I have written using TypeScript. The tech stack used to create this application is:</p>
                    <ul className="portfolio-article-tech-stack">
                        <li>TypeScript</li>
                        <li>Node.js</li>
                        <li>React.js</li>
                        <li>JSX</li>
                        <li>CSS</li>
                        <li>Jest with React Testing Library</li>
                    </ul>
                    <p>The function used to power the calculator was written using full Test-Driven Development which was crucial in working out how to make the calculator follow the BIDMAS order of operations. The function accepts an array of numbers and maths operators which is built up from input recieved from the calculator buttons. It then uses a multidimensional array to first splice the division and multiplication parts of the calculation. These are worked out and then inserted back into the main calculation where subtraction and addition can then be worked out and the result returned.</p>
                    <p>This was also my first time integrating testing into React components. This was needed to make sure that the display of the calculator was working in accordance with the input buttons on the calculator interface.</p>
                    <p>Calculation history is also showed for reference. If the calculation passed is valid then the calculation and its result are recorded. If a malformed expression is input, such as a calculation that has multiple concurrent maths operators next to each other, an error message appears on the display and it is not pushed to the calculation history.</p>      
                </article>
                <Button onClick={() => navigate("/portfolio")}>Back To Portfolio</Button>
            </motion.div>
        </main>
    )
}