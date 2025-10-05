import { NavLink } from "react-router-dom"
import { useTranslation } from 'react-i18next'

import ota from '../assest/img/logo-ot-academy.svg'

export default function MainMenu() {

    const { t } = useTranslation('global')

    const hideMenu = () => {
        document.body.classList.remove('menu-opened')
        document.getElementById('main-menu').classList.remove('menu-opened')
        document.getElementById('btn-menu').classList.remove('is-active')
    }

    return (
        <nav id="main-menu" className="main-menu">
            <img src={ota} alt="" className="main-menu__logo" />
            <ul className="main-menu__items">
                <li className="main-menu__item">
                    <NavLink
                        className={ ({isActive}) => isActive ? 'main-menu__link selected' : 'main-menu__link' }
                        to='/'
                        onClick={hideMenu}>
                        {t( "main-menu.home" )}
                    </NavLink>
                </li>

                <li className="main-menu__item">
                    <NavLink
                        className={ ({isActive}) => isActive ? 'main-menu__link selected' : 'main-menu__link' }
                        to='/about'
                        onClick={hideMenu}>
                        {t( "main-menu.about" )}
                    </NavLink>
                </li>
                <li className="main-menu__item">
                    <NavLink
                        className={ ({isActive}) => isActive ? 'main-menu__link selected' : 'main-menu__link' }
                        to='/academy'
                        onClick={hideMenu}>
                        {t( "main-menu.academy" )}
                    </NavLink>
                </li>
                <li className="main-menu__item">
                    <NavLink
                        className={ ({isActive}) => isActive ? 'main-menu__link selected' : 'main-menu__link' }
                        to='/community'
                        onClick={hideMenu}>
                        {t( "main-menu.community" )}
                    </NavLink>
                </li>
                <li className="main-menu__item">
                    <NavLink
                        className={ ({isActive}) => isActive ? 'main-menu__link selected' : 'main-menu__link' }
                        to='https://blog.oscartrejo.online/'
                        target="_blank"
                        onClick={hideMenu}>
                        Blog
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
