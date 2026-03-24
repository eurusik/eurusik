import { useEffect } from 'react'

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']

export const useEasterEgg = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return

    let pos = 0

    console.log('%c\uD83D\uDC4B Hey! Like what you see? \u2192 github.com/eurusik  |  Try the Konami code ;)', 'color: #10B981; font-size: 13px;')

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
