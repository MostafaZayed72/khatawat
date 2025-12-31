
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '../i18n/locales/ar.json');
const content = fs.readFileSync(filePath, 'utf8');
const json = JSON.parse(content);

fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
console.log('Cleaned duplicates from ar.json');
