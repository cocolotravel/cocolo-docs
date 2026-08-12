import { existsSync, copyFileSync, writeFileSync } from 'node:fs';

const source = '.link-checker/broken-links.log';
const dest = 'dist/broken-links.log';

if (existsSync(source)) {
  copyFileSync(source, dest);
} else {
  writeFileSync(dest, 'No broken links found in the last build.\n');
}
