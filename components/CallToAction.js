function CallToAction() {
    try {
        return (
            <section data-name="cta" id="contact" className="cta">
                <div data-name="container" className="container">
                    <h2 data-name="cta-title" className="cta-title">
                        Precisando de um <span className="cta-highlight">guincho agora</span>?
                    </h2>
                    <p data-name="cta-subtitle" className="cta-subtitle">
                        Estamos prontos para te atender 24 horas por dia, 7 dias por semana
                    </p>
                    
                    <div data-name="cta-buttons" className="cta-buttons">
                        <a 
                            data-name="cta-btn-whatsapp"
                            href="https://wa.me/554331271101?text=Ol%C3%A1%2C%20acabei%20de%20vir%20do%20seu%20site%20e%20preciso%20de%20um%20guincho%20com%20urg%C3%AAncia.%20Pode%20me%20ajudar%3F" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                        >
                            <i className="fab fa-whatsapp" style={{ marginRight: '8px' }}></i>
                            Chamar no WhatsApp
                        </a>
                        <a 
                            data-name="cta-btn-call"
                            href="tel:+554334641061" 
                            className="btn btn-primary"
                        >
                            <i className="fas fa-phone-alt" style={{ marginRight: '8px' }}></i>
                            Ligar Agora
                        </a>
                    </div>
                    
                    <div data-name="cta-phone" className="cta-phone">
                        <i className="fas fa-phone-alt"></i>
                        <span data-name="cta-phone-number" className="cta-phone-number">(43) 3464-1061</span>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('CallToAction component error:', error);
        reportError(error);
        return null;
    }
}
