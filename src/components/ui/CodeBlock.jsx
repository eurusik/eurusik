import { useState, useEffect } from 'react'
import { useTranslation } from '../../contexts/LanguageContext'

const CodeBlock = () => {
  const { locale } = useTranslation()
  const [displayedLines, setDisplayedLines] = useState(0)

  const codeLines = locale === 'uk' ? [
    { type: 'first' },
    { indent: true, key: 'role', value: '"Senior Frontend Engineer"' },
    { indent: true, key: 'experience', value: '"11+ років"' },
    { indent: true, key: 'focus', value: '["Angular", "React", "TypeScript"]', isArray: true },
    { indent: true, key: 'current', value: '"Silpo / Angular Primitives"' },
    { indent: true, key: 'location', value: '"Київ, Україна"' },
    { indent: true, key: 'available', value: 'true', isBool: true },
    { type: 'last' },
  ] : [
    { type: 'first' },
    { indent: true, key: 'role', value: '"Senior Frontend Engineer"' },
    { indent: true, key: 'experience', value: '"11+ years"' },
    { indent: true, key: 'focus', value: '["Angular", "React", "TypeScript"]', isArray: true },
    { indent: true, key: 'current', value: '"Silpo / Angular Primitives"' },
    { indent: true, key: 'location', value: '"Kyiv, Ukraine"' },
    { indent: true, key: 'available', value: 'true', isBool: true },
    { type: 'last' },
  ]

  useEffect(() => {
    if (displayedLines < codeLines.length) {
      const timer = setTimeout(() => setDisplayedLines(prev => prev + 1), 150)
      return () => clearTimeout(timer)
    }
  }, [displayedLines, codeLines.length])

  const cursor = <span className="animate-cursor-blink inline-block w-[7px] h-[18px] align-middle ml-0.5 bg-emerald-500" />

  return (
    <div className="rounded-xl overflow-hidden bg-[#1A1A1D] border border-[#2A2A2E]">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#2A2A2E]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <span className="font-mono text-[11px] ml-2 text-[#6B6B73]">profile.ts</span>
      </div>

      {/* Code */}
      <div className="p-5 font-mono text-[13px] leading-7 overflow-hidden">
        {displayedLines >= 1 && (
          <div>
            <span className="text-purple-400">const</span>
            <span className="text-[#EDEDEF]"> eugene</span>
            <span className="text-[#6B6B73]">{' = {'}</span>
          </div>
        )}
        {codeLines.slice(1, displayedLines).map((line, i) => {
          if (line.type === 'last') return (
            <div key={i}>
              <span className="text-[#6B6B73]">{'};'}</span>
              {cursor}
            </div>
          )
          if (!line.indent) return null
          return (
            <div key={i} className="pl-6">
              <span className="text-[#EDEDEF]">{line.key}</span>
              <span className="text-[#6B6B73]">{': '}</span>
              <span className={line.isBool ? 'text-emerald-400' : 'text-emerald-500'}>{line.value}</span>
              <span className="text-[#6B6B73]">,</span>
            </div>
          )
        })}
        {displayedLines > 0 && displayedLines < codeLines.length && (
          <div className="pl-6">{cursor}</div>
        )}
      </div>
    </div>
  )
}

export default CodeBlock
