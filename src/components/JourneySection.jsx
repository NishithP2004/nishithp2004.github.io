import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { credentials, galleryAlbums, journeyEntries, journeyThemes } from "../journeyData"

const CAROUSEL_INTERVAL_MS = 5000

const tabLabels = {
  timeline: "Timeline",
  gallery: "Gallery",
  credentials: "Credentials",
}

function JourneyGlyph({ name }) {
  const paths = {
    timeline: "M5 4v16M5 8h5M5 16h5M14 5h5v6h-5zM14 15h5v4h-5z",
    gallery: "M3 5h18v14H3zM3 15l5-5 4 4 3-3 6 6M16 9h.01",
    credentials: "M12 3l7 3v5c0 4.6-2.9 8.4-7 10-4.1-1.6-7-5.4-7-10V6zM9 12l2 2 4-4",
    external: "M14 4h6v6M20 4l-9 9M18 13v6H5V6h6",
    expand: "M9 4H4v5M4 4l6 6M15 20h5v-5M20 20l-6-6M15 4h5v5M20 4l-6 6M9 20H4v-5M4 20l6-6",
    close: "M5 5l14 14M19 5L5 19",
    left: "M15 5l-7 7 7 7",
    right: "M9 5l7 7-7 7",
  }

  return (
    <svg className="journey-glyph" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={paths[name]} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  )
}

function MediaFrame({ item, className = "", onOpen, label }) {
  const [missing, setMissing] = useState(false)

  useEffect(() => setMissing(false), [item.src])

  const content = missing ? (
    <span className="journey-media-missing">
      <JourneyGlyph name="gallery" />
      <span>Media ready at<br /><code>{item.src}</code></span>
    </span>
  ) : (
    <>
      <img
        src={item.src}
        width={item.width}
        height={item.height}
        alt={item.alt}
        loading="lazy"
        decoding="async"
        onError={() => setMissing(true)}
        style={{ objectPosition: item.focalPosition || "center" }}
      />
      {onOpen ? <span className="journey-media-expand"><JourneyGlyph name="expand" /></span> : null}
    </>
  )

  const style = { "--media-ratio": `${item.width} / ${item.height}` }
  const classes = `journey-media ${item.type === "certificate" ? "is-certificate" : ""} ${className}`.trim()

  if (!onOpen || missing) return <div className={classes} style={style}>{content}</div>

  return (
    <button className={classes} style={style} type="button" onClick={onOpen} aria-label={label || `Open ${item.caption}`}>
      {content}
    </button>
  )
}

