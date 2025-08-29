import { useTranslation } from 'react-i18next'

import megan from '../assest/img/megan.png'

export default function MeganClasses() {
    const { t } = useTranslation('global')
    return (
        <section className="page-content">
            <div className="container">
                <h2 className="page-title">{t( "megan-classes.title" )}</h2>
                <h3 className="page-subtitle">{t( "megan-classes.subtitle" )}</h3>
            </div>
            <header className="page-header page-header--english-groups page-header--one-to-one">
                <div className="page-header__data">
                    <div className="page-header__data__img">
                        <img src={megan} alt="" />
                    </div>
                    <div className="page-header__data__call-to-action">
                        <h3 className="page-header__title">{t("megan-classes.message")}</h3>
                        <a target="_blank" rel="noreferrer" href="https://calendar.app.google/eheMWXqytZpMZqS8A" className="page-header__link btn">{t("megan-classes.btn")}</a>
                    </div>
                </div>
            </header>
            <section className="cta cta--eng-groups">
                <div className="cta__wrapper">
                    <h3 className="cta__title">{t("one-to-one.benefits.title")}</h3>
                    <ul className="cta__list">
                        <li className="cta__item">
                            <strong>{t("megan-classes.beneficios.01")}</strong>
                            <span className="cta__text">{t("megan-classes.beneficios.01-key")}</span>
                        </li>
                        <li className="cta__item">
                            <strong>{t("megan-classes.beneficios.02")}</strong>
                            <span className="cta__text">{t("megan-classes.beneficios.02-key")}</span>
                        </li>
                        <li className="cta__item">
                            <strong>{t("megan-classes.beneficios.03")}</strong>
                            <span className="cta__text">{t("megan-classes.beneficios.03-key")}</span>
                        </li>
                        <li className="cta__item">
                            <strong>{t("megan-classes.beneficios.04")}</strong>
                            <span className="cta__text">{t("megan-classes.beneficios.04-key")}</span>
                        </li>
                        <li className="cta__item">
                            <strong>{t("megan-classes.beneficios.05")}</strong>
                            <span className="cta__text">{t("megan-classes.beneficios.05-key")}</span>
                        </li>
                    </ul>
                    <div className="cta__btn-wrapper">
                        <a target="_blank" rel="noreferrer" href="https://calendar.app.google/eheMWXqytZpMZqS8A" className="btn">{t("megan-classes.beneficios.btn")}</a>
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
                                        <p><span className="stories__grid__item__text__phrase">{t("megan-classes.testimonials.01")}</span> <span className="stories__grid__item__text__author">{t("megan-classes.testimonials.01-auth")}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stories__storie">
                            <div className="stories__grid">
                                <div className="stories__grid__item">
                                    <div className="stories__grid__item__text">
                                        <p><span className="stories__grid__item__text__phrase">{t("megan-classes.testimonials.02")}</span> <span className="stories__grid__item__text__author">{t("megan-classes.testimonials.02-auth")}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stories__storie">
                            <div className="stories__grid">
                                <div className="stories__grid__item">
                                    <div className="stories__grid__item__text">
                                        <p><span className="stories__grid__item__text__phrase">{t("megan-classes.testimonials.03")}</span> <span className="stories__grid__item__text__author">{t("megan-classes.testimonials.03-auth")}</span></p>
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
                        <li className="cta__item">
                            <strong>{t("investment")}</strong>
                            <span className="cta__text">{t("investment-text-03")}</span>
                            <span className="cta__text"><strong>{t("investment-text-04")}</strong></span>
                            <span className="cta__text">{t("investment-text-05")}</span>
                        </li>
                    </ul>
                    <div className="cta__btn-wrapper">
                        <a target="_blank" rel="noreferrer" href="https://calendar.app.google/eheMWXqytZpMZqS8A" className="btn">{t("investment-btn-megan")}</a>
                    </div>
                </div>
            </section>
            <section className="cta cta--curso cta--curso--megan">
                <div className="cta__wrapper">
                    <h3 className="cta__title">{t("course-detail")}</h3>
                    <ul className="cta__list">
                        <li className="cta__item">
                            <strong>{t("course-detail-10")}</strong>
                            <span className="cta__text">{t("course-detail-10-tag")}</span>
                        </li>
                        <li className="cta__item">
                            <strong>{t("course-detail-11")}</strong>
                            <span className="cta__text">{t("course-detail-11-tag")}</span>
                        </li>
                        <li className="cta__item">
                            <strong>{t("course-detail-12")}</strong>
                            <span className="cta__text">{t("course-detail-12-tag")}</span>
                        </li>
                        <li className="cta__item">
                            <strong>{t("course-detail-13")}</strong>
                            <span className="cta__text">{t("course-detail-13-tag")}</span>
                        </li>
                        <li className="cta__item">
                            <strong>{t("course-detail-14")}</strong>
                            <span className="cta__text">{t("course-detail-14-tag")}</span>
                        </li>
                        <li className="cta__item">
                            <strong>{t("course-detail-15")}</strong>
                            <span className="cta__text">{t("course-detail-15-tag")}</span>
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
                            <strong>{t("faqs.01")}</strong>
                            <span className="cta__text">{t("faqs.01-answer")}</span>
                        </li>
                        <li className="cta__item">
                            <strong>{t("faqs.02")}</strong>
                            <span className="cta__text">{t("faqs.02-answer")}</span>
                        </li>
                        <li className="cta__item">
                            <strong>{t("faqs.03")}</strong>
                            <span className="cta__text">{t("faqs.03-answer")}</span>
                        </li>
                        <li className="cta__item">
                            <strong>{t("faqs.04")}</strong>
                            <span className="cta__text">{t("faqs.04-answer")}</span>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="cta cta--oscar cta--megan">
                <div className="cta__wrapper">
                    <div className="container">
                        <h3 className="cta__title">{t("about-megan.title")}</h3>
                        <h4 className="cta__subtitle">{t("about-megan.slogan")}</h4>
                        <ul className="cta__list">
                            <li className="cta__item">
                                <strong>{t("about-megan.subtitle")}</strong>
                                <span className="cta__text">{t("about-megan.01")}</span>
                            </li>
                            <li className="cta__item"><span className="cta__text">{t("about-megan.02")}</span></li>
                            <li className="cta__item"><span className="cta__text">{t("about-megan.03")}</span></li>
                        </ul>
                        <div className="cta__btn-wrapper">
                            <a target="_blank" rel="noreferrer" href="https://calendar.app.google/eheMWXqytZpMZqS8A" className="btn">{t("about-megan.btn")}</a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
