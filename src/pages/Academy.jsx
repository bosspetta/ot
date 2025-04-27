import { useTranslation } from 'react-i18next'

export default function Academy() {
    const { t } = useTranslation('global')
    return (
        <section className="page-content">
            <div className="container">
                <h2 className="page-title">{t( "academy.title" )}</h2>
                <h3 className="page-subtitle">{t("academy.subtitle")}</h3>
            </div>
            <header className="page-header page-header--about page-header--academy">
                <div className="page-header__data">
                    <div className="page-header__data__img"></div>
                    <div className="page-header__data__call-to-action">
                        <div className="page-header__excerpt">
                            <p className="page-header__excerpt__paragraph">Aquí encuentras cápsulas de conocimiento diseñadas para mejorar tu inglés de manera efectiva, sin rodeos ni cursos extensos.</p>
                            <p className="page-header__excerpt__paragraph">Aprende lo que necesitas, cuando lo necesitas.</p>
                            <p><a href="#" className="page-header__link btn">Explora la academia</a></p>
                        </div>
                    </div>
                </div>
            </header>
            <section className="cta cta--price cta--price--about">
                <div className="cta__wrapper">
                    <h3 className="cta__title">¿Qué es el microlearning y cómo lo aplicamos?</h3>
                    <ul className="cta__list">
                        <li className="cta__item">
                            <strong>Aprendizaje en cápsulas: contenido directo, sin relleno.</strong>
                            <span className="cta__text">El microlearning se basa en unidades de aprendizaje pequeñas, diseñadas para resolver dudas específicas y generar un impacto duradero en tu conocimiento.</span>
                            <span className="cta__text">Contenido pregrabado y enfocado en la aplicación inmediata.</span>
                            <span className="cta__text">Ejercicios prácticos y materiales descargables para reforzar el aprendizaje.</span>
                            <span className="cta__text">Accesible en cualquier momento, sin presiones ni clases largas.</span>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="cta cta--price cta--price--academy">
                <div className="cta__wrapper">
                    <h3 className="cta__title">Contenido actual en la academia</h3>
                    <ul className="cta__list">
                        <li className="cta__item">
                            <strong>Taller disponible ahora</strong>
                            <span className="cta__text">Idioms Esenciales para Hablar con Naturalidad ($3 USD).</span>
                            <span className="cta__text">Explicaciones en video con ejemplos prácticos.</span>
                            <span className="cta__text">Ejercicios dentro del entorno de aprendizaje.</span>
                            <span className="cta__text">PDF descargable con contenido clave.</span>
                            <span className="cta__text">Estamos ampliando nuestro catálogo. Pronto encontrarás nuevos talleres y recursos para mejorar tu inglés y otras áreas del conocimiento.</span>
                        </li>
                    </ul>
                    <div className="cta__btn-wrapper">
                        <a href="#" className="btn">Accede a la academia</a>
                    </div>
                </div>
            </section>
            <section className="cta cta--oscar cta--materials">
                <div className="cta__wrapper">
                    <div className="container">
                        <h3 className="cta__title">El futuro de la academia: más que inglés</h3>
                        <ul className="cta__list">
                            <li className="cta__item">
                                <span className="cta__text cta__text--italic">Nuestra academia está en constante crecimiento. Pronto expandiremos nuestro contenido a nuevas áreas del conocimiento.</span>
                            </li>
                            <li className="cta__item">
                                <strong>Próximos temas en desarrollo:</strong>
                                <span className="cta__text">Inglés práctico para negocios y comunicación.</span>
                                <span className="cta__text">Matemáticas y resolución de problemas.</span>
                                <span className="cta__text">Ciencias y apoyo en tareas escolares.</span>
                            </li>
                            <li className="cta__item">
                                <span className="cta__text cta__text--italic">Queremos que esta academia se convierta en un centro de aprendizaje integral, donde encuentres las herramientas necesarias para avanzar en múltiples áreas.</span>
                            </li>
                        </ul>
                        <div className="cta__btn-wrapper">
                            <a href="#" className="btn">Únete a nuestra comunidad</a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
