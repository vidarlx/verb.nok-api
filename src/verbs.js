import fs from 'fs';
import path from 'path';

const verbsFile = fs.readFileSync(path.resolve(__dirname, '../data/verbs.json'));
const verbs = JSON.parse(verbsFile.toString('utf-8'));

export function getVerb(verb) {
  console.log(verb)
  return verbs[verb] || false;
}

export function getVerbs() {
  return verbs;
}
