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
                                <a data-name="footer-social-facebook" href="#" aria-label="Facebook">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a data-name="footer-social-instagram" href="#" aria-label="Instagram">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a data-name="footer-social-whatsapp" href="#" aria-label="WhatsApp">
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                                <a data-name="footer-social-youtube" href="#" aria-label="YouTube">
                                    <i className="fab fa-youtube"></i>
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
                                    Av. Paulista, 1000 - Bela Vista<br />
                                    São Paulo - SP, 01310-100
                                </div>
                            </div>
                            <div data-name="footer-contact-item" className="footer-contact-item">
                                <div data-name="footer-contact-icon" className="footer-contact-icon">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div data-name="footer-contact-text" className="footer-contact-text">
                                    (11) 4002-8922<br />
                                    (11) 99999-8888
                                </div>
                            </div>
                            <div data-name="footer-contact-item" className="footer-contact-item">
                                <div data-name="footer-contact-icon" className="footer-contact-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div data-name="footer-contact-text" className="footer-contact-text">
                                    contato@grupoaltoserra.com.br<br />
                                    suporte@grupoaltoserra.com.br
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
