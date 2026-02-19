import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const CookiesPage = () => {
    const { t } = useTranslation();

    return (
        <main className="bg-white min-h-screen pt-32 pb-24 px-6 md:px-12">
            <SEO title={t('footer.cookies')} />
            <div className="max-w-4xl mx-auto space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4 text-center border-b border-black/5 pb-10"
                >
                    <span className="text-gold tracking-[0.5em] uppercase text-[10px] font-bold block">Usmar Ismail Hall</span>
                    <h1 className="text-black text-4xl md:text-6xl font-bold uppercase tracking-widest">{t('footer.cookies')}</h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="prose prose-sm max-w-none text-text-grey leading-relaxed space-y-8"
                >
                    <section className="space-y-4">
                        <h2 className="text-black font-bold uppercase tracking-widest text-lg">Cookie Policy</h2>
                        <p>This website uses cookies to monitor browsing preferences and improve user experience. A cookie is a small file which asks permission to be placed on your computer's hard drive.</p>
                        <p>Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-black font-bold uppercase tracking-widest text-lg">Third Party Cookies</h2>
                        <p>We may also use third party cookies, such as Google Analytics, to help us understand how people use our site. This information is used for reporting and to improve the site's performance.</p>
                    </section>
                </motion.div>
            </div>
        </main>
    );
};

export default CookiesPage;
