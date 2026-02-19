import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'id' ? 'en' : 'id';
        i18n.changeLanguage(newLang);
    };

    const navLinks = [
        { name: t('nav.home'), href: '/' },
        { name: t('nav.about'), href: '/about' },
        { name: t('nav.gallery'), href: '/gallery' },
        { name: t('nav.contact'), href: '/contact' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 md:px-12 md:py-6',
                (isScrolled || !isHomePage) ? 'bg-black/95 backdrop-blur-md py-3 md:py-4 border-b border-white/5 shadow-2xl' : 'bg-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-white font-sans text-xl lg:text-2xl tracking-[0.3em] uppercase">
                    <span className="font-black">Usmar Ismail</span> <span className="font-normal text-gold">Hall</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="text-white/80 hover:text-white uppercase tracking-widest text-[10px] lg:text-xs transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <button
                        onClick={toggleLanguage}
                        aria-label={`Switch language to ${i18n.language === 'id' ? 'English' : 'Indonesian'}`}
                        className="flex items-center gap-2 text-white/80 hover:text-white transition-colors border-l border-white/20 pl-6 ml-2"
                    >
                        <Globe size={14} className="text-gold" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">
                            {i18n.language === 'id' ? 'ID' : 'EN'}
                        </span>
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={toggleLanguage}
                        aria-label={`Switch language to ${i18n.language === 'id' ? 'English' : 'Indonesian'}`}
                        className="flex items-center gap-2 text-white"
                    >
                        <Globe size={18} className="text-gold" />
                        <span className="text-xs font-bold">{i18n.language.toUpperCase()}</span>
                    </button>
                    <button
                        className="text-white"
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    'fixed inset-0 w-screen h-[100dvh] bg-black z-[100] flex flex-col items-center justify-center transition-all duration-500 md:hidden',
                    mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-[-10px]'
                )}
            >
                <button
                    className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors"
                    aria-label="Close menu"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <X size={32} />
                </button>

                <div className="flex flex-col items-center space-y-10">
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={mobileMenuOpen ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                to={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-white text-2xl font-bold uppercase tracking-[0.3em] hover:text-gold transition-colors block text-center"
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={mobileMenuOpen ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: navLinks.length * 0.1 }}
                        className="pt-10 border-t border-white/10 w-40 flex justify-center"
                    >
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-3 text-white/80 hover:text-white transition-colors py-2 px-4 rounded-full border border-white/20"
                        >
                            <Globe size={20} className="text-gold" />
                            <span className="text-sm font-bold uppercase tracking-widest">
                                {i18n.language === 'id' ? 'ID' : 'EN'}
                            </span>
                        </button>
                    </motion.div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
