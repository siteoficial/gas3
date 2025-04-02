function Clients() {
    try {
        const clients = [
            {
                id: 1,
                name: 'Polícia Rodoviária Federal',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Logotipo_PRF.png'
            },
            {
                id: 2,
                name: 'Seguradora Porto',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Klabin.svg'
            },
            {
                id: 3,
                name: 'Bradesco Seguros',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Sicredi-logo.png'
            },
            {
                id: 4,
                name: 'SulAmérica Seguros',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Banco_Bradesco_logo_%28horizontal%29.png/1200px-Banco_Bradesco_logo_%28horizontal%29.png'
            },
            {
                id: 5,
                name: 'Liberty Seguros',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/SpaceX_logo_black.svg/1280px-SpaceX_logo_black.svg.png'
            },
            {
                id: 6,
                name: 'Mapfre Seguros',
                logo: 'https://www.teknei.com/wp-content/uploads/2021/08/Microsoft-logo.png'
            }
        ];

        return (
            <section data-name="clients" id="clients" className="clients section">
                <div data-name="container" className="container">
                    <h2 data-name="section-title" className="section-title">Nossos <span className="highlight">Parceiros</span></h2>
                    <p data-name="section-subtitle" className="section-subtitle">
                        Empresas que confiam em nossos serviços
                    </p>
                </div>
                
                <div data-name="clients-slider" className="clients-slider">
                    <div data-name="clients-track" className="clients-track">
                        {/* First set of logos */}
                        {clients.map(client => (
                            <div data-name={`client-logo-${client.id}`} key={`client-${client.id}`} className="client-logo">
                                <img 
                                    src={client.logo} 
                                    alt={client.name} 
                                    title={client.name}
                                    onError={(e) => {
                                        console.log(`Failed to load logo for ${client.name}, using fallback`);
                                        e.target.onerror = null;
                                        e.target.src = 'https://via.placeholder.com/160x70?text=Logo';
                                    }}
                                />
                            </div>
                        ))}
                        
                        {/* Duplicate logos for infinite scroll effect */}
                        {clients.map(client => (
                            <div data-name={`client-logo-${client.id}-dup`} key={`client-${client.id}-dup`} className="client-logo">
                                <img 
                                    src={client.logo} 
                                    alt={client.name} 
                                    title={client.name}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = 'https://via.placeholder.com/160x70?text=Logo';
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Clients component error:', error);
        reportError(error);
        return null;
    }
}
