import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { HERO } from '../constants/images';
import { SITE_NAME, DEFAULT_DESCRIPTION, absoluteUrl } from '../constants/seo';

function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  image = HERO,
  noindex = false,
  jsonLd,
}) {
  const { pathname } = useLocation();
  const url = absoluteUrl(pathname);
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const jsonLdList = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta
        name="robots"
        content={noindex ? 'noindex, nofollow' : 'index, follow'}
      />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_SA" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLdList.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

export default Seo;
