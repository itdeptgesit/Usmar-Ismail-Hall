import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { optimizeImage } from '../lib/utils';

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
                    src={optimizeImage("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab", { width: 1920, quality: 75 })}
                    alt="PPHUI Building Architecture"
                    className="h-full w-full object-cover brightness-[0.4] contrast-100"
                />
                <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            {/* Content Overlay */}
            <div className="relative z-10 flex h-full items-center justify-center px-6">
                <div className="text-center">

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="font-sans text-3xl font-bold uppercase tracking-[0.15em] text-white md:text-5xl lg:text-6xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] leading-tight max-w-4xl"
                    >
                        {t('about.title')}
                    </motion.h1>
                </div>
            </div>

            {/* Elegant Fade Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </section>
    );
};

export default AboutHero;
