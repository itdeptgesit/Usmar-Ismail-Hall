import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const LegalPage = () => {
    const { t } = useTranslation();

    return (
        <main className="bg-white min-h-screen pt-32 pb-24 px-6 md:px-12">
            <SEO title={t('footer.legal')} />
            <div className="max-w-4xl mx-auto space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4 text-center border-b border-black/5 pb-10"
                >
                    <span className="text-gold tracking-[0.5em] uppercase text-[10px] font-bold block">Usmar Ismail Hall</span>
                    <h1 className="text-black text-4xl md:text-6xl font-bold uppercase tracking-widest">{t('footer.legal')}</h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="prose prose-sm max-w-none text-text-grey leading-relaxed space-y-8"
                >
                    <section className="space-y-4">
                        <h2 className="text-black font-bold uppercase tracking-widest text-lg">Terms of Use</h2>
                        <p>Welcome to Usmar Ismail Hall. By accessing this website, you agree to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this website.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-black font-bold uppercase tracking-widest text-lg">Privacy Policy</h2>
                        <p>We are committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.</p>
                    </section>

                    <section className="space-y-4 border-t border-black/5 pt-8">
                        <p className="italic text-xs">Last updated: {new Date().toLocaleDateString()}</p>
                    </section>
                </motion.div>
            </div>
        </main>
    );
};

export default LegalPage;
