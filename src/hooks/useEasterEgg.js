import { useEffect } from 'react'

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']

const ASCII_ART = `
                           _  _
  ___ _   _ _ __ _   _ ___(_)| | __
 / _ \\ | | | '__| | | / __| || |/ /
|  __/| |_| | |  | |_| \\__ \\ ||   <
 \\___| \\__,_|_|   \\__,_|___/_||_|\\_\\
`

const showBSOD = () => {
  const overlay = document.createElement('div')
  overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;background:#0000AA;display:flex;align-items:center;justify-content:center;cursor:pointer;'

  // Scanlines
  const scanlines = document.createElement('div')
  scanlines.style.cssText = 'position:absolute;inset:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.1) 2px,rgba(0,0,0,0.1) 4px);pointer-events:none;'
  overlay.appendChild(scanlines)

  const text = document.createElement('pre')
  text.style.cssText = 'color:#fff;font-family:"Courier New",monospace;font-size:14px;line-height:1.8;max-width:600px;padding:40px;position:relative;z-index:1;text-align:left;'
  text.textContent = `
  A fatal exception 0x0000HIRE has occurred at 0028:C0011E05
  in VxD CAREER(01) + 00001E05. The current developer is
  available for collaboration.


  HIRING_NOT_FOUND

  The developer you are looking for has 11+ years of
  experience in Angular, React, and TypeScript.


  *  Press any key to send a message to this developer.
  *  Press CTRL+ALT+DEL to restart your search.
     You will lose any unsaved candidate if you do.

  Press any key to continue _`

  overlay.appendChild(text)
  document.body.appendChild(overlay)

  const close = () => {
    overlay.style.transition = 'opacity 0.3s'
    overlay.style.opacity = '0'
    setTimeout(() => overlay.remove(), 300)
    window.removeEventListener('keydown', close)
    overlay.removeEventListener('click', close)

    console.log('%c\uD83C\uDFAE Achievement Unlocked! BSOD Easter Egg found.', 'color: #10B981; font-size: 14px; font-weight: bold;')

    setTimeout(() => {
      const el = document.getElementById('contact')
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 56
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }, 400)
  }

  // Auto-close after 10s
  const autoClose = setTimeout(close, 10000)

  const handleClose = () => {
    clearTimeout(autoClose)
    close()
  }

  setTimeout(() => {
    window.addEventListener('keydown', handleClose, { once: true })
    overlay.addEventListener('click', handleClose, { once: true })
  }, 500)
}

export const useEasterEgg = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return

    let pos = 0

    console.log('%c' + ASCII_ART, 'color: #10B981; font-family: monospace; font-size: 14px; line-height: 1.2;')
    console.log('%cSenior Frontend Engineer %c// github.com/eurusik', 'color: #EDEDEF; font-family: monospace; font-size: 12px;', 'color: #10B981; font-family: monospace; font-size: 12px;')
    console.log('%cTry \u2191\u2191\u2193\u2193\u2190\u2192\u2190\u2192BA', 'color: #6B6B73; font-family: monospace; font-size: 11px;')

    const handler = (e) => {
      if (e.key === KONAMI[pos]) {
        pos++
        if (pos === KONAMI.length) {
          pos = 0
          showBSOD()
        }
      } else {
        pos = 0
      }
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])
}
