function FloatingButtons() {
    try {
        // State to track if we should show the back to top button
        const [showTopButton, setShowTopButton] = React.useState(false);
        
        // Function to scroll to top
        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };
        
        // Add scroll event listener to show/hide the button
        React.useEffect(() => {
            const handleScroll = () => {
                // Show button when scrolled down 300px
                if (window.scrollY > 300) {
                    setShowTopButton(true);
                } else {
                    setShowTopButton(false);
                }
            };
            
            // Add event listener
            window.addEventListener('scroll', handleScroll);
            
            // Clean up
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);
        
        return (
            <div className="floating-buttons">
                {/* Back to Top Button - Only shown when scrolled down */}
                {showTopButton && (
                    <button 
                        className="floating-btn top-btn" 
                        onClick={scrollToTop}
                        aria-label="Voltar ao topo"
                    >
                        <i className="fas fa-chevron-up"></i>
                    </button>
                )}
                
                {/* WhatsApp Button with Chat Bubble */}
                <div className="whatsapp-container">
                    <div className="chat-bubble">Precisa de ajuda?</div>
                    <a 
                        href="https://wa.me/554331271101?text=%22Ol%C3%A1%2C%20conheci%20a%20empresa%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20oferecidos.%20Poderia%20me%20ajudar%3F" 
                        className="floating-btn whatsapp-btn" 
                        aria-label="Contato via WhatsApp"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </div>
            </div>
        );
    } catch (error) {
        console.error('FloatingButtons component error:', error);
        reportError(error);
        return null;
    }
}
