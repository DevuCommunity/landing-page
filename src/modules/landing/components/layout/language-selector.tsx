
import "/node_modules/flag-icons/css/flag-icons.min.css";
type Language = 'MX' | 'EN' | 'NAHUATL'

interface LanguageSelectorProps {
  currentLanguage: Language
}

export const LanguageSelector = ({
  currentLanguage = 'MX'
}: LanguageSelectorProps) => {
  return (
    <div>
      {"Idioma"}
      <span className="fi fis fi-mx" />
    </div>
  )
}
