const fs = require('node:fs');
const path = require('node:path');

const project = __dirname;
const output = path.join(project, 'dist');
const entries = ['index.html', 'styles.css', 'app.js', 'src'];

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });
for (const entry of entries) {
  fs.cpSync(path.join(project, entry), path.join(output, entry), { recursive: true });
}
console.log(`Production site built in ${output}`);
