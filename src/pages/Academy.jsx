import { useTranslation } from 'react-i18next'

export default function Academy() {
    const { t } = useTranslation('global')
    return (
        <section className="page-content">
            <h2 className="page-title">{t( "academy.title" )}</h2>
        </section>
    )
}
