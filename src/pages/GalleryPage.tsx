import Gallery from '../components/Gallery';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const GalleryPage = () => {
    const { t } = useTranslation();

    return (
        <main className="bg-white">
            <SEO
                title={t('nav.gallery')}
                description="A visual journey through the heritage and modern performances at Usmar Ismail Hall. Captured moments of artistic excellence."
            />
            <div className="pt-32 pb-16 bg-black text-center border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <span className="text-gold tracking-[0.5em] uppercase text-[10px] font-bold mb-4 block">Usmar Ismail Hall</span>
                    <h1 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-widest">{t('nav.gallery')}</h1>
                </div>
            </div>
            <Gallery />
        </main>
    );
};

export default GalleryPage;
