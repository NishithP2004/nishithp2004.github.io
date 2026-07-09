import { useState } from "react"
import Terminal from "./Terminal"
import { commands } from "../portfolioData"

function TerminalWindow({ onCommand, compact = false }) {
    const [commandRequest, setCommandRequest] = useState(null)

    const requestCommand = (command) => {
        setCommandRequest({ command, id: Date.now() })
    }

    return (
        <div className={`terminal-window ${compact ? "terminal-window-compact" : ""}`}>
            <ul className="available-cmds text-green-500 border-b-1 border-green-500 flex flex-row p-2 text-sm flex-wrap">
                {commands.map((cmd) => (
                    <li key={cmd}>
                        <button type="button" onClick={() => requestCommand(cmd)} aria-label={`Run ${cmd} command`}>
                            {cmd}
                        </button>
                    </li>
                ))}
            </ul>
            <Terminal onCommand={onCommand} commandRequest={commandRequest} compact={compact} />
        </div>
    )
}

export default TerminalWindow
