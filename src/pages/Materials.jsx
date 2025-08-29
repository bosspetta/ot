import { useTranslation } from 'react-i18next'

import oscar from '../assest/img/oscar.png'

export default function Materials() {

    const { t } = useTranslation('global')

    return (
        <section className="page-content">
            <div className="container">
                <h2 className="page-title">{t( "materials.title" )}</h2>
                <h3 className="page-subtitle">{t( "materials.subtitle" )}</h3>
            </div>
            <header className="page-header page-header--english-groups page-header--one-to-one">
                <div className="page-header__data">
                    <div className="page-header__data__img">
                        <img src={oscar} alt="" />
                    </div>
                    <div className="page-header__data__call-to-action">
                        <h3 className="page-header__title">{t("materials.message")}</h3>
                        <a target="_blank" rel="noreferrer" href="https://academia.oscartrejo.online/home" className="page-header__link btn">{t("materials.btn")}</a>
                    </div>
                </div>
            </header>
            <section className="cta cta--eng-groups cta--eng-groups--materials">
                <div className="cta__wrapper">
                    <h3 className="cta__title">{t("materials.benefits.title")}</h3>
                    <ul className="cta__list">
                        <li className="cta__item">
                            <strong>{t("materials.benefits.01")}</strong>
                            <span className="cta__text">{t("materials.benefits.01-bnf")}</span>
                        </li>
                        <li className="cta__item">
                            <strong>{t("materials.benefits.02")}</strong>
                            <span className="cta__text">{t("materials.benefits.02-bnf")}</span>
                        </li>
                        <li className="cta__item">
                            <strong>{t("materials.benefits.03")}</strong>
                            <span className="cta__text">{t("materials.benefits.03-bnf")}</span>
                        </li>
                        <li className="cta__item">
                            <strong>{t("materials.benefits.04")}</strong>
                            <span className="cta__text">{t("materials.benefits.04-bnf")}</span>
                        </li>
                        <li className="cta__item">
                            <strong>{t("materials.benefits.05")}</strong>
                            <span className="cta__text">{t("materials.benefits.05-bnf")}</span>
                        </li>
                    </ul>
                    <div className="cta__btn-wrapper">
                        <a target="_blank" rel="noreferrer" href="https://academia.oscartrejo.online/home" className="btn">{t("materials.benefits.btn")}</a>
                    </div>
                </div>
            </section>
            <section className="cta cta--price cta--price--materials">
                <div className="cta__wrapper">
                    <h3 className="cta__title">{t("materials.examples.title")}</h3>
                    <p><strong>{t("materials.examples.subtitle")}</strong></p>
                    <ul className="cta__list">
                        <li className="cta__item">
                            <span className="cta__text">{t("materials.examples.01")}</span>
                        </li>
                        <li className="cta__item">
                            <span className="cta__text">{t("materials.examples.02")}</span>
                        </li>
                        <li className="cta__item">
                            <span className="cta__text">{t("materials.examples.03")}</span>
                        </li>
                        <li className="cta__item">
                            <span className="cta__text">{t("materials.examples.04")}</span>
                        </li>
                        <li className="cta__item">
                            <span className="cta__text"><em>{t("materials.examples.05")}</em></span>
                        </li>
                    </ul>
                    <div className="cta__btn-wrapper">
                        <a target="_blank" rel="noreferrer" href="https://academia.oscartrejo.online/home" className="btn">{t("materials.examples.btn")}</a>
                    </div>
                </div>
            </section>
            <section className="cta cta--curso cta--curso--megan cta--curso--megan--materials">
                <div className="cta__wrapper">
                    <h3 className="cta__title">{t("materials.microlearning.title")}</h3>
                    <ul className="cta__list">
                        <li className="cta__item">
                            <strong>{t("materials.microlearning.01")}</strong>
                            <span className="cta__text">{t("materials.microlearning.01-data")}</span>
                        </li>
                        <li className="cta__item">
                            <strong>{t("materials.microlearning.02")}</strong>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="cta cta--faqs cta--faqs--groups cta--faqs--materials">
                <div className="cta__wrapper">
                    <h3 className="cta__title">{t("faqs.title")}</h3>
                    <ul className="cta__list">
                        <li className="cta__item">
                            <strong>{t("materials.faqs.01")}</strong>
                            <span className="cta__text">{t("materials.faqs.01-answer")}</span>
                        </li>
                        <li className="cta__item">
                            <strong>{t("materials.faqs.02")}</strong>
                            <span className="cta__text">{t("materials.faqs.02-answer")}</span>
                        </li>
                        <li className="cta__item">
                            <strong>{t("materials.faqs.03")}</strong>
                            <span className="cta__text">{t("materials.faqs.03-answer")}</span>
                        </li>
                        <li className="cta__item">
                            <strong>{t("materials.faqs.04")}</strong>
                            <span className="cta__text">{t("materials.faqs.04-answer")}</span>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="cta cta--oscar cta--materials">
                <div className="cta__wrapper">
                    <div className="container">
                        <h3 className="cta__title">{t("materials.academy.title")}</h3>
                        <h4 className="cta__subtitle">{t("materials.academy.subtitle")}</h4>
                        <ul className="cta__list">
                            <li className="cta__item">
                                <strong>{t("materials.academy.label")}</strong>
                            </li>
                            <li className="cta__item"><span className="cta__text">{t("materials.academy.01")}</span></li>
                            <li className="cta__item"><span className="cta__text">{t("materials.academy.02")}</span></li>
                            <li className="cta__item"><span className="cta__text">{t("materials.academy.03")}</span></li>
                        </ul>
                        <div className="cta__btn-wrapper">
                            <a target="_blank" rel="noreferrer" href="https://academia.oscartrejo.online/home" className="btn">{t("materials.academy.btn")}</a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
