import About from './About';
import Career from './Career';
import Certificates from './Certificates';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import QualityAssurance from './QualityAssurance';
import ScrollReveal from './ScrollReveal';
import Testimonial from './Testimonial';
import WebDeveloper from './WebDeveloper';
import Work from './Work';
import { LanguageProvider } from '@/i18n/LanguageProvider';

export default function LandingPage() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        <WebDeveloper />
        <QualityAssurance />
        <Career />
        <Certificates />
        <Testimonial />
      </main>
      <Footer />
      <ScrollReveal />
    </LanguageProvider>
  );
}
