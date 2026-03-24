import { useState, useEffect } from 'react'
import { useTranslation } from '../../contexts/LanguageContext'

const HomelabBadge = () => {
  const { locale } = useTranslation()
  const [latency, setLatency] = useState(null)

  useEffect(() => {
    const measure = async () => {
      try {
        const start = performance.now()
        await fetch('/', { method: 'HEAD', cache: 'no-store' })
        const ms = Math.round(performance.now() - start)
        setLatency(ms)
      } catch {
        setLatency(null)
      }
    }
    measure()
    const interval = setInterval(measure, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <a
      href="https://homelab.eurusik.tech/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#2A2A2E] bg-[#111113] hover:border-[#3A3A3F] transition-colors duration-200 mt-6"
    >
      <img src="/logos/pi.svg" alt="Raspberry Pi" className="w-4 h-4 opacity-70" />
      <span className="font-mono text-[11px] text-[#6B6B73]">
        {locale === 'uk' ? 'Self-hosted на' : 'Self-hosted on'} Raspberry Pi + k3s
      </span>
      {latency !== null && (
        <>
          <span className="w-px h-3 bg-[#2A2A2E]" />
          <span className="font-mono text-[11px] text-emerald-500">{latency}ms</span>
        </>
      )}
    </a>
  )
}

export default HomelabBadge
