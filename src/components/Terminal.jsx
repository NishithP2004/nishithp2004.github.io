import { useCallback, useState, useRef, useEffect } from "react"
import MarkdownRenderer from "./MarkdownRenderer"
import { generateResponse } from "../utils.js"

const welcomeMsg = "Hi, I am Nishith P.\n\nWelcome to my interactive AI-powered portfolio. Type `help` to see the available commands, or try `projects`, `browser`, `skills`, and `contact`."

function Terminal({ onCommand, commandRequest, compact = false }) {
    const [history, setHistory] = useState([{
        id: 0,
        command: "welcome",
        message: welcomeMsg
    }])
    const [input, setInput] = useState("")
    const [isTyping, setIsTyping] = useState(true)
    const [answeredNow, setAnsweredNow] = useState(() => new Set())

    const terminalRef = useRef(null)
    const inputRef = useRef(null)
    const processedCommandRequestId = useRef(null)
    const nextHistoryId = useRef(1)

    const executeCommand = useCallback((rawCommand) => {
        const cmd = rawCommand.trim()
        switch (cmd) {
            case "":
                break;
            case "clear":
                setHistory((currentHistory) => [currentHistory[0]])
                setIsTyping(false)
                onCommand?.("clear")
                break;
            default:
                {
                const id = nextHistoryId.current++
                setIsTyping(true)
                onCommand?.(cmd)
                setHistory((currentHistory) => [
                    ...currentHistory,
                    {
                        id,
                        command: cmd,
                        message: generateResponse(cmd)
                    }
                ])
                break;
                }
        }
        setInput("")
    }, [onCommand])

    useEffect(() => {
        if (!commandRequest?.command) return
        if (processedCommandRequestId.current === commandRequest.id) return
        processedCommandRequestId.current = commandRequest.id
        executeCommand(commandRequest.command)
    }, [commandRequest, executeCommand])

    useEffect(() => {
        const handleWindowClick = () => {
            if (inputRef.current && !isTyping) inputRef.current.focus();
        }

        window.addEventListener("click", handleWindowClick);
        return () => window.removeEventListener("click", handleWindowClick);
    }, [isTyping])

    return (
        <div id="terminal" className={`overflow-auto ${compact ? "terminal-compact" : ""}`} ref={terminalRef}>
            <div className="conversation-history p-2 flex flex-col">
                {history.map((data) => {
                    return (
                        <div className="text-md mb-2" key={data.id}>
                            <p><span className="terminal-prompt text-blue-400 mr-2">⚡ nishith@portfolio:~$</span><span className="text-green-400">{data.command}</span></p>
                            <div className="mt-1 text-white whitespace-pre-wrap text-md"><MarkdownRenderer content={data.message} setIsTyping={setIsTyping} scrollRef={terminalRef} answerNow={answeredNow.has(data.id)} /></div>
                        </div>
                    )
                })}
            </div>
            {isTyping ? (
                <div className="answer-now-wrap">
                    <button
                        type="button"
                        className="answer-now-button"
                        onClick={() => {
                            const activeId = history.at(-1)?.id
                            if (activeId === undefined) return
                            setAnsweredNow((current) => new Set(current).add(activeId))
                        }}
                    >
                        Answer Now
                    </button>
                </div>
            ) : null}
            {!isTyping ? (
                <div className="conversation-input flex flex-row justify-start items-center gap-2 px-2">
                    <span className="terminal-prompt text-blue-400">⚡ nishith@portfolio:~$</span>
                    <input type="text" ref={inputRef} className="conversation-input text-green-400 w-full outline-none" name="cmd-input" spellCheck={false} value={input} onInput={e => setInput(e.target.value)} autoFocus onKeyDown={(ev) => {
                        if (ev.key === "Enter") {
                            executeCommand(input)
                        }
                    }} />
                </div>
            ) : ""}
        </div>
    )
}

export default Terminal;
