import { useState, useEffect } from "react";
import FaIcon from "./FaIcon";

function Footer() {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <footer className="site-footer">
            <p className="footer-prompt"><FaIcon name="terminal" /> nishith@portfolio:~$</p>
            <ul className="amrita-town">
                <li><a href="https://amrita.town">amrita.town</a></li>
                <li><a href="https://amrita.town/prev" aria-label="Previous amrita.town site" title="Previous"><FaIcon name="arrowLeft" /><span>prev</span></a></li>
                <li><a href="https://amrita.town/random" aria-label="Random amrita.town site" title="Random"><FaIcon name="dice" /><span>random</span></a></li>
                <li><a href="https://amrita.town/next" aria-label="Next amrita.town site" title="Next"><span>next</span><FaIcon name="arrowRight" /></a></li>
            </ul>
            <ul className="footer-compact-links">
                <li><a href="https://amrita.town/prev" aria-label="Previous amrita.town site" title="Previous"><FaIcon name="arrowLeft" /></a></li>
                <li><a href="https://amrita.town/random" aria-label="Random amrita.town site" title="Random"><FaIcon name="dice" /></a></li>
                <li><a href="https://amrita.town/next" aria-label="Next amrita.town site" title="Next"><FaIcon name="arrowRight" /></a></li>
            </ul>
            <p>{date.toLocaleDateString({
                region: "IN"
            })}, {date.toLocaleTimeString({
                region: "IN"
            })}</p>
        </footer>
    )
}

export default Footer;
