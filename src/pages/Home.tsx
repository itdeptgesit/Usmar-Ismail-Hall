import Hero from '../components/Hero';
import HomeBrief from '../components/HomeBrief';
import Services from '../components/Services';
import HomeLocation from '../components/HomeLocation';
import CTA from '../components/CTA';
import SEO from '../components/SEO';
import PromoModal from '../components/PromoModal';
import HomePromo from '../components/HomePromo';

const Home = () => {
    return (
        <main>
            <PromoModal />
            <SEO
                title="PPHUI - Pusat Seni & Bisnis Strategis Kuningan"
                description="Gedung Pusat Perfilman H. Usmar Ismail. Solusi terintegrasi untuk panggung pertunjukan, ruang kantor, dan virtual office di jantung Kuningan."
            />
            <Hero />
            <HomeBrief />
            <Services />
            <HomePromo />
            <HomeLocation />
            <CTA />
        </main>
    );
};

export default Home;
