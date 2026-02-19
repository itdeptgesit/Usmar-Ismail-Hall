import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, CheckCircle2, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { submitContactForm } from '../lib/googleSheets';

const Contact = () => {
    const { t } = useTranslation();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        type: t('contact.form.options.hall'),
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const result = await submitContactForm(formData);

        setIsSubmitting(false);
        if (result.success) {
            setIsSuccess(true);
            setFormData({ name: '', email: '', type: t('contact.form.options.hall'), message: '' });
            setTimeout(() => setIsSuccess(false), 5000);
        } else {
            alert(result.message);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

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
                            <span className="text-gold tracking-[0.4em] uppercase text-xs font-semibold font-sans">{t('contact.tagline')}</span>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-widest text-black uppercase font-sans">
                                {t('contact.title')}
                            </h2>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 bg-soft-grey flex items-center justify-center border border-black/5 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold uppercase tracking-widest text-sm mb-1">{t('contact.location')}</h4>
                                    <p className="text-text-grey text-sm leading-relaxed">Gedung Pusat Perfilman H. Usmar Ismail<br />Jl. H. R. Rasuna Said Kav. C-22, Setiabudi, Jakarta Selatan - 12920</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 bg-[#25D366]/10 flex items-center justify-center border border-[#25D366]/20 group-hover:bg-[#25D366] group-hover:text-white transition-colors duration-300">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.35-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold uppercase tracking-widest text-sm mb-1">{t('contact.phone')}</h4>
                                    <a
                                        href="https://wa.me/6287743361199"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-text-grey text-sm hover:text-gold transition-colors"
                                    >
                                        +62 877-4336-1199
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 bg-soft-grey flex items-center justify-center border border-black/5 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold uppercase tracking-widest text-sm mb-1">{t('contact.email')}</h4>
                                    <p className="text-text-grey text-sm hover:text-black transition-colors cursor-pointer">marketing.property@gesit.co.id</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Container */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-soft-grey p-8 md:p-12 border border-black/5 shadow-2xl shadow-black/5 overflow-hidden"
                    >
                        <AnimatePresence mode="wait">
                            {!isSuccess ? (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-8"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-4">
                                            <label className="text-[10px] uppercase tracking-widest text-text-grey font-bold block">{t('contact.form.name')}</label>
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-white border-b border-black/10 p-4 text-sm focus:border-gold outline-none transition-all duration-300"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-[10px] uppercase tracking-widest text-text-grey font-bold block">{t('contact.form.email')}</label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-white border-b border-black/10 p-4 text-sm focus:border-gold outline-none transition-all duration-300"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-4 relative">
                                        <label className="text-[10px] uppercase tracking-widest text-text-grey font-bold block">{t('contact.form.type')}</label>
                                        <select
                                            name="type"
                                            value={formData.type}
                                            onChange={handleChange}
                                            className="w-full bg-white border-b border-black/10 p-4 text-sm focus:border-gold outline-none transition-all duration-300 appearance-none cursor-pointer"
                                        >
                                            <option>{t('contact.form.options.hall')}</option>
                                            <option>{t('contact.form.options.cinema')}</option>
                                            <option>{t('contact.form.options.event')}</option>
                                            <option>{t('contact.form.options.other')}</option>
                                        </select>
                                        <div className="absolute right-4 bottom-4 pointer-events-none opacity-40">
                                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1L5 5L9 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] uppercase tracking-widest text-text-grey font-bold block">{t('contact.form.message')}</label>
                                        <textarea
                                            required
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full bg-white border-b border-black/10 p-4 text-sm focus:border-gold outline-none transition-all duration-300 resize-none"
                                            placeholder="..."
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-black text-gold py-6 mt-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-gold hover:text-white transition-all duration-500 disabled:opacity-50 flex items-center justify-center gap-3 group"
                                    >
                                        {isSubmitting ? (
                                            <Loader2 className="animate-spin" size={16} />
                                        ) : (
                                            <>
                                                {t('contact.form.send')}
                                                <motion.span
                                                    animate={{ x: [0, 5, 0] }}
                                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                                >
                                                    →
                                                </motion.span>
                                            </>
                                        )}
                                    </button>
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20"
                                >
                                    <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold uppercase tracking-widest text-black">Terima Kasih!</h3>
                                        <p className="text-text-grey text-sm">Pesan Anda telah kami terima. Tim kami akan segera menghubungi Anda melalui email.</p>
                                    </div>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="text-[10px] font-bold uppercase tracking-widest text-gold hover:text-black transition-colors"
                                    >
                                        Kirim Pesan Lainnya
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
