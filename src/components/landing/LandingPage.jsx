import About from './About';
import Career from './Career';
import Certificates from './Certificates';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import QualityAssurance from './QualityAssurance';
import ScrollReveal from './ScrollReveal';
import WebDeveloper from './WebDeveloper';
import Work from './Work';

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        <WebDeveloper />
        <QualityAssurance />
        <Career />
        <Certificates />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
