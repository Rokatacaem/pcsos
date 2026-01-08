import React, { useState } from 'react';
import { ShieldCheck, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false); // Close menu on click
        }
    };

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <a href="#" className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <ShieldCheck size={28} />
                    PCSOS.cl
                </a>

                <button className="menu-toggle" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li>
                        <button className="nav-link" onClick={() => scrollToSection('services')}>Servicios</button>
                    </li>
                    <li>
                        <button className="nav-link" onClick={() => scrollToSection('why-us')}>Por Qué Nosotros</button>
                    </li>
                    <li>
                        <button className="nav-link" onClick={() => scrollToSection('how-it-works')}>Cómo Funciona</button>
                    </li>
                    <li>
                        <button className="cta-button-small" onClick={() => scrollToSection('contact')}>Agendar Visita</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
