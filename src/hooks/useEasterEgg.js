import { useEffect } from 'react'

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']

export const useEasterEgg = () => {
  useEffect(() => {
    let pos = 0

    // Console greeting
    console.log(
      '%c  ╔══════════════════════════════════╗\n' +
      '  ║  👋 Hey there, fellow developer! ║\n' +
      '  ║                                  ║\n' +
      '  ║  Like what you see?              ║\n' +
      '  ║  github.com/eurusik              ║\n' +
      '  ║                                  ║\n' +
      '  ║  Try the Konami code ;)          ║\n' +
      '  ╚══════════════════════════════════╝',
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
            alert('🎮 Achievement Unlocked!\n\nYou found the Easter egg.\nBuilt with ❤️ on a Raspberry Pi cluster.')
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
