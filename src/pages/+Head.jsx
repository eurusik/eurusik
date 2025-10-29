import '../index.css'

export default function Head() {
  return (
    <>
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/favicon.svg" />
      
      {/* Primary Meta Tags */}
      <title>Eugene Rusakov - Senior Frontend Developer | React, Angular, TypeScript Expert</title>
      <meta name="title" content="Eugene Rusakov - Senior Frontend Developer | React, Angular, TypeScript Expert" />
      <meta name="description" content="Senior Frontend Developer with 11+ years of experience. Specialized in React, Angular, TypeScript, and modern web technologies. Former EA, Mastercard, Rozetka engineer." />
      <meta name="keywords" content="Eugene Rusakov, Frontend Developer, React Developer, Angular Developer, TypeScript, JavaScript, Web Development, Software Engineer, Ukraine, Kyiv" />
      <meta name="author" content="Eugene Rusakov" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://eurusik.tech/" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://eurusik.tech/" />
      <meta property="og:title" content="Eugene Rusakov - Senior Frontend Developer | React, Angular, TypeScript Expert" />
      <meta property="og:description" content="Senior Frontend Developer with 11+ years of experience. Specialized in React, Angular, TypeScript, and modern web technologies. Former EA, Mastercard, Rozetka engineer." />
      <meta property="og:image" content="https://eurusik.tech/og-image.svg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Eugene Rusakov" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://eurusik.tech/" />
      <meta property="twitter:title" content="Eugene Rusakov - Senior Frontend Developer | React, Angular, TypeScript Expert" />
      <meta property="twitter:description" content="Senior Frontend Developer with 11+ years of experience. Specialized in React, Angular, TypeScript, and modern web technologies." />
      <meta property="twitter:image" content="https://eurusik.tech/og-image.svg" />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#4F46E5" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      
      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Eugene Rusakov",
          "url": "https://eurusik.tech",
          "image": "https://eurusik.tech/avatar.jpg",
          "jobTitle": "Senior Frontend Developer",
          "worksFor": {
            "@type": "Organization",
            "name": "Сільпо"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kyiv",
            "addressCountry": "Ukraine"
          },
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Taras Shevchenko National University of Kyiv"
          },
          "knowsAbout": [
            "React",
            "Angular",
            "TypeScript",
            "JavaScript",
            "Frontend Development",
            "Web Development",
            "Software Engineering"
          ],
          "sameAs": [
            "https://github.com/eurusik",
            "https://www.linkedin.com/in/eugene-rusakov-27606352/",
            "https://medium.com/@eurusik",
            "https://www.threads.net/@eurusik"
          ]
        })
      }} />
      
      {/* WebSite Schema for Search */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Eugene Rusakov - Frontend Developer",
          "url": "https://eurusik.tech",
          "description": "Senior Frontend Developer with 11+ years of experience in React, Angular, and TypeScript",
          "author": {
            "@type": "Person",
            "name": "Eugene Rusakov"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://eurusik.tech/#about",
            "query-input": "required name=search_term_string"
          }
        })
      }} />
    </>
  )
}
