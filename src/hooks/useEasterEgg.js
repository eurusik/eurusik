import { useEffect } from 'react'

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']

export const useEasterEgg = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return

    let pos = 0

    console.log(
      '%c  \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n' +
      '  \u2551  \uD83D\uDC4B Hey there, fellow developer! \u2551\n' +
      '  \u2551                                  \u2551\n' +
      '  \u2551  Like what you see?              \u2551\n' +
      '  \u2551  github.com/eurusik              \u2551\n' +
      '  \u2551                                  \u2551\n' +
      '  \u2551  Try the Konami code ;)          \u2551\n' +
      '  \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D',
      'color: #10B981; font-family: monospace; font-size: 12px;'
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
