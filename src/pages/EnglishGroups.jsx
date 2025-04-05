import { useTranslation } from 'react-i18next'

export default function EnglishGroups() {
    const { t } = useTranslation('global')
    return (
        <section className="page-content">
            <h2 className="page-title">{t( "english-groups.title" )}</h2>
        </section>
    )
}
