import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { optimizeImage } from '../lib/utils';
import Facilities from '../components/Facilities';
import SEO from '../components/SEO';
import Gallery from '../components/Gallery';
import CTA from '../components/CTA';

const HallPage = () => {
    const { t } = useTranslation();

    return (
        <main className="bg-white">
            <SEO
                title={t('services.hall')}
                description={t('services.hall_desc')}
            />

            {/* Hero Section */}
            <section className="relative h-[70vh] w-full overflow-hidden bg-black">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <img
                        src={optimizeImage("https://usmarismailhall.com/wp-content/uploads/2024/04/cropped-Theater-2-1-scaled-1.jpg", { width: 1920, quality: 80 })}
                        alt="Usmar Ismail Hall"
                        className="h-full w-full object-cover brightness-50"
                    />
                </motion.div>
                <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-gold tracking-[0.5em] uppercase text-sm font-semibold block mb-4"
                        >
                            Venue & Performance
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-7xl font-bold text-white uppercase tracking-widest"
                        >
                            {t('services.hall')}
                        </motion.h1>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold uppercase tracking-wider mb-8 text-black">The Masterpiece of Jakarta</h2>
                        <p className="text-text-grey leading-relaxed mb-6">
                            {t('about.p1')}
                        </p>
                        <p className="text-text-grey leading-relaxed">
                            {t('about.p2')}
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="aspect-video bg-soft-grey overflow-hidden border border-black/5"
                    >
                        <img
                            src="/image/UIH1-300x185.jpeg"
                            alt="Usmar Ismail Hall"
                            className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
                        />
                    </motion.div>
                </div>
            </section>

            <Facilities />
            <Gallery />
            <CTA />
        </main>
    );
};

export default HallPage;
