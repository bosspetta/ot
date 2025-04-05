import { useTranslation } from 'react-i18next'

export default function OneToOne() {

    const { t } = useTranslation('global')

    return (
        <section className="page-content">
            <h2 className="page-title">{t("one-to-one.title")}</h2>
        </section>
    )
}
