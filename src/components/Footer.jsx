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
            <p>{date.toLocaleDateString({
                region: "IN"
            })}, {date.toLocaleTimeString({
                region: "IN"
            })}</p>
        </footer>
    )
}

export default Footer;
