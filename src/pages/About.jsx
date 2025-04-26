import { useTranslation } from 'react-i18next'

export default function About() {

    const { t } = useTranslation('global')

    return (
        <section className="page-content">
            <div className="container">
                <h2 className="page-title">{t( "about.title" )}</h2>
                <h3 className="page-subtitle">{t("about.subtitle")}</h3>
                <p className="page-slogan">{t("about.slogan")}</p>
            </div>
            <header className="page-header page-header--about">
                <div className="page-header__data">
                    <div className="page-header__data__img"></div>
                    <div className="page-header__data__call-to-action">
                        <div className="page-header__excerpt">
                            <p className="page-header__excerpt__paragraph">Oscar Trejo Academy es un espacio digital creado por educadores con un enfoque en el aprendizaje práctico, realista y aplicable en la vida real. Aquí, no solo enseñamos inglés; ayudamos a nuestros estudiantes a desarrollar habilidades y estrategias que les permitan expresar sus ideas con seguridad, haciendo uso de las herramientas a su alcance y siguiendo su propia personalidad.</p>
                            <p className="page-header__excerpt__paragraph">La confianza es clave en el aprendizaje de cualquier idioma. Por eso, desde aquí impulsamos el concepto de Confidence Co., la evolución de esta academia, que en el futuro se expandirá para ofrecer más oportunidades de aprendizaje.</p>
                        </div>
                    </div>
                </div>
            </header>
            <section className="cta cta--price cta--price--about">
                <div className="cta__wrapper">
                    <h3 className="cta__title">Nuestra filosofía de enseñanza</h3>
                    <ul className="cta__list">
                        <li className="cta__item">
                            <span className="cta__text">Nosotros no improvisamos ni seguimos un modelo de enseñanza obsoleto. Somos educadores reales y actualizados, con metodologías efectivas que te enseñan a aprender.</span>
                        </li>
                        <li className="cta__item">
                            <strong>Interactivo</strong>
                            <span className="cta__text">Clases en vivo con correcciones en el momento.</span>
                        </li>
                        <li className="cta__item">
                            <strong>Personalizado</strong>
                            <span className="cta__text">Adaptado a tu nivel y necesidades.</span>
                        </li>
                        <li className="cta__item">
                            <strong>Práctico</strong>
                            <span className="cta__text">Enfocado en aplicación inmediata, no en teoría innecesaria.</span>
                        </li>
                    </ul>
                    <ul className="cta__list">
                        <li className="cta__item">
                            <strong>Diferencia con los métodos tradicionales:</strong>
                            <span className="cta__text">Los cursos tradicionales aplican una sola fórmula para todos. Nosotros sabemos que hay múltiples estilos de aprendizaje, y una sola metodología no sirve para todos.</span>
                            <span className="cta__text">Promesas como «Ser bilingüe en 3 meses» venden ilusiones. Nosotros nos enfocamos en habilidades reales y resultados tangibles.</span>
                            <span className="cta__text">El aprendizaje masivo sacrifica la atención al detalle. En nuestra academia, cada estudiante recibe corrección y guía individualizada.</span>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="cta cta--about">
                <div className="container">
                    <h3 className="cta__title">Nuestro equipo</h3>
                    <div className="cta--about__data">
                        <div className="cta--about__data__row">
                            <h4 className="cta--about__data__title">Oscar Trejo - Fundador y head trainer</h4>
                            <p className="cta--about__data__info">Vision Architect, mentor principal y estratega del equipo de enseñanza y contenido. Con más de 25 años de experiencia, Oscar ha ayudado a cientos de estudiantes a alcanzar confianza en inglés a través de su método estructurado y realista.</p>
                            <p className="cta--about__data__info cta--about__data__info--close">Me motiva ver a mis alumnos superar sus obstáculos y convertir sus miedos en oportunidades. No solo enseño inglés, guío a personas para que desarrollen habilidades que les servirán toda la vida.</p>
                        </div>
                        <div className="cta--about__data__row">
                            <h4 className="cta--about__data__title">Megan Trejo - Especialista en fluidez y pronunciación</h4>
                            <p className="cta--about__data__info">Guía a estudiantes en la mejora de su expresión oral y auditiva, con un enfoque detallado en corrección y comprensión. Megan se especializa en ayudar a sus estudiantes a ganar confianza al hablar, con técnicas de repetición, lectura guiada y estrategias para mejorar la pronunciación. Su energía calmada y su paciencia crean un ambiente de aprendizaje seguro y efectivo.</p>
                            <p className="cta--about__data__info cta--about__data__info--close">El idioma es una herramienta poderosa. Me gusta ayudar a mis alumnos a perfeccionar su inglés sin miedo al error, porque aprender es también un proceso de autoconfianza.</p>
                        </div>
                    </div>
                    <div className="cta--about__footer">
                        <p className="cta--about__footer__info">En el futuro, la academia seguirá creciendo con más especialistas en otras áreas de aprendizaje.</p>
                    </div>
                </div>
            </section>
            <section className="cta cta--oscar cta--materials">
                <div className="cta__wrapper">
                    <div className="container">
                        <h3 className="cta__title">Nuestra visión de futuro</h3>
                        <ul className="cta__list">
                            <li className="cta__item">
                                <strong>Del inglés a un ecosistema educativo integral</strong>
                                <span className="cta__text">La evolución de Oscar Trejo Academy es Confidence Co., un centro educativo y de mentorías con presencia virtual y física en Estados Unidos y España, donde no solo se enseñará inglés, sino también habilidades clave para el crecimiento personal y profesional.</span>
                            </li>
                            <li className="cta__item">
                                <strong>Próximamente expandiremos nuestra oferta a otras áreas, como:</strong>
                                <span className="cta__text">
                                    Matemáticas<br />
                                    Comunicación<br />
                                    Lecto-escritura para niños<br />
                                    Escuela para padres<br />
                                    Negocios y estrategias de crecimiento profesional
                                </span>
                                <span className="cta__text cta__text--italic">Aprender con nosotros no es solo estudiar un idioma. Es entrar a un espacio donde te desarrollas de forma efectiva, relajada y sin presiones. No te juzgamos por tu desempeño; te ayudamos a aceptarte y mejorar a tu ritmo.</span>
                            </li>
                            <li className="cta__item">
                                <strong>Aprender es un proceso de confianza. Si crees en ti, el aprendizaje se vuelve natural</strong>
                            </li>
                        </ul>
                        <div className="cta__btn-wrapper">
                            <a href="#" className="btn">Conoce más sobre nuestros programas</a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
