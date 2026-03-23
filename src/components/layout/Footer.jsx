import { Github, Linkedin } from 'lucide-react'
import { MediumIcon, ThreadsIcon, DOUIcon } from '../ui/icons'
import { SOCIAL_LINKS } from '../../config'
import { useTranslation } from '../../contexts/LanguageContext'

const Footer = () => {
  const { t } = useTranslation()

  const getIcon = (iconName, size = 18) => {
    const iconMap = {
      github: <Github size={size} />,
      linkedin: <Linkedin size={size} />,
      medium: <MediumIcon size={size} />,
      threads: <ThreadsIcon size={size} />,
      dou: <DOUIcon size={size} />
    }
    return iconMap[iconName]
  }

  return (
    <footer className="py-12 px-6 bg-[#0A0A0B] border-t border-[#2A2A2E]">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-6 mb-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B6B73] hover:text-[#EDEDEF] transition-colors duration-200"
              aria-label={link.name}
            >
              {getIcon(link.icon)}
            </a>
          ))}
        </div>

        <p className="text-xs mb-3 text-[#6B6B73]">{t('footer.copyright')}</p>

        <div className="flex items-center justify-center gap-2">
          <span className="text-xs text-[#6B6B73]">{t('footer.hostedOn')}</span>
          <a href="https://homelab.eurusik.tech/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:opacity-80 transition-opacity duration-200">
            <img src="/logos/pi.svg" alt="Raspberry Pi" className="w-3.5 h-3.5 opacity-50" />
            <span className="text-xs text-[#6B6B73]">Raspberry Pi {t('footer.cluster')}</span>
            <img src="/logos/k3.svg" alt="k3s" className="w-3.5 h-3.5 opacity-50" />
            <span className="text-xs text-[#6B6B73]">k3s</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
