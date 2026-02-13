import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="py-24 md:py-32 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="space-y-4">
                            <span className="text-gold tracking-[0.4em] uppercase text-xs font-semibold">{t('contact.tagline')}</span>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-widest text-black uppercase">
                                {t('contact.title')}
                            </h2>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-soft-grey flex items-center justify-center border border-black/5">
                                    <MapPin size={20} className="text-black" />
                                </div>
                                <div>
                                    <h4 className="font-bold uppercase tracking-widest text-sm mb-1">{t('contact.location')}</h4>
                                    <p className="text-text-grey text-sm">Gedung Pusat Perfilman H. Usmar Ismail<br />Jl. H. R. Rasuna Said Kav. C-22, Setiabudi, Jakarta Selatan - 12920</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-soft-grey flex items-center justify-center border border-black/5">
                                    <Phone size={20} className="text-black" />
                                </div>
                                <div>
                                    <h4 className="font-bold uppercase tracking-widest text-sm mb-1">{t('contact.phone')}</h4>
                                    <p className="text-text-grey text-sm">+62 877-4336-1199</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-soft-grey flex items-center justify-center border border-black/5">
                                    <Mail size={20} className="text-black" />
                                </div>
                                <div>
                                    <h4 className="font-bold uppercase tracking-widest text-sm mb-1">{t('contact.email')}</h4>
                                    <p className="text-text-grey text-sm">marketing.property@gesit.co.id</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-soft-grey p-8 md:p-12 border border-black/5"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-text-grey font-bold">{t('contact.form.name')}</label>
                                    <input type="text" className="w-full bg-white border-b border-black/10 p-3 text-sm focus:border-black outline-none transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-text-grey font-bold">{t('contact.form.email')}</label>
                                    <input type="email" className="w-full bg-white border-b border-black/10 p-3 text-sm focus:border-black outline-none transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-text-grey font-bold">{t('contact.form.type')}</label>
                                <select className="w-full bg-white border-b border-black/10 p-3 text-sm focus:border-black outline-none transition-colors appearance-none">
                                    <option>{t('contact.form.options.hall')}</option>
                                    <option>{t('contact.form.options.cinema')}</option>
                                    <option>{t('contact.form.options.event')}</option>
                                    <option>{t('contact.form.options.other')}</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-text-grey font-bold">{t('contact.form.message')}</label>
                                <textarea rows={4} className="w-full bg-white border-b border-black/10 p-3 text-sm focus:border-black outline-none transition-colors resize-none" placeholder="..."></textarea>
                            </div>
                            <button className="w-full btn-primary py-4 mt-4 text-xs font-bold uppercase tracking-widest">
                                {t('contact.form.send')}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
