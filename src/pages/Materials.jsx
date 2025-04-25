import { useTranslation } from 'react-i18next'

import oscar from '../assest/img/oscar.png'

export default function Materials() {

    const { t } = useTranslation('global')

    return (
        <section className="page-content">
            <div className="container">
                <h2 className="page-title">{t( "materials.title" )}</h2>
                <h3 className="page-subtitle">{t( "materials.subtitle" )}</h3>
            </div>
            <header className="page-header page-header--english-groups page-header--one-to-one">
                <div className="page-header__data">
                    <div className="page-header__data__img">
                        <img src={oscar} alt="" />
                    </div>
                    <div className="page-header__data__call-to-action">
                        <h3 className="page-header__title">Cursos y materiales descargables diseñados para que aprendas de forma flexible, con explicaciones en video y ejercicios prácticos.</h3>
                        <a href="#" className="page-header__link btn">Descarga tu material y empieza a mejorar hoy</a>
                    </div>
                </div>
            </header>
            <section className="cta cta--eng-groups cta--eng-groups--materials">
                <div className="cta__wrapper">
                    <h3 className="cta__title">Qué encontrarás aquí</h3>
                    <ul className="cta__list">
                        <li className="cta__item">
                            <strong>Talleres en vídeo</strong>
                            <span className="cta__text">Explicaciones claras y detalladas con material de apoyo.</span>
                        </li>
                        <li className="cta__item">
                            <strong>Ejercicios prácticos</strong>
                            <span className="cta__text">Aplicaciones inmediatas para reforzar lo aprendido.</span>
                        </li>
                        <li className="cta__item">
                            <strong>Autoevaluaciones</strong>
                            <span className="cta__text">Mide tu progreso con ejercicios interactivos.</span>
                        </li>
                        <li className="cta__item">
                            <strong>Acceso ilimitado</strong>
                            <span className="cta__text">Aprende a tu ritmo, sin presiones.</span>
                        </li>
                        <li className="cta__item">
                            <strong>Conocimiento de alto impacto</strong>
                            <span className="cta__text">Materiales diseñados para que recuerdes lo aprendido por años.</span>
                        </li>
                    </ul>
                    <div className="cta__btn-wrapper">
                        <a href="#" className="btn">Conoce nuestro catálogo</a>
                    </div>
                </div>
            </section>
            <section className="cta cta--price cta--price--materials">
                <div className="cta__wrapper">
                    <h3 className="cta__title">Ejemplos de Material Disponible</h3>
                    <ul className="cta__list">
                        <li className="cta__item">
                            <span className="cta__text">Idioms esenciales para hablar con naturalidad ($3 usd)</span>
                        </li>
                        <li className="cta__item">
                            <span className="cta__text">Survival dialogs: expresiones clave para viajar (próximamente)</span>
                        </li>
                        <li className="cta__item">
                            <span className="cta__text">Gramática sin complicaciones: claves para hablar con precisión (próximamente)</span>
                        </li>
                        <li className="cta__item">
                            <span className="cta__text">Las 100 preguntas para la ciudadanía en EE.UU. (próximamente)</span>
                        </li>
                        <li className="cta__item">
                            <span className="cta__text">Estamos ampliando el catálogo. Revisa las novedades en continuamente.</span>
                        </li>
                    </ul>
                    <div className="cta__btn-wrapper">
                        <a href="#" className="btn">Reserva tu lugar en las clases de Megan</a>
                    </div>
                </div>
            </section>
            <section className="cta cta--curso cta--curso--megan cta--curso--megan--materials">
                <div className="cta__wrapper">
                    <h3 className="cta__title">¿Qué es el Microlearning?</h3>
                    <ul className="cta__list">
                        <li className="cta__item">
                            <strong>Aprende lo que necesitas, cuando lo necesitas.</strong>
                            <span className="cta__text">El microlearning es aprendizaje práctico y de alto impacto: conocimiento que resuelve un problema en el momento exacto y deja una huella duradera en tu memoria.</span>
                        </li>
                        <li className="cta__item">
                            <strong>Cada taller está diseñado para darte respuestas claras y aplicables al instante, con un efecto que durará años.</strong>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="cta cta--faqs cta--faqs--groups cta--faqs--materials">
                <div className="cta__wrapper">
                    <h3 className="cta__title">Preguntas frecuentes</h3>
                    <ul className="cta__list">
                        <li className="cta__item">
                            <strong>¿Necesito tomar clases en vivo para aprovechar estos materiales?</strong>
                            <span className="cta__text">No, los talleres son 100% independientes y diseñados para autoaprendizaje.</span>
                        </li>
                        <li className="cta__item">
                            <strong>¿Puedo acceder a los materiales en cualquier momento?</strong>
                            <span className="cta__text">Sí, una vez adquirido, tienes acceso ilimitado.</span>
                        </li>
                        <li className="cta__item">
                            <strong>¿Van a agregar más talleres en el futuro?</strong>
                            <span className="cta__text">Sí, el catálogo crecerá con nuevos temas de inglés y otras áreas de aprendizaje.</span>
                        </li>
                        <li className="cta__item">
                            <strong>¿Habrá material gratuito?</strong>
                            <span className="cta__text">Estamos evaluando ofrecer contenido gratuito como introducción a los temas más relevantes.</span>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="cta cta--oscar cta--materials">
                <div className="cta__wrapper">
                    <div className="container">
                        <h3 className="cta__title">Sobre la academia y el futuro del aprendizaje</h3>
                        <h4 className="cta__subtitle">«Nuestra academia está en constante evolución. Hoy te ofrecemos materiales de inglés, pero en el futuro encontrarás mucho más. Creemos en el aprendizaje continuo y en la aplicación del conocimiento para mejorar tu vida.»</h4>
                        <ul className="cta__list">
                            <li className="cta__item">
                                <strong>Lo que hace especial este espacio:</strong>
                            </li>
                            <li className="cta__item"><span className="cta__text">Contenido especializado y fácil de consumir.</span></li>
                            <li className="cta__item"><span className="cta__text">Autoaprendizaje sin perder calidad en la enseñanza.</span></li>
                            <li className="cta__item"><span className="cta__text">Un primer paso hacia una academia más grande y diversa.</span></li>
                        </ul>
                        <div className="cta__btn-wrapper">
                            <a href="#" className="btn">Empieza a aprender hoy</a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
