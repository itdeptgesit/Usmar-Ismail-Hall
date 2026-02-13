import Contact from '../components/Contact';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const ContactPage = () => {
    const { t } = useTranslation();

    return (
        <main className="bg-white">
            <SEO
                title={t('nav.contact')}
                description="Get in touch with us for booking inquiries, venue rentals, and information about our facilities. We are here to help."
            />
            <div className="pt-32 pb-16 bg-black text-center border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <span className="text-gold tracking-[0.5em] uppercase text-[10px] font-bold mb-4 block">Usmar Ismail Hall</span>
                    <h1 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-widest">{t('nav.contact')}</h1>
                </div>
            </div>
            <Contact />
        </main>
    );
};

export default ContactPage;
