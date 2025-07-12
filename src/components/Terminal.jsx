import { useState, useRef, useEffect } from "react"
import MarkdownRenderer from "./MarkdownRenderer"
import { generateResponse } from "../utils.js"

const welcomeMsg = "Hi, I am Nishith P. 👋\n\nWelcome to my interactive **AI Powered** 🤖 portfolio website! 💻✨\nType 'help' to see the available commands. 🚀"

function Terminal() {
    const [history, setHistory] = useState([{
        command: "welcome",
        message: welcomeMsg
    }])
    const [input, setInput] = useState("")
    const [isTyping, setIsTyping] = useState(true)

    const terminalRef = useRef(null)
    const inputRef = useRef(null)

    useEffect(() => {
        const handleWindowClick = () => {
            if (inputRef.current && !isTyping) inputRef.current.focus();
        }

        window.addEventListener("click", handleWindowClick);
        return () => window.removeEventListener("click", handleWindowClick);
    }, [isTyping])

    return (
        <div id="terminal" className="overflow-auto" ref={terminalRef}>
            <div className="conversation-history p-2 flex flex-col">
                {history.map((data, i) => {
                    return (
                        <div className="text-md mb-2" key={i}>
                            <p><span className="text-blue-400 mr-2">nishith@portfolio:~$</span><span className="text-green-400">{data.command}</span></p>
                            <div className="mt-1 text-white whitespace-pre-wrap text-md"><MarkdownRenderer content={data.message} isTyping={isTyping} setIsTyping={setIsTyping} scrollRef={terminalRef} /></div>
                        </div>
                    )
                })}
            </div>
            {!isTyping ? (
                <div className="conversation-input flex flex-row justify-start items-center gap-2 px-2">
                    <span className="text-blue-400">nishith@portfolio:~$</span>
                    <input type="text" ref={inputRef} className="conversation-input text-green-400 w-full outline-none" name="cmd-input" spellCheck={false} value={input} onInput={e => setInput(e.target.value)} autoFocus onKeyDown={(ev) => {

                        if (ev.key == "Enter") {
                            if (input == "clear") {
                                setHistory([history[0]])
                            } else {
                                setIsTyping(true)
                                setHistory([
                                    ...history,
                                    {
                                        command: input,
                                        message: generateResponse(input)
                                    }
                                ])
                            }
                            setInput("")
                        }
                    }} />
                </div>
            ) : ""}
        </div>
    )
}

export default Terminal;