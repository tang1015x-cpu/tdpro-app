const fs = require('fs');
const path = require('path');

const BASE = 'android/app/src/main/res';
const ICONS = {
  'mipmap-mdpi':    'res/icons/icon-48.png',
  'mipmap-hdpi':    'res/icons/icon-72.png',
  'mipmap-xhdpi':   'res/icons/icon-96.png',
  'mipmap-xxhdpi':  'res/icons/icon-144.png',
  'mipmap-xxxhdpi': 'res/icons/icon-192.png',
};

for (const [dir, src] of Object.entries(ICONS)) {
  const destDir = path.join(BASE, dir);
  fs.mkdirSync(destDir, { recursive: true });
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(destDir, 'ic_launcher.png'));
    fs.copyFileSync(src, path.join(destDir, 'ic_launcher_round.png'));
    console.log(`✓ ${dir}`);
  }
}

// Splash
const splashSrc = 'res/icons/splash.png';
const splashDir = path.join(BASE, 'drawable');
fs.mkdirSync(splashDir, { recursive: true });
if (fs.existsSync(splashSrc)) {
  fs.copyFileSync(splashSrc, path.join(splashDir, 'splash.png'));
  console.log('✓ splash.png');
}
console.log('Icons copied!');
