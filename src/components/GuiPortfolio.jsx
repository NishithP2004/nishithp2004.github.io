import { forwardRef, useEffect, useImperativeHandle, useLayoutEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import BrandIcon from "./BrandIcon"
import FaIcon from "./FaIcon"
import HeroConstellation from "./HeroConstellation"
import JourneySection from "./JourneySection"
import "./HeroConstellation.css"
import { profile, sections } from "../portfolioData"

gsap.registerPlugin(ScrollTrigger)

const heroWords = ["AI", "Code", "Curiosity"]
const longestHeroWordLength = Math.max(...heroWords.map((word) => word.length))

const openJourneyEntry = (entryId) => {
  window.dispatchEvent(new CustomEvent("portfolio:journey-entry", { detail: { entryId } }))
}

const skillIconMap = {
  HTML: "html",
  CSS: "css",
  JavaScript: "javaScript",
  React: "react",
  "Tailwind CSS": "tailwind",
  "Node.js": "nodeJs",
  Express: "express",
  Java: "java",
  Python: "python",
  "Azure Functions": "microsoft",
  "Socket.IO": "socketIo",
  Playwright: "desktop",
  Puppeteer: "puppeteer",
  Selenium: "selenium",
  noVNC: "desktop",
  "Chrome automation": "googleChrome",
  "Chrome Extensions": "googleChrome",
  MCP: "mcp",
  Firebase: "firebase",
  "Azure Cosmos DB": "microsoft",
  Neo4j: "neo4j",
  Redis: "redis",
  MongoDB: "mongoDb",
  SQLite: "sqlite",
  "Vector DBs": "database",
  "Microsoft Azure": "microsoft",
  "Google Cloud": "googleCloud",
  AWS: "aws",
  Cloudflare: "cloudflare",
  "LangChain / LangGraph": "langChain",
  Langfuse: "robot",
  Ollama: "ollama",
  Docker: "docker",
  Kubernetes: "kubernetes",
  "Google ADK": "google",
  "Burp Suite": "burpSuite",
  "Kali Linux tooling": "kaliLinux",
  Nmap: "shield",
  SQLMap: "database",
  CyberChef: "code",
}

function HeroTypingText() {
  const [wordIndex, setWordIndex] = useState(0)
  const [characterCount, setCharacterCount] = useState(1)
  const [isDeleting, setIsDeleting] = useState(false)
  const currentWord = heroWords[wordIndex]
  const visibleWord = currentWord.slice(0, characterCount)

  useEffect(() => {
    const isComplete = characterCount === currentWord.length
    const isEmpty = characterCount === 0
    const delay = isComplete && !isDeleting ? 1150 : isDeleting ? 58 : 115

    const timeout = window.setTimeout(() => {
      if (!isDeleting && isComplete) {
        setIsDeleting(true)
        return
      }

      if (isDeleting && isEmpty) {
        setIsDeleting(false)
        setWordIndex((index) => (index + 1) % heroWords.length)
        setCharacterCount(1)
        return
      }

      setCharacterCount((count) => count + (isDeleting ? -1 : 1))
    }, delay)

    return () => window.clearTimeout(timeout)
  }, [characterCount, currentWord, isDeleting])

  return (
    <p className="typing-line" aria-label={`Hacking the Future with ${currentWord}`}>
      <span>Hacking the Future with </span>
      <span className="typing-word-slot" style={{ "--typing-width": `${longestHeroWordLength}ch` }}>
        <span className="typing-word">{visibleWord || "\u00a0"}</span>
      </span>
    </p>
  )
}

function BrowserLab() {
  return (
    <div className="browser-lab" aria-label="Virtual cloud browser concept window">
      <div className="browser-topbar">
        <div className="traffic">
          <span />
          <span />
          <span />
        </div>
        <div className="address">cloud://nishith-lab/session/semantic-browser</div>
        <div className="latency">42ms</div>
      </div>
      <div className="browser-tabs">
        <span className="active">Remote Workspace</span>
        <span>AI Memory</span>
        <span>Trace Log</span>
      </div>
      <div className="browser-body">
        <div className="browser-preview">
          <div className="mini-toolbar">
            <span>isolated chromium</span>
            <strong>live</strong>
          </div>
          <div className="preview-grid">
            <div className="cloud-node primary">GPU Render</div>
            <div className="cloud-node">Crawler</div>
            <div className="cloud-node">Session VM</div>
            <div className="cloud-node">Policy Gate</div>
          </div>
          <div className="stream-line" />
          <div className="stream-line short" />
        </div>
        <div className="browser-side">
          <p className="side-label"><FaIcon name="cloudflare" /> edge browser runtime</p>
          <h3>Ask the browser what it saw.</h3>
          <ul>
            <li>Snapshot DOM and screenshots</li>
            <li>Replay tasks across sessions</li>
            <li>Extract links, markdown, and structured page memory</li>
          </ul>
          <code>$ browser render --cloudflare --playwright</code>
        </div>
      </div>
    </div>
  )
}

function AboutSection({ section }) {
  return (
    <div className="about-profile">
      <div className="about-perspective">
        <p>{section.statement}</p>
        <div className="about-focus">
          <span>Working across</span>
          <strong>{section.focus}</strong>
        </div>
      </div>

      <dl className="about-facts" aria-label="Profile highlights">
        {section.highlights.map((highlight, index) => (
          <div className="about-fact" key={highlight.label}>
            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <dt>{highlight.label}</dt>
              <dd>
                <strong>{highlight.title}</strong>
                <p>{highlight.detail}</p>
              </dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  )
}

function SectionContent({ section }) {
  if (section.id === "browser-lab") return <BrowserLab />
  if (section.id === "journey") return <JourneySection />
  if (section.id === "about") return <AboutSection section={section} />

  if (section.id === "projects") {
    return (
      <div className="project-grid">
        {section.items.map((project) => (
          <article className="project-card" key={project.name}>
            <div>
              <p>{project.year}</p>
              <h3>{project.name}</h3>
              <span className="project-tags">{project.tags.join(" / ")}</span>
            </div>
            <p>{project.description}</p>
            {project.evolution ? (
              <div className="project-evolution" aria-label={`${project.name} evolution`}>
                <span>Project evolution</span>
                <ol>
                  {project.evolution.map((step) => (
                    <li key={`${step.year}-${step.label}`}>
                      {step.journeyId ? (
                        <button type="button" onClick={() => openJourneyEntry(step.journeyId)}>
                          <time>{step.year}</time>
                          <span>{step.label}</span>
                        </button>
                      ) : (
                        <div>
                          <time>{step.year}</time>
                          <span>{step.label}</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            ) : null}
            <div className="project-actions">
              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  <FaIcon name="globe" />
                  <span>Open project</span>
                </a>
              ) : (
                <button type="button" disabled aria-label={`${project.name} does not have a live deployment link yet`}>
                  <FaIcon name="globe" />
                  <span>No live deployment</span>
                </button>
              )}
              {project.sourceUrl ? (
                <a href={project.sourceUrl} target="_blank" rel="noreferrer">
                  <FaIcon name="github" />
                  <span>{project.sourceLabel || "Source code"}</span>
                </a>
              ) : (
                <button type="button" disabled aria-label={`${project.name} source code is not publicly available`}>
                  <FaIcon name="github" />
                  <span>Source unavailable</span>
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    )
  }

  if (section.id === "education") {
    return (
      <div className="education-track" aria-label="Academic progression">
        {section.items.map((entry, index) => (
          <article className={`education-entry ${entry.featured ? "is-featured" : ""}`} key={entry.id}>
            <div className="education-meta">
              <span>{String(index + 1).padStart(2, "0")} / {entry.level}</span>
              <span className="education-period">{entry.period}</span>
            </div>
            <div className="education-marker" aria-hidden="true">
              <FaIcon name="graduationCap" />
            </div>
            <div className="education-copy">
              <div>
                <p className="education-institution">{entry.institution} · {entry.location}</p>
                <h3>{entry.qualification}</h3>
              </div>
              <div className="education-result" aria-label={`${entry.resultLabel}: ${entry.result}`}>
                <strong>{entry.result}</strong>
                <span>{entry.resultLabel}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    )
  }

  if (section.experiences) {
    return (
      <div className="experience-list">
        {section.experiences.map((experience) => (
          <article className="experience-card" key={`${experience.company}-${experience.role}`}>
            <div className="experience-topline">
              <FaIcon name="briefcase" />
              <div>
                <h3>{experience.role}</h3>
                <p>
                  {experience.url ? (
                    <a className="experience-company-link" href={experience.url} target="_blank" rel="noreferrer">
                      {experience.company}
                    </a>
                  ) : experience.company}
                  {" · "}
                  {experience.type}
                </p>
              </div>
            </div>
            <p className="experience-meta">{experience.dates} · {experience.location}</p>
            <ul>
              {experience.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    )
  }

  if (section.groups) {
    return (
      <div className="skill-grid">
        {section.groups.map(([label, icon, ...items]) => (
          <article key={label} className="skill-group">
            <h3><FaIcon name={icon} />{label}</h3>
            <div className="skill-token-list">
              {items.map((item) => (
                <span className="skill-token" key={item}>
                  <BrandIcon name={skillIconMap[item]} fallback={skillIconMap[item] || "code"} />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    )
  }

  if (section.links) {
    return (
      <div className="contact-grid">
        {section.links.map(([label, href, icon]) => (
          <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={`Open ${label}`}>
            <BrandIcon name={icon} fallback={icon} />
            <span>{label}</span>
          </a>
        ))}
      </div>
    )
  }

  const list = section.highlights || section.items || []
  return (
    <ul className="feature-list">
      {list.map((item) => (
        <li key={item}>
          <FaIcon name={section.itemIcon || section.icon || "terminal"} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

const GuiPortfolio = forwardRef(function GuiPortfolio({ activeSection, hybrid = false, theme = "dark" }, ref) {
  const mainRef = useRef(null)

  useImperativeHandle(ref, () => mainRef.current)

  useLayoutEffect(() => {
    const root = mainRef.current
    if (!root) return undefined

    const context = gsap.context(() => {
      const media = gsap.matchMedia()

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.timeline({ defaults: { ease: "power3.out" } })
          .from(".hero-copy > *", { autoAlpha: 0, y: 24, duration: 0.7, stagger: 0.08 })
          .from(".hero-card-wrap", { autoAlpha: 0, x: 32, scale: 0.97, duration: 0.8 }, "<0.12")

        const isDesktopScroller = window.matchMedia("(min-width: 981px)").matches
        const scroller = hybrid || isDesktopScroller ? root : undefined
        root.querySelectorAll(".content-section").forEach((section, index) => {
          const heading = section.querySelectorAll(".section-heading > *, .section-body")
          const content = section.querySelectorAll(
            ".about-perspective, .about-fact, .project-card, .experience-card, .education-entry, .skill-group, .feature-list li, .contact-grid a, .browser-lab",
          )
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              scroller,
              start: "top 82%",
              once: true,
            },
            defaults: { ease: "power3.out" },
          })

          timeline.from(heading, {
            autoAlpha: 0,
            x: index % 2 === 0 ? -18 : 18,
            duration: 0.62,
            stagger: 0.08,
          })
          if (content.length) {
            timeline.from(content, {
              autoAlpha: 0,
              y: 26,
              scale: 0.985,
              duration: 0.55,
              stagger: 0.07,
            }, "<0.18")
          }
        })

        ScrollTrigger.refresh()
        if (window.location.hash) {
          const anchor = root.querySelector(window.location.hash)
          if (anchor) {
            gsap.delayedCall(0.05, () => {
              anchor.scrollIntoView({ block: "start" })
              ScrollTrigger.refresh()
            })
          }
        }
      })

      return () => media.revert()
    }, root)

    return () => context.revert()
  }, [hybrid])

  return (
    <main className={`gui-portfolio ${hybrid ? "hybrid-pane" : ""}`} ref={mainRef}>
      <section className="hero-section" id="hero" data-section="hero">
        <div className="hero-copy">
          <p className="prompt-line">nishith@portfolio:~$ ./launch-gui</p>
          <h1>{profile.name}</h1>
          <HeroTypingText />
          <p className="hero-summary">{profile.summary}</p>
          <div className="profile-note">
            <span><FaIcon name="locationDot" />{profile.location}</span>
          </div>
        </div>
        <div className="hero-card-wrap">
          <HeroConstellation profile={profile} enableMotion={!hybrid} theme={theme} />
        </div>
      </section>

      {sections.map((section) => (
        <section
          className={`content-section ${activeSection === section.id ? "section-active" : ""}`}
          id={section.id}
          data-section={section.id}
          key={section.id}
        >
          <div className="section-heading">
            <p>{section.icon ? <FaIcon name={section.icon} /> : null}{section.kicker}</p>
            <h2>{section.title}</h2>
          </div>
          <p className="section-body">{section.body}</p>
          <SectionContent section={section} />
        </section>
      ))}
    </main>
  )
})

export default GuiPortfolio
