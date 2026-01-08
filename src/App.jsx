import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import HowItWorks from './components/HowItWorks';
import ContactForm from './components/ContactForm';
import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <main>
        <Services />
        <WhyUs />
        <HowItWorks />
        <ContactForm />
      </main>
      <footer style={{ backgroundColor: 'var(--color-primary-dark)', color: 'white', padding: '2rem', textAlign: 'center' }}>
        <p>&copy; {new Date().getFullYear()} PCSOS.cl - Soporte Técnico Profesional</p>
        <p style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '0.5rem' }}>Contacto: rokataca@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;
