import { Link } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

export default function Header() {

    const { t } = useTranslation('global')

    const openMenu = (e) => {
        e.preventDefault()
        const btnMenu = document.getElementById('btn-menu')
        const mainMenu = document.getElementById('main-menu')
        document.body.classList.toggle('menu-opened')
        mainMenu.classList.toggle('menu-opened')
        btnMenu.classList.toggle('is-active')
    }

    return (
        <header className="main-header">
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
