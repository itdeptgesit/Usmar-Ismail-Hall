import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const WhatsAppButton: React.FC = () => {
    const { t } = useTranslation();
    const [isOnline, setIsOnline] = useState(false);
    const phoneNumber = "6287743361199";

    useEffect(() => {
        const checkStatus = () => {
            const now = new Date();
            const hour = now.getHours();
            // Business hours: 09:00 - 17:00
            setIsOnline(hour >= 9 && hour < 17);
        };

        checkStatus();
        const interval = setInterval(checkStatus, 60000);
        return () => clearInterval(interval);
    }, []);

    const message = encodeURIComponent(t('whatsapp.message'));
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="relative"
                >
                    <div className="relative group">
                        {/* Pulse Effect - Only visible when Online */}
                        {isOnline && (
                            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25 group-hover:opacity-40 transition-opacity duration-1000"></div>
                        )}

                        {/* Tooltip */}
                        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black/95 backdrop-blur-md text-white px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none border border-white/10 translate-x-2 group-hover:translate-x-0 hidden md:block">
                            {isOnline ? t('whatsapp.tooltip') : 'Kami akan segera membalas'}
                        </div>

                        {/* Main Button */}
                        <motion.a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Contact via WhatsApp"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl transition-all duration-500 transform ${isOnline
                                    ? 'bg-[#25D366] text-white shadow-[#25D366]/20'
                                    : 'bg-zinc-800 grayscale text-white/70 shadow-black/20'
                                }`}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="w-7 h-7 md:w-9 md:h-9 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                        </motion.a>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default WhatsAppButton;
