import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-24 md:py-32 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="aspect-[4/5] bg-[#1a1a1a] overflow-hidden"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=2069&auto=format&fit=crop"
                            alt="Usmar Ismail Hall Interior"
                            className="w-full h-full object-cover grayscale brightness-75 hover:scale-110 transition-transform duration-1000"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <span className="text-gold tracking-[0.4em] uppercase text-xs font-semibold">{t('about.tagline')}</span>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black uppercase">
                                {t('about.title')}
                            </h2>
                        </div>

                        <p className="text-text-grey leading-relaxed text-sm md:text-base max-w-xl">
                            {t('about.p1')}
                        </p>

                        <p className="text-text-grey leading-relaxed text-sm md:text-base max-w-xl">
                            {t('about.p2')}
                        </p>

                        <div className="pt-4">
                            <Link to="/about" className="inline-flex items-center gap-4 text-black font-bold uppercase tracking-[0.2em] text-sm group">
                                {t('about.more')}
                                <div className="w-12 h-[1px] bg-black transition-all duration-300 group-hover:w-20" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
