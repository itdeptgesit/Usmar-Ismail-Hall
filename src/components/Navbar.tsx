import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
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
                <Link to="/" className="text-white font-sans font-bold text-xl tracking-[0.3em] uppercase">
                    Usmar Ismail <span className="text-gold">Hall</span>
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
                        className="flex items-center gap-2 text-white"
                    >
                        <Globe size={18} className="text-gold" />
                        <span className="text-xs font-bold">{i18n.language.toUpperCase()}</span>
                    </button>
                    <button
                        className="text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    'fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden',
                    mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                )}
            >
                <button
                    className="absolute top-6 right-6 text-white"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <X size={32} />
                </button>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-white text-xl uppercase tracking-widest hover:text-gold transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
