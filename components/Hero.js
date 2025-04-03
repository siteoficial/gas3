function Hero() {
    try {
        const [isLoaded, setIsLoaded] = React.useState(false);
        
        React.useEffect(() => {
            setIsLoaded(true);
        }, []);
        
        return (
            <section data-name="hero" id="home" className={`hero ${isLoaded ? 'loaded' : ''}`}>
                <div className="hero-background-overlay"></div>
                <div data-name="container" className="container">
                    <div data-name="hero-content" className="hero-content">
                        <div className="hero-logo-container">
                            <img 
                                src="images/logo-alto-da-serra.png" 
                                alt="Logo Grupo Alto da Serra" 
                                className="hero-logo" 
                            />
                        </div>
                        <h1 data-name="hero-title" className="hero-title">
                            Serviço de <span className="text-secondary">Guincho 24h</span> para todo tipo de veículo
                        </h1>
                        <p data-name="hero-subtitle" className="hero-subtitle">
                            Atendimento rápido e eficiente para você não ficar na mão
                        </p>
                        <div data-name="hero-cta" className="hero-cta">
                            <a data-name="btn-primary" href="#contact" className="btn btn-primary">
                                <i className="fas fa-phone-alt btn-icon"></i>
                                Solicitar Guincho
                            </a>
                            <a data-name="btn-secondary" href="#services" className="btn btn-secondary">
                                <i className="fas fa-list-ul btn-icon"></i>
                                Nossos Serviços
                            </a>
                        </div>
                        
                        <div data-name="hero-features" className="hero-features">
                            <div data-name="hero-feature" className="hero-feature">
                                <div className="hero-feature-icon-container">
                                    <i data-name="hero-feature-icon" className="fas fa-clock hero-feature-icon"></i>
                                </div>
                                <span data-name="hero-feature-text" className="hero-feature-text">Atendimento 24h</span>
                            </div>
                            <div data-name="hero-feature" className="hero-feature">
                                <div className="hero-feature-icon-container">
                                    <i data-name="hero-feature-icon" className="fas fa-truck-pickup hero-feature-icon"></i>
                                </div>
                                <span data-name="hero-feature-text" className="hero-feature-text">Todos os veículos</span>
                            </div>
                            <div data-name="hero-feature" className="hero-feature">
                                <div className="hero-feature-icon-container">
                                    <i data-name="hero-feature-icon" className="fas fa-map-marker-alt hero-feature-icon"></i>
                                </div>
                                <span data-name="hero-feature-text" className="hero-feature-text">Cobertura regional</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <a data-name="hero-scroll" href="#services" className="hero-scroll">
                    <span className="hero-scroll-text">Saiba mais</span>
                    <i className="fas fa-chevron-down"></i>
                </a>
                
                <div className="hero-shape-divider">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
        return null;
    }
}
