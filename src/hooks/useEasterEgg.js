import { useEffect } from 'react'

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']

export const useEasterEgg = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return

    let pos = 0

    console.log(
      '%c    eugene.rusakov    ',
      'color: #10B981; background: #111113; font-size: 20px; font-weight: bold; font-family: monospace; padding: 20px 40px; border: 2px solid #10B981; border-radius: 8px; text-shadow: 0 0 10px rgba(16,185,129,0.5);'
    )
    console.log(
      '%cSenior Frontend Engineer %c// open to collaboration',
      'color: #EDEDEF; font-size: 13px; font-family: monospace;',
      'color: #6B6B73; font-size: 13px; font-family: monospace;'
    )
    console.log(
      '%c\u2192 github.com/eurusik %c| %c\u2191\u2191\u2193\u2193\u2190\u2192\u2190\u2192BA %c= \uD83C\uDF1F',
      'color: #10B981; font-size: 12px; font-family: monospace;',
      'color: #3A3A3F; font-size: 12px;',
      'color: #A0A0A8; font-size: 12px; font-family: monospace;',
      'color: #6B6B73; font-size: 12px;'
    )

    const handler = (e) => {
      if (e.key === KONAMI[pos]) {
        pos++
        if (pos === KONAMI.length) {
          pos = 0
          document.body.style.transition = 'filter 0.5s'
          document.body.style.filter = 'hue-rotate(180deg)'
          setTimeout(() => {
            document.body.style.filter = ''
            window.alert('\uD83C\uDFAE Achievement Unlocked!\n\nYou found the Easter egg.\nBuilt with \u2764\uFE0F on a Raspberry Pi cluster.')
          }, 600)
        }
      } else {
        pos = 0
      }
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])
}
