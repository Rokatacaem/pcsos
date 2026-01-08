import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
    const steps = [
        {
            number: "01",
            title: "Solicitud",
            description: "Llenas el formulario indicando tu problema y tu disponibilidad horaria."
        },
        {
            number: "02",
            title: "Evaluación",
            description: "Un ingeniero revisa tu caso y te contacta para confirmar la visita y el presupuesto."
        },
        {
            number: "03",
            title: "Solución",
            description: "Vamos a tu domicilio y resolvemos el problema. Garantizamos la solución."
        }
    ];

    return (
        <section id="how-it-works" className="section how-section">
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-primary-dark)' }}>Cómo Funciona</h2>

                <div className="steps-container">
                    {steps.map((step, index) => (
                        <div className="step-card" key={index}>
                            <span className="step-number">{step.number}</span>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
