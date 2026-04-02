const sharp = require('sharp');

async function convert() {
  const input = 'dist-build/imgs/route-map1.jpg';
  const output = 'dist-build/imgs/route-map1.webp';

  await sharp(input)
    .webp({ quality: 85 })
    .toFile(output);

  console.log('转换完成:', output);

  // 输出文件大小对比
  const fs = require('fs');
  const origSize = fs.statSync(input).size;
  const webpSize = fs.statSync(output).size;
  console.log(`原图: ${(origSize / 1024).toFixed(1)} KB`);
  console.log(`WebP: ${(webpSize / 1024).toFixed(1)} KB`);
  console.log(`节省: ${((1 - webpSize / origSize) * 100).toFixed(1)}%`);
}

convert().catch(console.error);