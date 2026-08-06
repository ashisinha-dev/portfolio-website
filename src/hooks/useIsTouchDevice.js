import { useState, useEffect } from 'react'

export function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(hover: none) and (pointer: coarse)')
    setIsTouch(query.matches)

    const handleChange = (event) => setIsTouch(event.matches)
    query.addEventListener('change', handleChange)
    return () => query.removeEventListener('change', handleChange)
  }, [])

  return isTouch
}

export function externalLinkProps(isTouch) {
  return isTouch ? {} : { target: '_blank', rel: 'noopener noreferrer' }
}
