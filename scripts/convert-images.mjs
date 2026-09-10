import sharp from 'sharp'
import fs from 'node:fs'
import path from 'node:path'

const srcDir = String.raw`C:\Users\anura\.cursor\projects\e-React-Js-sansar\assets`
const outRoot = String.raw`E:\React Js\sansar\src\assets\images`

const jobs = [
  { file: 'home-mining-hero.png', dest: 'home/home-mining-hero.webp', width: 1920, quality: 78 },
  { file: 'about-mining-landscape.png', dest: 'about/about-mining-landscape.webp', width: 1600, quality: 74 },
  { file: 'iron-ore-stockpile.png', dest: 'business/iron-ore-stockpile.webp', width: 1400, quality: 74 },
  { file: 'mineral-loading.png', dest: 'business/mineral-loading.webp', width: 1400, quality: 74 },
  { file: 'mineral-transport.png', dest: 'business/mineral-transport.webp', width: 1400, quality: 74 },
  { file: 'industrial-market.png', dest: 'business/industrial-market.webp', width: 1400, quality: 74 },
  { file: 'maharashtra-laterite.png', dest: 'projects/maharashtra-laterite.webp', width: 1600, quality: 74 },
  { file: 'karnataka-laterite.png', dest: 'projects/karnataka-laterite.webp', width: 1600, quality: 74 },
  { file: 'responsibility-safety.png', dest: 'responsibility/responsibility-safety.webp', width: 1200, quality: 76 },
  { file: 'responsibility-restoration.png', dest: 'responsibility/responsibility-restoration.webp', width: 1400, quality: 74 },
  { file: 'contact-cta-panorama.png', dest: 'contact/contact-cta-panorama.webp', width: 1600, quality: 74 },
]

const brand = [
  {
    match: (n) => n.includes('0584a245'),
    dest: 'leadership/dhananjay-hota.jpg',
  },
  {
    match: (n) => n.includes('ChatGPT_Image'),
    dest: 'leadership/ansuman-hota.jpg',
  },
  {
    match: (n) => n.includes('cf2b9c5f'),
    dest: 'brand/sansaar-logo.jpg',
  },
]

const files = fs.readdirSync(srcDir)

for (const b of brand) {
  const found = files.find(b.match)
  if (!found) throw new Error(`Missing brand file for ${b.dest}`)
  const dest = path.join(outRoot, b.dest)
  fs.mkdirSync(path.dirname(dest), { recursive: true })
  fs.copyFileSync(path.join(srcDir, found), dest)
  console.log('copied', b.dest)
}

for (const job of jobs) {
  const dest = path.join(outRoot, job.dest)
  fs.mkdirSync(path.dirname(dest), { recursive: true })
  await sharp(path.join(srcDir, job.file))
    .resize({ width: job.width, withoutEnlargement: true })
    .webp({ quality: job.quality })
    .toFile(dest)
  const kb = Math.round(fs.statSync(dest).size / 1024)
  console.log(job.dest, `${kb} KB`)
}

const publicLogo = String.raw`E:\React Js\sansar\public\favicon.jpg`
fs.copyFileSync(path.join(outRoot, 'brand/sansaar-logo.jpg'), publicLogo)
console.log('favicon copied')
