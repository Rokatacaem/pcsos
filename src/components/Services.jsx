import React from 'react';
import { Monitor, Wifi, Printer, Code } from 'lucide-react';
import './Services.css';
import imgPc from '../assets/service-pc.png';
import imgWifi from '../assets/service-wifi.png';
import imgPeripherals from '../assets/service-peripherals.png';

const Services = () => {
    const services = [
        {
            img: imgPc,
            icon: <Monitor size={28} />,
            title: "Computación Personal",
            items: [
                "Diagnóstico y reparación",
                "Limpieza de virus y malware",
                "Optimización de velocidad",
                "Instalación de SSD y Memoria RAM"
            ]
        },
        {
            img: imgWifi,
            icon: <Wifi size={28} />,
            title: "Redes y WiFi",
            items: [
                "Diagnóstico de cobertura",
                "Instalación de Repetidores/Mesh",
                "Cableado de red estructurado",
                "Configuración avanzada de Routers"
            ]
        },
        {
            img: imgPeripherals,
            icon: <Printer size={28} />,
            title: "Periféricos y Smart Home",
            items: [
                "Configuración de Impresoras (Red/USB)",
                "Scanners y Multifuncionales",
                "Conexión Smart TV y Streaming",
                "Asistentes de voz y domótica básica"
            ]
        },
        {
            img: imgPc,
            icon: <Code size={28} />,
            title: "Desarrollo de Software",
            items: [
                "Sitios Web y E-commerce",
                "Aplicaciones Móviles",
                "Software a Medida",
                "Integraciones y APIs"
            ]
        }
    ];

    return (
        <section id="services" className="section services-section">
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-primary-dark)' }}>Nuestros Servicios</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-muted)' }}>
                    Resolvemos los problemas tecnológicos de tu hogar con estándares empresariales.
                </p>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-image" style={{ backgroundImage: `url(${service.img})` }}></div>
                            <div className="service-content">
                                <div className="service-icon-wrapper">
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                                <ul>
                                    {service.items.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
