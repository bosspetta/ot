import { useTranslation } from 'react-i18next'

export default function Comunidad() {
    const { t } = useTranslation('global')
    return (
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
                            <p className="page-header__excerpt__paragraph">Aprender un idioma va más allá de memorizar reglas: es un proceso donde la confianza, la interacción y la retroalimentación hacen la diferencia. En Oscar Trejo Academy, creamos un espacio donde cada estudiante se siente seguro de aprender y mejorar sin miedo al error.</p>
                            <p className="page-header__excerpt__paragraph">Aquí, no solo tomas clases. Te unes a un entorno de aprendizaje donde la comunicación, la práctica y el acompañamiento personalizado te llevan a alcanzar la fluidez.</p>
                            <p><a href="#" className="page-header__link btn">Unete a nuestra comunidad de aprendizaje</a></p>
                        </div>
                    </div>
                </div>
            </header>
            <section className="cta cta--price cta--price--about cta--price--community">
                <div className="cta__wrapper">
                    <h3 className="cta__title">La experiencia de aprender con nosotros</h3>
                    <ul className="cta__list">
                        <li className="cta__item">
                            <strong>Ambiente seguro y sin juicios</strong>
                            <span className="cta__text">No importa tu nivel, aquí aprendes sin miedo.</span>
                        </li>
                        <li className="cta__item">
                            <strong>Correcciones en vivo y personalizadas</strong>
                            <span className="cta__text">Recibes retroalimentación en el momento justo.</span>
                        </li>
                        <li className="cta__item">
                            <strong>Profesores accesibles y cercanos</strong>
                            <span className="cta__text">Oscar, Megan y el equipo te guían con paciencia y claridad.</span>
                        </li>
                        <li className="cta__item">
                            <strong>Dinamismo y variedad</strong>
                            <span className="cta__text">Conversaciones reales, ejercicios prácticos y aprendizaje natural.</span>
                        </li>
                        <li className="cta__item">
                            <strong>Comunidad en crecimiento</strong>
                            <span className="cta__text">Alumnos que comparten experiencias, se apoyan y avanzan juntos.</span>
                        </li>
                        <li className="cta__item">
                            <div className="cta__btn-wrapper">
                                <a href="#" className="btn">Descubre cómo es aprender con nosotros</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="stories stories--community">
                <div className="container">
                    <div className="stories__wrapper">
                        <h3 className="stories__title">Lo que dicen nuestros alumnos</h3>
                        <div className="stories__storie">
                            <div className="stories__grid">
                                <div className="stories__grid__item">
                                    <div className="stories__grid__item__text">
                                        <p><span className="stories__grid__item__text__phrase">«Aquí aprendí a hablar sin miedo. Oscar y Megan no solo enseñan, sino que te dan confianza para expresarte con seguridad.»</span> <span className="stories__grid__item__text__author">— Andrea G.</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stories__storie">
                            <div className="stories__grid">
                                <div className="stories__grid__item">
                                    <div className="stories__grid__item__text">
                                        <p><span className="stories__grid__item__text__phrase">«Las correcciones en vivo y la forma en que nos guían hacen que cada clase sea un paso real hacia la fluidez.»</span> <span className="stories__grid__item__text__author">— Luis P.</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stories__storie">
                            <div className="stories__grid">
                                <div className="stories__grid__item">
                                    <div className="stories__grid__item__text">
                                        <p><span className="stories__grid__item__text__phrase">«Nunca me sentí juzgado por mi nivel. Aprender aquí es diferente, es ameno, práctico y útil para la vida real.»</span> <span className="stories__grid__item__text__author">— Juan M.</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cta__btn-wrapper">
                            <a href="#" className="btn">Descubre cómo es aprender con nosotros</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cta cta--oscar cta--materials cta--materials--community">
                <div className="cta__wrapper">
                    <div className="container">
                        <h3 className="cta__title">Nuestra filosofía: aprender con confianza</h3>
                        <ul className="cta__list">
                            <li className="cta__item">
                                <span className="cta__text cta__text--italic">En Oscar Trejo Academy, entendemos que aprender un idioma es un proceso de confianza. No creemos en fórmulas mágicas ni en cursos masivos donde nadie se conoce. Aquí, cada estudiante es visto, escuchado y apoyado en su proceso de aprendizaje.</span>
                            </li>
                            <li className="cta__item">
                                <strong>Nuestro enfoque se basa en:</strong>
                                <span className="cta__text">Ambiente seguro y motivador.</span>
                                <span className="cta__text">Correcciones personalizadas para cada estudiante.</span>
                                <span className="cta__text">Métodos prácticos y adaptados a tu ritmo de aprendizaje.</span>
                            </li>
                            <li className="cta__item">
                                <span className="cta__text cta__text--italic">Confidence Co. es nuestra evolución natural. Queremos que nuestra comunidad crezca y sea un espacio donde cada estudiante pueda desarrollar nuevas habilidades, no solo en inglés, sino en muchas áreas más.</span>
                            </li>
                        </ul>
                        <div className="cta__btn-wrapper">
                            <a href="#" className="btn">Conviértete en parte de nuestra comunidad</a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
