import { useEffect, useRef, useState } from "react"
import GuiPortfolio from "./GuiPortfolio"
import Header from "./Header"
import ModeToggle from "./ModeToggle"
import ScrollToTop from "./ScrollToTop"
import TerminalWindow from "./TerminalWindow"
import { sectionByCommand } from "../portfolioData"

const getSystemTheme = () => {
    if (typeof window === "undefined") return "dark"
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
}

function Layout() {
    const [mode, setMode] = useState("gui")
    const [theme, setTheme] = useState(getSystemTheme)
    const [activeSection, setActiveSection] = useState("hero")
    const guiRef = useRef(null)

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: light)")
        const handleChange = (event) => setTheme(event.matches ? "light" : "dark")

        mediaQuery.addEventListener("change", handleChange)
        return () => mediaQuery.removeEventListener("change", handleChange)
    }, [])

    useEffect(() => {
        document.documentElement.dataset.theme = theme
    }, [theme])

    const scrollToSection = (command) => {
        const section = sectionByCommand[command]?.id
        if (!section || !guiRef.current) return

        setActiveSection(section)
        if (section === "journey") {
            window.dispatchEvent(new CustomEvent("portfolio:journey-command", { detail: { command } }))
        }
        const target = guiRef.current.querySelector(`#${section}`)
        target?.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <>
        <Header mode={mode} onModeChange={setMode} theme={theme} onThemeChange={setTheme} />
        <div className={`portfolio-shell mode-${mode} theme-${theme}`}>
            {mode === "gui" && <GuiPortfolio ref={guiRef} activeSection={activeSection} theme={theme} />}

            {mode === "terminal" && (
                <div className="terminal-only">
                    <TerminalWindow onCommand={(command) => setActiveSection(sectionByCommand[command]?.id || activeSection)} />
                </div>
            )}

            {mode === "hybrid" && (
                <div className="hybrid-layout">
                    <GuiPortfolio ref={guiRef} activeSection={activeSection} hybrid theme={theme} />
                    <TerminalWindow compact onCommand={scrollToSection} />
                </div>
            )}

            <ModeToggle mode={mode} onChange={setMode} theme={theme} onThemeChange={setTheme} />
            <ScrollToTop mode={mode} guiRef={guiRef} onScrollTop={() => setActiveSection("hero")} />
        </div>
        </>
    )
}

export default Layout
