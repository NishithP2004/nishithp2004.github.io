import cmds from "./cmds.js"

function generateResponse(cmd) {
    return Object.hasOwn(cmds, cmd) ? cmds[cmd] : `bash: command not found: ${cmd}`
}

export { generateResponse }
