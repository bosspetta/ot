import { useTranslation } from 'react-i18next'

import oscar from '../assest/img/oscar.png'

export default function OneToOne() {

    const { t } = useTranslation('global')

    return (
        <section className="page-content">
            <div className="container">
                <h2 className="page-title">{t("one-to-one.title")}</h2>
                <h3 className="page-subtitle">{t("one-to-one.subtitle")}</h3>
            </div>
            <header className="page-header page-header--1on1">
                <div className="page-header__data">
                    <div className="page-header__data__img">
                        <img src={oscar} alt="" />
                    </div>
                    <div className="page-header__data__call-to-action">
                        <h3 className="page-header__title">Transforma tu inglés con sesiones uno a uno diseñadas para acelerar tu progreso y brindarte confianza al hablar inglés.</h3>
                        <a href="#" className="page-header__link btn">Reserva tu sesión informativa gratuita</a>
                    </div>
                </div>
            </header>
            <section className="cta cta--one-to-one">
                <div className="cta__wrapper">
                    <h3 className="cta__title">Beneficios clave</h3>
                    <ul className="cta__list">
                        <li className="cta__item"><strong>Tú eliges el enfoque</strong>
                        <span className="cta__text">Conversación, gramática, pronunciación o inglés para negocios.</span></li>
                        <li className="cta__item"><strong>Corrección en tiempo real</strong>
                        <span className="cta__text">Feedback práctico y centrado en mejorar rápido.</span></li>
                        <li className="cta__item"><strong>100% personalizado</strong>
                        <span className="cta__text">Cada sesión se ajusta a tus necesidades y ritmo.</span></li>
                        <li className="cta__item"><strong>Flexibilidad total</strong>
                        <span className="cta__text">Escoge horarios que se adapten a tu agenda.</span></li>
                        <li className="cta__item"><strong>Material exclusivo</strong>
                        <span className="cta__text">Recursos digitales para reforzar lo aprendido.</span></li>
                    </ul>
                    <div className="cta__btn-wrapper">
                        <a href="#" className="btn">Descubre cómo funciona</a>
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
                                        <img src="/img/temp/stories-01.jpg" alt="" />
                                    </div>
                                    <div className="stories__grid__item__text">
                                        <p><span className="stories__grid__item__text__phrase">«Pasé de sentirme inseguro en reuniones a hablar con confianza. La diferencia fue abismal.»</span> <span className="stories__grid__item__text__author">— Daniel R., Project Manager</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stories__storie">
                            <div className="stories__grid">
                                <div className="stories__grid__item">
                                    <div className="stories__grid__item__img">
                                        <img src="/img/temp/stories-02.jpg" alt="" />
                                    </div>
                                    <div className="stories__grid__item__text">
                                        <p><span className="stories__grid__item__text__phrase">«Oscar me enseñó exactamente lo que necesitaba para mi entrevista en inglés y conseguí el trabajo.»</span> <span className="stories__grid__item__text__author">— María L., Ejecutiva de Ventas</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stories__storie">
                            <div className="stories__grid">
                                <div className="stories__grid__item">
                                    <div className="stories__grid__item__img">
                                        <img src="/img/temp/stories-03.jpg" alt="" />
                                    </div>
                                    <div className="stories__grid__item__text">
                                        <p><span className="stories__grid__item__text__phrase">«Las sesiones son dinámicas y efectivas. Se nota la diferencia de aprender con un mentor real.»</span> <span className="stories__grid__item__text__author">— Javier T., Ingeniero</span></p>
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
                        <li className="cta__item"><strong>Invierte en tu aprendizaje</strong>
                        <span className="cta__text">Los precios varían según el número de sesiones y el nivel de personalización.</span>
                        <span className="cta__text">Desde $120 hasta $510 USD por mes, dependiendo del plan que elijas.</span></li>
                    </ul>
                    <div className="cta__btn-wrapper">
                        <a href="#" className="btn">Reserva tu sesión informativa</a>
                    </div>
                    <ul className="cta__list">
                        <li className="cta__item"><span className="cta__text">Y te ayudamos a elegir la mejor opción para ti.</span></li>
                    </ul>
                </div>
            </section>
            <section className="cta cta--curso cta--curso--one-to-one">
                <div className="cta__wrapper">
                    <h3 className="cta__title">Detalles del curso</h3>
                    <ul className="cta__list">
                        <li className="cta__item"><strong>Duración de cada sesión</strong>
                        <span className="cta__text">60 minutos</span></li>
                        <li className="cta__item"><strong>Formato</strong>
                        <span className="cta__text">En vivo, vía Google Meet o Whereby</span></li>
                        <li className="cta__item"><strong>Material de apoyo</strong>
                        <span className="cta__text">PDFs, ejercicios prácticos y grabaciones opcionales</span></li>
                        <li className="cta__item"><strong>Frecuencia recomendada</strong>
                        <span className="cta__text">1-2 veces por semana según tus objetivos</span></li>
                    </ul>
                    <div className="cta__btn-wrapper">
                        <a href="#" className="btn">Empieza tu proceso hoy</a>
                    </div>
                </div>
            </section>
            <section className="cta cta--faqs cta--faqs--one-to-one">
                <div className="cta__wrapper">
                    <h3 className="cta__title">Preguntas frecuentes</h3>
                    <ul className="cta__list">
                        <li className="cta__item"><strong>¿Puedo cambiar mi horario si lo necesito?</strong>
                        <span className="cta__text">Sí, con al menos 24 horas de anticipación.</span></li>
                        <li className="cta__item"><strong>¿Cuánto tiempo necesito para ver resultados?</strong>
                        <span className="cta__text">Depende de tu constancia, pero muchos estudiantes notan mejoras en 3 meses.</span></li>
                        <li className="cta__item"><strong>¿Qué pasa si no puedo continuar?</strong>
                        <span className="cta__text">Puedes pausar y reanudar tus sesiones con flexibilidad.</span></li>
                        <li className="cta__item"><strong>¿Cómo sé si este curso es para mí?</strong>
                        <span className="cta__text">Por eso ofrecemos una sesión informativa gratuita para explicarte todo y asegurarnos de que encaje con tus metas.</span></li>
                    </ul>
                </div>
            </section>
            <section className="cta cta--oscar">
                <div className="cta__wrapper">
                    <div className="container">
                        <h3 className="cta__title">Sobre Oscar</h3>
                        <h4 className="cta__subtitle">«Con más de 25 años enseñando inglés a profesionales y empresas, mi objetivo es que aprendas sin miedo y con confianza.»</h4>
                        <ul className="cta__list">
                            <li className="cta__item"><strong>Lo que me distingue:</strong>
                            <span className="cta__text">Trabajo con profesionales que usan inglés en su día a día.</span></li>
                            <li className="cta__item"><span className="cta__text">He creado métodos prácticos que te ayudan a hablar inglés rápido.</span></li>
                            <li className="cta__item"><span className="cta__text">Mi meta es que ganes independencia y no dependas de clases para siempre.</span></li>
                        </ul>
                    </div>
                </div>
            </section>
        </section>
    )
}
