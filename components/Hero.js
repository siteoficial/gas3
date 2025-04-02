function Hero() {
    try {
        return (
            <section data-name="hero" id="home" className="hero">
                <div data-name="container" className="container">
                    <div data-name="hero-content" className="hero-content">
                        <h1 data-name="hero-title" className="hero-title">
                            Serviço de <span className="text-secondary">Guincho 24h</span> para todo tipo de veículo
                        </h1>
                        <p data-name="hero-subtitle" className="hero-subtitle">
                            Atendimento rápido e eficiente para você não ficar na mão
                        </p>
                        <div data-name="hero-cta" className="hero-cta">
                            <a data-name="btn-primary" href="#contact" className="btn btn-primary">
                                Solicitar Guincho
                            </a>
                            <a data-name="btn-secondary" href="#services" className="btn btn-secondary">
                                Nossos Serviços
                            </a>
                        </div>
                        
                        <div data-name="hero-features" className="hero-features">
                            <div data-name="hero-feature" className="hero-feature">
                                <i data-name="hero-feature-icon" className="fas fa-clock hero-feature-icon"></i>
                                <span data-name="hero-feature-text" className="hero-feature-text">Atendimento 24h</span>
                            </div>
                            <div data-name="hero-feature" className="hero-feature">
                                <i data-name="hero-feature-icon" className="fas fa-truck-pickup hero-feature-icon"></i>
                                <span data-name="hero-feature-text" className="hero-feature-text">Todos os veículos</span>
                            </div>
                            <div data-name="hero-feature" className="hero-feature">
                                <i data-name="hero-feature-icon" className="fas fa-map-marker-alt hero-feature-icon"></i>
                                <span data-name="hero-feature-text" className="hero-feature-text">Cobertura regional</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <a data-name="hero-scroll" href="#services" className="hero-scroll">
                    <i className="fas fa-chevron-down"></i>
                </a>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
        return null;
    }
}
