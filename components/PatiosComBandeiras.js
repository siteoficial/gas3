function Patios() {
    // Dados dos pátios parceiros
    const patios = [
        {
            id: 1,
            nome: "Pátio Central",
            endereco: "Av. Principal, 123 - Centro",
            lat: -23.550520,
            lng: -46.633308
        },
        {
            id: 2,
            nome: "Pátio Norte",
            endereco: "Rua das Flores, 456 - Zona Norte",
            lat: -23.520520,
            lng: -46.613308
        },
        {
            id: 3,
            nome: "Pátio Sul",
            endereco: "Av. das Palmeiras, 789 - Zona Sul",
            lat: -23.580520,
            lng: -46.653308
        },
        {
            id: 4,
            nome: "Pátio Leste",
            endereco: "Rua dos Ipês, 321 - Zona Leste",
            lat: -23.540520,
            lng: -46.593308
        },
        {
            id: 5,
            nome: "Pátio Oeste",
            endereco: "Av. dos Pinheiros, 654 - Zona Oeste",
            lat: -23.560520,
            lng: -46.673308
        }
    ];

    // Estado para armazenar o pátio selecionado
    const [selectedPatio, setSelectedPatio] = React.useState(null);
    const mapRef = React.useRef(null);
    const markersRef = React.useRef([]);

    // Inicializar o mapa quando o componente for montado
    React.useEffect(() => {
        // Adicionar os links do Leaflet ao documento
        if (!document.getElementById('leaflet-css')) {
            const leafletCSS = document.createElement('link');
            leafletCSS.id = 'leaflet-css';
            leafletCSS.rel = 'stylesheet';
            leafletCSS.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
            leafletCSS.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
            leafletCSS.crossOrigin = '';
            document.head.appendChild(leafletCSS);
        }

        if (!document.getElementById('leaflet-js')) {
            const leafletScript = document.createElement('script');
            leafletScript.id = 'leaflet-js';
            leafletScript.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
            leafletScript.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
            leafletScript.crossOrigin = '';
            document.head.appendChild(leafletScript);

            leafletScript.onload = initMap;
        } else {
            initMap();
        }

        function initMap() {
            // Verificar se o mapa já foi inicializado
            if (mapRef.current) return;
            
            // Verificar se o elemento do mapa existe
            const mapContainer = document.getElementById('map');
            if (!mapContainer) return;

            // Verificar se o Leaflet está carregado
            if (!window.L) {
                setTimeout(initMap, 100);
                return;
            }

            // Criar o mapa
            const map = L.map('map').setView([-23.550520, -46.633308], 11);
            mapRef.current = map;

            // Adicionar camada de tiles do OpenStreetMap
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            // Estilo personalizado para os marcadores
            const createCustomIcon = (patioNome) => {
                return L.divIcon({
                    className: 'custom-map-marker',
                    html: `
                        <div class="marker-container">
                            <div class="marker-icon">
                                <i class="fas fa-flag" style="color: #010044; font-size: 16px;"></i>
                            </div>
                            <div class="marker-label">
                                ${patioNome}
                            </div>
                        </div>
                    `,
                    iconSize: [120, 40],
                    iconAnchor: [15, 20]
                });
            };

            // Adicionar marcadores para cada pátio
            patios.forEach(patio => {
                const marker = L.marker([patio.lat, patio.lng], { 
                    icon: createCustomIcon(patio.nome),
                    title: patio.nome
                }).addTo(map);
                
                // Adicionar evento de clique no marcador
                marker.on('click', () => {
                    setSelectedPatio(patio);
                    
                    // Centralizar o mapa no marcador clicado
                    map.setView([patio.lat, patio.lng], 14);
                });
                
                markersRef.current.push(marker);
            });
        }

        // Limpar quando o componente for desmontado
        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []);

    return (
        <section id="patios" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#010044]">Nossos Pátios Parceiros</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Contamos com uma rede de pátios parceiros estrategicamente localizados para melhor atender você. 
                        Clique nos pontos do mapa para ver detalhes de cada local.
                    </p>
                </div>
                
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Mapa */}
                    <div className="w-full lg:w-2/3 h-[500px] bg-gray-200 rounded-lg shadow-md overflow-hidden">
                        <div id="map" className="w-full h-full"></div>
                    </div>
                    
                    {/* Informações do pátio selecionado */}
                    <div className="w-full lg:w-1/3">
                        <div className="bg-white p-6 rounded-lg shadow-md h-full">
                            {selectedPatio ? (
                                <div>
                                    <h3 className="text-2xl font-bold mb-4 text-[#010044]">{selectedPatio.nome}</h3>
                                    <div className="mb-4">
                                        <p className="text-gray-700 mb-1"><strong>Endereço:</strong></p>
                                        <p className="text-gray-600">{selectedPatio.endereco}</p>
                                    </div>
                                    <div className="mb-4">
                                        <p className="text-gray-700 mb-1"><strong>Serviços:</strong></p>
                                        <ul className="list-disc pl-5 text-gray-600">
                                            <li>Guarda de veículos</li>
                                            <li>Liberação de veículos</li>
                                            <li>Atendimento administrativo</li>
                                        </ul>
                                    </div>
                                    <div className="mb-4">
                                        <p className="text-gray-700 mb-1"><strong>Horário de funcionamento:</strong></p>
                                        <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                                        <p className="text-gray-600">Sábado: 8h às 12h</p>
                                    </div>
                                    <a 
                                        href={`https://www.openstreetmap.org/?mlat=${selectedPatio.lat}&mlon=${selectedPatio.lng}&zoom=16`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-6 py-2 bg-[#FFF111] text-[#010044] font-bold rounded-full hover:bg-[#010044] hover:text-[#FFF111] transition duration-300 mt-4"
                                    >
                                        <i className="fas fa-map-marker-alt mr-2"></i>
                                        Ver no OpenStreetMap
                                    </a>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center h-full text-center">
                                    <i className="fas fa-flag text-5xl text-[#010044] mb-4"></i>
                                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Selecione um pátio no mapa</h3>
                                    <p className="text-gray-500">Clique em um dos pontos no mapa para ver informações detalhadas sobre o pátio.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                
                {/* Lista de pátios para visualização em dispositivos móveis */}
                <div className="mt-12 lg:hidden">
                    <h3 className="text-xl font-bold mb-4 text-[#010044]">Lista de Pátios</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {patios.map(patio => (
                            <div 
                                key={patio.id} 
                                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                                    selectedPatio && selectedPatio.id === patio.id 
                                    ? 'bg-[#010044] text-white' 
                                    : 'bg-white hover:bg-gray-100'
                                }`}
                                onClick={() => {
                                    setSelectedPatio(patio);
                                    if (mapRef.current) {
                                        mapRef.current.setView([patio.lat, patio.lng], 14);
                                    }
                                }}
                            >
                                <h4 className={`font-bold ${selectedPatio && selectedPatio.id === patio.id ? 'text-[#FFF111]' : 'text-[#010044]'}`}>
                                    {patio.nome}
                                </h4>
                                <p className={selectedPatio && selectedPatio.id === patio.id ? 'text-gray-200' : 'text-gray-600'}>
                                    {patio.endereco}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
