import { useEffect, useRef, useState } from 'react'

export function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0])
  const intersecting = useRef(new Map())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          intersecting.current.set(entry.target.id, entry.isIntersecting)
        })

        const topmostVisible = sectionIds.find((id) => intersecting.current.get(id))
        if (topmostVisible) {
          setActiveId(topmostVisible)
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
