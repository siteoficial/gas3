function Testimonials() {
    try {
        const testimonials = [
            {
                id: 1,
                text: "Meu carro quebrou na estrada e o Grupo Alto da Serra me atendeu em menos de 30 minutos. Serviço de excelente qualidade e atendimento muito profissional.",
                name: "Carlos Silva",
                position: "Motorista",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                rating: 5
            },
            {
                id: 2,
                text: "Precisei de um guincho para minha moto e fiquei impressionada com o cuidado que tiveram. Recomendo fortemente o serviço do Grupo Alto da Serra.",
                name: "Marina Santos",
                position: "Motociclista",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                rating: 5
            },
            {
                id: 3,
                text: "Como transportadora, já precisei várias vezes dos serviços de guincho para caminhões e o Grupo Alto da Serra sempre nos atendeu com eficiência e rapidez.",
                name: "Roberto Oliveira",
                position: "Empresário",
                image: "https://randomuser.me/api/portraits/men/67.jpg",
                rating: 4
            }
        ];

        const renderRating = (rating) => {
            const stars = [];
            for (let i = 0; i < 5; i++) {
                stars.push(
                    <i 
                        key={i}
                        className={`fas fa-star ${i < rating ? '' : 'far'}`}
                    ></i>
                );
            }
            return stars;
        };

        return (
            <section data-name="testimonials" id="testimonials" className="testimonials section">
                <div data-name="container" className="container">
                    <h2 data-name="testimonials-title" className="section-title testimonials-title">O que dizem nossos clientes</h2>
                    <p data-name="testimonials-subtitle" className="section-subtitle testimonials-subtitle">
                        A satisfação de quem já utilizou nossos serviços
                    </p>

                    <div data-name="testimonials-grid" className="testimonials-grid">
                        {testimonials.map(testimonial => (
                            <div data-name={`testimonial-card-${testimonial.id}`} key={testimonial.id} className="testimonial-card">
                                <div data-name={`testimonial-quote-${testimonial.id}`} className="testimonial-quote">
                                    <i className="fas fa-quote-left"></i>
                                </div>
                                <div data-name={`testimonial-rating-${testimonial.id}`} className="testimonial-rating">
                                    {renderRating(testimonial.rating)}
                                </div>
                                <p data-name={`testimonial-text-${testimonial.id}`} className="testimonial-text">
                                    {testimonial.text}
                                </p>
                                <div data-name={`testimonial-author-${testimonial.id}`} className="testimonial-author">
                                    <img 
                                        data-name={`testimonial-author-img-${testimonial.id}`}
                                        src={testimonial.image} 
                                        alt={testimonial.name} 
                                        className="testimonial-author-img"
                                    />
                                    <div data-name={`testimonial-author-info-${testimonial.id}`} className="testimonial-author-info">
                                        <h4>{testimonial.name}</h4>
                                        <p>{testimonial.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Testimonials component error:', error);
        reportError(error);
        return null;
    }
}
