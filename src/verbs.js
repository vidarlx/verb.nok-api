import fs from 'fs';

const verbs = fs.readFileSync('../data/verbs.json');

export function getVerbs() {
  return verbs;
}
