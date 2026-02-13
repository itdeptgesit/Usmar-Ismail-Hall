import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const CTA = () => {
    const { t } = useTranslation();

    return (
        <section className="py-24 md:py-40 bg-white px-6 relative overflow-hidden">
            {/* Subtle Top Border */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-black/5" />

            <div className="max-w-7xl mx-auto text-center space-y-12 relative z-10">
                <div className="space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-6xl font-bold tracking-widest text-black uppercase leading-tight max-w-4xl mx-auto"
                    >
                        {t('cta.title')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gold tracking-[0.6em] uppercase text-xs md:text-sm font-semibold"
                    >
                        {t('cta.subtitle')}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="pt-8"
                >
                    <Link to="/contact" className="btn-primary px-12">
                        {t('cta.inquire')}
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
