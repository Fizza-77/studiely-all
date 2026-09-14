const fs = require('fs');
const path = require('path');

const base = path.resolve('d:/studiely-all/lib/curriculum/subject-pages');
const files = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (entry.isFile() && full.endsWith('.ts')) {
      files.push(full);
    }
  }
}

walk(base);

let modified = 0;

for (const file of files) {
  let text = fs.readFileSync(file, 'utf8');
  const original = text;

  text = text.replace(/\n\s*\{\n\s*id:\s*"exam-practice",[\s\S]*?\n\s*\},?\n/g, '\n');
  text = text.replace(/\n\s*examPractice:\s*"[^"]*",/g, '\n');

  if (text !== original) {
    fs.writeFileSync(file, text, 'utf8');
    modified += 1;
    console.log('updated ' + path.relative(path.resolve('d:/studiely-all'), file));
  }
}

console.log('modified ' + modified + ' files');
