import React from 'react';
import { Helmet } from 'react-helmet-async';
import { seoDefaults } from '@/config/seo';

export interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  ogImage,
  ogType,
  canonicalUrl,
}) => {
  const finalTitle = title 
    ? seoDefaults.titleTemplate.replace('%s', title) 
    : seoDefaults.defaultTitle;
  
  const finalDescription = description ?? seoDefaults.defaultDescription;
  const finalKeywords = keywords ?? seoDefaults.defaultKeywords;
  const finalOgType = ogType ?? seoDefaults.openGraph.type;
  const finalOgImage = ogImage ?? seoDefaults.openGraph.images[0]?.url ?? '';
  const currentUrl = canonicalUrl ?? (typeof window !== 'undefined' ? window.location.href : seoDefaults.openGraph.url);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical Link */}
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={finalOgType} />
      <meta property="og:title" content={title ?? seoDefaults.defaultTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={seoDefaults.openGraph.siteName} />
      <meta property="og:locale" content={seoDefaults.openGraph.locale} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content={seoDefaults.twitter.cardType} />
      <meta name="twitter:site" content={seoDefaults.twitter.site} />
      <meta name="twitter:creator" content={seoDefaults.twitter.handle} />
      <meta name="twitter:title" content={title ?? seoDefaults.defaultTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalOgImage} />
    </Helmet>
  );
};
export default SEOHead;
