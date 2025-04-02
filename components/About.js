function About() {
    try {
        return (
            <section data-name="about" id="about" className="about section">
                <div data-name="container" className="container">
                    <div data-name="about-container" className="about-container">
                        <div data-name="about-image" className="about-image">
                            <img 
                                data-name="about-img"
                                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEju3PGa-lQgJE-wdSTZ8WR1GK-xmkPReT6HTPGsVAo5ZIR4fTZMqWpfucnsugSpXtvv0omjSjRcl4Mx6qZeVv8AlJ9QQ3xoZQd5O8yO-DfeLTIo628oKCrTSZEBMAj9m9u4h6WDd32upUBgvy9nFtuex74uVO2-7d4kk00huOR_DFtqeSRf3jBqUFcJxiLf/s4160/43713c70-a926-430a-8170-a02284b609e3.jpeg" 
                                alt="Grupo Alto da Serra - Equipe de Guincho"
                            />
                        </div>
                        <div data-name="about-content" className="about-content">
                            <h2 data-name="about-title" className="about-title">Sobre o Grupo Alto da Serra</h2>
                            <h3 data-name="about-subtitle" className="about-subtitle">Mais de 15 anos de experiência em guincho e reboque</h3>
                            <p data-name="about-text" className="about-text">
                                O Grupo Alto da Serra nasceu da necessidade de oferecer um serviço de qualidade e confiança para o transporte de veículos. Desde 2008, estamos no mercado com o compromisso de atender nossos clientes com excelência e agilidade.
                            </p>
                            <p data-name="about-text" className="about-text">
                                Nossa equipe é formada por profissionais treinados e capacitados para lidar com qualquer situação, garantindo a segurança do seu veículo durante todo o processo de transporte. Contamos com uma frota moderna e equipamentos de última geração.
                            </p>
                            <div data-name="about-features" className="about-features">
                                <div data-name="about-feature" className="about-feature">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Profissionais qualificados</span>
                                </div>
                                <div data-name="about-feature" className="about-feature">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Frota moderna</span>
                                </div>
                                <div data-name="about-feature" className="about-feature">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Atendimento personalizado</span>
                                </div>
                                <div data-name="about-feature" className="about-feature">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Cobertura regional</span>
                                </div>
                                <div data-name="about-feature" className="about-feature">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Seguro para todos os veículos</span>
                                </div>
                                <div data-name="about-feature" className="about-feature">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Disponibilidade 24 horas</span>
                                </div>
                            </div>
                            <div data-name="about-cta" className="about-cta">
                                <a data-name="about-btn" href="#contact" className="btn btn-accent" style={{margin: '0 auto', display: 'block', textAlign: 'center', maxWidth: '250px'}}>Entre em Contato</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('About component error:', error);
        reportError(error);
        return null;
    }
}
