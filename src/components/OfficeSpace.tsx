import { motion } from 'framer-motion';
import { Building2, CheckCircle2, TrainFront } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const OfficeSpace = () => {
    const { t } = useTranslation();

    return (
        <section id="office" className="py-24 md:py-32 bg-soft-grey px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <span className="text-gold tracking-[0.4em] uppercase text-xs font-semibold">{t('office.tagline')}</span>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-widest text-black uppercase">
                                {t('office.title')}
                            </h2>
                        </div>

                        <p className="text-text-grey leading-relaxed text-sm md:text-base">
                            {t('office.desc')}
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center">
                                    <Building2 size={18} className="text-black" />
                                </div>
                                <p className="text-black font-medium tracking-wide uppercase text-xs">
                                    {t('office.size')}
                                </p>
                            </div>

                            <div className="space-y-3">
                                <p className="text-xs uppercase tracking-widest font-bold text-black border-l-2 border-gold pl-3">
                                    {t('office.condition')}
                                </p>
                                <ul className="space-y-2">
                                    {[t('office.furnished'), t('office.partition'), t('office.semi_furnished')].map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-sm text-text-grey">
                                            <CheckCircle2 size={14} className="text-gold" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="pt-6">
                            <Link to="/contact" className="btn-primary inline-block">
                                {t('office.contact')}
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-video bg-black overflow-hidden border border-black/5">
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                                alt="Modern Office Space"
                                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 border border-black/5 hidden md:block">
                            <div className="flex items-center gap-4">
                                <TrainFront className="text-gold" size={24} />
                                <span className="text-[10px] uppercase tracking-widest font-bold text-black">
                                    {t('office.access')}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OfficeSpace;
