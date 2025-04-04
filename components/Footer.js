function Footer() {
    try {
        const currentYear = new Date().getFullYear();
        
        return (
            <footer data-name="footer" className="footer">
                <div data-name="container" className="container">
                    <div data-name="footer-container" className="footer-container">
                        <div data-name="footer-about" className="footer-about">
                            <div data-name="footer-logo" className="footer-logo">
                                <div data-name="footer-logo-text" className="footer-logo-text">Grupo Alto da Serra</div>
                            </div>
                            <p>
                                Empresa especializada em serviços de guincho e reboque para todos os tipos de veículos. 
                                Atendimento 24 horas em toda a região.
                            </p>
                            <div data-name="footer-social" className="footer-social">
                                <a data-name="footer-social-instagram" target="_blank" href="https://www.instagram.com/autosocorro_altodaserra" aria-label="Instagram">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a data-name="footer-social-whatsapp" target="_blank" href="https://wa.me/554331271101?text=Ol%C3%A1%2C%20acabei%20de%20acessar%20seu%20site%20e%20tenho%20algumas%20d%C3%BAvidas%20sobre%20os%20servi%C3%A7os.%20Poderia%20me%20explicar%20melhor%3F" aria-label="WhatsApp">
                                    <i className="fab fa-whatsapp"></i>
                                </a>                               
                            </div>
                        </div>
                        
                        <div data-name="footer-links" className="footer-links-container">
                            <h3 data-name="footer-title" className="footer-title">Links Rápidos</h3>
                            <ul data-name="footer-links-list" className="footer-links">
                                <li data-name="footer-link" className="footer-link">
                                    <a href="#home">Início</a>
                                </li>
                                <li data-name="footer-link" className="footer-link">
                                    <a href="#services">Serviços</a>
                                </li>
                                <li data-name="footer-link" className="footer-link">
                                    <a href="#about">Sobre Nós</a>
                                </li>
                                <li data-name="footer-link" className="footer-link">
                                    <a href="#testimonials">Depoimentos</a>
                                </li>
                                <li data-name="footer-link" className="footer-link">
                                    <a href="#contact">Contato</a>
                                </li>
                            </ul>
                        </div>
                        
                        <div data-name="footer-contact" className="footer-contact">
                            <h3 data-name="footer-title" className="footer-title">Contato</h3>
                            <div data-name="footer-contact-item" className="footer-contact-item">
                                <div data-name="footer-contact-icon" className="footer-contact-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div data-name="footer-contact-text" className="footer-contact-text">
                                    R. José Rodrigues da Silva, 425 - Parque industrial Aníbal Curi<br />
                                    Mauá da Serra - PR, 86828-000
                                </div>
                            </div>
                            <div data-name="footer-contact-item" className="footer-contact-item">
                                <div data-name="footer-contact-icon" className="footer-contact-icon">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div data-name="footer-contact-text" className="footer-contact-text">
                                    (43) 3464-1061<br />
                                    (43) 3127-1101 ( WhatsApp )
                                </div>
                            </div>
                            <div data-name="footer-contact-item" className="footer-contact-item">
                                <div data-name="footer-contact-icon" className="footer-contact-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div data-name="footer-contact-text" className="footer-contact-text">
                                    <a href="mailto:administrativo@grupoaltodaserra.com.br">
                                        administrativo@grupoaltodaserra.com.br
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div data-name="footer-newsletter" className="footer-newsletter">
                            <h3 data-name="footer-title" className="footer-title">Newsletter</h3>
                            <p>
                                Receba nossas novidades e promoções por e-mail
                            </p>
                            <form data-name="footer-form" className="footer-form">
                                <input 
                                    data-name="footer-form-input"
                                    type="email" 
                                    placeholder="Seu e-mail" 
                                    required
                                />
                                <button data-name="footer-form-button" type="submit">Inscrever-se</button>
                            </form>
                        </div>
                    </div>
                </div>
                
                <div data-name="footer-bottom" className="footer-bottom">
                    <p>
                        &copy; {currentYear} Grupo Alto da Serra. Todos os direitos reservados.
                        <br />
                        <span style={{fontSize: '0.7rem'}}>Site elaborado por <a href="https://www.instagram.com/elder_fadin" target="_blank" style={{color: '#fff', textDecoration: 'underline'}}>Elder Adriano Fadin</a>.</span>
                    </p>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
