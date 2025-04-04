function About() {
    try {
        // Estado para controlar a visibilidade do modal
        const [modalOpen, setModalOpen] = React.useState(false);
        
        // Função para abrir o modal
        const openModal = () => {
            setModalOpen(true);
            document.body.style.overflow = 'hidden'; // Impede rolagem quando o modal está aberto
        };
        
        // Função para fechar o modal
        const closeModal = () => {
            setModalOpen(false);
            document.body.style.overflow = ''; // Restaura a rolagem
        };
        
        // Função para fechar o modal quando clicar fora da imagem
        const handleOverlayClick = (e) => {
            if (e.target.classList.contains('image-modal-overlay')) {
                closeModal();
            }
        };

        return (
            <section data-name="about" id="about" className="about section">
                <div data-name="container" className="container">
                    <div data-name="about-container" className="about-container">
                        <div data-name="about-image" className="about-image">
                            <img 
                                data-name="about-img"
                                src="images/img-sobrenos.webp" 
                                alt="Grupo Alto da Serra - Equipe de Guincho"
                                onClick={openModal}
                                title="Clique para ampliar"
                            />
                        </div>
                        <div data-name="about-content" className="about-content">
                            <h2 data-name="about-title" className="about-title">Sobre o Grupo Alto da Serra</h2>
                            <h3 data-name="about-subtitle" className="about-subtitle">Mais de 20 anos realizando sonhos com excelência</h3>
                            <p data-name="about-text" className="about-text">
                            O Grupo Alto da Serra foi fundado em 2004 com o compromisso de oferecer serviços de alta qualidade e atendimento humanizado. Nosso foco é superar expectativas, proporcionando confiança, bem-estar e soluções completas para nossos clientes.
                            </p>
                            <p data-name="about-text" className="about-text">
                            Com dedicação e aprimoramento constante, buscamos ser referência no mercado, agregando valor e construindo relações sólidas. Acreditamos que o sucesso vem da credibilidade, do compromisso e da excelência em cada projeto que realizamos.
                            </p>
                            <div data-name="about-features" className="about-features">
                                <div data-name="about-feature" className="about-feature">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Profissionais qualificados</span>
                                </div>
                                <div data-name="about-feature" className="about-feature">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Atendimento 24 horas</span>
                                </div>
                                <div data-name="about-feature" className="about-feature">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Experiência no mercado</span>
                                </div>
                                <div data-name="about-feature" className="about-feature">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Cobertura regional</span>
                                </div>
                                <div data-name="about-feature" className="about-feature">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Agilidade no atendimento</span>
                                </div>
                                <div data-name="about-feature" className="about-feature">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Rapidez e eficiência</span>
                                </div>
                            </div>
                            <div data-name="about-cta" className="about-cta">
                                <a data-name="about-btn" href="#contact" className="btn btn-accent" style={{margin: '0 auto', display: 'block', textAlign: 'center', maxWidth: '250px'}}>Entre em Contato</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Modal para visualização ampliada da imagem */}
                <div 
                    className={`image-modal-overlay ${modalOpen ? 'active' : ''}`}
                    onClick={handleOverlayClick}
                >
                    <div className="image-modal-content">
                        <button className="image-modal-close" onClick={closeModal}>
                            <i className="fas fa-times"></i>
                        </button>
                        <img 
                            src="images/img-sobrenos.webp" 
                            alt="Grupo Alto da Serra - Equipe de Guincho (Ampliada)"
                        />
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
