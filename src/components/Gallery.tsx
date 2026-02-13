import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const images = [
    { url: 'https://usmarismailhall.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-06-19-at-09.30.46.jpeg', title: 'Event Performance' },
    { url: 'https://usmarismailhall.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-06-19-at-09.30.11.jpeg', title: 'Theater Interior' },
    { url: 'https://usmarismailhall.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-06-19-at-09.29.04.jpeg', title: 'Grand Hall' },
    { url: 'https://usmarismailhall.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-06-19-at-09.29.03.jpeg', title: 'Stage Setup' },
    { url: 'https://usmarismailhall.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-06-19-at-09.28.16.jpeg', title: 'Orchestra' },
    { url: 'https://usmarismailhall.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-06-19-at-09.27.48.jpeg', title: 'Concert Moment' },
];

const Gallery = () => {
    const { t } = useTranslation();

    return (
        <section id="gallery" className="py-24 md:py-32 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="space-y-4">
                        <span className="text-gold tracking-[0.4em] uppercase text-xs font-semibold">{t('gallery.tagline')}</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-widest text-black uppercase">
                            {t('gallery.title')}
                        </h2>
                    </div>
                    <p className="text-text-grey max-w-sm text-sm uppercase tracking-widest">
                        {t('gallery.desc')}
                    </p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group overflow-hidden bg-soft-grey cursor-pointer"
                        >
                            <img
                                src={img.url}
                                alt={img.title}
                                loading="lazy"
                                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white text-xs uppercase tracking-[0.3em] font-medium border-b border-white pb-1">
                                    {t('gallery.view')}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
