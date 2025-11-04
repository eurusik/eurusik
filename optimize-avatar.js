import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function optimizeAvatar() {
  const inputPath = path.join(__dirname, 'public', 'avatar.jpg');
  
  // Create WebP versions at different sizes
  await sharp(inputPath)
    .resize(160, 160, { fit: 'cover' })
    .webp({ quality: 85 })
    .toFile(path.join(__dirname, 'public', 'avatar-160.webp'));
  
  await sharp(inputPath)
    .resize(320, 320, { fit: 'cover' })
    .webp({ quality: 85 })
    .toFile(path.join(__dirname, 'public', 'avatar-320.webp'));
  
  await sharp(inputPath)
    .webp({ quality: 85 })
    .toFile(path.join(__dirname, 'public', 'avatar.webp'));
  
  // Create JPEG fallbacks
  await sharp(inputPath)
    .resize(160, 160, { fit: 'cover' })
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(path.join(__dirname, 'public', 'avatar-160.jpg'));
  
  await sharp(inputPath)
    .resize(320, 320, { fit: 'cover' })
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(path.join(__dirname, 'public', 'avatar-320.jpg'));
  
  console.log('✅ Avatar images optimized successfully!');
}

optimizeAvatar().catch(console.error);
