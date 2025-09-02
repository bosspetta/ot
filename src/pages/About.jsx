import { useTranslation } from 'react-i18next'

export default function About() {

    const { t } = useTranslation('global')

    return (
        <section className="page-content">
            <div className="container">
                <h2 className="page-title">{t( "about.title" )}</h2>
                <h3 className="page-subtitle">{t("about.subtitle")}</h3>
                <p className="page-slogan">{t("about.slogan")}</p>
            </div>
            <header className="page-header page-header--about">
                <div className="page-header__data">
                    <div className="page-header__data__img"></div>
                    <div className="page-header__data__call-to-action">
                        <div className="page-header__excerpt">
                            <p className="page-header__excerpt__paragraph">{t("about.info-01")}</p>
                            <p className="page-header__excerpt__paragraph">{t("about.info-02")}</p>
                        </div>
                    </div>
                </div>
            </header>
            <section className="cta cta--price cta--price--about">
                <div className="cta__wrapper">
                    <h3 className="cta__title">{t("about.philosophy.title")}</h3>
                    <ul className="cta__list">
                        <li className="cta__item cta__item--100">
                            <span className="cta__text">{t("about.philosophy.01")}</span>
                        </li>
                        <li className="cta__item cta__item--100">
                            <strong>{t("about.philosophy.02")}</strong>
                            <span className="cta__text">{t("about.philosophy.02-data")}</span>
                        </li>
                        <li className="cta__item">
                            <strong>{t("about.philosophy.03")}</strong>
                            <span className="cta__text">{t("about.philosophy.03-data")}</span>
                        </li>
                        <li className="cta__item">
                            <strong>{t("about.philosophy.04")}</strong>
                            <span className="cta__text">{t("about.philosophy.04-data")}</span>
                        </li>
                    </ul>
                    <ul className="cta__list">
                        <li className="cta__item">
                            <strong>{t("about.philosophy.difference-title")}</strong>
                            <span className="cta__text">{t("about.philosophy.difference-01")}</span>
                            <span className="cta__text">{t("about.philosophy.difference-02")}</span>
                            <span className="cta__text">{t("about.philosophy.difference-03")}</span>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="cta cta--about">
                <div className="container">
                    <h3 className="cta__title">{t("about.team.title")}</h3>
                    <div className="cta--about__data">
                        <div className="cta--about__data__row">
                            <h4 className="cta--about__data__title">{t("about.team.o-title")}</h4>
                            <p className="cta--about__data__info">{t("about.team.o-message-01")}</p>
                            <p className="cta--about__data__info cta--about__data__info--close">{t("about.team.o-message-02")}</p>
                        </div>
                        <div className="cta--about__data__row">
                            <h4 className="cta--about__data__title">{t("about.team.m-title")}</h4>
                            <p className="cta--about__data__info">{t("about.team.m-message-01")}</p>
                            <p className="cta--about__data__info cta--about__data__info--close">{t("about.team.m-message-02")}</p>
                        </div>
                    </div>
                    <div className="cta--about__footer">
                        <p className="cta--about__footer__info">{t("about.team.close")}</p>
                    </div>
                </div>
            </section>
            <section className="cta cta--oscar cta--materials">
                <div className="cta__wrapper">
                    <div className="container">
                        <h3 className="cta__title">{t("about.vision.title")}</h3>
                        <ul className="cta__list">
                            <li className="cta__item">
                                <strong>{t("about.vision.subtitle")}</strong>
                                <span className="cta__text">{t("about.vision.slogan")}</span>
                            </li>
                            <li className="cta__item">
                                <strong>{t("about.vision.next-title")}</strong>
                                <span className="cta__text">
                                    {t("about.vision.next-01")}<br />
                                    {t("about.vision.next-02")}<br />
                                    {t("about.vision.next-03")}<br />
                                    {t("about.vision.next-04")}<br />
                                    {t("about.vision.next-05")}
                                </span>
                                <span className="cta__text cta__text--italic">{t("about.vision.next-message")}</span>
                            </li>
                            <li className="cta__item">
                                <strong>{t("about.vision.close")}</strong>
                            </li>
                        </ul>
                        <div className="cta__btn-wrapper">
                            <a href="/" className="btn">{t("about.vision.btn")}</a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
