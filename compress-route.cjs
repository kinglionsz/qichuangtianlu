const fs = require('fs');
const sharp = require('sharp');

const paths = [
  'dist-build/imgs/route-map.webp',
  'dist-build/imgs/route-map1.webp',
];

paths.forEach(p => {
  if (!fs.existsSync(p)) {
    console.log('跳过(不存在):', p);
    return;
  }
  const before = fs.statSync(p).size;
  const out = p.replace('.webp', '-opt.webp');
  sharp(p)
    .resize(1920, null, { fit: 'inside' })
    .webp({ quality: 80 })
    .toFile(out)
    .then(() => {
      const after = fs.statSync(out).size;
      console.log(p);
      console.log('  优化前:', (before / 1024).toFixed(1), 'KB');
      console.log('  优化后:', (after / 1024).toFixed(1), 'KB');
      console.log('  节省:', ((1 - after / before) * 100).toFixed(1), '%');
    })
    .catch(console.error);
});