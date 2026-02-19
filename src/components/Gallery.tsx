import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const images = [
    { url: 'https://usmarismailhall.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-19-at-09.30.46.jpeg', title: 'Event Performance' },
    { url: 'https://usmarismailhall.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-19-at-09.30.11.jpeg', title: 'Theater Interior' },
    { url: 'https://usmarismailhall.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-19-at-09.29.04.jpeg', title: 'Grand Hall' },
    { url: 'https://usmarismailhall.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-19-at-09.29.03.jpeg', title: 'Stage Setup' },
    { url: 'https://usmarismailhall.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-19-at-09.28.16.jpeg', title: 'Orchestra' },
    { url: 'https://usmarismailhall.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-19-at-09.27.48.jpeg', title: 'Concert Moment' },
];

const Gallery = () => {
    const { t } = useTranslation();

    return (
        <section id="gallery" className="py-24 md:py-32 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header Section matching screenshot */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 border-b border-black/5 pb-12">
                    <div className="space-y-4">
                        <span className="text-gold tracking-[0.5em] uppercase text-[10px] font-bold block">{t('gallery.tagline')}</span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-widest text-black uppercase leading-tight font-sans">
                            {t('gallery.title')}
                        </h2>
                    </div>
                    <p className="text-text-grey max-w-sm text-[11px] leading-relaxed uppercase tracking-[0.2em] font-medium md:text-right">
                        {t('gallery.desc')}
                    </p>
                </div>

                {/* Clean Grid Layout matching screenshot */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.1,
                                ease: [0.215, 0.61, 0.355, 1]
                            }}
                            viewport={{ once: true }}
                            className="aspect-[4/3] relative group overflow-hidden bg-soft-grey shadow-sm"
                        >
                            <img
                                src={img.url}
                                alt={img.title}
                                className="w-full h-full object-cover grayscale brightness-90 contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-white text-[10px] uppercase tracking-[0.4em] font-bold border-white/40 border px-6 py-3 backdrop-blur-sm">
                                        {t('gallery.view')}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
