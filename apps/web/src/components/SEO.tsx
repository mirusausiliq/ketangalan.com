import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string; // 設為可選，若不傳則使用首頁預設值
  description?: string;
  canonical?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  structuredData?: Record<string, any>;
  keywords?: string;
}

const SEO = ({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = 'https://ketangalan.com/banner.png',
  ogTitle,
  ogDescription,
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  author = '巴賽凱達格蘭研究學會',
  publishedDate,
  modifiedDate,
  structuredData,
  keywords,
}: SEOProps) => {
  const siteUrl = 'https://ketangalan.com';
  const siteNameMain = '巴賽凱達格蘭研究學會';
  const siteNameSub = 'Society for Basay Ketangalan Studies';
  
  // 1. 統一標題邏輯：如果傳入 title 就加上後綴，否則使用 index.html 的原始完整標題
  const fullTitle = title 
    ? `${title} | ${siteNameMain} - ${siteNameSub}` 
    : `${siteNameMain} - ${siteNameSub}`;

  // 2. 預設描述 (同步 index.html)
  const defaultDesc = "致力於北臺灣平埔族群——巴賽凱達格蘭族（Basay Ketangalan）語言與文化之保存、語言復振與學術研究。提供巴賽凱達格蘭語線上字典、歷史文獻與田野調查資料。";
  const displayDesc = description || defaultDesc;

  // 3. 處理 Canonical URL
  const canonicalUrl = canonical 
    ? `${siteUrl}${canonical.startsWith('/') ? canonical : `/${canonical}`}` 
    : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={displayDesc} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph - 同步 zh_TW */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || displayDesc} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={`${siteNameMain} ${siteNameSub}`} />
      <meta property="og:locale" content="zh_TW" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle || fullTitle} />
      <meta name="twitter:description" content={twitterDescription || displayDesc} />
      <meta name="twitter:image" content={twitterImage || ogImage} />

      {/* Article 專用屬性 */}
      {ogType === 'article' && (
        <>
          {publishedDate && <meta property="article:published_time" content={publishedDate} />}
          {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
          <meta property="article:author" content={author} />
        </>
      )}

      {/* 動態結構化資料 - 只在傳入時渲染，避免與 index.html 的 Organization 重複 */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;