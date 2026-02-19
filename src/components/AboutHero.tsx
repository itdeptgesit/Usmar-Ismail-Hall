import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AboutHero = () => {
    const { t } = useTranslation();

    return (
        <section className="relative h-[60vh] w-full overflow-hidden bg-black">
            {/* Background Image with stronger overlay */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 z-0"
            >
                <img
                    src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
                    alt="Cinema Performance Atmosphere"
                    className="h-full w-full object-cover brightness-[0.35] contrast-125"
                />
                <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            {/* Content Overlay */}
            <div className="relative z-10 flex h-full items-center justify-center px-6">
                <div className="text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mb-4 block text-xs font-semibold uppercase tracking-[0.5em] text-gold md:text-sm drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
                    >
                        {t('about.tagline')}
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="font-sans text-4xl font-bold uppercase tracking-[0.3em] text-white md:text-7xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]"
                    >
                        {t('nav.about')}
                    </motion.h1>
                </div>
            </div>

            {/* Elegant Fade Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </section>
    );
};

export default AboutHero;
