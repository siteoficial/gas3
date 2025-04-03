function Header() {
    try {
        const [scrolled, setScrolled] = React.useState(false);
        const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

        React.useEffect(() => {
            const handleScroll = () => {
                if (window.scrollY > 50) {
                    setScrolled(true);
                } else {
                    setScrolled(false);
                }
            };

            window.addEventListener('scroll', handleScroll);
            
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);

        const toggleMobileMenu = () => {
            setMobileMenuOpen(!mobileMenuOpen);
        };

        // Verificar se estamos na página principal ou na página de pátios
        const isMainPage = window.location.pathname === "/" || window.location.pathname.includes("index.html");

        return (
            <header data-name="header" className={`header ${scrolled ? 'scroll-header' : ''}`}>
                <div data-name="header-container" className="container header-container">
                    <a data-name="logo" href={isMainPage ? "#" : "index.html"} className="logo">
                        <div data-name="logo-text" className="logo-text">Grupo Alto da Serra</div>
                    </a>

                    <nav data-name="nav">
                        <ul data-name="nav-menu" className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
                            <li data-name="nav-item" className="nav-item">
                                <a data-name="nav-link" href={isMainPage ? "#home" : "index.html#home"} className="nav-link">Início</a>
                            </li>
                            <li data-name="nav-item" className="nav-item">
                                <a data-name="nav-link" href={isMainPage ? "#services" : "index.html#services"} className="nav-link">Serviços</a>
                            </li>
                            <li data-name="nav-item" className="nav-item">
                                <a data-name="nav-link" href={isMainPage ? "#about" : "index.html#about"} className="nav-link">Sobre Nós</a>
                            </li>
                            <li data-name="nav-item" className="nav-item">
                                <a data-name="nav-link" href={isMainPage ? "#testimonials" : "index.html#testimonials"} className="nav-link">Depoimentos</a>
                            </li>
                            <li data-name="nav-item" className="nav-item">
                                <a data-name="nav-link" href="patios.html" className="nav-link">Pátios Parceiros</a>
                            </li>
                            <li data-name="nav-item" className="nav-item">
                                <a data-name="nav-link" href={isMainPage ? "#contact" : "index.html#contact"} className="nav-link">Contato</a>
                            </li>
                        </ul>
                    </nav>

                    <div data-name="header-cta" className="header-cta">
                        <a data-name="header-phone" href="tel:+551140028922" className="header-phone">
                            <i className="fas fa-phone-alt"></i>
                            <span>(11) 4002-8922</span>
                        </a>
                        <button data-name="mobile-menu-button" className="mobile-menu-button" onClick={toggleMobileMenu}>
                            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                        </button>
                    </div>
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}
