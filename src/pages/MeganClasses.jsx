import { useTranslation } from 'react-i18next'

import megan from '../assest/img/megan.png'

export default function MeganClasses() {
    const { t } = useTranslation('global')
    return (
        <section className="page-content">
            <div className="container">
                <h2 className="page-title">{t( "megan-classes.title" )}</h2>
                <h3 className="page-subtitle">{t( "megan-classes.subtitle" )}</h3>
            </div>
            <header className="page-header page-header--english-groups page-header--one-to-one">
                <div className="page-header__data">
                    <div className="page-header__data__img">
                        <img src={megan} alt="" />
                    </div>
                    <div className="page-header__data__call-to-action">
                        <h3 className="page-header__title">Desarrolla confianza al hablar, mejora tu pronunciación y domina el inglés con un enfoque estructurado y efectivo.</h3>
                        <a href="#" className="page-header__link btn">Únete a las clases con Megan</a>
                    </div>
                </div>
            </header>
            <section className="cta cta--eng-groups">
                <div className="cta__wrapper">
                    <h3 className="cta__title">Beneficios clave</h3>
                    <ul className="cta__list">
                        <li className="cta__item">
                            <strong>Corrección precisa y constante</strong>
                            <span className="cta__text">Ajusta tu pronunciación y estructura en tiempo real.</span>
                        </li>
                        <li className="cta__item">
                            <strong>Lectura y dictado guiados</strong>
                            <span className="cta__text">Mejora tu comprensión y fluidez con ejercicios prácticos.</span>
                        </li>
                        <li className="cta__item">
                            <strong>Ambiente relajado y estructurado</strong>
                            <span className="cta__text">Aprende en un entorno cómodo, pero con objetivos claros.</span>
                        </li>
                        <li className="cta__item">
                            <strong>Contenido completo en inglés</strong>
                            <span className="cta__text">Clases con los mismos temas que los grupos con Oscar, pero con un estilo propio.</span>
                        </li>
                        <li className="cta__item">
                            <strong>Prácticas de conversación con IA y diálogos creados para ti</strong>
                            <span className="cta__text">Refuerza lo aprendido con ejercicios reales.</span>
                        </li>
                    </ul>
                    <div className="cta__btn-wrapper">
                        <a href="#" className="btn">Empieza tu proceso con Megan</a>
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
                                    <div className="stories__grid__item__text">
                                        <p><span className="stories__grid__item__text__phrase">«Estoy súper contenta con Megan, muy profesional aun para su corta edad.»</span> <span className="stories__grid__item__text__author">— Ana R.</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stories__storie">
                            <div className="stories__grid">
                                <div className="stories__grid__item">
                                    <div className="stories__grid__item__text">
                                        <p><span className="stories__grid__item__text__phrase">«Megan me enseñó a leer estas palabras complicadas. Me dijo: Primero que nada, sé paciente y divídela en sílabas.»</span> <span className="stories__grid__item__text__author">— Eduardo G.</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stories__storie">
                            <div className="stories__grid">
                                <div className="stories__grid__item">
                                    <div className="stories__grid__item__text">
                                        <p><span className="stories__grid__item__text__phrase">«Estoy contento con Megan, me ha ayudado muchísimo a avanzar y no me siento juzgado.»</span> <span className="stories__grid__item__text__author">— Mario T.</span></p>
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
                        <li className="cta__item">
                            <strong>Inversión en tu aprendizaje</strong>
                            <span className="cta__text">Los precios varían según la duración del programa y nivel seleccionado.</span>
                            <span className="cta__text"><strong>Desde $90 hasta $130 por mes, dependiendo del grupo y plan elegido.</strong></span>
                            <span className="cta__text">Consulta la disponibilidad de grupos y asegura tu lugar.</span>
                        </li>
                    </ul>
                    <div className="cta__btn-wrapper">
                        <a href="#" className="btn">Reserva tu lugar en las clases de Megan</a>
                    </div>
                </div>
            </section>
            <section className="cta cta--curso cta--curso--megan">
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
                            <span className="cta__text">1-2 veces por semana.</span>
                        </li>
                        <li className="cta__item">
                            <strong>Número de estudiantes por grupo</strong>
                            <span className="cta__text">6 a 10 participantes.</span>
                        </li>
                        <li className="cta__item">
                            <strong>Material de apoyo</strong>
                            <span className="cta__text">PDFs, ejercicios de repetición y acceso a IA.</span>
                        </li>
                        <li className="cta__item">
                            <strong>Técnicas utilizadas</strong>
                            <span className="cta__text">Lectura guiada, dictado, prácticas de conversación y simulaciones.</span>
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
                            <strong>¿Las clases con Megan son solo para pronunciación?</strong>
                            <span className="cta__text">No, las clases incluyen todos los aspectos del aprendizaje del inglés. Sin embargo, su estilo pone énfasis en fluidez, lectura y corrección precisa para mejorar tu expresión oral y auditiva.</span>
                        </li>
                        <li className="cta__item">
                            <strong>¿Necesito un nivel específico para inscribirme?</strong>
                            <span className="cta__text">No, el programa está estructurado para diferentes niveles.</span>
                        </li>
                        <li className="cta__item">
                            <strong>¿Las clases están grabadas por si no puedo asistir?</strong>
                            <span className="cta__text">Sí, tendrás acceso a las grabaciones para repasar cuando quieras.</span>
                        </li>
                        <li className="cta__item">
                            <strong>¿Qué pasa si siento que necesito más correcciones o ayuda extra?</strong>
                            <span className="cta__text">Megan te dará ejercicios personalizados para mejorar fuera de clase.</span>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="cta cta--oscar cta--megan">
                <div className="cta__wrapper">
                    <div className="container">
                        <h3 className="cta__title">Sobre Megan</h3>
                        <h4 className="cta__subtitle">«Siempre me ha encantado ayudar a las personas a mejorar su inglés, y mis alumnos saben que conmigo pueden practicar sin miedo a equivocarse. Juntos trabajamos en pronunciación, lectura y fluidez para que se sientan seguros en cada conversación.»</h4>
                        <ul className="cta__list">
                            <li className="cta__item">
                                <strong>Lo que me distingue:</strong>
                                <span className="cta__text">He desarrollado un método basado en repetición, lectura y dictado guiado.</span>
                            </li>
                            <li className="cta__item"><span className="cta__text">Mis clases son relajadas, pero estructuradas para que avances sin presión.</span></li>
                            <li className="cta__item"><span className="cta__text">Te ayudo a perfeccionar detalles clave en pronunciación y fluidez sin descuidar otros aspectos del inglés.</span></li>
                        </ul>
                        <div className="cta__btn-wrapper">
                            <a href="#" className="btn">Reserva tu lugar en las clases de Megan</a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
