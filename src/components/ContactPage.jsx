import {motion} from "framer-motion"
import { Button } from "react-bootstrap"
import "../styles/ContactPage.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { useState } from "react"

export const ContactPage = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [stopBlankPosting, setStopBlankPosing] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!/[a-zA-Z]/.test(message)){
            console.log("here")
            setStopBlankPosing(true)
            return
        }
        fetch("https://formsubmit.co/ajax/ca3403ac16aa3a4cffd7675715acde44 ", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name, email, subject, message
            })
        })
        .then(response => response.json())
        .then(() => {
            setName("")
            setEmail("")
            setSubject("")
            setMessage("")
            setStopBlankPosing(false)
            setError(false)
        })  
        .catch(() => {
            setError(true)
        })      
    }

    return(
        <main>
            <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                >
                <h1 className="page-heading">Contact</h1>
                <form className="email-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" required onChange={e => setName(e.target.value)}></input>
                    <label htmlFor="email">Email</label>
                    <input type="email" required onChange={e => setEmail(e.target.value)}></input>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" required onChange={e => setSubject(e.target.value)}></input>
                    <label htmlFor="message">Message</label>
                    <textarea rows={6} cols={30} maxLength={2000} required onChange={e => setMessage(e.target.value)}></textarea>
                    {stopBlankPosting ? <p><strong>Message can not be blank</strong></p> : null}
                    {error ? <p><strong>Something went wrong <br></br>Try again Later</strong></p> : null}
                    <Button type="submit">Submit</Button>
                </form>
                <div className="social-icons">
                    <a href="https://github.com/RoKen1000">
                        <FontAwesomeIcon icon={faGithub} size="3x"/>
                    </a>
                    <a href="https://www.linkedin.com/in/ross-kennedy-2735a7237/">
                        <FontAwesomeIcon icon={faLinkedin} size="3x"/>
                    </a>
                </div>
            </motion.div>
        </main>
    )
}