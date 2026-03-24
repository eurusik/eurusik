import { useTranslation } from '../../contexts/LanguageContext'

const LanguageSwitcher = () => {
  const { locale } = useTranslation()

  return (
    <div className="flex items-center gap-1 sm:gap-1.5">
      <a
        href="/"
        className={`px-3 py-2 sm:px-2 sm:py-0.5 text-xs sm:text-sm font-medium transition-all duration-200 rounded ${
          locale === 'uk' ? 'font-semibold text-emerald-500 bg-emerald-500/10' : 'text-[#6B6B73]'
        }`}
      >
        UA
      </a>
      <span className="text-xs sm:text-sm text-[#3A3A3F]">|</span>
      <a
        href="/en"
        className={`px-3 py-2 sm:px-2 sm:py-0.5 text-xs sm:text-sm font-medium transition-all duration-200 rounded ${
          locale === 'en' ? 'font-semibold text-emerald-500 bg-emerald-500/10' : 'text-[#6B6B73]'
        }`}
      >
        EN
      </a>
    </div>
  )
}

export default LanguageSwitcher
