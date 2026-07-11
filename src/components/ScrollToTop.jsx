import { useEffect, useState } from "react"
import FaIcon from "./FaIcon"

const SCROLL_THRESHOLD = 320

function ScrollToTop({ mode, guiRef, onScrollTop }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const scrollTargets = [
      guiRef.current,
      ...document.querySelectorAll(".portfolio-shell #terminal"),
    ].filter(Boolean)

    const updateVisibility = () => {
      const hasScrolled = window.scrollY > SCROLL_THRESHOLD
        || scrollTargets.some((target) => target.scrollTop > SCROLL_THRESHOLD)
      setIsVisible(hasScrolled)
    }

    window.addEventListener("scroll", updateVisibility, { passive: true })
    scrollTargets.forEach((target) => target.addEventListener("scroll", updateVisibility, { passive: true }))
    updateVisibility()

    return () => {
      window.removeEventListener("scroll", updateVisibility)
      scrollTargets.forEach((target) => target.removeEventListener("scroll", updateVisibility))
    }
  }, [guiRef, mode])

  if (!isVisible) return null

  const scrollToTop = () => {
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
    window.scrollTo({ top: 0, behavior })
    guiRef.current?.scrollTo({ top: 0, behavior })
    document.querySelectorAll(".portfolio-shell #terminal").forEach((terminal) => {
      terminal.scrollTo({ top: 0, behavior })
    })
    onScrollTop?.()
  }

  return (
    <button
      type="button"
      className="scroll-top-button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <FaIcon name="arrowUp" />
    </button>
  )
}

export default ScrollToTop
