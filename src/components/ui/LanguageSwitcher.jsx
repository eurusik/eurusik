import { useTranslation } from '../../contexts/LanguageContext'

const LanguageSwitcher = ({ scrolled = false }) => {
  const { locale } = useTranslation()

  return (
    <div className="flex items-center gap-1 sm:gap-1.5">
      <a
        href="/"
        className={`px-1 sm:px-1.5 py-0.5 text-xs sm:text-sm font-semibold transition-all duration-300 rounded ${
          locale === 'uk'
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
            : scrolled
            ? 'text-gray-600 hover:text-blue-600'
            : 'text-white/70 hover:text-white'
        }`}
      >
        UA
      </a>
      <span className={`text-xs sm:text-sm ${scrolled ? 'text-gray-400' : 'text-white/50'}`}>|</span>
      <a
        href="/en"
        className={`px-1 sm:px-1.5 py-0.5 text-xs sm:text-sm font-semibold transition-all duration-300 rounded ${
          locale === 'en'
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
            : scrolled
            ? 'text-gray-600 hover:text-blue-600'
            : 'text-white/70 hover:text-white'
        }`}
      >
        EN
      </a>
    </div>
  )
}

export default LanguageSwitcher
