const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Disable sharp file cache to prevent Windows EBUSY file locks
sharp.cache(false);

function getAllFiles(dir) {
  let files = [];
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      files = files.concat(getAllFiles(full));
    } else {
      files.push(full);
    }
  });
  return files;
}

async function compressAll() {
  const imagesDir = path.resolve(__dirname, '../public/images');
  console.log('Starting safe in-memory image compression on:', imagesDir);

  const files = getAllFiles(imagesDir);
  let totalOrig = 0;
  let totalNew = 0;
  let compressedCount = 0;
  let skippedCount = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const stat = fs.statSync(file);
    totalOrig += stat.size;

    if (!['.jpg', '.jpeg', '.webp', '.png', '.avif'].includes(ext)) {
      totalNew += stat.size;
      skippedCount++;
      continue;
    }

    try {
      // Read directly into memory buffer - prevents file locking on Windows
      const inputBuffer = fs.readFileSync(file);

      let pipeline = sharp(inputBuffer).resize({
        width: 1400,
        height: 1050,
        fit: 'inside',
        withoutEnlargement: true
      });

      if (ext === '.jpg' || ext === '.jpeg') {
        pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true, progressive: true });
      } else if (ext === '.webp') {
        pipeline = pipeline.webp({ quality: 80, effort: 4 });
      } else if (ext === '.png') {
        pipeline = pipeline.png({ compressionLevel: 9, quality: 80 });
      } else if (ext === '.avif') {
        pipeline = pipeline.avif({ quality: 70, effort: 4 });
      }

      const outputBuffer = await pipeline.toBuffer();

      // Only overwrite if the compressed buffer is smaller and valid
      if (outputBuffer.length > 0 && outputBuffer.length < stat.size) {
        fs.writeFileSync(file, outputBuffer);
        totalNew += outputBuffer.length;
        compressedCount++;
        const pct = ((1 - outputBuffer.length / stat.size) * 100).toFixed(1);
        console.log(`[COMPRESSED] ${path.relative(imagesDir, file)}: ${(stat.size / 1024).toFixed(1)}KB -> ${(outputBuffer.length / 1024).toFixed(1)}KB (-${pct}%)`);
      } else {
        totalNew += stat.size;
        skippedCount++;
        console.log(`[KEPT ORIGINAL] ${path.relative(imagesDir, file)}: already optimal (${(stat.size / 1024).toFixed(1)}KB)`);
      }
    } catch (err) {
      totalNew += stat.size;
      skippedCount++;
      console.error(`[ERROR on ${path.relative(imagesDir, file)}]:`, err.message);
    }
  }

  console.log('\n========================================');
  console.log('COMPRESSION SUMMARY:');
  console.log(`Total original size: ${(totalOrig / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Total optimized size: ${(totalNew / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Total space saved: ${((totalOrig - totalNew) / (1024 * 1024)).toFixed(2)} MB (-${((1 - totalNew / totalOrig) * 100).toFixed(1)}%)`);
  console.log(`Files compressed: ${compressedCount}, Kept original: ${skippedCount}`);
  console.log('========================================\n');
}

compressAll();
