function Header() {
    try {
        const [scrolled, setScrolled] = React.useState(false);
        const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
        const [activeSection, setActiveSection] = React.useState('home');

        // Verificar se estamos na página principal ou na página de pátios
        const isMainPage = window.location.pathname === "/" || window.location.pathname.includes("index.html") || window.location.pathname === "";
        
        React.useEffect(() => {
            // If we're on the patios page, set activeSection to 'patios'
            if (!isMainPage && window.location.pathname.includes("patios.html")) {
                setActiveSection('patios');
            } else if (isMainPage) {
                // Default to 'home' when on the main page
                if (!window.location.hash) {
                    setActiveSection('home');
                }
            }
            
            const handleScroll = () => {
                if (window.scrollY > 50) {
                    setScrolled(true);
                } else {
                    setScrolled(false);
                }
                
                // Only track sections on the main page
                if (isMainPage) {
                    // Determine which section is currently in view
                    const sections = ['home', 'services', 'about', 'testimonials', 'contact'];
                    const scrollPosition = window.scrollY + 100; // Offset to trigger slightly before reaching the section
                    
                    for (const section of sections) {
                        const element = document.getElementById(section);
                        if (element) {
                            const offsetTop = element.offsetTop;
                            const offsetHeight = element.offsetHeight;
                            
                            if (
                                scrollPosition >= offsetTop && 
                                scrollPosition < offsetTop + offsetHeight
                            ) {
                                setActiveSection(section);
                                break;
                            }
                        }
                    }
                }
            };

            // Check if there's a hash in the URL when the page loads
            if (isMainPage && window.location.hash) {
                const targetSection = window.location.hash.substring(1); // Remove the # character
                setTimeout(() => {
                    const element = document.getElementById(targetSection);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                        setActiveSection(targetSection);
                    }
                }, 100);
            }

            window.addEventListener('scroll', handleScroll);
            
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, [isMainPage]);

        const toggleMobileMenu = () => {
            setMobileMenuOpen(!mobileMenuOpen);
        };

        // Handle navigation link clicks
        const handleNavLinkClick = (e, sectionId) => {
            // Only apply special handling when on the main page
            if (isMainPage) {
                e.preventDefault();
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    setActiveSection(sectionId);
                    setMobileMenuOpen(false); // Close mobile menu if open
                    
                    // Update URL hash without page jump
                    window.history.pushState(null, null, `#${sectionId}`);
                }
            }
        };

        return (
            <header data-name="header" className={`header ${scrolled ? 'scroll-header' : ''}`}>
                <div data-name="header-container" className="container header-container">
                    <a data-name="logo" href={isMainPage ? "#" : "index.html"} className="logo">
                        <div data-name="logo-text" className="logo-text">Grupo Alto da Serra</div>
                    </a>

                    <nav data-name="nav">
                        <ul data-name="nav-menu" className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
                            <li data-name="nav-item" className="nav-item">
                                <a 
                                    data-name="nav-link" 
                                    href={isMainPage ? "#home" : "index.html#home"} 
                                    className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                                    onClick={(e) => isMainPage && handleNavLinkClick(e, 'home')}
                                >
                                    Início
                                </a>
                            </li>
                            <li data-name="nav-item" className="nav-item">
                                <a 
                                    data-name="nav-link" 
                                    href={isMainPage ? "#services" : "index.html#services"} 
                                    className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
                                    onClick={(e) => isMainPage && handleNavLinkClick(e, 'services')}
                                >
                                    Serviços
                                </a>
                            </li>
                            <li data-name="nav-item" className="nav-item">
                                <a 
                                    data-name="nav-link" 
                                    href={isMainPage ? "#about" : "index.html#about"} 
                                    className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                                    onClick={(e) => isMainPage && handleNavLinkClick(e, 'about')}
                                >
                                    Sobre Nós
                                </a>
                            </li>
                            <li data-name="nav-item" className="nav-item">
                                <a 
                                    data-name="nav-link" 
                                    href={isMainPage ? "#testimonials" : "index.html#testimonials"} 
                                    className={`nav-link ${activeSection === 'testimonials' ? 'active' : ''}`}
                                    onClick={(e) => isMainPage && handleNavLinkClick(e, 'testimonials')}
                                >
                                    Depoimentos
                                </a>
                            </li>
                            <li data-name="nav-item" className="nav-item">
                                <a 
                                    data-name="nav-link" 
                                    href="patios.html" 
                                    className={`nav-link ${activeSection === 'patios' ? 'active' : ''}`}
                                >
                                    Pátios Parceiros
                                </a>
                            </li>
                            <li data-name="nav-item" className="nav-item">
                                <a 
                                    data-name="nav-link" 
                                    href={isMainPage ? "#contact" : "index.html#contact"} 
                                    className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                                    onClick={(e) => isMainPage && handleNavLinkClick(e, 'contact')}
                                >
                                    Contato
                                </a>
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
