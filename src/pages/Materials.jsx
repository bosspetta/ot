import { useTranslation } from 'react-i18next'

export default function Materials() {
    const { t } = useTranslation('global')
    return (
        <section className="page-content">
            <h2 className="page-title">{t( "materials.title" )}</h2>
        </section>
    )
}
