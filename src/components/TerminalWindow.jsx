import Terminal from "./Terminal"

function TerminalWindow() {
    const cmds = ["help", "about", "projects", "skills", "volunteering", "roadmap", "education", "contact", "sudo", "clear"]
    return (
        <div className="terminal-window md:w-3/5 w-full h-full md:border-l-1 md:border-green-500 flex flex-col">
            <ul className="available-cmds text-green-500 border-b-1 border-green-500 flex flex-row p-2 text-sm flex-wrap">
                {cmds.map((cmd, i) => <li key={i}>{cmd}</li>)}
            </ul>
            <Terminal />
        </div>
    )
}

export default TerminalWindow