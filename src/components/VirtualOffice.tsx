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
                <div className="flex flex-col lg:flex-row gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3 space-y-8"
                    >
                        <div className="space-y-4">
                            <span className="text-gold tracking-[0.4em] uppercase text-xs font-semibold">{t('virtual_office.tagline')}</span>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-widest uppercase leading-tight">
                                {t('virtual_office.title')}
                            </h2>
                        </div>

                        <p className="text-text-grey leading-relaxed text-sm md:text-base">
                            {t('virtual_office.desc')}
                        </p>

                        <div className="pt-4">
                            <Link to="/contact" className="btn-outline">{t('virtual_office.inquire')}</Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
                    >
                        {facilities.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-6 p-4 border border-white/5 hover:border-gold/30 transition-colors group"
                            >
                                <div className="w-12 h-12 flex items-center justify-center bg-white/5 group-hover:bg-gold/10 transition-colors">
                                    <item.icon size={20} className="text-gold" />
                                </div>
                                <span className="text-xs md:text-sm uppercase tracking-widest font-medium text-white/80 group-hover:text-white transition-colors">
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
