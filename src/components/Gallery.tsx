import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { optimizeImage } from '../lib/utils';
import { X, Maximize2 } from 'lucide-react';

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
    const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

    return (
        <section id="gallery" className="py-24 md:py-32 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
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

                {/* Grid Layout */}
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
                            className="aspect-[4/3] relative group overflow-hidden bg-soft-grey shadow-sm cursor-pointer"
                            onClick={() => setSelectedImage(img)}
                        >
                            <img
                                src={optimizeImage(img.url, { width: 800, quality: 75 })}
                                alt={img.title}
                                className="w-full h-full object-cover grayscale brightness-90 contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center gap-3">
                                    <Maximize2 size={24} className="text-gold" />
                                    <span className="text-white text-[10px] uppercase tracking-[0.4em] font-bold border-white/40 border px-6 py-3 backdrop-blur-sm">
                                        {t('gallery.view')}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors p-2 z-[110]"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            <X size={32} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative max-w-6xl w-full h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={optimizeImage(selectedImage.url, { width: 1920, quality: 90 })}
                                alt={selectedImage.title}
                                className="max-h-full max-w-full object-contain shadow-2xl"
                            />

                            <div className="absolute bottom-[-40px] left-0 right-0 text-center">
                                <h3 className="text-white text-xs uppercase tracking-[0.3em] font-bold">
                                    {selectedImage.title}
                                </h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
