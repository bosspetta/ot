export default function Footer() {

    return (
        <footer className="main-footer">
            <div className="main-footer__col">
                <ul className="main-footer__contact">
                    <li><span>Email:</span> <a href="mailto:conoce@oscartrejo.online" title="Email a Oscar Trejo Academy"><strong>conoce@oscartrejo.online</strong></a></li>
                    <li><span>WhatsApp:</span> <a href="https://api.whatsapp.com/send/?phone=16893195853" title="WhatsApp con Oscar Trejo Academy"><strong>+1 (689) 319-5853</strong></a></li>
                </ul>
            </div>
            <div className="main-footer__col">
                <p className="main-footer__address">1209 Mountain Road PL NE # 5009 Albuquerque, NM 87110 USA</p>
            </div>
            <div className="main-footer__col">
                <ul className="main-footer__social">
                    <li className="main-footer__social__item main-footer__social__item--instagram">
                        <a href="https://www.instagram.com/oscartrejoingles/" title="Go to " target="_blank" rel="noreferrer" className="main-footer__social__link">
                            <img src="/img/ico/ico-instagram.svg" alt="" />
                            <span className="sr-only">Instagram</span>
                        </a>
                    </li>
                    <li className="main-footer__social__item main-footer__social__item--tiktok">
                        <a href="https://www.tiktok.com/@oscartrejoingles" title="Go to " target="_blank" rel="noreferrer" className="main-footer__social__link">
                            <img src="/img/ico/ico-tiktok.svg" alt="" />
                            <span className="sr-only">Tiktok</span>
                        </a>
                    </li>
                    <li className="main-footer__social__item main-footer__social__item--facebook">
                        <a href="https://www.facebook.com/oscartrejoingles" title="Go to " target="_blank" rel="noreferrer" className="main-footer__social__link">
                            <img src="/img/ico/ico-facebook.svg" alt="" />
                            <span className="sr-only">Facebook</span>
                        </a>
                    </li>
                    <li className="main-footer__social__item main-footer__social__item--youtube">
                        <a href="https://www.youtube.com/@oscartrejoingles" title="Go to " target="_blank" rel="noreferrer" className="main-footer__social__link">
                            <img src="/img/ico/ico-youtube.svg" alt="" />
                            <span className="sr-only">YouTube</span>
                        </a>
                    </li>
                    <li className="main-footer__social__item main-footer__social__item--linkedin">
                        <a href="https://www.linkedin.com/company/oscar-trejo-online/" title="Go to " target="_blank" rel="noreferrer" className="main-footer__social__link">
                            <img src="/img/ico/ico-linkedin.svg" alt="" />
                            <span className="sr-only">Linkedin</span>
                        </a>
                    </li>
                    <li className="main-footer__social__item main-footer__social__item--whatsapp">
                        <a href="https://api.whatsapp.com/send/?phone=16893195853" title="Go to " target="_blank" rel="noreferrer" className="main-footer__social__link">
                            <img src="/img/ico/ico-whatsapp.svg" alt="" />
                            <span className="sr-only">WhatsApp</span>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
