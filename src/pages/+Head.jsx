import '../index.css'

export default function Head() {
  return (
    <>
      {/* Critical inline CSS for above-the-fold content */}
      <style dangerouslySetInnerHTML={{__html: `
        html{scroll-behavior:smooth;overflow-x:hidden}
        body{font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell',sans-serif;overflow-x:hidden;margin:0;padding:0}
        .min-h-screen{min-height:100vh}
        .animated-gradient{background:linear-gradient(-45deg,#667eea,#764ba2,#f093fb,#4facfe);background-size:400% 400%;animation:gradient-shift 15s ease infinite}
        @keyframes gradient-shift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
        .hero-section{padding:4rem 1.5rem}
        .avatar-container{width:10rem;height:10rem;margin:0 auto}
        img{max-width:100%;height:auto}
        .text-4xl{font-size:2.25rem;line-height:2.5rem}
        .text-xl{font-size:1.25rem;line-height:1.75rem}
        .font-bold{font-weight:700}
        .mb-4{margin-bottom:1rem}
        .mb-6{margin-bottom:1.5rem}
        .text-center{text-align:center}
      `}} />
      {/* Critical Resource Hints */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/favicon.svg" />
      
      {/* Preload critical resources */}
      <link 
        rel="preload" 
        as="image" 
        type="image/webp"
        href="/avatar-160.webp" 
        imagesrcset="/avatar-160.webp 160w, /avatar-320.webp 320w"
        imagesizes="(max-width: 640px) 128px, 160px"
        fetchpriority="high" 
      />
      <link 
        rel="preload" 
        as="style" 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Manrope:wght@600;700&display=optional" 
      />
      
      {/* DNS Prefetch and Preconnect for external resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
      
      {/* Primary Meta Tags */}
      <title>Eugene Rusakov - Senior Frontend Developer | React, Angular, TypeScript Expert</title>
      <meta name="title" content="Eugene Rusakov - Senior Frontend Developer | React, Angular, TypeScript Expert" />
      <meta name="description" content="Senior Frontend Developer with 11+ years of experience. Specialized in React, Angular, TypeScript. Tech blog on Medium, active GitHub contributor. Former EA, Mastercard, Rozetka engineer." />
      <meta name="keywords" content="Eugene Rusakov, Frontend Developer, React Developer, Angular Developer, TypeScript, JavaScript, Web Development, Software Engineer, Ukraine, Kyiv, GitHub, Medium Blog, Open Source" />
      <meta name="author" content="Eugene Rusakov" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://eurusik.tech/" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://eurusik.tech/" />
      <meta property="og:title" content="Eugene Rusakov - Senior Frontend Developer | React, Angular, TypeScript Expert" />
      <meta property="og:description" content="Senior Frontend Developer with 11+ years of experience. Specialized in React, Angular, TypeScript. Tech blog on Medium, active GitHub contributor. Former EA, Mastercard, Rozetka engineer." />
      <meta property="og:image" content="https://eurusik.tech/og-image.svg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Eugene Rusakov" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://eurusik.tech/" />
      <meta property="twitter:title" content="Eugene Rusakov - Senior Frontend Developer | React, Angular, TypeScript Expert" />
      <meta property="twitter:description" content="Senior Frontend Developer with 11+ years of experience. Tech blog on Medium, active GitHub contributor. Specialized in React, Angular, TypeScript." />
      <meta property="twitter:image" content="https://eurusik.tech/og-image.svg" />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#4F46E5" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Fonts - Optimized for performance with preload and font-display: optional to prevent CLS */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link 
        rel="preload"
        as="style"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Manrope:wght@600;700&display=optional"
      />
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Manrope:wght@600;700&display=optional" 
        rel="stylesheet"
        media="print"
        onLoad="this.media='all'"
      />
      <noscript>
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Manrope:wght@600;700&display=optional" 
          rel="stylesheet"
        />
      </noscript>
      
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
            "Software Engineering",
            "Technical Writing",
            "Open Source"
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
      {/* ProfilePage Schema for Enhanced SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "dateCreated": "2025-10-29T00:00:00+00:00",
          "dateModified": "2025-10-29T00:00:00+00:00",
          "mainEntity": {
            "@type": "Person",
            "name": "Eugene Rusakov",
            "alternateName": "eurusik",
            "identifier": "eurusik",
            "description": "Senior Frontend Developer with 11+ years of experience",
            "image": "https://eurusik.tech/avatar.jpg",
            "sameAs": [
              "https://github.com/eurusik",
              "https://medium.com/@eurusik",
              "https://www.linkedin.com/in/eugene-rusakov-27606352/"
            ]
          }
        })
      }} />
      
      {/* Blog Schema for Medium Articles */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Eugene Rusakov's Tech Blog",
          "description": "Articles about frontend development, React, Angular, and modern web technologies",
          "url": "https://medium.com/@eurusik",
          "author": {
            "@type": "Person",
            "name": "Eugene Rusakov",
            "url": "https://eurusik.tech"
          },
          "blogPost": {
            "@type": "BlogPosting",
            "headline": "Frontend Development Insights",
            "author": {
              "@type": "Person",
              "name": "Eugene Rusakov"
            }
          }
        })
      }} />
    </>
  )
}
