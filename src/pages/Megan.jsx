import { useTranslation } from 'react-i18next'

export default function Megan() {
    const { t } = useTranslation('global')
    return (
        <section className="page-content">
            <h2 className="page-title">{t( "megan.title" )}</h2>
        </section>
    )
}
