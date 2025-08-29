import { useTranslation } from 'react-i18next'

import oscar from '../assest/img/oscar.png'

export default function OneToOne() {

    const { t } = useTranslation('global')

    return (
        <section className="page-content">
            <div className="container">
                <h2 className="page-title">{t("one-to-one.title")}</h2>
                <h3 className="page-subtitle">{t("one-to-one.subtitle")}</h3>
            </div>
            <header className="page-header page-header--1on1">
                <div className="page-header__data">
                    <div className="page-header__data__img">
                        <img src={oscar} alt="" />
                    </div>
                    <div className="page-header__data__call-to-action">
                        <h3 className="page-header__title">{t("one-to-one.slogan")}</h3>
                        <a target="_blank" rel="noreferrer" href="https://calendar.app.google/eheMWXqytZpMZqS8A" className="page-header__link btn">{t("one-to-one.btn")}</a>
                    </div>
                </div>
            </header>
            <section className="cta cta--one-to-one">
                <div className="cta__wrapper">
                    <h3 className="cta__title">{t("one-to-one.benefits.title")}</h3>
                    <ul className="cta__list">
                        <li className="cta__item"><strong>{t("one-to-one.benefits.01-title")}</strong>
                        <span className="cta__text">{t("one-to-one.benefits.01")}</span></li>
                        <li className="cta__item"><strong>{t("one-to-one.benefits.02-title")}</strong>
                        <span className="cta__text">{t("one-to-one.benefits.02")}</span></li>
                        <li className="cta__item"><strong>{t("one-to-one.benefits.03-title")}</strong>
                        <span className="cta__text">{t("one-to-one.benefits.03")}</span></li>
                        <li className="cta__item"><strong>{t("one-to-one.benefits.04-title")}</strong>
                        <span className="cta__text">{t("one-to-one.benefits.04")}</span></li>
                        <li className="cta__item"><strong>{t("one-to-one.benefits.05-title")}</strong>
                        <span className="cta__text">{t("one-to-one.benefits.05")}</span></li>
                    </ul>
                    <div className="cta__btn-wrapper">
                        <a href="/#/about" className="btn">{t("one-to-one.benefits.call")}</a>
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
                                        <p><span className="stories__grid__item__text__phrase">{t("one-to-one.testimonials.01")}</span> <span className="stories__grid__item__text__author">{t("one-to-one.testimonials.01-person")}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stories__storie">
                            <div className="stories__grid">
                                <div className="stories__grid__item">
                                    <div className="stories__grid__item__text">
                                        <p><span className="stories__grid__item__text__phrase">{t("one-to-one.testimonials.02")}</span> <span className="stories__grid__item__text__author">{t("one-to-one.testimonials.02-person")}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stories__storie">
                            <div className="stories__grid">
                                <div className="stories__grid__item">
                                    <div className="stories__grid__item__text">
                                        <p><span className="stories__grid__item__text__phrase">{t("one-to-one.testimonials.03")}</span> <span className="stories__grid__item__text__author">{t("one-to-one.testimonials.03-person")}</span></p>
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
                            <span className="cta__text">{t("investment-text-01")}</span>
                            <span className="cta__text">{t("investment-text-02")}</span>
                        </li>
                    </ul>
                    <div className="cta__btn-wrapper">
                        <a target="_blank" rel="noreferrer" href="https://calendar.app.google/eheMWXqytZpMZqS8A" className="btn">{t("investment-btn")}</a>
                    </div>
                    <ul className="cta__list">
                        <li className="cta__item"><span className="cta__text">{t("investment-call")}</span></li>
                    </ul>
                </div>
            </section>
            <section className="cta cta--curso cta--curso--one-to-one">
                <div className="cta__wrapper">
                    <h3 className="cta__title">{t("course-detail")}</h3>
                    <ul className="cta__list">
                        <li className="cta__item"><strong>{t("course-detail-01")}</strong>
                        <span className="cta__text">{t("course-detail-01-tag")}</span></li>
                        <li className="cta__item"><strong>{t("course-detail-02")}</strong>
                        <span className="cta__text">{t("course-detail-02-tag")}</span></li>
                        <li className="cta__item"><strong>{t("course-detail-03")}</strong>
                        <span className="cta__text">{t("course-detail-03-tag")}</span></li>
                        <li className="cta__item"><strong>{t("course-detail-04")}</strong>
                        <span className="cta__text">{t("course-detail-04-tag")}</span></li>
                    </ul>
                    <div className="cta__btn-wrapper">
                        <a target="_blank" rel="noreferrer" href="https://calendar.app.google/eheMWXqytZpMZqS8A" className="btn">{t("course-detail-btn")}</a>
                    </div>
                </div>
            </section>
            <section className="cta cta--faqs cta--faqs--one-to-one">
                <div className="cta__wrapper">
                    <h3 className="cta__title">{t("faqs.title")}</h3>
                    <ul className="cta__list">
                        <li className="cta__item"><strong>{t("faqs.01")}</strong>
                        <span className="cta__text">{t("faqs.01-answer")}</span></li>
                        <li className="cta__item"><strong>{t("faqs.02")}</strong>
                        <span className="cta__text">{t("faqs.02-answer")}</span></li>
                        <li className="cta__item"><strong>{t("faqs.03")}</strong>
                        <span className="cta__text">{t("faqs.03-answer")}</span></li>
                        <li className="cta__item"><strong>{t("faqs.04")}</strong>
                        <span className="cta__text">{t("faqs.04-answer")}</span></li>
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
                    </div>
                </div>
            </section>
        </section>
    )
}
