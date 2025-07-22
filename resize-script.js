const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'assets', 'images');
const imagesToResize = [
  'pele-renovada.webp',
  'firmeza-contorno.webp',
  'expressao-suave-e-natural.webp',
  'sinais-lesoes.webp',
  'sarita-sobre-mim-800w.webp',
  'saude-capilar-800w.webp',
];

const sizes = [420, 640];

imagesToResize.forEach(image => {
  const imagePath = path.join(assetsDir, image);
  if (fs.existsSync(imagePath)) {
    sizes.forEach(size => {
      const newFileName = image.replace(/(\.[\w\d_-]+)$/i, `-${size}w$1`);
      const outputPath = path.join(assetsDir, newFileName);

      sharp(imagePath)
        .resize({ width: size })
        .toFile(outputPath, (err, info) => {
          if (err) {
            console.error(`Error resizing ${image} to ${size}w:`, err);
          } else {
            console.log(`Successfully resized ${image} to ${size}w`);
          }
        });
    });
  } else {
    console.warn(`Image not found: ${imagePath}`);
  }
});
