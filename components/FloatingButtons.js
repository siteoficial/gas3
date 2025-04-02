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
                
                {/* WhatsApp Button */}
                <a 
                    href="https://wa.me/5511999998888" 
                    className="floating-btn whatsapp-btn" 
                    aria-label="Contato via WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-whatsapp"></i>
                </a>
            </div>
        );
    } catch (error) {
        console.error('FloatingButtons component error:', error);
        reportError(error);
        return null;
    }
}
