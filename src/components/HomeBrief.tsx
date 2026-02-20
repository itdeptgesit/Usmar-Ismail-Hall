import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { optimizeImage } from '../lib/utils';
import { Link } from 'react-router-dom';

const HomeBrief = () => {
    const { t } = useTranslation();

    return (
        <section className="py-24 bg-white px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative z-10 aspect-square overflow-hidden bg-soft-grey shadow-2xl">
                            <img
                                src={optimizeImage("https://usmarismailhall.com/wp-content/uploads/2024/04/image-3.png", { width: 800 })}
                                alt="PPHUI Building"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-soft-grey -z-0" />
                        <div className="absolute -top-10 -left-10 w-24 h-24 border-l-2 border-t-2 border-gold -z-0" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 space-y-10"
                    >
                        <div className="space-y-4">
                            <span className="text-gold tracking-[0.5em] uppercase text-xs font-bold block">{t('home_brief.tagline')}</span>
                            <h2 className="text-4xl md:text-6xl font-bold text-black uppercase leading-tight tracking-widest">
                                {t('home_brief.title_1')} <br />
                                <span className="text-gold">{t('home_brief.title_2')}</span>
                            </h2>
                        </div>

                        <p className="text-text-grey text-lg leading-relaxed max-w-lg">
                            {t('home_brief.desc')}
                        </p>

                        <div className="grid grid-cols-2 gap-8 py-6 border-y border-black/5">
                            <div>
                                <h4 className="text-3xl font-bold text-black leading-none tracking-widest">{t('home_brief.cap_title')}</h4>
                                <span className="text-[10px] uppercase tracking-widest text-text-grey font-bold">{t('home_brief.cap_desc')}</span>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-black leading-none tracking-widest">{t('home_brief.hub_title')}</h4>
                                <span className="text-[10px] uppercase tracking-widest text-text-grey font-bold">{t('home_brief.hub_desc')}</span>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Link to="/about" className="group flex items-center gap-6">
                                <span className="text-black uppercase tracking-[0.3em] text-xs font-bold group-hover:tracking-[0.5em] transition-all duration-300">
                                    {t('home_brief.cta')}
                                </span>
                                <div className="w-12 h-[1px] bg-black group-hover:w-20 transition-all duration-300" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HomeBrief;
