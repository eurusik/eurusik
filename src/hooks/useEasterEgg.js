import { useEffect } from 'react'

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']

export const useEasterEgg = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return

    let pos = 0

    console.log(
      '%c Hey there, fellow developer! 👋\n Like what you see? → github.com/eurusik\n Try the Konami code ;)',
      'color: #10B981; font-family: monospace; font-size: 13px; line-height: 1.6;'
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
            window.alert('Achievement Unlocked! You found the Easter egg.')
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
