import { useState } from "react"
import FaIcon from "./FaIcon"
import ModeToggle from "./ModeToggle"
import { sections } from "../portfolioData"

const navItems = [
    ["Home", "#hero", "terminal"],
    ...sections
        .filter((section) => ["about", "experience", "projects", "skills", "contact"].includes(section.id))
        .map((section) => [section.title, `#${section.id}`, section.icon]),
]

function Header({ mode, onModeChange, theme, onThemeChange }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const changeMode = (nextMode) => {
        onModeChange(nextMode)
        setIsMenuOpen(false)
    }

    const changeTheme = (nextTheme) => {
        onThemeChange(nextTheme)
        setIsMenuOpen(false)
    }

    return (
        <header className="site-header">
            <div className="brand">
                <h3 className="text-green-500 font-bold text-2xl">Nishith P</h3>
                <h4 className="text-sm text-gray-400">AI | Cloud | Security | Full Stack Dev</h4>
            </div>
            <button
                type="button"
                className={`mobile-menu-button ${isMenuOpen ? "active" : ""}`}
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMenuOpen}
                aria-controls="portfolio-navigation"
                onClick={() => setIsMenuOpen((open) => !open)}
            >
                <span />
                <span />
                <span />
            </button>
            <nav
                className={`header-links ${isMenuOpen ? "open" : ""}`}
                id="portfolio-navigation"
                aria-label="Portfolio navigation"
            >
                {navItems.map(([label, href, icon]) => (
                    <a href={href} key={label} onClick={() => setIsMenuOpen(false)}>
                        <FaIcon name={icon} />
                        <span>{label}</span>
                    </a>
                ))}
                <ModeToggle
                    inline
                    mode={mode}
                    onChange={changeMode}
                    theme={theme}
                    onThemeChange={changeTheme}
                />
            </nav>
        </header>
    )
}

export default Header;
