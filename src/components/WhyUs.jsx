import React from 'react';
import { Briefcase, Shield, Sliders } from 'lucide-react';
import './WhyUs.css';

const WhyUs = () => {
    return (
        <section id="why-us" className="section why-us-section">
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>¿Por Qué Elegir PCSOS?</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: '#aaa' }}>
                    No somos el típico "técnico de la esquina". Somos ingenieros que aplican rigor profesional a tu hogar.
                </p>

                <div className="features-grid">
                    <div className="feature-item">
                        <Briefcase size={40} className="feature-icon" />
                        <h3>Expertos Reales</h3>
                        <p>
                            Nuestro equipo está compuesto por profesionales activos en grandes empresas tecnológicas. No aficionados.
                        </p>
                    </div>

                    <div className="feature-item">
                        <Shield size={40} className="feature-icon" />
                        <h3>Seguridad y Confianza</h3>
                        <p>
                            Tus datos y equipos son tratados con protocolos de seguridad corporativa. Transparencia total.
                        </p>
                    </div>

                    <div className="feature-item">
                        <Sliders size={40} className="feature-icon" />
                        <h3>Calidad sobre Cantidad</h3>
                        <p>
                            Limitamos nuestra agenda para garantizar diagnósticos precisos y soluciones definitivas, no parches rápidos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
