import { motion } from "framer-motion"
import "../styles/About.css"
import me from "../images/rk2.jpg"

export const About = () => {

    return(
        <main>
            <motion.div
                initial={{opacity: 0 }}
                animate={{opacity: 1 }}
                exit={{opacity: 0}}
                >
                    <h1 className="page-heading">About</h1>
                    <div className="about-container">
                        <img src={me} alt="Ross Kennedy"/>
                        <p>I was drawn to becoming a Software Developer because <strong>I am keen to have a career where there is always something new to learn and offers continuous improvement.</strong> After doing some research I found Northcoders which is an educational organisation that teaches Software Development skills and I secured <strong>a fully funded place</strong> on their <strong>Full-Stack Development</strong> course.</p>
                        <p>As part of the course <strong>I worked on several Full-Stack projects</strong> which can be read about in the Portfolio section of this site. Having graduated from the boot camp <strong>I am based in the East Midlands (Kettering).</strong> In the meantime I am further developing the skills taught to me on the bootcamp and <strong>I am expanding my knowledge and experience in Full-Stack development by developing with C#, .NET Core and ASP.NET.</strong></p>
                        <p id="about-final-paragraph">When I am not developing my programming skills I like to learn foreign languages. I am fluent in French and I am keenly interested in Latin. I learned these languages as part of my life-long interest in history. I am also an avid music fan and like to write and record my own music.</p>
                    </div>
                    <div id="about-bottom-spacer"></div>
                </motion.div>
        </main>
    )
}