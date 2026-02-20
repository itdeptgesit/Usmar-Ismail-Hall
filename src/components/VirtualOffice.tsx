import { motion } from 'framer-motion';
import { Wifi, Zap, Printer, Coffee, Sofa, Moon, Users, LogIn } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const VirtualOffice = () => {
    const { t } = useTranslation();

    const facilities = [
        { icon: Zap, text: t('virtual_office.list.elec') },
        { icon: Wifi, text: t('virtual_office.list.wifi') },
        { icon: Printer, text: t('virtual_office.list.print') },
        { icon: Coffee, text: t('virtual_office.list.pantry') },
        { icon: Sofa, text: t('virtual_office.list.lounge') },
        { icon: Moon, text: t('virtual_office.list.musholla') },
        { icon: Users, text: t('virtual_office.list.meeting') },
        { icon: LogIn, text: t('virtual_office.list.check') },
    ];

    return (
        <section id="virtual-office" className="py-24 md:py-32 bg-black text-white px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3 sticky top-32 space-y-8"
                    >
                        <div className="space-y-4">
                            <span className="text-gold tracking-[0.5em] uppercase text-xs font-bold">{t('virtual_office.tagline')}</span>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-widest uppercase leading-tight">
                                Premium <br />
                                <span className="text-gold">Facilities</span>
                            </h2>
                        </div>

                        <p className="text-white/40 leading-relaxed text-sm md:text-base max-w-sm uppercase tracking-widest">
                            {t('virtual_office.desc')}
                        </p>

                        <div className="pt-4">
                            <Link to="/contact" className="inline-flex items-center gap-6 group">
                                <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold group-hover:tracking-[0.5em] transition-all duration-300">
                                    {t('virtual_office.inquire')}
                                </span>
                                <div className="w-12 h-[1px] bg-gold group-hover:w-20 transition-all duration-300" />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                        {facilities.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="group relative aspect-[3/1] flex items-center gap-8 p-10 bg-white/5 border border-white/5 hover:border-gold/40 transition-all duration-500 overflow-hidden"
                            >
                                {/* Subtle Bg Icon */}
                                <item.icon size={60} className="absolute -right-4 -bottom-4 text-white/5 group-hover:text-white/10 group-hover:scale-110 transition-all duration-700" />

                                <div className="w-12 h-12 flex items-center justify-center bg-gold/10 group-hover:bg-gold transition-colors duration-500 rounded-full">
                                    <item.icon size={20} className="text-gold group-hover:text-black transition-colors duration-500" />
                                </div>
                                <span className="text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-white/60 group-hover:text-white transition-colors">
                                    {item.text}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VirtualOffice;
