import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const SitemapPage = () => {
    const { t } = useTranslation();

    const sections = [
        {
            title: t('footer.nav'),
            links: [
                { name: t('nav.home'), path: '/' },
                { name: t('nav.about'), path: '/about' },
                { name: t('nav.gallery'), path: '/gallery' },
                { name: t('nav.contact'), path: '/contact' },
            ]
        },
        {
            title: t('footer.inquiries'),
            links: [
                { name: t('footer.hall_booking'), path: '/contact' },
                { name: t('nav.facilities'), path: '/about' },
                { name: t('nav.office'), path: '/about' },
                { name: t('footer.media'), path: '/contact' },
            ]
        },
        {
            title: t('footer.legal'),
            links: [
                { name: t('footer.legal'), path: '/legal' },
                { name: t('footer.cookies'), path: '/cookies' },
                { name: t('footer.sitemap'), path: '/sitemap' },
            ]
        }
    ];

    return (
        <main className="bg-white min-h-screen pt-32 pb-24 px-6 md:px-12">
            <SEO title={t('footer.sitemap')} />
            <div className="max-w-4xl mx-auto space-y-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4 text-center border-b border-black/5 pb-10"
                >
                    <span className="text-gold tracking-[0.5em] uppercase text-[10px] font-bold block">Usmar Ismail Hall</span>
                    <h1 className="text-black text-4xl md:text-6xl font-bold uppercase tracking-widest">{t('footer.sitemap')}</h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {sections.map((section, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="space-y-6"
                        >
                            <h2 className="text-black font-bold uppercase tracking-[0.2em] text-xs border-l-2 border-gold pl-4">
                                {section.title}
                            </h2>
                            <ul className="space-y-3">
                                {section.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                        <Link to={link.path} className="text-text-grey hover:text-gold transition-colors text-sm uppercase tracking-widest">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default SitemapPage;
