import { createContext, useContext, useCallback, useMemo } from 'react'
import en from '../locales/en.json'
import uk from '../locales/uk.json'

const translations = {
  en,
  uk
}

const LanguageContext = createContext({
  locale: 'uk',
  t: (key) => key
})

export const LanguageProvider = ({ locale = 'uk', children }) => {
  const t = useCallback((key) => {
    const keys = key.split('.')
    let value = translations[locale]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }, [locale])

  const contextValue = useMemo(() => ({ locale, t }), [locale, t])

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useTranslation = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useTranslation must be used within LanguageProvider')
  }
  return context
}
