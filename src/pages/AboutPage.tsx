import AboutHero from '../components/AboutHero';
import About from '../components/About';
import Facilities from '../components/Facilities';
import OfficeSpace from '../components/OfficeSpace';
import VirtualOffice from '../components/VirtualOffice';
import BuildingSpecs from '../components/BuildingSpecs';
import SEO from '../components/SEO';

const AboutPage = () => {
    return (
        <main className="bg-white">
            <SEO
                title="About Us"
                description="Discover the heritage of Usmar Ismail Hall. Learn about our integrated theater, world-class facilities, and premium office spaces."
            />
            <AboutHero />
            <About />
            <div id="facilities">
                <Facilities />
            </div>
            <div id="office">
                <OfficeSpace />
                <VirtualOffice />
            </div>
            <BuildingSpecs />
        </main>
    );
};

export default AboutPage;
