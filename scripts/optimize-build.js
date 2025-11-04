import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, '../dist');

// Critical CSS that should be inlined
const criticalCSS = `
  html{scroll-behavior:smooth;overflow-x:hidden}
  body{font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell',sans-serif;overflow-x:hidden;font-display:swap}
  h1,h2,h3,h4,h5,h6{font-family:'Manrope',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-weight:600;font-display:swap}
`;

function injectCriticalCSS(htmlPath) {
  try {
    let html = fs.readFileSync(htmlPath, 'utf8');
    
    // Inject critical CSS inline
    const criticalStyleTag = `<style>${criticalCSS}</style>`;
    html = html.replace('</head>', `${criticalStyleTag}</head>`);
    
    // Add preload for fonts
    const fontPreload = `
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
      <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"></noscript>
    `;
    html = html.replace('</head>', `${fontPreload}</head>`);
    
    // Make external CSS async
    html = html.replace(/<link([^>]*rel="stylesheet"[^>]*)>/g, (match, attrs) => {
      if (!attrs.includes('fonts.googleapis.com')) {
        return match.replace('>', ' media="print" onload="this.media=\'all\'">');
      }
      return match;
    });
    
    fs.writeFileSync(htmlPath, html, 'utf8');
    console.log(`✓ Optimized: ${htmlPath}`);
  } catch (error) {
    console.error(`Error processing ${htmlPath}:`, error);
  }
}

// Process all HTML files in dist
function processDistFiles() {
  if (!fs.existsSync(distPath)) {
    console.log('Dist folder not found. Run build first.');
    return;
  }

  function walkDir(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.html')) {
        injectCriticalCSS(filePath);
      }
    });
  }

  walkDir(distPath);
  console.log('\n✓ Build optimization complete!');
}

processDistFiles();
