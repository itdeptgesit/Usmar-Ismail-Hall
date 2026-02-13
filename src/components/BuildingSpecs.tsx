import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const BuildingSpecs = () => {
    const { t } = useTranslation();

    const locations = [
        { text: t('location.lrt'), time: t('location.walking') },
        { text: t('location.hotel'), time: t('location.minutes', { count: 1 }) },
        { text: t('location.hospital'), time: t('location.minutes', { count: 5 }) },
        { text: t('location.market'), time: t('location.minutes', { count: 5 }) },
        { text: t('location.mall'), time: t('location.minutes', { count: 10 }) },
    ];

    const specs = [
        { label: t('location.specs.type'), value: t('location.specs_values.type') },
        { label: t('location.specs.height'), value: t('location.specs_values.height') },
        { label: t('location.specs.area'), value: t('location.specs_values.area') },
        { label: t('location.specs.avg_floor'), value: t('location.specs_values.avg_floor') },
        { label: t('location.specs.facilities'), value: t('location.specs_values.facilities') },
    ];

    return (
        <section id="location" className="py-24 md:py-32 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Building Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        <div className="space-y-4">
                            <span className="text-gold tracking-[0.4em] uppercase text-xs font-semibold">{t('location.tagline')}</span>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-widest text-black uppercase">
                                {t('location.title')}
                            </h2>
                        </div>

                        <p className="text-text-grey leading-relaxed text-sm md:text-base max-w-xl">
                            {t('location.desc')}
                        </p>

                        <div className="space-y-6 border-t border-black/5 pt-8">
                            {specs.map((item, index) => (
                                <div key={index} className="flex justify-between items-start gap-4 pb-4 border-b border-black/5">
                                    <span className="text-[10px] uppercase tracking-widest font-bold text-black/40 min-w-[120px]">
                                        {item.label}
                                    </span>
                                    <span className="text-sm font-medium text-black text-right">
                                        {item.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Strategic Location */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-soft-grey p-8 md:p-12 space-y-10 border border-black/5"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-black flex items-center justify-center">
                                <MapPin size={24} className="text-gold" />
                            </div>
                            <h3 className="text-xl font-bold tracking-widest uppercase">
                                {t('location.location_title')}
                            </h3>
                        </div>

                        <div className="space-y-6">
                            {locations.map((loc, index) => (
                                <div key={index} className="flex items-center gap-6 group">
                                    <div className="flex-none p-2 border border-black/10 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                        <Navigation size={14} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-semibold tracking-wide uppercase group-hover:text-gold transition-colors duration-300">
                                            {loc.text}
                                        </span>
                                        <span className="text-[10px] text-text-grey tracking-widest uppercase">
                                            {loc.time}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6 border-t border-black/10">
                            <p className="text-xs text-text-grey leading-relaxed italic">
                                "{t('location.quote')}"
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BuildingSpecs;
