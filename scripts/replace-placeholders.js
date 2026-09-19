const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const svgBanner = `
<svg width="1200" height="750" viewBox="0 0 1200 750" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#081e36" />
      <stop offset="40%" stop-color="#0f345a" />
      <stop offset="100%" stop-color="#0a525d" />
    </linearGradient>
    <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.04)" stroke-width="1"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1200" height="750" fill="url(#bgGrad)" />
  <rect width="1200" height="750" fill="url(#gridPattern)" />

  <!-- Subtle Architecture Skyline Geometry -->
  <g opacity="0.12" fill="#ffffff">
    <rect x="200" y="420" width="800" height="20" rx="4" />
    <rect x="230" y="440" width="40" height="220" />
    <rect x="350" y="440" width="40" height="220" />
    <rect x="470" y="440" width="40" height="220" />
    <rect x="590" y="440" width="40" height="220" />
    <rect x="710" y="440" width="40" height="220" />
    <rect x="830" y="440" width="40" height="220" />
    <rect x="930" y="440" width="40" height="220" />
    <polygon points="600,280 180,420 1020,420" />
    <rect x="150" y="660" width="900" height="30" rx="6" />
  </g>

  <!-- Center Badge / Emblem Card -->
  <g transform="translate(600, 340)">
    <!-- Glow -->
    <circle cx="0" cy="-30" r="80" fill="#00A896" opacity="0.15" />
    
    <!-- Shield / University Icon -->
    <g transform="translate(-40, -90) scale(1.6)">
      <path d="M25 4 L45 12 L45 28 C45 38 36 46 25 50 C14 46 5 38 5 28 L5 12 Z" fill="rgba(0, 168, 150, 0.25)" stroke="#00A896" stroke-width="2" stroke-linejoin="round"/>
      <path d="M15 24 L25 18 L35 24 L25 30 Z" fill="#ffffff" opacity="0.9" />
      <path d="M20 28 L20 34 C20 36 22 38 25 38 C28 38 30 36 30 34 L30 28" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" opacity="0.9" />
      <line x1="35" y1="24" x2="35" y2="32" stroke="#F39C12" stroke-width="1.5" stroke-linecap="round" />
      <circle cx="35" cy="33" r="1.5" fill="#F39C12" />
    </g>

    <!-- Typography -->
    <text x="0" y="45" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#ffffff" letter-spacing="1">
      COLLEGE LEADERSHIP
    </text>
    <text x="0" y="80" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="600" fill="#00d1b2" letter-spacing="2">
      VERIFIED INSTITUTION PROFILE
    </text>
    <text x="0" y="110" text-anchor="middle" font-family="sans-serif" font-size="13" fill="rgba(255, 255, 255, 0.6)">
      Official Campus Photography Updating
    </text>
  </g>
</svg>
`;

async function main() {
  const collegesDir = path.join(process.cwd(), 'public', 'images', 'colleges');
  const fallbackPath = path.join(collegesDir, 'campus-fallback.jpg');
  const defaultPath = path.join(collegesDir, 'default.jpg');

  await sharp(Buffer.from(svgBanner))
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(fallbackPath);

  fs.copyFileSync(fallbackPath, defaultPath);
  console.log('Saved campus-fallback.jpg and default.jpg');

  const files = fs.readdirSync(collegesDir);
  let replacedCount = 0;
  files.forEach(file => {
    if (file !== 'mnit-jaipur.jpg' && file.endsWith('.jpg')) {
      fs.copyFileSync(fallbackPath, path.join(collegesDir, file));
      replacedCount++;
    }
  });

  console.log(`Replaced ${replacedCount} placeholder images with clean neutral verified campus asset. Preserved authentic mnit-jaipur.jpg.`);
}

main().catch(err => console.error(err));