function AutoCarouselMedia({ items, entryTitle, openMedia }) {
  const containerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const hasMultipleFrames = items.length > 1
  const activeItem = items[activeIndex] || items[0]

  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === "undefined") {
      setIsVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "120px" },
    )
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!hasMultipleFrames || isPaused || !isVisible || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined
    const intervalId = window.setInterval(
      () => setActiveIndex((current) => (current + 1) % items.length),
      CAROUSEL_INTERVAL_MS,
    )
    return () => window.clearInterval(intervalId)
  }, [hasMultipleFrames, isPaused, isVisible, items.length])

  if (!activeItem) return null
  if (!hasMultipleFrames) {
    return (
      <MediaFrame
        item={activeItem}
        className="journey-entry-media"
        onOpen={() => openMedia(items, 0, entryTitle)}
        label={`Open a frame from ${entryTitle}`}
      />
    )
  }

  return (
    <div
      ref={containerRef}
      className="journey-entry-carousel journey-entry-media"
      aria-label={`${entryTitle} media carousel`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false)
      }}
    >
      <MediaFrame
        key={activeItem.src}
        item={activeItem}
        className="journey-entry-carousel-frame"
        onOpen={() => openMedia(items, activeIndex, entryTitle)}
        label={`Open frame ${activeIndex + 1} of ${items.length} from ${entryTitle}`}
      />
      <div className="journey-carousel-status" aria-label={`Frame ${activeIndex + 1} of ${items.length}`}>
        <span aria-hidden="true">{activeIndex + 1}/{items.length}</span>
        <div className="journey-carousel-dots">
          {items.map((item, index) => (
            <button
              key={item.src}
              type="button"
              className={index === activeIndex ? "active" : ""}
              aria-label={`Show frame ${index + 1} of ${items.length}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function JourneyTabs({ activeTab, setActiveTab }) {
  return (
    <div className="journey-tabs" role="tablist" aria-label="Journey views">
      {Object.entries(tabLabels).map(([id, label]) => (
        <button
          key={id}
          type="button"
          role="tab"
          id={`journey-tab-${id}`}
          aria-controls={`journey-panel-${id}`}
          aria-selected={activeTab === id}
          className={activeTab === id ? "active" : ""}
          onClick={() => setActiveTab(id)}
        >
          <JourneyGlyph name={id} />
          <span>{label}</span>
        </button>
      ))}
    </div>
  )
}

function ThemeFilters({ activeTheme, setActiveTheme }) {
  return (
    <div className="journey-filters" aria-label="Filter journey by theme">
      {journeyThemes.map((theme) => (
        <button
          type="button"
          key={theme}
          className={activeTheme === theme ? "active" : ""}
          aria-pressed={activeTheme === theme}
          onClick={() => setActiveTheme(theme)}
        >
          {theme[0].toUpperCase() + theme.slice(1)}
        </button>
      ))}
    </div>
  )
}

function FieldNoteLinks({ postUrl, fieldNotes, className = "" }) {
  const notes = fieldNotes?.length
    ? fieldNotes
    : postUrl
      ? [{ label: "Field note", url: postUrl }]
      : []

  if (!notes.length) return null

  return (
    <div className={`journey-field-notes ${className}`.trim()} aria-label={notes.length > 1 ? "Related LinkedIn field notes" : "Related LinkedIn field note"}>
      {notes.length > 1 ? <span>Field notes:</span> : null}
      {notes.map((note) => (
        <a key={note.url} href={note.url} target="_blank" rel="noreferrer">
          {notes.length > 1 ? note.label : "View field note"} <JourneyGlyph name="external" />
        </a>
      ))}
    </div>
  )
}

function TimelineView({ entries, selectedId, setSelectedId, openMedia, openGallery }) {
  let originsLabelShown = false

  return (
    <div id="journey-panel-timeline" role="tabpanel" aria-labelledby="journey-tab-timeline" className="journey-timeline">
      {entries.map((entry) => {
        const showOriginsLabel = entry.era === "origins" && !originsLabelShown
        if (showOriginsLabel) originsLabelShown = true
        const isSelected = entry.id === selectedId
        const primaryMedia = entry.media[0]

        return (
          <div className="journey-timeline-group" key={entry.id}>
            {showOriginsLabel ? (
              <div className="journey-era-divider">
                <span>Origins</span>
                <p>Early open-source work, school leadership, and the projects that set the direction.</p>
              </div>
            ) : null}
            <article
              className={`journey-entry ${isSelected ? "selected" : ""} ${entry.era === "origins" ? "is-origins" : ""}`}
              data-entry-id={entry.id}
            >
              <button className="journey-entry-marker" type="button" onClick={() => setSelectedId(entry.id)} aria-label={`Select ${entry.title}`}>
                <span />
              </button>
              <p className="journey-entry-date">{entry.dateLabel}</p>
              <div className="journey-entry-copy">
                <h3>{entry.title}</h3>
                <p className="journey-entry-summary">{entry.summary}</p>
                {isSelected ? <p className="journey-entry-details">{entry.details}</p> : null}
                <div className="journey-entry-themes" aria-label="Themes">
                  {entry.themes.map((theme) => <span key={theme}>{theme}</span>)}
                </div>
                <div className="journey-entry-actions">
                  <FieldNoteLinks postUrl={entry.postUrl} fieldNotes={entry.fieldNotes} />
                  {entry.media.length > 1 ? (
                    <button type="button" onClick={() => openGallery(entry.id)}>View {entry.media.length} frames</button>
                  ) : null}
                </div>
              </div>
              {primaryMedia ? (
                <AutoCarouselMedia items={entry.media} entryTitle={entry.title} openMedia={openMedia} />
              ) : (
                <div className="journey-entry-no-media" aria-label="Text-only milestone"><span>./story</span></div>
              )}
            </article>
          </div>
        )
      })}
      <div className="journey-filmstrip" aria-label="Journey media preview">
        <div className="journey-filmstrip-heading">
          <span>$ selected frames from the journey</span>
          <button type="button" onClick={() => openGallery(null)}>See all in gallery <JourneyGlyph name="right" /></button>
        </div>
        <div className="journey-filmstrip-row">
          {entries.filter((entry) => entry.media.length).slice(0, 8).map((entry) => (
            <MediaFrame
              key={entry.id}
              item={entry.media[0]}
              className="journey-filmstrip-frame"
              onOpen={() => openMedia(entry.media, 0, entry.title)}
              label={`Open a frame from ${entry.title}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function GalleryView({ albums, openMedia }) {
  return (
    <div id="journey-panel-gallery" role="tabpanel" aria-labelledby="journey-tab-gallery" className="journey-gallery">
      {albums.length ? albums.map((album) => (
        <article className="journey-album" data-album-id={album.id} key={album.id}>
          <header>
            <div>
              <p>{album.date}</p>
              <h3>{album.title}</h3>
            </div>
            <span>{album.media.length} {album.media.length === 1 ? "frame" : "frames"}</span>
          </header>
          <div className={`journey-album-grid count-${Math.min(album.media.length, 4)}`}>
            {album.media.map((item, index) => (
              <MediaFrame key={item.src} item={item} onOpen={() => openMedia(album.media, index, album.title)} />
            ))}
          </div>
          <FieldNoteLinks postUrl={album.postUrl} fieldNotes={album.fieldNotes} className="journey-album-links" />
        </article>
      )) : <p className="journey-empty">No albums match this theme.</p>}
    </div>
  )
}

function CredentialsView({ items, openMedia, showEntry }) {
  return (
    <div id="journey-panel-credentials" role="tabpanel" aria-labelledby="journey-tab-credentials" className="journey-credentials">
      {items.map((item) => (
        <article className="journey-credential" data-credential-id={item.id} key={item.id}>
          <MediaFrame item={item.image} className="journey-credential-media" onOpen={() => openMedia([item.image], 0, item.title)} />
          <div>
            <p className="journey-credential-date">{item.date}</p>
            <h3>{item.title}</h3>
            <p>{item.issuer}</p>
            <strong>{item.result}</strong>
            {item.relatedJourneyId ? (
              <button type="button" onClick={() => showEntry(item.relatedJourneyId)}>View related milestone <JourneyGlyph name="right" /></button>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  )
}

function Lightbox({ state, close, step }) {
  const closeRef = useRef(null)
  const dialogRef = useRef(null)
  const [missing, setMissing] = useState(false)
  const item = state?.items[state.index]

  useEffect(() => setMissing(false), [item?.src])

  useEffect(() => {
    if (!state) return undefined
    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === "Escape") close()
      if (event.key === "ArrowLeft") step(-1)
      if (event.key === "ArrowRight") step(1)
      if (event.key === "Tab") {
        const controls = [...(dialogRef.current?.querySelectorAll("button:not(:disabled)") || [])]
        if (!controls.length) return
        const first = controls[0]
        const last = controls[controls.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = previousOverflow
      previousFocus?.focus?.()
    }
  }, [state, close, step])

  if (!state || !item) return null

  return (
    <div className="journey-lightbox" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) close() }}>
      <div ref={dialogRef} className="journey-lightbox-dialog" role="dialog" aria-modal="true" aria-label={`${state.label} media viewer`}>
        <div className="journey-lightbox-topbar">
          <div><span>{state.label}</span><small>{state.index + 1} / {state.items.length}</small></div>
          <button ref={closeRef} type="button" onClick={close} aria-label="Close media viewer"><JourneyGlyph name="close" /></button>
        </div>
        <div className={`journey-lightbox-stage ${item.type === "certificate" ? "is-certificate" : ""}`}>
          {missing ? (
            <span className="journey-media-missing">
              <JourneyGlyph name="gallery" />
              <span>Media ready at<br /><code>{item.src}</code></span>
            </span>
          ) : (
            <img src={item.src} width={item.width} height={item.height} alt={item.alt} onError={() => setMissing(true)} />
          )}
        </div>
        <div className="journey-lightbox-footer">
          <button type="button" onClick={() => step(-1)} disabled={state.items.length < 2} aria-label="Previous image"><JourneyGlyph name="left" /></button>
          <p>{item.caption}</p>
          <button type="button" onClick={() => step(1)} disabled={state.items.length < 2} aria-label="Next image"><JourneyGlyph name="right" /></button>
        </div>
      </div>
    </div>
  )
}

export default function JourneySection() {
  const [activeTab, setActiveTab] = useState("timeline")
  const [activeTheme, setActiveTheme] = useState("all")
  const [selectedId, setSelectedId] = useState(journeyEntries[0].id)
  const [lightbox, setLightbox] = useState(null)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleJourneyEntry = (event) => {
      const entryId = event.detail?.entryId
      if (!journeyEntries.some((entry) => entry.id === entryId)) return
      setIsExpanded(true)
      setActiveTheme("all")
      setSelectedId(entryId)
      setActiveTab("timeline")
      window.requestAnimationFrame(() => document.querySelector(`[data-entry-id="${entryId}"]`)?.scrollIntoView({ behavior: "smooth", block: "center" }))
    }

    window.addEventListener("portfolio:journey-entry", handleJourneyEntry)
    return () => window.removeEventListener("portfolio:journey-entry", handleJourneyEntry)
  }, [])

  useEffect(() => {
    const handleJourneyCommand = (event) => {
      const command = event.detail?.command
      if (!["journey", "gallery", "credentials", "achievements"].includes(command)) return
      setIsExpanded(true)
      setActiveTheme("all")
      setActiveTab(command === "gallery" ? "gallery" : command === "credentials" || command === "achievements" ? "credentials" : "timeline")
    }

    window.addEventListener("portfolio:journey-command", handleJourneyCommand)
    return () => window.removeEventListener("portfolio:journey-command", handleJourneyCommand)
  }, [])

  const sortedEntries = useMemo(
    () => [...journeyEntries].sort((a, b) => b.sortDate.localeCompare(a.sortDate)),
    [],
  )
  const filteredEntries = useMemo(
    () => activeTheme === "all" ? sortedEntries : sortedEntries.filter((entry) => entry.themes.includes(activeTheme)),
    [activeTheme, sortedEntries],
  )
  const filteredAlbums = useMemo(
    () => activeTheme === "all" ? galleryAlbums : galleryAlbums.filter((album) => album.themes.includes(activeTheme)),
    [activeTheme],
  )

  const openMedia = useCallback((items, index, label) => setLightbox({ items, index, label }), [])
  const closeLightbox = useCallback(() => setLightbox(null), [])
  const stepLightbox = useCallback((direction) => setLightbox((current) => {
    if (!current || current.items.length < 2) return current
    return { ...current, index: (current.index + direction + current.items.length) % current.items.length }
  }), [])
  const openGallery = (entryId) => {
    setActiveTab("gallery")
    if (entryId) setActiveTheme("all")
    window.requestAnimationFrame(() => {
      const album = entryId ? document.querySelector(`[data-album-id="${entryId}"]`) : null
      album?.scrollIntoView({ behavior: "smooth", block: "center" })
    })
  }
  const showEntry = (entryId) => {
    setActiveTheme("all")
    setSelectedId(entryId)
    setActiveTab("timeline")
    window.requestAnimationFrame(() => document.querySelector(`[data-entry-id="${entryId}"]`)?.scrollIntoView({ behavior: "smooth", block: "center" }))
  }

  return (
    <div className={`journey-experience ${isExpanded ? "is-expanded" : "is-collapsed"}`}>
      <div className="journey-disclosure">
        <div>
          <span>$ ./journey --story</span>
          <p>{journeyEntries.length} milestones, {galleryAlbums.length} albums, and {credentials.length} credentials—from early open source to B.Tech.</p>
        </div>
        <button
          type="button"
          aria-expanded={isExpanded}
          aria-controls="journey-expanded-content"
          onClick={() => {
            setIsExpanded((current) => !current)
            setLightbox(null)
          }}
        >
          {isExpanded ? "Show less" : "Read journey"} <JourneyGlyph name={isExpanded ? "left" : "right"} />
        </button>
      </div>
      {isExpanded ? (
        <div id="journey-expanded-content">
          <div className="journey-toolbar">
            <JourneyTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab !== "credentials" ? <ThemeFilters activeTheme={activeTheme} setActiveTheme={setActiveTheme} /> : null}
          </div>
          <p className="journey-index-line">{journeyEntries.length} curated milestones · 4 themes · 2 eras</p>

          {activeTab === "timeline" ? (
            <TimelineView entries={filteredEntries} selectedId={selectedId} setSelectedId={setSelectedId} openMedia={openMedia} openGallery={openGallery} />
          ) : null}
          {activeTab === "gallery" ? <GalleryView albums={filteredAlbums} openMedia={openMedia} /> : null}
          {activeTab === "credentials" ? <CredentialsView items={credentials} openMedia={openMedia} showEntry={showEntry} /> : null}

          <Lightbox state={lightbox} close={closeLightbox} step={stepLightbox} />
        </div>
      ) : null}
    </div>
  )
}
