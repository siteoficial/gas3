function Services() {
    try {
        const services = [
            {
                id: 1,
                title: 'Guincho para Carros',
                description: 'Serviço de reboque para veículos de passeio com atendimento rápido e seguro.',
                icon: 'fa-car',
                image: 'https://useast2prodbrandsites.blob.core.windows.net/heliar-sfassets-prod/images/default-source/90-anos-campaign/um-carro-guinchado-por-um-caminh%C3%A3o-em-uma-estrada-ensolarada.jpg?sfvrsn=96ed792e_1',
                features: [
                    'Atendimento 24 horas',
                    'Seguro para o veículo',
                    'Profissionais treinados',
                    'Equipamentos modernos'
                ]
            },
            {
                id: 2,
                title: 'Guincho para Motos',
                description: 'Transporte especializado para motocicletas de todos os modelos e cilindradas.',
                icon: 'fa-motorcycle',
                image: 'https://viagemdemoto.com/wp-content/uploads/2018/08/Viagem-de-moto-Brasil-Argentina-Uruguai-19.jpg',
                features: [
                    'Equipamentos específicos',
                    'Cuidado redobrado',
                    'Transporte seguro',
                    'Preços acessíveis'
                ]
            },
            {
                id: 3,
                title: 'Guincho para Caminhões',
                description: 'Reboque para veículos de grande porte com equipamentos especiais para cada situação.',
                icon: 'fa-truck',
                image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                features: [
                    'Guincho pesado',
                    'Plataformas especiais',
                    'Atendimento em rodovias',
                    'Equipe especializada'
                ]
            }
        ];

        return (
            <section data-name="services" id="services" className="services section">
                <div data-name="container" className="container">
                    <h2 data-name="section-title" className="section-title">Nossos Serviços</h2>
                    <p data-name="section-subtitle" className="section-subtitle">
                        Oferecemos soluções completas para o transporte do seu veículo
                    </p>

                    <div data-name="services-grid" className="services-grid">
                        {services.map(service => (
                            <div data-name={`service-card-${service.id}`} key={service.id} className="service-card">
                                <img 
                                    data-name={`service-img-${service.id}`}
                                    src={service.image} 
                                    alt={service.title} 
                                    className="service-img"
                                    onError={(e) => {
                                        console.log(`Failed to load image for ${service.title}, using fallback`);
                                        e.target.onerror = null;
                                        e.target.src = 'https://via.placeholder.com/800x500?text=Servi%C3%A7o+de+Guincho';
                                    }}
                                />
                                <div data-name={`service-content-${service.id}`} className="service-content">
                                    <div data-name={`service-icon-${service.id}`} className="service-icon">
                                        <i className={`fas ${service.icon}`}></i>
                                        <h3 data-name={`service-title-${service.id}`} className="service-title">{service.title}</h3>
                                    </div>
                                    <p data-name={`service-description-${service.id}`} className="service-description">
                                        {service.description}
                                    </p>
                                    <ul data-name={`service-features-${service.id}`} className="service-features">
                                        {service.features.map((feature, featureIndex) => (
                                            <li data-name={`service-feature-${service.id}-${featureIndex}`} key={featureIndex} className="service-feature">
                                                <i className="fas fa-check-circle"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="service-btn-container" style={{textAlign: 'center', width: '100%'}}>
                                        <a data-name={`service-btn-${service.id}`} href="#contact" className="btn btn-primary" style={{margin: '1rem auto 0', display: 'inline-block'}}>Solicitar Serviço</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Services component error:', error);
        reportError(error);
        return null;
    }
}
