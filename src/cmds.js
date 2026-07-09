import { commands, profile, sectionByCommand } from "./portfolioData"

const sectionEmoji = {
  about: "👤",
  experience: "💼",
  projects: "🚀",
  "browser-lab": "🌐",
  skills: "🛠️",
  achievements: "🏆",
  education: "🎓",
  contact: "📬",
}

const itemEmoji = {
  about: "⚡",
  experience: "▸",
  projects: "▸",
  "browser-lab": "☁️",
  skills: "◆",
  achievements: "🏅",
  education: "🎓",
  contact: "↗",
}

const commandDescriptions = {
  about: "👤 who Nishith is and what he builds",
  experience: "💼 current software engineering and security research work",
  projects: "🚀 key AI, cloud, search, security, and realtime projects",
  browser: "🌐 open the virtual cloud browser lab",
  skills: "🛠️ technical stack and tools",
  achievements: "🏆 awards, bounties, and recognitions",
  education: "🎓 academic background",
  contact: "📬 social, research, and contact links",
  repo: "🐙 GitHub profile and highlighted repositories",
  sudo: "🔒 request admin privileges",
  clear: "✨ clear the terminal screen",
}

const renderList = (items = [], emoji = "•") => items.map((item) => `* ${emoji} ${item}`).join("\n")

const renderSection = (section) => {
  if (!section) return ""

  const emoji = sectionEmoji[section.id] || "▸"
  const lines = [`### ${emoji} ${section.title}`, "", section.body, ""]

  if (section.items && section.id === "projects") {
    section.items.forEach((project) => {
      lines.push(
        `**🚀 ${project.name} (${project.year})**`,
        `* ${project.description}`,
        `* 🧰 Stack: ${project.tags.join(", ")}`,
        project.liveUrl ? `* 🔗 Live: [Open project](${project.liveUrl})` : "* 🔒 Live: Not published yet",
        `* 🐙 ${project.sourceLabel}: [GitHub](${project.sourceUrl})`,
        ""
      )
    })
  } else if (section.experiences) {
    section.experiences.forEach((experience) => {
      const company = experience.url ? `[${experience.company}](${experience.url})` : experience.company
      lines.push(
        `**💼 ${experience.role}**`,
        `* 🏢 ${company} · ${experience.type}`,
        `* 🗓️ ${experience.dates}`,
        `* 📍 ${experience.location}`,
        renderList(experience.bullets, "▸"),
        ""
      )
    })
  } else if (section.groups) {
    section.groups.forEach(([label, , ...items]) => {
      lines.push(`* 🛠️ **${label}**: ${items.join(", ")}`)
    })
  } else if (section.links) {
    section.links.forEach(([label, href]) => {
      lines.push(`* ↗ **${label}**: [Open](${href})`)
    })
  } else {
    lines.push(renderList(section.highlights || section.items, itemEmoji[section.id]))
  }

  return lines.join("\n").trim()
}

const help = `### 🧭 Available Commands

${commands.map((cmd) => `* **${cmd}**: ${commandDescriptions[cmd]}`).join("\n")}

💡 Tip: switch to hybrid mode and run a command like \`projects\`, \`skills\`, or \`contact\`. The GUI pane will scroll to the matching portfolio section while the terminal prints the response.`

const sudo = `🔒 User guest is not in the sudoers file. This incident will be logged to /var/portfolio/audit.log.`

const cmds = {
  help,
  sudo,
  ...Object.fromEntries(Object.entries(sectionByCommand).map(([command, section]) => [command, renderSection(section)])),
}

cmds.whoami = renderSection(sectionByCommand.about)
cmds.links = renderSection(sectionByCommand.contact)
cmds.repo = `### 🐙 Repository Links

* 🐙 GitHub: [Open profile](${profile.github})
* 📍 Location: ${profile.location}
* 🎓 Scholar: [Open profile](${profile.scholar})
* 🧬 ORCID: [Open profile](${profile.orcid})
* 📌 Pinned: [spectra](https://github.com/NishithP2004/spectra), [BaseScript](https://github.com/NishithP2004/BaseScript), [VishNet](https://github.com/NishithP2004/VishNet)
* 🧾 Portfolio source: [nishithp2004.github.io](https://github.com/NishithP2004/nishithp2004.github.io)`

export default cmds
