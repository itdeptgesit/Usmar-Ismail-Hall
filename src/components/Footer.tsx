import { Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-black text-white pt-24 pb-12 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-2 space-y-8">
                        <Link to="/" className="text-2xl font-bold tracking-[0.3em] uppercase">
                            Usmar Ismail <span className="text-gold">Hall</span>
                        </Link>
                        <p className="text-text-grey max-w-sm leading-relaxed text-sm">
                            {t('footer.desc')}
                        </p>
                        <div className="flex gap-6">
                            <a href="https://www.instagram.com/usmarismail_hall/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.tiktok.com/@usmarismailhall" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .8.11V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.51A6.3 6.3 0 0 0 15.82 15.7V8.6a8.26 8.26 0 0 0 5.2 1.84V7a4.91 4.91 0 0 1-1.43-.31Z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-gold">{t('footer.nav')}</h4>
                        <ul className="space-y-4 text-sm text-text-grey">
                            <li><Link to="/" className="hover:text-white transition-colors">{t('nav.home')}</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">{t('nav.about')}</Link></li>
                            <li><Link to="/gallery" className="hover:text-white transition-colors">{t('nav.gallery')}</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">{t('nav.contact')}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-gold">{t('footer.inquiries')}</h4>
                        <ul className="space-y-4 text-sm text-text-grey">
                            <li><Link to="/contact" className="hover:text-white transition-colors">{t('footer.hall_booking')}</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">{t('nav.facilities')}</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">{t('nav.office')}</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">{t('footer.media')}</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] uppercase tracking-widest text-white/30">
                        &copy; {new Date().getFullYear()} Usmar Ismail Hall. Design for Prestige.
                    </p>
                    <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/30">
                        <Link to="/legal" className="hover:text-white transition-colors">{t('footer.legal')}</Link>
                        <Link to="/cookies" className="hover:text-white transition-colors">{t('footer.cookies')}</Link>
                        <Link to="/sitemap" className="hover:text-white transition-colors">{t('footer.sitemap')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
