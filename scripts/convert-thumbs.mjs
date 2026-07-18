// scripts/convert-thumbs.mjs
// Convierte los 4 thumbnails PNG nuevos a WebP (800px de ancho, q80).
// Crea archivos NUEVOS, NO sobrescribe ni borra los PNG. Correr: `node scripts/convert-thumbs.mjs`
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const TARGET_WIDTH = 800;
const QUALITY = 80;

const files = [
  "innovatarthumb",
  "rhinothumb",
  "robertoursthumb",
  "transportesdialthumb",
];

for (const name of files) {
  const src = path.join(publicDir, `${name}.png`);
  const out = path.join(publicDir, `${name}.webp`);

  const info = await sharp(src)
    .resize({ width: TARGET_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(out);

  const kb = (info.size / 1024).toFixed(1);
  console.log(`${name}.webp  ${info.width}x${info.height}  ${kb}K`);
}

console.log("\nListo. Los PNG NO se tocaron.");
