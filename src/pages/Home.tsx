import Hero from '../components/Hero';
import About from '../components/About';
import Facilities from '../components/Facilities';
import CTA from '../components/CTA';
import SEO from '../components/SEO';

const Home = () => {
    return (
        <main>
            <SEO
                title="Home"
                description="The premier theater and performance venue in Jakarta. Explore world-class facilities for cinema, concerts, and corporate events."
            />
            <Hero />
            <div className="bg-white">
                <About />
            </div>
            <Facilities />
            <CTA />
        </main>
    );
};

export default Home;
