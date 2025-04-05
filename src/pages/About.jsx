import { useTranslation } from 'react-i18next'

export default function About() {
    const { t } = useTranslation('global')
    return (
        <section className="page-content">
            <h2 className="page-title">{t( "about.title" )}</h2>
        </section>
    )
}
