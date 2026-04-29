/* eslint-disable react/no-unknown-property */
import { useTranslation } from 'react-i18next'

import logoAcademy from '../assest/img/logo-ot-academy.svg'

export default function Academy() {
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
                                <p><a target="_blank" rel="noreferrer" href="https://academia.oscartrejo.online/home" className="page-header__link btn">{t("academy.banner-btn")}</a></p>
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
                                    <a target="_blank" rel="noreferrer" href="https://academia.oscartrejo.online/home" className="btn">{t("academy.microlearning.btn")}</a>
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
                            <a target="_blank" rel="noreferrer" href="https://academia.oscartrejo.online/home" className="btn">{t("academy.content.btn")}</a>
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
                                <button onClick={() => popup()} className="btn">{t("academy.future.btn")}</button>
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
