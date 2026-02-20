import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { optimizeImage } from '../lib/utils';
import VirtualOffice from '../components/VirtualOffice';
import SEO from '../components/SEO';
import CTA from '../components/CTA';
import { ShieldCheck, Mail, MapPin, Clock } from 'lucide-react';

const VirtualOfficePage = () => {
    const { t } = useTranslation();

    const benefits = [
        {
            icon: ShieldCheck,
            title: t('virtual_office.benefits.legal_title'),
            desc: t('virtual_office.benefits.legal_desc')
        },
        {
            icon: Mail,
            title: t('virtual_office.benefits.mail_title'),
            desc: t('virtual_office.benefits.mail_desc')
        },
        {
            icon: MapPin,
            title: t('virtual_office.benefits.location_title'),
            desc: t('virtual_office.benefits.location_desc')
        },
        {
            icon: Clock,
            title: t('virtual_office.benefits.flex_title'),
            desc: t('virtual_office.benefits.flex_desc')
        }
    ];

    return (
        <main className="bg-white">
            <SEO
                title={t('services.virtual')}
                description={t('services.virtual_desc')}
            />

            {/* Simplified Minimalist Hero Section */}
            <section className="relative h-[60vh] w-full overflow-hidden bg-black">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <img
                        src={optimizeImage("https://images.unsplash.com/photo-1497366216548-37526070297c", { width: 1920, quality: 80 })}
                        alt="Virtual Office"
                        className="h-full w-full object-cover brightness-[0.4]"
                    />
                </motion.div>
                <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-gold tracking-[0.5em] uppercase text-sm font-semibold block mb-4"
                        >
                            Elevate Your Business
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-7xl font-bold text-white uppercase tracking-widest leading-tight"
                        >
                            {t('services.virtual')}
                        </motion.h1>
                    </div>
                </div>
            </section>

            {/* Prestige Section */}
            <section className="py-32 px-6 bg-white overflow-hidden border-b border-black/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-6xl font-bold text-black uppercase tracking-widest leading-none">
                                    {t('virtual_office.benefits.title_1')} <br />
                                    <span className="text-gold">{t('virtual_office.benefits.title_2')}</span>
                                </h2>
                                <p className="text-text-grey text-lg leading-relaxed max-w-lg">
                                    {t('virtual_office.benefits.desc')}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {benefits.map((benefit, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                        className="space-y-3"
                                    >
                                        <div className="w-10 h-10 bg-soft-grey flex items-center justify-center text-gold">
                                            <benefit.icon size={20} />
                                        </div>
                                        <h4 className="font-bold uppercase tracking-widest text-xs text-black">{benefit.title}</h4>
                                        <p className="text-[11px] text-text-grey leading-relaxed uppercase tracking-wider">{benefit.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                className="relative z-10 aspect-[3/4] overflow-hidden"
                            >
                                <img
                                    src="/image/service.jpeg"
                                    alt="Service Office"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                            </motion.div>
                            <div className="absolute -top-12 -right-12 w-64 h-64 bg-soft-grey -z-0" />
                            <div className="absolute -bottom-12 -left-12 w-48 h-48 border border-gold/20 -z-0" />
                        </div>
                    </div>
                </div>
            </section>

            <VirtualOffice />

            {/* Experience Section */}
            <section className="py-32 bg-white px-6">
                <div className="max-w-7xl mx-auto space-y-20">
                    <div className="text-center space-y-4">
                        <span className="text-gold tracking-[0.5em] uppercase text-[10px] font-bold">Experience</span>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest">Business Atmosphere</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { url: "https://images.unsplash.com/photo-1497366216548-37526070297c", alt: "Corporate Boardroom" },
                            { url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2", alt: "Sleek Lounge" },
                            { url: "https://images.unsplash.com/photo-1531973576160-7125cd663d86", alt: "Private Office" },
                            { url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174", alt: "Co-working Space" },
                            { url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72", alt: "Conference Room" },
                            { url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0", alt: "Reception" }
                        ].map((img, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="aspect-[4/3] overflow-hidden group cursor-pointer"
                            >
                                <img
                                    src={optimizeImage(img.url, { width: 600 })}
                                    alt={img.alt}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
        </main>
    );
};

export default VirtualOfficePage;
