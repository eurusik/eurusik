import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, '../dist');

const criticalCSS = `
  html{scroll-behavior:smooth;overflow-x:hidden}
  body{font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto',sans-serif;overflow-x:hidden;margin:0;padding:0;background:#0A0A0B;color:#EDEDEF}
  .min-h-screen{min-height:100vh}
  img{max-width:100%;height:auto}
`;

function injectCriticalCSS(htmlPath) {
  try {
    let html = fs.readFileSync(htmlPath, 'utf8');

    const criticalStyleTag = `<style>${criticalCSS}</style>`;
    html = html.replace('</head>', `${criticalStyleTag}</head>`);

    const fontPreload = `
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
      <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"></noscript>
    `;
    html = html.replace('</head>', `${fontPreload}</head>`);

    fs.writeFileSync(htmlPath, html, 'utf8');
    console.log(`✓ Optimized: ${htmlPath}`);
  } catch (error) {
    console.error(`Error processing ${htmlPath}:`, error);
  }
}

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
