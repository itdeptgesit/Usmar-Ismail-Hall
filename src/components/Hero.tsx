import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background Image */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 z-0"
            >
                <img
                    src="https://usmarismailhall.com/wp-content/uploads/2024/04/cropped-Theater-2-1-scaled-1.jpg"
                    alt="Usmar Ismail Hall Theater"
                    className="h-full w-full object-cover brightness-50"
                />
            </motion.div>

            {/* Content Overlay */}
            <div className="relative z-10 flex h-full items-center justify-center px-6">
                <div className="text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mb-4 block text-xs font-semibold uppercase tracking-[0.5em] text-gold md:text-sm"
                    >
                        {t('hero.tagline')}
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="mb-8 font-sans text-5xl font-bold uppercase tracking-[0.2em] text-white md:text-8xl"
                    >
                        {t('hero.title')}<br />
                        <span className="text-white/90">{t('hero.subtitle')}</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="flex flex-col items-center justify-center gap-6 md:flex-row"
                    >
                        <Link to="/about" className="btn-primary">
                            {t('hero.explore')}
                        </Link>
                        <Link to="/contact" className="btn-outline">
                            {t('hero.book')}
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] uppercase tracking-widest">{t('hero.scroll')}</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <ChevronDown size={20} />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
