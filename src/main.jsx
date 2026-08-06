import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.jsx'

// Trackpad pinch fires as a wheel event with ctrlKey set, same as Ctrl+scroll.
// Browsers don't expose the actual zoom level to page code, so we track it
// ourselves: each allowed zoom-in step increments a counter, and zoom-out
// steps consume it back down — but never past zero (the original size).
// Keyboard Ctrl+/- shortcuts use a separate keydown pathway and are untouched.
let touchpadZoomSteps = 0

window.addEventListener(
  'wheel',
  (event) => {
    if (!event.ctrlKey) return

    if (event.deltaY < 0) {
      touchpadZoomSteps += 1
    } else if (event.deltaY > 0) {
      if (touchpadZoomSteps > 0) {
        touchpadZoomSteps -= 1
      } else {
        event.preventDefault()
      }
    }
  },
  { passive: false },
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
