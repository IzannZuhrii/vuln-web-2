const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '..', 'public', 'student-photos');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const students = [
  { file: 'aang.jpg', name: 'Badsah', bg: '#4f46e5', gender: 'm' },
  { file: 'adinda.jpg', name: 'Adinda', bg: '#ec4899', gender: 'f' },
  { file: 'dewa.jpg', name: 'Dewa', bg: '#6366f1', gender: 'm' },
  { file: 'annisa.jpg', name: 'Annisa', bg: '#8b5cf6', gender: 'f' },
  { file: 'ariel.jpg', name: 'Ariel', bg: '#0284c7', gender: 'm' },
  { file: 'bima.jpg', name: 'Bima', bg: '#10b981', gender: 'm' },
  { file: 'byantara.jpg', name: 'Byantara', bg: '#3b82f6', gender: 'm' },
  { file: 'cleo.jpg', name: 'Cleo', bg: '#f43f5e', gender: 'f' },
  { file: 'devina.jpg', name: 'Devina', bg: '#d946ef', gender: 'f' },
  { file: 'ezar.jpg', name: 'Ezar', bg: '#f59e0b', gender: 'm' },
  { file: 'farhan.jpg', name: 'Farhan', bg: '#06b6d4', gender: 'm' },
  { file: 'flavia.jpg', name: 'Flavia', bg: '#a855f7', gender: 'f' },
  { file: 'gusti.jpg', name: 'Gusti', bg: '#ef4444', gender: 'm' },
  { file: 'hatta.jpg', name: 'Hatta', bg: '#3b82f6', gender: 'm' },
  { file: 'intan.jpg', name: 'Intan', bg: '#ec4899', gender: 'f' },
  { file: 'iqbal.jpg', name: 'Iqbal', bg: '#14b8a6', gender: 'm' },
  { file: 'ivander.jpg', name: 'Ivander', bg: '#6366f1', gender: 'm' },
  { file: 'kenza.jpg', name: 'Kenza', bg: '#f43f5e', gender: 'f' },
  { file: 'rafa.jpg', name: 'Rafa', bg: '#8b5cf6', gender: 'm' },
  { file: 'davin.jpg', name: 'Davin', bg: '#0284c7', gender: 'm' },
  { file: 'faris.jpg', name: 'Faris', bg: '#10b981', gender: 'm' },
  { file: 'hamizan.jpg', name: 'Hamizan', bg: '#4f46e5', gender: 'm' },
  { file: 'kemal.jpg', name: 'Kemal', bg: '#f59e0b', gender: 'm' },
  { file: 'rifqi.jpg', name: 'Rifqi', bg: '#06b6d4', gender: 'm' },
  { file: 'nazriel.jpg', name: 'Nazriel', bg: '#6366f1', gender: 'm' },
  { file: 'nizar.jpg', name: 'Nizar', bg: '#14b8a6', gender: 'm' },
  { file: 'radine.jpg', name: 'Radine', bg: '#d946ef', gender: 'f' },
  { file: 'rahel.jpg', name: 'Rahel', bg: '#8b5cf6', gender: 'f' },
  { file: 'satria.jpg', name: 'Satria', bg: '#ef4444', gender: 'm' },
  { file: 'valvizzy.jpg', name: 'Valvizzy', bg: '#3b82f6', gender: 'm' },
  { file: 'yohan.jpg', name: 'Yohan', bg: '#0284c7', gender: 'm' },
  { file: 'ziyada.jpg', name: 'Ziyada', bg: '#ec4899', gender: 'f' },
];

students.forEach(s => {
  const initials = s.name.substring(0, 2).toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${s.bg}" />
        <stop offset="100%" stop-color="#1e1b4b" />
      </linearGradient>
    </defs>
    <rect width="400" height="400" rx="40" fill="url(#bg)" />
    <circle cx="200" cy="150" r="70" fill="rgba(255,255,255,0.2)" />
    <path d="M 100 340 C 100 240, 300 240, 300 340 Z" fill="rgba(255,255,255,0.2)" />
    <text x="200" y="170" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="64" font-weight="bold" fill="#ffffff" text-anchor="middle">${initials}</text>
    <text x="200" y="370" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="600" fill="rgba(255,255,255,0.9)" text-anchor="middle">XI TKJ 3</text>
  </svg>`;

  fs.writeFileSync(path.join(outputDir, s.file), svg, 'utf8');
});

// Also create default.jpg
const defaultSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <rect width="400" height="400" rx="40" fill="#475569" />
  <circle cx="200" cy="150" r="70" fill="rgba(255,255,255,0.2)" />
  <path d="M 100 340 C 100 240, 300 240, 300 340 Z" fill="rgba(255,255,255,0.2)" />
  <text x="200" y="170" font-family="sans-serif" font-size="64" font-weight="bold" fill="#ffffff" text-anchor="middle">TKJ</text>
</svg>`;
fs.writeFileSync(path.join(outputDir, 'default.jpg'), defaultSvg, 'utf8');

console.log('Successfully generated student photo files.');
