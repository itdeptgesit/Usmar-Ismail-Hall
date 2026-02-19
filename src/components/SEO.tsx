import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
    title?: string;
    description?: string;
    type?: string;
    name?: string;
}

const SEO = ({ title, description, type = 'website', name = 'Usmar Ismail Hall' }: SEOProps) => {
    const { i18n } = useTranslation();

    const siteTitle = title ? `${title} | ${name}` : name;
    const siteDescription = description || "The premier theater and performance venue in Jakarta, dedicated to arts, cinema, and heritage.";

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{siteTitle}</title>
            <meta name='description' content={siteDescription} />
            <html lang={i18n.language} />

            {/* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:site_name" content={name} />

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={siteDescription} />
        </Helmet>
    );
};

export default SEO;
