import FaIcon from "./FaIcon"

const modes = [
  { id: "gui", label: "GUI mode", icon: "desktop" },
  { id: "terminal", label: "Terminal mode", icon: "terminal" },
  { id: "hybrid", label: "Hybrid mode", icon: "columns" },
]

function ModeToggle({ mode, onChange, theme, onThemeChange, inline = false }) {
  return (
    <div className={`mode-controls ${inline ? "mode-controls-inline" : "mode-controls-floating"}`}>
      <div className="mode-toggle" aria-label="Portfolio display mode">
        {modes.map((item) => (
          <button
            key={item.id}
            type="button"
            className={mode === item.id ? "active" : ""}
            onClick={() => onChange(item.id)}
            aria-label={item.label}
            title={item.label}
          >
            <FaIcon name={item.icon} />
          </button>
        ))}
      </div>
      <button
        type="button"
        className="theme-toggle"
        onClick={() => onThemeChange(theme === "dark" ? "light" : "dark")}
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        title={theme === "dark" ? "Light mode" : "Dark mode"}
      >
        <FaIcon name={theme === "dark" ? "sun" : "moon"} />
      </button>
    </div>
  )
}

export default ModeToggle
