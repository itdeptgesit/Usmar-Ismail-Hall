import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PromoModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if the user has already seen the promo in this session
        const hasSeenPromo = sessionStorage.getItem('hasSeenPromo');

        if (!hasSeenPromo) {
            // Show the promo after a short delay
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, []);

    const closePromo = () => {
        setIsOpen(false);
        sessionStorage.setItem('hasSeenPromo', 'true');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closePromo}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="relative max-w-lg w-full bg-white shadow-2xl overflow-hidden rounded-sm"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closePromo}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black transition-colors"
                            aria-label="Close promotion"
                        >
                            <X size={20} />
                        </button>

                        {/* Promo Image */}
                        <div className="aspect-[4/5] w-full group relative overflow-hidden">
                            <img
                                src="https://usmarismailhall.com/wp-content/uploads/2026/02/UIH-promo-FEB-26.png"
                                alt="Special Promotion Feb 2026"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                        </div>

                        {/* Simple CTA */}
                        <div className="p-4 bg-black flex flex-col gap-3">
                            <Link
                                to="/promotions"
                                onClick={closePromo}
                                className="w-full bg-gold text-black py-4 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-white transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                Explore Detail <ChevronRight size={14} />
                            </Link>
                            <button
                                onClick={closePromo}
                                className="text-white/40 uppercase tracking-[0.4em] text-[8px] font-bold hover:text-white transition-all duration-300 py-1"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default PromoModal;
