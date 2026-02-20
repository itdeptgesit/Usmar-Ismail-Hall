import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { Calendar, Tag, ChevronRight, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const PromotionsPage = () => {
    const { t } = useTranslation();

    const currentPromo = {
        title: t('promotions.feb_title'),
        period: "1 - 28 February 2026",
        image: "https://usmarismailhall.com/wp-content/uploads/2026/02/UIH-promo-FEB-26.png",
        offers: [
            { title: "Price Discount", desc: "Enjoy up to 26% discount for all hall bookings in February." },
            { title: "Free Mini Cinema", desc: "Get free 2-hour mini cinema usage for any conference room rental." },
            { title: "Virtual Office", desc: "Buy 1 year, get 2 months free for all virtual office packages." }
        ]
    };

    return (
        <main className="bg-white">
            <SEO
                title={`${t('promotions.title_1')} ${t('promotions.title_2')} - PPHUI`}
                description={t('promotions.feb_desc')}
            />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-6 bg-soft-grey overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-gold tracking-[0.5em] uppercase text-xs font-bold block mb-6"
                    >
                        {t('promotions.tagline')}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-bold text-black uppercase tracking-widest leading-none mb-8"
                    >
                        {t('promotions.title_1')} <br />
                        <span className="text-gold">{t('promotions.title_2')}</span>
                    </motion.h1>
                </div>
            </section>

            {/* Featured Promo */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative group aspect-[4/5] bg-black overflow-hidden shadow-2xl"
                        >
                            <img
                                src={currentPromo.image}
                                alt={currentPromo.title}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute top-8 left-8 bg-gold px-6 py-2">
                                <span className="text-black font-bold text-[10px] uppercase tracking-widest">{t('promotions.active')}</span>
                            </div>
                        </motion.div>

                        <div className="space-y-12">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-gold">
                                    <Calendar size={20} />
                                    <span className="uppercase tracking-[0.3em] text-xs font-bold">{currentPromo.period}</span>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter leading-[0.9]">
                                    {currentPromo.title}
                                </h2>
                                <p className="text-text-grey text-lg leading-relaxed max-w-lg">
                                    {t('promotions.feb_desc')}
                                </p>
                            </div>

                            <div className="space-y-8">
                                {currentPromo.offers.map((offer, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex gap-6 items-start p-8 border border-black/5 hover:border-gold/20 transition-all cursor-default group"
                                    >
                                        <div className="w-12 h-12 bg-soft-grey flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors duration-500">
                                            <Tag size={20} className="text-gold group-hover:text-black" />
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="font-bold uppercase tracking-widest text-sm text-black">{offer.title}</h4>
                                            <p className="text-text-grey text-xs leading-relaxed uppercase tracking-widest font-medium opacity-70">
                                                {offer.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="pt-6">
                                <Link to="/contact" className="btn-primary inline-flex items-center gap-6">
                                    {t('promotions.claim')}
                                    <ChevronRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="py-24 bg-black text-white px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div className="space-y-4">
                        <Clock size={32} className="text-gold mx-auto" />
                        <h4 className="font-bold uppercase tracking-widest text-sm">{t('promotions.valid_until')}</h4>
                        <p className="text-white/40 text-[10px] uppercase tracking-widest font-medium">{t('promotions.valid_desc')}</p>
                    </div>
                    <div className="space-y-4">
                        <MapPin size={32} className="text-gold mx-auto" />
                        <h4 className="font-bold uppercase tracking-widest text-sm">{t('promotions.eligibility')}</h4>
                        <p className="text-white/40 text-[10px] uppercase tracking-widest font-medium">{t('promotions.eligibility_desc')}</p>
                    </div>
                    <div className="space-y-4">
                        <Tag size={32} className="text-gold mx-auto" />
                        <h4 className="font-bold uppercase tracking-widest text-sm">{t('promotions.how_to')}</h4>
                        <p className="text-white/40 text-[10px] uppercase tracking-widest font-medium">{t('promotions.how_to_desc')}</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PromotionsPage;
