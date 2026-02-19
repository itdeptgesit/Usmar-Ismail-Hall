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
                            <a href="https://wa.me/6287743361199" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </a>
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
