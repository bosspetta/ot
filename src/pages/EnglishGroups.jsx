import { useTranslation } from 'react-i18next'

import oscar from '../assest/img/oscar.png'

export default function EnglishGroups() {

    const { t } = useTranslation('global')

    return (
        <section className="page-content">
            <div className="container">
                <h2 className="page-title">{t( "english-groups.title" )}</h2>
                <h3 className="page-subtitle">{t( "english-groups.subtitle" )}</h3>
            </div>
            <header className="page-header page-header--english-groups page-header--one-to-one">
                <div className="page-header__data">
                    <div className="page-header__data__img">
                        <img src={oscar} alt="" />
                    </div>
                    <div className="page-header__data__call-to-action">
                        <h3 className="page-header__title">Aprende en un entorno dinámico con otros profesionales, mejora tu fluidez y gana confianza en situaciones reales de trabajo.</h3>
                        <a href="#" className="page-header__link btn">Haz tu prueba de nivel</a>
                    </div>
                </div>
            </header>
            <section className="cta cta--eng-groups">
                <div className="cta__wrapper">
                    <h3 className="cta__title">Beneficios clave</h3>
                    <ul className="cta__list">
                        <li className="cta__item"><strong>Grupos reducidos</strong>
                        <span className="cta__text">(2-6 pp) Atención personalizada y más oportunidades de hablar.</span></li>
                        <li className="cta__item"><strong>Simulación de escenarios reales</strong>
                        <span className="cta__text">Reuniones, presentaciones y negociaciones.</span></li>
                        <li className="cta__item"><strong>Feedback en vivo</strong>
                        <span className="cta__text">Corrige errores al instante y mejora rápido.</span></li>
                        <li className="cta__item"><strong>Estructura clara y progresiva</strong>
                        <span className="cta__text">Clases adaptadas a tu nivel.</span></li>
                        <li className="cta__item"><strong>Networking profesional</strong>
                        <span className="cta__text">Conéctate con otros profesionales y practica con propósito.</span></li>
                    </ul>
                    <div className="cta__btn-wrapper">
                        <a href="#" className="btn">Realiza tu examen de nivel</a>
                    </div>
                </div>
            </section>
            <section className="stories">
                <div className="container">
                    <div className="stories__wrapper">
                        <h3 className="stories__title">Testimonios</h3>
                        <div className="stories__storie">
                            <div className="stories__grid">
                                <div className="stories__grid__item">
                                    <div className="stories__grid__item__img">
                                        <img src="/img/temp/stories-04.jpg" alt="" />
                                    </div>
                                    <div className="stories__grid__item__text">
                                        <p><span className="stories__grid__item__text__phrase">«Gracias a estas clases ya no me siento inseguro cuando tengo reuniones con clientes en inglés.»</span> <span className="stories__grid__item__text__author">— Luis G., Gerente de Ventas</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stories__storie">
                            <div className="stories__grid">
                                <div className="stories__grid__item">
                                    <div className="stories__grid__item__img">
                                        <img src="/img/temp/stories-05.jpg" alt="" />
                                    </div>
                                    <div className="stories__grid__item__text">
                                        <p><span className="stories__grid__item__text__phrase">«Practicar en grupo me ayudó a mejorar mi inglés más rápido de lo que imaginé.»</span> <span className="stories__grid__item__text__author">— Ana P., Ejecutiva de Finanzas</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stories__storie">
                            <div className="stories__grid">
                                <div className="stories__grid__item">
                                    <div className="stories__grid__item__img">
                                        <img src="/img/temp/stories-06.jpg" alt="" />
                                    </div>
                                    <div className="stories__grid__item__text">
                                        <p><span className="stories__grid__item__text__phrase">«Las simulaciones de presentaciones me dieron la confianza que necesitaba para hablar en inglés en mi empresa.»</span> <span className="stories__grid__item__text__author">— Ricardo T., Consultor</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cta cta--price">
                <div className="cta__wrapper">
                    <h3 className="cta__title">Planes y precios</h3>
                    <ul className="cta__list">
                        <li className="cta__item"><strong>Inversión en tu crecimiento profesional</strong>
                            <span className="cta__text">Los precios varían según el número de sesiones y el nivel de personalización.</span>
                            <span className="cta__text"><strong>Desde $100 hasta $155 dólares por mes, según el grupo y nivel seleccionado.</strong></span>
                            <span className="cta__text">Haz tu examen de nivel y te recomendaremos la mejor opción para ti.</span>
                        </li>
                    </ul>
                    <div className="cta__btn-wrapper">
                        <a href="#" className="btn">Realiza tu examen de nivel</a>
                    </div>
                </div>
            </section>
            <section className="cta cta--curso cta--curso--eng-groups">
                <div className="cta__wrapper">
                    <h3 className="cta__title">Detalles del curso</h3>
                    <ul className="cta__list">
                        <li className="cta__item">
                            <strong>Formato</strong>
                            <span className="cta__text">Clases en vivo vía Google Meet / Whereby.</span>
                        </li>
                        <li className="cta__item">
                            <strong>Duración de cada sesión</strong>
                            <span className="cta__text">60-90 minutos.</span>
                        </li>
                        <li className="cta__item">
                            <strong>Frecuencia recomendada</strong>
                            <span className="cta__text">2-3 veces por semana.</span>
                        </li>
                        <li className="cta__item">
                            <strong>Material de apoyo</strong>
                            <span className="cta__text">PDFs, ejercicios y acceso a grabaciones.</span>
                        </li>
                        <li className="cta__item">
                            <strong>Examen de nivel</strong>
                            <span className="cta__text">Para asegurarte de estar en el grupo adecuado.</span>
                        </li>
                    </ul>
                    <div className="cta__btn-wrapper">
                        <a href="#" className="btn">Empieza tu proceso hoy</a>
                    </div>
                </div>
            </section>
            <section className="cta cta--faqs cta--faqs--groups">
                <div className="cta__wrapper">
                    <h3 className="cta__title">Preguntas frecuentes</h3>
                    <ul className="cta__list">
                        <li className="cta__item">
                            <strong>¿Cuál es la diferencia entre estas clases y un curso tradicional de inglés?</strong>
                            <span className="cta__text">Aquí no memorizamos teoría, practicamos en escenarios reales de negocios.</span>
                        </li>
                        <li className="cta__item">
                            <strong>¿Necesito un nivel avanzado para unirme?</strong>
                            <span className="cta__text">No. Hacemos un examen de nivel para ubicarte en el grupo adecuado.</span>
                        </li>
                        <li className="cta__item">
                            <strong>¿Las clases están grabadas por si no puedo asistir?</strong>
                            <span className="cta__text">Sí, tendrás acceso a las grabaciones para repasar cuando quieras.</span>
                        </li>
                        <li className="cta__item">
                            <strong>¿Qué pasa si necesito cambiar de grupo?</strong>
                            <span className="cta__text">Podemos reubicarte si tu nivel o necesidades cambian.</span>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="cta cta--oscar">
                <div className="cta__wrapper">
                    <div className="container">
                        <h3 className="cta__title">Sobre Oscar</h3>
                        <h4 className="cta__subtitle">«Mi enfoque no es que memorices reglas, sino que hables con confianza en cualquier entorno profesional.»</h4>
                        <ul className="cta__list">
                            <li className="cta__item"><strong>Lo que me distingue:</strong>
                            <span className="cta__text">He ayudado a ejecutivos y empresas a mejorar su inglés de negocios.</span></li>
                            <li className="cta__item"><span className="cta__text">Mi método es práctico y basado en escenarios del mundo real.</span></li>
                            <li className="cta__item"><span className="cta__text">Las clases están diseñadas para que te prepares para reuniones, presentaciones y negociaciones.</span></li>
                        </ul>
                        <div className="cta__btn-wrapper">
                            <a href="#" className="btn">Hablemos sobre tu aprendizaje</a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
