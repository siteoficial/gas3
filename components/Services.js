function Services() {
    try {
        const services = [
            {
                id: 1,
                title: 'Serviço de Guincho',
                description: 'Atendemos com segurança e eficiência em qualquer situação.',
                icon: 'fa fa-truck',
                image: 'images/img-guincho.webp',
                features: [
                    'Leve – Veículos de passeio e utilitários',
                    'Pesado – Caminhões e veículos de grande porte',
                    'Extra Pesado – Máquinas, ônibus e cargas especiais',
                    'Atendimento em rodovias e áreas urbanas'
                ]
            },
            {
                id: 2,
                title: 'Serviço de Táxi',
                description: 'Transporte rápido e seguro com motoristas experientes, prontos para te levar a qualquer destino.',
                icon: 'fa fa-taxi',
                image: 'images/img-taxi.webp',
                features: [
                    'Atendimento 24 horas',
                    'Carros confortáveis e climatizados',
                    'Motoristas profissionais',
                    'Serviço pontual e discreto'
                ]
            },
            {
                id: 3,
                title: 'Serviço de Munck',
                description: 'Movimentação e transporte de cargas pesadas com segurança e eficiência.',
                icon: 'fa-tools',
                image: 'images/img-munck.webp',
                features: [
                    'Guindaste acoplado para içamento seguro',
                    'Transporte de máquinas e estruturas',
                    'Atendimento industrial e comercial',
                    'Operadores qualificados'
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
                                        {service.id === 1 ? (
                                            <a data-name={`service-btn-${service.id}`} href="https://wa.me/554331271101?text=Ol%C3%A1%2C%20estou%20vindo%20do%20seu%20site%20e%20preciso%20solicitar%20um%20guincho.%20Pode%20me%20ajudar%3F" className="btn btn-primary" style={{margin: '1rem auto 0', display: 'inline-block'}} target="_blank" rel="noopener noreferrer">Solicitar este Serviço</a>
                                        ) : service.id === 2 ? (
                                            <a data-name={`service-btn-${service.id}`} href="https://wa.me/554331271101?text=Ol%C3%A1%2C%20acabei%20de%20acessar%20seu%20site%20e%20quero%20solicitar%20um%20t%C3%A1xi.%20Como%20proceder%3F" className="btn btn-primary" style={{margin: '1rem auto 0', display: 'inline-block'}} target="_blank" rel="noopener noreferrer">Solicitar este Serviço</a>
                                        ) : (
                                            <a data-name={`service-btn-${service.id}`} href="https://wa.me/554331271101?text=Ol%C3%A1%2C%20acabei%20de%20acessar%20seu%20site%20e%20quero%20solicitar%20um%20servi%C3%A7o%20de%20Munck.%20Como%20proceder%3F" className="btn btn-primary" style={{margin: '1rem auto 0', display: 'inline-block'}} target="_blank" rel="noopener noreferrer">Solicitar este Serviço</a>
                                        )}

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
