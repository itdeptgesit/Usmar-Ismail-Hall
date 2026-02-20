import AboutHero from '../components/AboutHero';
import About from '../components/About';
import BuildingSpecs from '../components/BuildingSpecs';
import Services from '../components/Services';
import SEO from '../components/SEO';

const AboutPage = () => {
    return (
        <main className="bg-white">
            <SEO
                title="Tentang Kami - PPHUI"
                description="Gedung Pusat Perfilman H. Usmar Ismail adalah gedung perkantoran Grade C strategis di Kuningan, Jakarta Selatan."
            />
            <AboutHero />
            <About />
            <BuildingSpecs />
            <div className="pb-24">
                <Services />
            </div>
        </main>
    );
};

export default AboutPage;
