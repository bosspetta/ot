import { useTranslation } from 'react-i18next'

export default function MeganClasses() {
    const { t } = useTranslation('global')
    return (
        <section className="page-content">
            <h2 className="page-title">{t( "megan-classes.title" )}</h2>
        </section>
    )
}
