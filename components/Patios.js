function Patios() {
    // Dados dos pátios parceiros
    const patios = [
        {
            id: 1,
            nome: "Matriz Central",
            endereco: "R. José Rodrigues da Silva, 425 - Parque Industrial Aníbal Curi",
            lat: -23.903570052033427,
            lng: -51.220476903268676,
            regiao: "Central"
        },
        {
            id: 2,
            nome: "Pátio Maringá",
            endereco: "Av. Colombo, 7825 - Zona 7, Maringá - PR",
            lat: -23.406635,
            lng: -51.943970,
            regiao: "Norte"
        },
        {
            id: 3,
            nome: "Pátio Londrina",
            endereco: "Av. Tiradentes, 6429 - Jardim Rosicler, Londrina - PR",
            lat: -23.276463,
            lng: -51.159487,
            regiao: "Norte"
        },
        {
            id: 4,
            nome: "Pátio Cascavel",
            endereco: "Av. Brasil, 8750 - Centro, Cascavel - PR",
            lat: -24.957036,
            lng: -53.459034,
            regiao: "Oeste"
        },
        {
            id: 5,
            nome: "Pátio Curitiba",
            endereco: "Av. Sete de Setembro, 4214 - Batel, Curitiba - PR",
            lat: -25.442945,
            lng: -49.276855,
            regiao: "Sul"
        },
        {
            id: 6,
            nome: "Pátio Ponta Grossa",
            endereco: "Av. Monteiro Lobato, 2800 - Jardim Carvalho, Ponta Grossa - PR",
            lat: -25.089025,
            lng: -50.161220,
            regiao: "Sul"
        },
        {
            id: 7,
            nome: "Pátio Foz do Iguaçu",
            endereco: "Av. República Argentina, 5500 - Vila Portes, Foz do Iguaçu - PR",
            lat: -25.548929,
            lng: -54.583893,
            regiao: "Oeste"
        }
    ];

    // Estado para armazenar o pátio selecionado e termo de pesquisa
    const [selectedPatio, setSelectedPatio] = React.useState(null);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [regiaoFiltro, setRegiaoFiltro] = React.useState('Todos');
    const mapRef = React.useRef(null);
    const markersRef = React.useRef([]);
    const mapSectionRef = React.useRef(null);

    // Obter lista de regiões únicas
    const regioes = ['Todos', ...new Set(patios.map(patio => patio.regiao))];

    // Filtrar pátios com base no termo de pesquisa e região selecionada
    const filteredPatios = patios.filter(patio => {
        // Filtro de pesquisa
        const matchesSearch = 
            patio.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
            patio.endereco.toLowerCase().includes(searchTerm.toLowerCase());
        
        // Filtro de região
        const matchesRegion = regiaoFiltro === 'Todos' || patio.regiao === regiaoFiltro;
        
        return matchesSearch && matchesRegion;
    });

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

            // Criar o mapa com zoom e centro ajustados para mostrar todos os pátios
            const map = L.map('map', {
                minZoom: 5, // Permitir zoom mais distante
                maxBoundsViscosity: 1.0 // Impedir que o usuário arraste para fora dos limites
            });
            
            // Definir os limites do mapa com base nas coordenadas dos pátios
            const latitudes = patios.map(p => p.lat);
            const longitudes = patios.map(p => p.lng);
            const minLat = Math.min(...latitudes);
            const maxLat = Math.max(...latitudes);
            const minLng = Math.min(...longitudes);
            const maxLng = Math.max(...longitudes);
            
            // Criar um limite com margem
            const bounds = L.latLngBounds(
                L.latLng(minLat - 0.5, minLng - 0.5), 
                L.latLng(maxLat + 0.5, maxLng + 0.5)
            );
            
            // Ajustar o mapa para mostrar todos os pátios
            map.fitBounds(bounds);
            map.setMaxBounds(bounds);
            
            mapRef.current = map;

            // Adicionar camada de tiles do OpenStreetMap
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            // Estilo personalizado para os marcadores
            const createCustomIcon = (patioNome, isMatriz = false) => {
                // Limitar o tamanho do nome para evitar que saia do balão
                const displayName = patioNome.length > 12 ? patioNome.substring(0, 12) + '...' : patioNome;
                
                return L.divIcon({
                    className: 'custom-map-marker',
                    html: `
                        <div class="marker-container ${isMatriz ? 'marker-matriz' : ''}">
                            <div class="marker-icon ${isMatriz ? 'marker-icon-matriz' : ''}">
                                <i class="fas fa-truck-pickup" style="color: ${isMatriz ? '#FFF111' : '#010044'}; font-size: ${isMatriz ? '20px' : '18px'};"></i>
                            </div>
                            <div class="marker-label ${isMatriz ? 'marker-label-matriz' : ''}">
                                ${displayName}
                            </div>
                        </div>
                    `,
                    iconSize: [120, 40],
                    iconAnchor: [15, 20]
                });
            };

            // Adicionar marcadores para cada pátio
            patios.forEach(patio => {
                const isMatriz = patio.id === 1; // Verificar se é a Matriz Central
                const marker = L.marker([patio.lat, patio.lng], { 
                    icon: createCustomIcon(patio.nome, isMatriz),
                    title: patio.nome
                }).addTo(map);
                
                // Adicionar evento de clique no marcador
                marker.on('click', () => {
                    setSelectedPatio(patio);
                    
                    // Centralizar o mapa no marcador clicado
                    map.setView([patio.lat, patio.lng], 14);
                });
                
                markersRef.current.push({ marker, patio });
            });

            // Inicialmente selecionar a Matriz Central
            setSelectedPatio(patios[0]);
        }

        // Limpar quando o componente for desmontado
        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []);

    // Efeito para atualizar os marcadores quando o termo de pesquisa ou região mudar
    React.useEffect(() => {
        if (!mapRef.current || markersRef.current.length === 0) return;
        
        markersRef.current.forEach(({ marker, patio }) => {
            const isVisible = 
                (searchTerm === '' || patio.nome.toLowerCase().includes(searchTerm.toLowerCase()) || 
                patio.endereco.toLowerCase().includes(searchTerm.toLowerCase())) &&
                (regiaoFiltro === 'Todos' || patio.regiao === regiaoFiltro);
                
            if (isVisible) {
                marker.setOpacity(1); // Mostrar marcador
            } else {
                marker.setOpacity(0.3); // Escurecer marcador
            }
        });
    }, [searchTerm, regiaoFiltro]);

    // Função para focar no pátio selecionado da lista
    const focusOnPatio = (patio) => {
        setSelectedPatio(patio);
        if (mapRef.current) {
            mapRef.current.setView([patio.lat, patio.lng], 14);
        }
        
        // Rolar a página para mostrar o mapa e as informações
        if (mapSectionRef.current) {
            mapSectionRef.current.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

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
                
                <div className="flex flex-col lg:flex-row gap-8" ref={mapSectionRef}>
                    {/* Mapa */}
                    <div className="w-full lg:w-2/3 bg-gray-200 rounded-lg shadow-md overflow-hidden map-container">
                        <div id="map" className="w-full h-full"></div>
                    </div>
                    
                    {/* Informações do pátio selecionado */}
                    <div className="w-full lg:w-1/3">
                        <div className="bg-white p-6 rounded-lg shadow-md h-full">
                            {selectedPatio ? (
                                <div>
                                    <h3 className="text-2xl font-bold mb-4 text-[#010044]">
                                        {selectedPatio.nome}
                                        {selectedPatio.id === 1 && (
                                            <span className="ml-2 text-sm bg-[#FFF111] text-[#010044] px-2 py-1 rounded-full">Matriz</span>
                                        )}
                                    </h3>
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
                                            {selectedPatio.id === 1 && (
                                                <>
                                                    <li>Serviços administrativos completos</li>
                                                    <li>Central de operações</li>
                                                </>
                                            )}
                                        </ul>
                                    </div>
                                    <div className="mb-4">
                                        <p className="text-gray-700 mb-1"><strong>Horário de funcionamento:</strong></p>
                                        <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                                        <p className="text-gray-600">Sábado: 8h às 12h</p>
                                    </div>
                                    <div className="text-center">
                                        <a 
                                            href={`https://www.openstreetmap.org/?mlat=${selectedPatio.lat}&mlon=${selectedPatio.lng}&zoom=16`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block px-6 py-2 bg-[#FFF111] text-[#010044] font-bold rounded-full hover:bg-[#010044] hover:text-[#FFF111] transition duration-300 mt-4 mx-auto"
                                        >
                                            <i className="fas fa-map-marker-alt mr-2"></i>
                                            Ver no OpenStreetMap
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center h-full text-center">
                                    <i className="fas fa-truck-pickup text-5xl text-[#010044] mb-4"></i>
                                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Selecione um pátio no mapa</h3>
                                    <p className="text-gray-500">Clique em um dos pontos no mapa para ver informações detalhadas sobre o pátio.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                
                {/* Lista de pátios para visualização */}
                <div className="mt-12">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-[#010044] mb-4 md:mb-0">Lista de Pátios</h3>
                    </div>
                    
                    {/* Cards para filtrar por região */}
                    <div className="mb-4 overflow-x-auto">
                        <div className="flex space-x-3 pb-2 regiao-container">
                            {regioes.map(regiao => (
                                <button
                                    key={regiao}
                                    className={`flex-shrink-0 px-4 py-2 rounded-lg font-medium transition-all duration-300 regiao-filter-card ${
                                        regiaoFiltro === regiao 
                                        ? 'bg-[#010044] text-white active' 
                                        : 'bg-white text-[#010044] border border-gray-200 hover:bg-gray-100'
                                    }`}
                                    onClick={() => setRegiaoFiltro(regiao)}
                                >
                                    <div className="flex items-center">
                                        {regiao === 'Todos' && <i className="fas fa-globe-americas mr-2"></i>}
                                        {regiao === 'Norte' && <i className="fas fa-arrow-up mr-2"></i>}
                                        {regiao === 'Sul' && <i className="fas fa-arrow-down mr-2"></i>}
                                        {regiao === 'Leste' && <i className="fas fa-arrow-right mr-2"></i>}
                                        {regiao === 'Oeste' && <i className="fas fa-arrow-left mr-2"></i>}
                                        {regiao === 'Central' && <i className="fas fa-map-marker-alt mr-2"></i>}
                                        {regiao}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    {/* Campo de pesquisa movido para baixo dos cards de filtro */}
                    <div className="mb-6 max-w-md mx-auto">
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder="Pesquisar pátio por nome ou endereço..." 
                                className="w-full px-4 py-2 pl-10 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#010044] focus:border-transparent"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i className="fas fa-search text-gray-400"></i>
                            </div>
                            {searchTerm && (
                                <button 
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                                    onClick={() => setSearchTerm('')}
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                            )}
                        </div>
                        {searchTerm && (
                            <p className="mt-1 text-sm text-gray-600 text-center">
                                Encontrados {filteredPatios.length} pátios
                            </p>
                        )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredPatios.map(patio => (
                            <div 
                                key={patio.id} 
                                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                                    selectedPatio && selectedPatio.id === patio.id 
                                    ? 'bg-[#010044] text-white' 
                                    : 'bg-white hover:bg-gray-100'
                                } ${patio.id === 1 ? 'border-2 border-[#FFF111]' : 'border border-gray-200'}`}
                                onClick={() => focusOnPatio(patio)}
                            >
                                <div className="flex items-center mb-2">
                                    <h4 className={`font-bold ${selectedPatio && selectedPatio.id === patio.id ? 'text-[#FFF111]' : 'text-[#010044]'}`}>
                                        {patio.nome}
                                    </h4>
                                    {patio.id === 1 && (
                                        <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                                            selectedPatio && selectedPatio.id === patio.id 
                                            ? 'bg-[#FFF111] text-[#010044]' 
                                            : 'bg-[#010044] text-[#FFF111]'
                                        }`}>
                                            Matriz
                                        </span>
                                    )}
                                </div>
                                <p className={selectedPatio && selectedPatio.id === patio.id ? 'text-gray-200' : 'text-gray-600'}>
                                    {patio.endereco}
                                </p>
                            </div>
                        ))}
                    </div>
                    
                    {filteredPatios.length === 0 && (
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <i className="fas fa-search text-4xl text-gray-300 mb-3"></i>
                            <p className="text-gray-500">Nenhum pátio encontrado com o termo "{searchTerm}"</p>
                            <button 
                                className="mt-3 px-4 py-2 bg-[#010044] text-white rounded-full hover:bg-opacity-90 transition"
                                onClick={() => setSearchTerm('')}
                            >
                                Limpar pesquisa
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
