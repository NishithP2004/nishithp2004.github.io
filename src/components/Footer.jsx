import { useState, useEffect } from "react";

function Footer() {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])

    return (
        <footer className="fixed bottom-0 left-0 right-0 p-2 text-green-500 bg-black border-t-1 border-green-500 text-xs flex flex-row justify-between items-center">
            <p>nishith@portfolio:~$</p>
            <ul className="amrita-town">
                <li><a href="https://amrita.town">amrita.town |</a></li>
                <li><a href="https://amrita.town/prev">← prev</a></li>
                <li><a href="https://amrita.town/random">⚄ random</a></li>
                <li><a href="https://amrita.town/next">next →</a></li>
            </ul>
            <ul className="sm:hidden flex flex-row justify-center items-center gap-2">
                <li><a href="https://amrita.town/prev">←</a></li>
                <li><a href="https://amrita.town/random">⚄</a></li>
                <li><a href="https://amrita.town/next">→</a></li>
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