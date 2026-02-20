import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { optimizeImage } from '../lib/utils';
import { ArrowRight, Theater, Building2, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    const { t } = useTranslation();

    const services = [
        {
            title: t('services.hall'),
            desc: t('services.hall_desc'),
            image: "https://usmarismailhall.com/wp-content/uploads/2024/04/cropped-Theater-2-1-scaled-1.jpg",
            icon: Theater,
            link: "/hall"
        },
        {
            title: t('services.virtual'),
            desc: t('services.virtual_desc'),
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
            icon: Globe,
            link: "/virtual-office"
        },
        {
            title: t('services.office'),
            desc: t('services.office_desc'),
            image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
            icon: Building2,
            link: "/office"
        }
    ];

    return (
        <section id="services" className="py-24 md:py-32 bg-soft-grey px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gold tracking-[0.5em] uppercase text-xs font-semibold block mb-4"
                    >
                        {t('services.tagline')}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight text-black uppercase"
                    >
                        {t('services.title')}
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="group relative h-[500px] overflow-hidden bg-black"
                        >
                            {/* Background Image */}
                            <img
                                src={optimizeImage(service.image, { width: 800, quality: 75 })}
                                alt={service.title}
                                className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                            {/* Content */}
                            <div className="absolute inset-0 p-10 flex flex-col justify-end">
                                <div className="mb-6 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-colors duration-500">
                                    <service.icon size={24} className="text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-2 min-h-[3.5rem] flex items-end">
                                    {service.title}
                                </h3>

                                <div className="min-h-[4rem]">
                                    <p className="text-white/70 text-xs leading-relaxed mb-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 line-clamp-2">
                                        {service.desc}
                                    </p>
                                </div>

                                <Link
                                    to={service.link}
                                    className="inline-flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-xs group/link"
                                >
                                    {t('hero.explore')}
                                    <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
                                </Link>
                            </div>

                            {/* Border Accent */}
                            <div className="absolute inset-0 border border-white/5 group-hover:border-gold/30 transition-colors pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
