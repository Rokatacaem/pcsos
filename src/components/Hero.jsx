import React from 'react';
import { CheckCircle, Clock, Award } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Soporte Técnico a Domicilio con Expertos Informáticos</h1>
                <p>Soluciones profesionales para PC, WiFi y Redes en tu hogar. Seguridad corporativa, ahora en tu casa.</p>

                <button className="hero-cta" onClick={scrollToContact}>
                    Agendar Visita Técnica
                </button>

                <div className="trust-badges">
                    <div className="badge">
                        <Award size={20} />
                        <span>Ingenieros Certificados</span>
                    </div>
                    <div className="badge">
                        <Clock size={20} />
                        <span>Atención Flexible</span>
                    </div>
                    <div className="badge">
                        <CheckCircle size={20} />
                        <span>Garantía de Solución</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
