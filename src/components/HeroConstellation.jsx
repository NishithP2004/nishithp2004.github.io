import { useCallback, useRef } from "react"
import FaIcon from "./FaIcon"

const domains = [
  { label: "AI agents", detail: "orchestration", icon: "robot", className: "domain-ai" },
  { label: "Cloud", detail: "distributed systems", icon: "server", className: "domain-cloud" },
  { label: "Security", detail: "automation", icon: "shield", className: "domain-security" },
  { label: "Products", detail: "full-stack", icon: "code", className: "domain-products" },
]

export default function HeroConstellation({ profile, enableMotion = true }) {
  const panelRef = useRef(null)

  const handlePointerMove = useCallback((event) => {
    if (!enableMotion || !panelRef.current) return

    const rect = panelRef.current.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height
    panelRef.current.style.setProperty("--constellation-x", `${x * 100}%`)
    panelRef.current.style.setProperty("--constellation-y", `${y * 100}%`)
    panelRef.current.style.setProperty("--constellation-rotate-x", `${(0.5 - y) * 4}deg`)
    panelRef.current.style.setProperty("--constellation-rotate-y", `${(x - 0.5) * 5}deg`)
  }, [enableMotion])

  const resetPointer = useCallback(() => {
    if (!panelRef.current) return
    panelRef.current.style.setProperty("--constellation-x", "50%")
    panelRef.current.style.setProperty("--constellation-y", "45%")
    panelRef.current.style.setProperty("--constellation-rotate-x", "0deg")
    panelRef.current.style.setProperty("--constellation-rotate-y", "0deg")
  }, [])

  return (
    <section
      ref={panelRef}
      className="hero-constellation"
      aria-label={`${profile.name}'s engineering focus areas`}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className="constellation-chrome" aria-hidden="true">
        <span className="constellation-lights"><i /><i /><i /></span>
        <span>workspace.graph</span>
        <span className="constellation-live"><i /> live</span>
      </div>

      <div className="constellation-canvas">
        <div className="constellation-grid" aria-hidden="true" />
        <svg className="constellation-links" viewBox="0 0 600 620" aria-hidden="true">
          <path d="M300 312 C230 220 188 162 128 120" />
          <path d="M300 312 C372 214 424 164 482 120" />
          <path d="M300 312 C218 394 174 450 122 504" />
          <path d="M300 312 C380 400 428 452 486 504" />
          <circle cx="300" cy="312" r="146" />
          <circle cx="300" cy="312" r="216" />
        </svg>

        {domains.map((domain) => (
          <div className={`constellation-domain ${domain.className}`} key={domain.label}>
            <span className="domain-icon"><FaIcon name={domain.icon} /></span>
            <span>
              <strong>{domain.label}</strong>
              <small>{domain.detail}</small>
            </span>
          </div>
        ))}

        <div className="constellation-core">
          <span className="core-orbit core-orbit-one" aria-hidden="true"><i /></span>
          <span className="core-orbit core-orbit-two" aria-hidden="true"><i /></span>
          <div className="core-portrait">
            <img src="avatar.png" alt={profile.name} />
          </div>
          <div className="core-label">
            <strong>{profile.name}</strong>
            <span>@{profile.handle}</span>
          </div>
        </div>

        <div className="constellation-status">
          <span><i /> Building production systems</span>
          <a href={`mailto:${profile.email}`} aria-label={`Email ${profile.name}`}>
            say hello <FaIcon name="arrowRight" />
          </a>
        </div>
      </div>
    </section>
  )
}
