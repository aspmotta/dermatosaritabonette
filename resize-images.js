const sharp = require('sharp');
const fs = require('fs');

const imagesToResize = [
  'saude-capilar.webp',
  'manchas-melasma.webp',
  'sarita-sobre-mim.webp'
];
const sizes = [400, 800, 1200];
const inputDir = 'assets/images';
const outputDir = 'assets/images';

imagesToResize.forEach(image => {
  sizes.forEach(size => {
    const imageName = image.split('.')[0];
    const imageExtension = image.split('.')[1];
    const newImageName = `${imageName}-${size}w.${imageExtension}`;

    sharp(`${inputDir}/${image}`)
      .resize({ width: size })
      .toFile(`${outputDir}/${newImageName}`, (err, info) => {
        if (err) {
          console.error(`Erro ao redimensionar ${image} para ${size}px:`, err);
        } else {
          console.log(`Imagem ${image} redimensionada para ${size}px e salva como ${newImageName}`);
        }
      });
  });
});
