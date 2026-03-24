import { useEffect } from 'react'

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']

export const useEasterEgg = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return

    let pos = 0

    console.log(
      '%c\n' +
      '  Hey there, fellow developer! \uD83D\uDC4B\n\n' +
      '  Like what you see?\n' +
      '  github.com/eurusik\n\n' +
      '  Try the Konami code ;)\n',
      'color: #10B981; font-family: monospace; font-size: 13px; background: #111113; padding: 12px 16px; border: 1px solid #2A2A2E; border-radius: 8px; line-height: 1.8;'
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
