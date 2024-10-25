
import "/node_modules/flag-icons/css/flag-icons.min.css";
type Language = 'MX' | 'EN' | 'NAHUATL'

interface LanguageSelectorProps {
  currentLanguage: Language
}

export const LanguageSelector = ({
  currentLanguage = 'MX'
}: LanguageSelectorProps) => {
  return (
    <div className="Fredoka">
      <span className="fi fis fi-mx mr-3" />
      <span>
        Idioma
      </span>
    </div>
  )
}
