import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        issueType: 'pc',
        availability: [],
        message: '',
        captchaAnswer: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [captcha, setCaptcha] = useState({ a: 0, b: 0 });
    const [captchaError, setCaptchaError] = useState(false);

    // Initialize captcha on mount
    React.useEffect(() => {
        setCaptcha({
            a: Math.floor(Math.random() * 10),
            b: Math.floor(Math.random() * 10)
        });
    }, []);

    const availabilityOptions = [
        { value: 'week_night', label: 'Lunes a Viernes (20:00 - 22:00 hrs)' },
        { value: 'weekend_all', label: 'Sábado y Domingo (09:00 - 20:00 hrs)' }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (name === 'captchaAnswer') setCaptchaError(false);
    };

    const handleAvailabilityChange = (e) => {
        const { value, checked } = e.target;
        setFormData(prev => {
            if (checked) {
                return { ...prev, availability: [...prev.availability, value] };
            } else {
                return { ...prev, availability: prev.availability.filter(item => item !== value) };
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Verify Captcha
        const expectedSum = captcha.a + captcha.b;
        if (parseInt(formData.captchaAnswer) !== expectedSum) {
            setCaptchaError(true);
            return;
        }

        // Recipients
        const recipients = [
            'rokataca@hotmail.com',
            'oscarandres.v.q@gmail.com'
        ];
        const mailToAddress = recipients.join(',');

        // Construct email body
        const availabilityStr = formData.availability.map(v => {
            if (v === 'week_night') return 'Lu-Vi (20:00-22:00)';
            if (v === 'weekend_all') return 'Sab-Dom (09:00-20:00)';
            return v;
        }).join(', ');

        const subject = `Solicitud PCSOS: ${formData.issueType.toUpperCase()} - ${formData.name}`;
        const body = `
Nombre: ${formData.name}
Teléfono: ${formData.phone}
Email: ${formData.email}
Problema: ${formData.issueType}
Disponibilidad: ${availabilityStr}

Mensaje Adicional:
${formData.message}
    `;

        // Open mail client
        window.location.href = `mailto:${mailToAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        console.log('Opening mail client with data:', formData);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <section id="contact" className="section contact-section">
                <div className="container contact-container">
                    <div className="success-message">
                        <h3>¡Solicitud Recibida!</h3>
                        <p>Gracias, un ingeniero analizará tu caso y te contactará a la brevedad.</p>
                        <button className="cta-button-small" style={{ marginTop: '1rem' }} onClick={() => {
                            setSubmitted(false);
                            setFormData(prev => ({ ...prev, captchaAnswer: '' }));
                            setCaptcha({
                                a: Math.floor(Math.random() * 10),
                                b: Math.floor(Math.random() * 10)
                            });
                        }}>Enviar otra solicitud</button>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section id="contact" className="section contact-section">
            <div className="container contact-container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center', color: 'var(--color-primary-dark)' }}>Agenda tu Visita</h2>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nombre Completo</label>
                        <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange} placeholder="Ej: Juan Pérez" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Teléfono / WhatsApp</label>
                        <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleInputChange} placeholder="+56 9 1234 5678" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="juan@ejemplo.com" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="issueType">Tipo de Problema</label>
                        <select id="issueType" name="issueType" value={formData.issueType} onChange={handleInputChange}>
                            <option value="pc">Computador (Lento, Virus, Fallas)</option>
                            <option value="wifi">Internet / WiFi (Mala señal, Configuración)</option>
                            <option value="printer">Impresora / Periféricos</option>
                            <option value="other">Otro</option>
                        </select>
                    </div>

                    {formData.issueType === 'other' && (
                        <div className="form-group">
                            <label htmlFor="message">Cuéntanos qué necesitas</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Describe brevemente tu problema..."
                                required
                            />
                        </div>
                    )}

                    <div className="form-group">
                        <label>Disponibilidad Horaria (Selecciona todas las que sirvan)</label>
                        <div className="availability-options">
                            {availabilityOptions.map(option => (
                                <label key={option.value} className="availability-checkbox">
                                    <input
                                        type="checkbox"
                                        value={option.value}
                                        checked={formData.availability.includes(option.value)}
                                        onChange={handleAvailabilityChange}
                                    />
                                    <span>{option.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="form-group captcha-group">
                        <label htmlFor="captchaAnswer">Control de Seguridad: ¿Cuánto es {captcha.a} + {captcha.b}?</label>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <input
                                type="number"
                                id="captchaAnswer"
                                name="captchaAnswer"
                                required
                                value={formData.captchaAnswer}
                                onChange={handleInputChange}
                                placeholder="?"
                                style={{
                                    width: '80px',
                                    textAlign: 'center',
                                    borderColor: captchaError ? 'red' : undefined
                                }}
                            />
                            {captchaError && <span style={{ color: 'red', fontSize: '0.9rem' }}>Incorrecto, intenta de nuevo.</span>}
                        </div>
                    </div>

                    <button type="submit" className="submit-btn">Solicitar Visita</button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
