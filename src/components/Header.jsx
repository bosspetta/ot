import { Link } from 'react-router-dom'

import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

export default function Header() {

    const { t, i18n } = useTranslation('global')

    const openMenu = (e) => {
        e.preventDefault()
        const btnMenu = document.getElementById('btn-menu')
        const mainMenu = document.getElementById('main-menu')
        document.body.classList.toggle('menu-opened')
        mainMenu.classList.toggle('menu-opened')
        btnMenu.classList.toggle('is-active')
    }

    const spanishLang = (e) => {
        let spanishBtn = document.querySelector('.language__btn--es')
        let englishBtn = document.querySelector('.language__btn--en')
        spanishBtn.classList.remove('selected')
        englishBtn.classList.remove('selected')
        e.target.classList.add('selected')
        document.documentElement.setAttribute('lang', 'es')
        localStorage.setItem('language', 'es')
        return i18n.changeLanguage('es')
    }

    const englishLang = (e) => {
        let englishBtn = document.querySelector('.language__btn--en')
        let spanishBtn = document.querySelector('.language__btn--es')
        englishBtn.classList.remove('selected')
        spanishBtn.classList.remove('selected')
        e.target.classList.add('selected')
        document.documentElement.setAttribute('lang', 'en')
        localStorage.setItem('language', 'en')
        return i18n.changeLanguage('en')
    }

    let selectedLanguage = i18next.language

    return (
        <header className="main-header">
            <div id="language" className="language">
                <div className="language__container">
                    <button className={`language__btn language__btn--es ${ selectedLanguage === 'es' ? 'selected' : null }`} onClick={spanishLang} type="button">Español</button>
                    <button className={`language__btn language__btn--en ${ selectedLanguage === 'en' ? 'selected' : null }`} onClick={englishLang} type="button">English</button>
                </div>
            </div>
            <h1 className="site-title">
                <Link to="/" className="site-title__home-link" title="Ir al inicio">
                    <span className="site-title__title sr-only">Oscar Trejo Academy</span>
                    <span className="site-title__naming">
                        <span className="site-title__subtitle sr-only">{t("header.subtitle")}</span>
                    </span>
                </Link>
            </h1>
            <button className="hamburger hamburger--collapse" type="button" id="btn-menu" onClick={openMenu}>
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                    <span className="sr-only">{t( "header.open-menu" )}</span>
                </span>
            </button>
        </header>
    )
}
