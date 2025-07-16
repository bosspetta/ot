import { useTranslation } from 'react-i18next'

export default function Academy() {
    const { t } = useTranslation('global')
    return (
        <section className="page-content">
            <div className="container">
                <h2 className="page-title">{t( "academy.title" )}</h2>
                <h3 className="page-subtitle">{t("academy.subtitle")}</h3>
            </div>
            <header className="page-header page-header--about page-header--academy">
                <div className="page-header__data">
                    <div className="page-header__data__img"></div>
                    <div className="page-header__data__call-to-action">
                        <div className="page-header__excerpt">
                            <p className="page-header__excerpt__paragraph">{t("academy.banner-01")}</p>
                            <p className="page-header__excerpt__paragraph">{t("academy.banner-02")}</p>
                            <p><a href="#" className="page-header__link btn">{t("academy.banner-btn")}</a></p>
                        </div>
                    </div>
                </div>
            </header>
            <section className="cta cta--price cta--price--about">
                <div className="cta__wrapper">
                    <h3 className="cta__title">{t("academy.microlearning.title")}</h3>
                    <ul className="cta__list">
                        <li className="cta__item">
                            <strong>{t("academy.microlearning.subtitle")}</strong>
                            <span className="cta__text">{t("academy.microlearning.01")}</span>
                            <span className="cta__text">{t("academy.microlearning.02")}</span>
                            <span className="cta__text">{t("academy.microlearning.03")}</span>
                            <span className="cta__text">{t("academy.microlearning.04")}</span>
                            <br />
                            <div className="cta__btn-wrapper">
                                <a href="#" className="btn">{t("academy.microlearning.btn")}</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="cta cta--price cta--price--academy">
                <div className="cta__wrapper">
                    <h3 className="cta__title">{t("academy.content.title")}</h3>
                    <ul className="cta__list">
                        <li className="cta__item">
                            <strong>{t("academy.content.subtitle")}</strong>
                            <span className="cta__text">{t("academy.content.01")}</span>
                            <span className="cta__text">{t("academy.content.02")}</span>
                            <span className="cta__text">{t("academy.content.03")}</span>
                            <span className="cta__text">{t("academy.content.04")}</span>
                            <span className="cta__text">{t("academy.content.05")}</span>
                        </li>
                    </ul>
                    <div className="cta__btn-wrapper">
                        <a href="#" className="btn">{t("academy.content.btn")}</a>
                    </div>
                </div>
            </section>
            <section className="cta cta--oscar cta--materials">
                <div className="cta__wrapper">
                    <div className="container">
                        <h3 className="cta__title">{t("academy.future.title")}</h3>
                        <ul className="cta__list">
                            <li className="cta__item">
                                <span className="cta__text cta__text--italic">{t("academy.future.subtitle")}</span>
                            </li>
                            <li className="cta__item">
                                <strong>{t("academy.future.slogan")}</strong>
                                <span className="cta__text">{t("academy.future.01")}</span>
                                <span className="cta__text">{t("academy.future.02")}</span>
                                <span className="cta__text">{t("academy.future.03")}</span>
                            </li>
                            <li className="cta__item">
                                <span className="cta__text cta__text--italic">{t("academy.future.04")}</span>
                            </li>
                        </ul>
                        <div className="cta__btn-wrapper">
                            <a href="#" className="btn">{t("academy.future.btn")}</a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
