import { motion } from 'framer-motion';
import { Music, Users, MonitorPlay } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Facilities = () => {
    const { t } = useTranslation();

    const facilityData = [
        {
            icon: Music,
            title: t('facilities.concert_hall.title'),
            desc: t('facilities.concert_hall.desc'),
        },
        {
            icon: Users,
            title: t('facilities.conference.title'),
            desc: t('facilities.conference.desc'),
        },
        {
            icon: MonitorPlay,
            title: t('facilities.cinema.title'),
            desc: t('facilities.cinema.desc'),
        },
    ];

    return (
        <section id="facilities" className="py-24 md:py-32 bg-black text-white px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="space-y-4">
                        <span className="text-gold tracking-[0.4em] uppercase text-xs font-semibold">{t('facilities.tagline')}</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-widest text-white uppercase">
                            {t('facilities.title')}
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
                    {facilityData.map((fac, index) => (
                        <motion.div
                            key={fac.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative p-12 bg-black border border-white/10 hover:bg-white transition-all duration-500 cursor-default"
                        >
                            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                                <fac.icon size={40} className="text-white group-hover:text-black transition-colors duration-500 stroke-[1px]" />
                                <h3 className="text-lg font-bold tracking-widest text-white group-hover:text-black transition-colors duration-500 uppercase">
                                    {fac.title}
                                </h3>
                                <p className="text-text-grey group-hover:text-black/60 transition-colors duration-500 text-sm leading-relaxed">
                                    {fac.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Facilities;
