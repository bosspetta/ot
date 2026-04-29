export default function SocialMedia() {

    return (
        <section className="page-content page-content--social-media">
            <div className="container">
                <h2 className="page-title">¿Listo para mejorar tu inglés?</h2>
            </div>
            <section className="cta cta--eng-groups">
                <div className="cta__wrapper">
                    <div className="cta__btn-wrapper cta__btn-wrapper--social-media">
                        <ul className="social-media__links">
                            <li  className="social-media__link">
                                <a target="_blank" rel="noreferrer" href="https://www.go.oscartrejo.online/thatsok" className="btn btn__thats-ok btn--destacado">
                                    <span className="btn__ico"></span>
                                    <span className="btn__label">That&rsquo;s OK</span>
                                </a>
                            </li>
                            <li  className="social-media__link">
                                <a target="_blank" rel="noreferrer" href="https://calendar.app.google/ps2wBUQxvyobrDRx9" className="btn btn__agenda">
                                    <span className="btn__ico"></span>
                                    <span className="btn__label">Agenda sesión diagnóstico (Gratis)</span>
                                </a>
                            </li>
                            <li  className="social-media__link">
                                <a target="_blank" rel="noreferrer" href="/" className="btn btn__conoce">
                                    <span className="btn__ico"></span>
                                    <span className="btn__label">Conoce todos mis programas</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </section>
    )
}
