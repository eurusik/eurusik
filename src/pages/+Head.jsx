import '../index.css'
import { usePageContext } from 'vike-react/usePageContext'

export default function Head() {
  const pageContext = usePageContext()
  const isEn = pageContext.urlPathname?.startsWith('/en')
  const locale = isEn ? 'en' : 'uk'
  const baseUrl = 'https://eurusik.tech'
  const canonicalUrl = isEn ? `${baseUrl}/en/` : `${baseUrl}/`

  const title = isEn
    ? 'Eugene Rusakov - Senior Frontend Developer | React, Angular, TypeScript Expert'
    : 'Євген Русаков - Senior Frontend Developer | React, Angular, TypeScript'

  const description = isEn
    ? 'Senior Frontend Developer with 11+ years of experience. Specialized in React, Angular, TypeScript. Tech blog on Medium, active GitHub contributor. Former EA, Mastercard, Rozetka engineer.'
    : 'Senior Frontend Developer з 11+ роками досвіду. Спеціалізація: React, Angular, TypeScript. Технічний блог на Medium та DOU. Досвід в EA, Mastercard, Rozetka, Сільпо.'

  const ogLocale = isEn ? 'en_US' : 'uk_UA'

  return (
    <>
      {/* Critical inline CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        html{scroll-behavior:smooth;overflow-x:hidden}
        body{font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto',sans-serif;overflow-x:hidden;margin:0;padding:0;background:#0A0A0B;color:#EDEDEF}
        .min-h-screen{min-height:100vh}
        img{max-width:100%;height:auto}
      `}} />

      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/favicon.svg" />

      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="Eugene Rusakov, Frontend Developer, React, Angular, TypeScript, JavaScript, Web Development, Software Engineer, Ukraine, Kyiv, GitHub, Open Source" />
      <meta name="author" content="Eugene Rusakov" />
      <meta name="robots" content="index, follow" />

      {/* Canonical + Hreflang */}
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="uk" href={`${baseUrl}/`} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}/en/`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/`} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}/og-image.svg`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={isEn ? 'uk_UA' : 'en_US'} />
      <meta property="og:site_name" content="Eugene Rusakov" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${baseUrl}/og-image.svg`} />

      {/* Theme */}
      <meta name="theme-color" content="#0A0A0B" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Eugene Rusakov",
          "url": baseUrl,
          "image": `${baseUrl}/avatar.jpg`,
          "jobTitle": "Senior Frontend Developer",
          "worksFor": {
            "@type": "Organization",
            "name": "Сільпо",
            "url": "https://silpo.ua"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "professional",
            "email": "john.rusakov@gmail.com"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kyiv",
            "addressCountry": "Ukraine"
          },
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Kharkiv Social and Economic Institute"
          },
          "knowsAbout": [
            "React", "Angular", "TypeScript", "JavaScript",
            "Frontend Development", "Micro Frontends", "Open Source"
          ],
          "sameAs": [
            "https://github.com/eurusik",
            "https://www.linkedin.com/in/eugene-rusakov-27606352/",
            "https://dou.ua/users/john-rusakov/",
            "https://medium.com/@eurusik",
            "https://www.threads.net/@eurusik"
          ]
        })
      }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": `Eugene Rusakov - ${isEn ? 'Frontend Developer' : 'Frontend Розробник'}`,
          "url": baseUrl,
          "inLanguage": locale,
          "description": description,
          "author": { "@type": "Person", "name": "Eugene Rusakov" }
        })
      }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "dateCreated": "2025-10-29T00:00:00+00:00",
          "dateModified": new Date().toISOString().split('T')[0] + 'T00:00:00+00:00',
          "mainEntity": {
            "@type": "Person",
            "name": "Eugene Rusakov",
            "alternateName": "eurusik",
            "identifier": "eurusik",
            "description": description,
            "image": `${baseUrl}/avatar.jpg`,
            "sameAs": [
              "https://github.com/eurusik",
              "https://medium.com/@eurusik",
              "https://www.linkedin.com/in/eugene-rusakov-27606352/"
            ]
          }
        })
      }} />
    </>
  )
}
