import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapPin, Navigation } from 'lucide-react';
import { optimizeImage } from '../lib/utils';

const HomeLocation = () => {
    const { t } = useTranslation();

    return (
        <section className="py-32 bg-soft-grey px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="space-y-4">
                            <span className="text-gold tracking-[0.5em] uppercase text-xs font-bold block">{t('home_location.tagline')}</span>
                            <h2 className="text-4xl md:text-6xl font-bold text-black uppercase leading-tight tracking-widest">
                                {t('home_location.title_1')} <br />
                                <span className="text-gold text-transparent border-b-2 border-gold pb-2 inline-block">{t('home_location.title_2')}</span>
                            </h2>
                        </div>

                        <div className="space-y-8">
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0">
                                    <MapPin size={20} className="text-gold" />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-bold uppercase tracking-widest text-sm text-black">{t('home_location.hub_name')}</h4>
                                    <p className="text-text-grey text-sm leading-relaxed max-w-sm">
                                        {t('home_location.hub_addr')}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start text-black">
                                <div className="w-12 h-12 bg-gold flex items-center justify-center shrink-0">
                                    <Navigation size={20} className="text-black" />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-bold uppercase tracking-widest text-sm text-black">{t('home_location.access_name')}</h4>
                                    <div className="flex flex-wrap gap-4 pt-2">
                                        <span className="text-[10px] font-bold uppercase tracking-widest bg-white px-3 py-1 border border-black/5">LRT Kuningan</span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest bg-white px-3 py-1 border border-black/5">Busway</span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest bg-white px-3 py-1 border border-black/5">Epicentrum</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, rotate: 2 }}
                        whileInView={{ opacity: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative aspect-video lg:aspect-square overflow-hidden bg-black shadow-2xl"
                    >
                        <img
                            src={optimizeImage("https://images.unsplash.com/photo-1542744173-8e7e53415bb0", { width: 1000 })}
                            alt="Jakarta Cityscape"
                            className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                        <div className="absolute bottom-10 left-10">
                            <h3 className="text-white font-bold text-2xl uppercase tracking-widest">{t('home_location.heart')}</h3>
                            <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase">{t('home_location.city')}</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HomeLocation;
