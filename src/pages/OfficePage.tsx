import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { optimizeImage } from '../lib/utils';
import OfficeSpace from '../components/OfficeSpace';
import BuildingSpecs from '../components/BuildingSpecs';
import SEO from '../components/SEO';
import CTA from '../components/CTA';

const OfficePage = () => {
    const { t } = useTranslation();

    return (
        <main className="bg-white">
            <SEO
                title={t('services.office')}
                description={t('services.office_desc')}
            />

            {/* Hero Section */}
            <section className="relative h-[60vh] w-full overflow-hidden bg-black">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <img
                        src={optimizeImage("https://images.unsplash.com/photo-1497366811353-6870744d04b2", { width: 1920, quality: 80 })}
                        alt="Office Space"
                        className="h-full w-full object-cover brightness-[0.4]"
                    />
                </motion.div>
                <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-gold tracking-[0.5em] uppercase text-sm font-semibold block mb-4"
                        >
                            Business & Growth
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-7xl font-bold text-white uppercase tracking-widest"
                        >
                            {t('services.office')}
                        </motion.h1>
                    </div>
                </div>
            </section>

            <OfficeSpace />

            {/* Benefits Section */}
            <section className="py-24 bg-white px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        {[
                            { title: "Lokasi Strategis", desc: "Berada di jantung Kuningan, akses mudah ke transportasi umum dan pusat bisnis." },
                            { title: "Flexible Size", desc: "Pilihan ruangan mulai dari 30 m² hingga satu lantai penuh (500 m²)." },
                            { title: "Professional Atmosfer", desc: "Lingkungan kerja yang prestisius berdampingan dengan pusat seni dan perfilman." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                <h3 className="text-xl font-bold uppercase tracking-widest text-black">{item.title}</h3>
                                <p className="text-text-grey text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <BuildingSpecs />
            <CTA />
        </main>
    );
};

export default OfficePage;
