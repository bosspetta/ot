import { useTranslation } from 'react-i18next'

import logoAcademy from '../assest/img/logo-ot-academy.svg'

export default function Comunidad() {
    const { t } = useTranslation('global')

    function popup() {
        document.getElementById("popup-comunidad").classList.add('popup-comunidad__opened')
    }

    function closePopup() {
        document.getElementById("popup-comunidad").classList.remove('popup-comunidad__opened')
    }

    return (
        <>
            <section className="page-content">
                <div className="container">
                    <h2 className="page-title">{t( "comunidad.title" )}</h2>
                    <h3 className="page-subtitle">{t( "comunidad.subtitle" )}</h3>
                </div>
                <header className="page-header page-header--about page-header--academy page-header--academy--community">
                    <div className="page-header__data">
                        <div className="page-header__data__img"></div>
                        <div className="page-header__data__call-to-action">
                            <div className="page-header__excerpt">
                                <p className="page-header__excerpt__paragraph">{t("comunidad.banner-01")}</p>
                                <p className="page-header__excerpt__paragraph">{t("comunidad.banner-02")}</p>
                                <p><button onClick={() => popup()} className="page-header__link btn">{t("comunidad.banner-btn")}</button></p>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="cta cta--price cta--price--about cta--price--community">
                    <div className="cta__wrapper">
                        <h3 className="cta__title">{t("comunidad.experiencia.title")}</h3>
                        <ul className="cta__list">
                            <li className="cta__item">
                                <strong>{t("comunidad.experiencia.01")}</strong>
                                <span className="cta__text">{t("comunidad.experiencia.01-key")}</span>
                            </li>
                            <li className="cta__item">
                                <strong>{t("comunidad.experiencia.02")}</strong>
                                <span className="cta__text">{t("comunidad.experiencia.02-key")}</span>
                            </li>
                            <li className="cta__item">
                                <strong>{t("comunidad.experiencia.03")}</strong>
                                <span className="cta__text">{t("comunidad.experiencia.03-key")}</span>
                            </li>
                            <li className="cta__item">
                                <strong>{t("comunidad.experiencia.04")}</strong>
                                <span className="cta__text">{t("comunidad.experiencia.04-key")}</span>
                            </li>
                            <li className="cta__item">
                                <strong>{t("comunidad.experiencia.05")}</strong>
                                <span className="cta__text">{t("comunidad.experiencia.05-key")}</span>
                            </li>
                            <li className="cta__item">
                                <div className="cta__btn-wrapper">
                                    <a target="_blank" rel="noreferrer" href="https://calendar.app.google/eheMWXqytZpMZqS8A" className="btn">{t("comunidad.experiencia.btn")}</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="stories stories--community">
                    <div className="container">
                        <div className="stories__wrapper">
                            <h3 className="stories__title">{t("comunidad.testimonials.title")}</h3>
                            <div className="stories__storie">
                                <div className="stories__grid">
                                    <div className="stories__grid__item">
                                        <div className="stories__grid__item__text">
                                            <p><span className="stories__grid__item__text__phrase">«{t("comunidad.testimonials.01")}»</span> <span className="stories__grid__item__text__author">{t("comunidad.testimonials.01-auth")}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="stories__storie">
                                <div className="stories__grid">
                                    <div className="stories__grid__item">
                                        <div className="stories__grid__item__text">
                                            <p><span className="stories__grid__item__text__phrase">«{t("comunidad.testimonials.02")}»</span> <span className="stories__grid__item__text__author">{t("comunidad.testimonials.02-auth")}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="stories__storie">
                                <div className="stories__grid">
                                    <div className="stories__grid__item">
                                        <div className="stories__grid__item__text">
                                            <p><span className="stories__grid__item__text__phrase">«{t("comunidad.testimonials.03")}»</span> <span className="stories__grid__item__text__author">{t("comunidad.testimonials.03-auth")}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cta__btn-wrapper">
                                <a target="_blank" rel="noreferrer" href="https://calendar.app.google/eheMWXqytZpMZqS8A" className="btn">{t("comunidad.testimonials.btn")}</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="cta cta--oscar cta--materials cta--materials--community">
                    <div className="cta__wrapper">
                        <div className="container">
                            <h3 className="cta__title">{t("comunidad.philosophy.title")}</h3>
                            <ul className="cta__list">
                                <li className="cta__item">
                                    <span className="cta__text cta__text--italic">{t("comunidad.philosophy.intro")}</span>
                                </li>
                                <li className="cta__item">
                                    <strong>{t("comunidad.philosophy.subtitle")}</strong>
                                    <span className="cta__text">{t("comunidad.philosophy.01")}</span>
                                    <span className="cta__text">{t("comunidad.philosophy.02")}</span>
                                    <span className="cta__text">{t("comunidad.philosophy.03")}</span>
                                </li>
                                <li className="cta__item">
                                    <span className="cta__text cta__text--italic">{t("comunidad.philosophy.04")}</span>
                                </li>
                            </ul>
                            <div className="cta__btn-wrapper">
                                <button onClick={() => popup()} className="btn">{t("comunidad.philosophy.btn")}</button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section id="popup-comunidad" className="popup-comunidad">
                <div className="popup-comunidad__inner">
                    <button onClick={() => closePopup()} className="popup-comunidad__close">
                        <span className="sr-only">Cerrar popup</span>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24" height="24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                            <line x1="18" y1="6"  x2="6"  y2="18"/>
                            <line x1="6"  y1="6"  x2="18" y2="18"/>
                        </svg>
                    </button>
                    <div className="popup-comunidad__content">
                        <div className="popup-comunidad__logo">
                            <img src={logoAcademy} alt="" />
                        </div>
                        <h3>{t("popup.title-01")}</h3>
                        <p>{t("popup.entradilla")}</p>

                        <h3>{t("popup.title-02")}</h3>

                        <ul>
                            <li>
                                <h4>{t("popup.instagram")}</h4>
                                <p>{t("popup.instagram-desc")}</p>
                                <p><a href="https://www.instagram.com/channel/AbaJABTH2T32cR94/" target="_blank" rel="noreferrer" className="btn">{t("popup.instagram-btn")}</a></p>
                            </li>
                            <li>
                                <h4>{t("popup.facebook")}</h4>
                                <p>{t("popup.facebook-desc")}</p>
                                <p><a href="https://www.facebook.com/groups/561653902827939" target="_blank" rel="noreferrer" className="btn">{t("popup.facebook-btn")}</a></p>
                            </li>
                        </ul>

                        <p><strong><em>{t("popup.no-spam")}</em></strong></p>
                    </div>
                </div>
            </section>
        </>
    )
}
