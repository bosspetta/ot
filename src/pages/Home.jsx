import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import meganOscar from '../assest/img/megan-oscar.png'

export default function Home() {
    const { t } = useTranslation('global')

    return (
        <section className="page-content page-content--home">
            <h2 className="page-title sr-only">{t( "home.title" )}</h2>
            <div className="top-decoration">
                <div className="intro-quote">
                    <p className="intro-quote__wrapper">
                        <span className="intro-quote__quote">{t( "home.intro" )}</span> <br />
                        <span className="intro-quote__author">— Flora Lewis</span>
                    </p>
                </div>
                <div className="teachers" aria-hidden="true" role="presentation">
                    <img src={meganOscar} alt="" />
                </div>
            </div>
            <ul className="intro-links">
                <li className="intro-links__item">
                    <Link className="intro-links__link" to='/one-to-one'>{t( "intro-links.one-to-one" )}</Link>
                </li>
                <li className="intro-links__item">
                    <Link className="intro-links__link" to='/groups'>{t("intro-links.groups")}</Link>
                </li>
                <li className="intro-links__item">
                    <Link className="intro-links__link" to='/megan-classes'>{t( "intro-links.megan-classes" )}</Link>
                </li>
                <li className="intro-links__item">
                    <Link className="intro-links__link" to='/materials'>{t( "intro-links.materials" )}</Link>
                </li>
            </ul>
        </section>
    )
}
