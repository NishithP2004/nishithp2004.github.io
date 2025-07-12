import cmds from "./cmds.js"

function generateResponse(cmd) {
    return (cmds.hasOwnProperty(cmd))? cmds[cmd]: `bash: command not found: ${cmd}`
}

export { generateResponse }