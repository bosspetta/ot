import { useTranslation } from 'react-i18next'

import oscar from '../assest/img/oscar.png'

export default function EnglishGroups() {

    const { t } = useTranslation('global')

    return (
        <section className="page-content">
            <div className="container">
                <h2 className="page-title">{t( "english-groups.title" )}</h2>
                <h3 className="page-subtitle">{t( "english-groups.subtitle" )}</h3>
            </div>
            <header className="page-header page-header--english-groups page-header--one-to-one">
                <div className="page-header__data">
                    <div className="page-header__data__img">
                        <img src={oscar} alt="" />
                    </div>
                    <div className="page-header__data__call-to-action">
                        <h3 className="page-header__title">{t("english-groups.slogan")}</h3>
                        <a target="_blank" rel="noreferrer" href="https://forms.gle/RN9iQJ8MUgNDTXyg9" className="page-header__link btn">{t("english-groups.btn")}</a>
                    </div>
                </div>
            </header>
            <section className="cta cta--eng-groups">
                <div className="cta__wrapper">
                    <h3 className="cta__title">{t("one-to-one.benefits.title")}</h3>
                    <ul className="cta__list">
                        <li className="cta__item"><strong>{t("english-groups.beneficios.01")}</strong>
                        <span className="cta__text">{t("english-groups.beneficios.01-key")}</span></li>
                        <li className="cta__item"><strong>{t("english-groups.beneficios.02")}</strong>
                        <span className="cta__text">{t("english-groups.beneficios.02-key")}</span></li>
                        <li className="cta__item"><strong>{t("english-groups.beneficios.03")}</strong>
                        <span className="cta__text">{t("english-groups.beneficios.03-key")}</span></li>
                        <li className="cta__item"><strong>{t("english-groups.beneficios.04")}</strong>
                        <span className="cta__text">{t("english-groups.beneficios.04-key")}</span></li>
                        <li className="cta__item"><strong>{t("english-groups.beneficios.05")}</strong>
                        <span className="cta__text">{t("english-groups.beneficios.05-key")}</span></li>
                    </ul>
                    <div className="cta__btn-wrapper">
                        <a target="_blank" rel="noreferrer" href="https://forms.gle/RN9iQJ8MUgNDTXyg9" className="btn">{t("english-groups.beneficios.btn")}</a>
                    </div>
                </div>
            </section>
            <section className="stories">
                <div className="container">
                    <div className="stories__wrapper">
                        <h3 className="stories__title">{t("testimonials")}</h3>

                        <div className="stories__storie">
                            <div className="stories__grid">
                                <div className="stories__grid__item">
                                    <div className="stories__grid__item__text">
                                        <p><span className="stories__grid__item__text__phrase">{t("english-groups.testimonials.01")}</span> <span className="stories__grid__item__text__author">{t("english-groups.testimonials.01-auth")}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stories__storie">
                            <div className="stories__grid">
                                <div className="stories__grid__item">
                                    <div className="stories__grid__item__text">
                                        <p><span className="stories__grid__item__text__phrase">{t("english-groups.testimonials.02")}</span> <span className="stories__grid__item__text__author">{t("english-groups.testimonials.02-auth")}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stories__storie">
                            <div className="stories__grid">
                                <div className="stories__grid__item">
                                    <div className="stories__grid__item__text">
                                        <p><span className="stories__grid__item__text__phrase">{t("english-groups.testimonials.03")}</span> <span className="stories__grid__item__text__author">{t("english-groups.testimonials.03-auth")}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="cta cta--price">
                <div className="cta__wrapper">
                    <h3 className="cta__title">{t("plans-pricing")}</h3>
                    <ul className="cta__list">
                        <li className="cta__item"><strong>{t("english-groups.plans-pricing.01")}</strong>
                            <span className="cta__text">{t("english-groups.plans-pricing.01-plan")}</span>
                            <span className="cta__text"><strong>{t("english-groups.plans-pricing.02")}</strong></span>
                            <span className="cta__text">{t("english-groups.plans-pricing.02-plan")}</span>
                        </li>
                    </ul>
                    <div className="cta__btn-wrapper">
                        <a target="_blank" rel="noreferrer" href="https://forms.gle/RN9iQJ8MUgNDTXyg9" className="btn">{t("english-groups.btn")}</a>
                    </div>
                </div>
            </section>
            <section className="cta cta--curso cta--curso--eng-groups">
                <div className="cta__wrapper">
                    <h3 className="cta__title">{t("course-detail")}</h3>
                    <ul className="cta__list">
                        <li className="cta__item">
                            <strong>{t("course-detail-05")}</strong>
                            <span className="cta__text">{t("course-detail-05-tag")}</span>
                        </li>
                        <li className="cta__item">
                            <strong>{t("course-detail-06")}</strong>
                            <span className="cta__text">{t("course-detail-06-tag")}</span>
                        </li>
                        <li className="cta__item">
                            <strong>{t("course-detail-07")}</strong>
                            <span className="cta__text">{t("course-detail-07-tag")}</span>
                        </li>
                        <li className="cta__item">
                            <strong>{t("course-detail-08")}</strong>
                            <span className="cta__text">{t("course-detail-08-tag")}</span>
                        </li>
                        <li className="cta__item">
                            <strong>{t("course-detail-09")}</strong>
                            <span className="cta__text">{t("course-detail-09-tag")}</span>
                        </li>
                    </ul>
                    <div className="cta__btn-wrapper">
                        <a target="_blank" rel="noreferrer" href="https://calendar.app.google/eheMWXqytZpMZqS8A" className="btn">{t("course-detail-btn")}</a>
                    </div>
                </div>
            </section>
            <section className="cta cta--faqs cta--faqs--groups">
                <div className="cta__wrapper">
                    <h3 className="cta__title">{t("faqs.title")}</h3>
                    <ul className="cta__list">
                        <li className="cta__item">
                            <strong>{t("faqs.05")}</strong>
                            <span className="cta__text">{t("faqs.05-answer")}</span>
                        </li>
                        <li className="cta__item">
                            <strong>{t("faqs.06")}</strong>
                            <span className="cta__text">{t("faqs.06-answer")}</span>
                        </li>
                        <li className="cta__item">
                            <strong>{t("faqs.07")}</strong>
                            <span className="cta__text">{t("faqs.07-answer")}</span>
                        </li>
                        <li className="cta__item">
                            <strong>{t("faqs.08")}</strong>
                            <span className="cta__text">{t("faqs.08-answer")}</span>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="cta cta--oscar">
                <div className="cta__wrapper">
                    <div className="container">
                        <h3 className="cta__title">{t("about-oscar.title")}</h3>
                        <h4 className="cta__subtitle">{t("about-oscar.slogan")}</h4>
                        <ul className="cta__list">
                            <li className="cta__item"><strong>{t("about-oscar.subtitle")}</strong>
                            <span className="cta__text">{t("about-oscar.01")}</span></li>
                            <li className="cta__item"><span className="cta__text">{t("about-oscar.02")}</span></li>
                            <li className="cta__item"><span className="cta__text">{t("about-oscar.03")}</span></li>
                        </ul>
                        <div className="cta__btn-wrapper">
                            <a target="_blank" rel="noreferrer" href="https://calendar.app.google/eheMWXqytZpMZqS8A" className="btn">{t("about-oscar.btn")}</a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
