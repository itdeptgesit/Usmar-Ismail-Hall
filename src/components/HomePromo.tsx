import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar } from 'lucide-react';

const HomePromo = () => {
    const { t } = useTranslation();

    return (
        <section className="py-24 bg-soft-grey overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white shadow-2xl overflow-hidden relative group"
                >
                    <div className="flex flex-col lg:flex-row items-stretch">
                        {/* Image side */}
                        <div className="lg:w-1/2 relative overflow-hidden aspect-video lg:aspect-auto">
                            <img
                                src="https://usmarismailhall.com/wp-content/uploads/2026/02/UIH-promo-FEB-26.png"
                                alt="Special Promotion"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                        </div>

                        {/* Content side */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center space-y-8 bg-white"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-gold">
                                    <Calendar size={16} />
                                    <span className="text-[10px] uppercase font-bold tracking-[0.4em]">Active Offers</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-black uppercase tracking-widest leading-none">
                                    {t('promotions.title_1')} <br />
                                    <span className="text-gold">{t('promotions.title_2')}</span>
                                </h2>
                                <p className="text-text-grey text-sm leading-relaxed max-w-sm uppercase tracking-widest font-medium opacity-80">
                                    {t('promotions.feb_title')}
                                </p>
                            </div>

                            <p className="text-text-grey text-lg leading-relaxed">
                                {t('promotions.feb_desc')}
                            </p>

                            <div className="pt-4">
                                <Link
                                    to="/promotions"
                                    className="group/btn inline-flex items-center gap-6"
                                >
                                    <span className="text-black uppercase tracking-[0.4em] text-xs font-bold group-hover/btn:tracking-[0.6em] transition-all duration-300">
                                        Explore Detail
                                    </span>
                                    <div className="p-3 bg-black text-white group-hover/btn:bg-gold group-hover/btn:text-black transition-colors duration-300">
                                        <ChevronRight size={20} />
                                    </div>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Decorative Border */}
                    <div className="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-gold/10 -z-0" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 border-l-4 border-b-4 border-gold/10 -z-0" />
                </motion.div>
            </div>
        </section>
    );
};

export default HomePromo;
