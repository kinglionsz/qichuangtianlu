const fs = require('fs');
const c = fs.readFileSync('src/js/trajectoryData.js', 'utf8');
const s = c.indexOf('export const waypoints');
const e = c.indexOf('];', s);
const block = c.substring(s, e + 2);
let i = 0, count = 0;
while (i < block.length) {
  const o = block.indexOf('{', i);
  if (o === -1 || o > e - s) break;
  let d = 0, end = o;
  for (let j = o; j < block.length; j++) {
    if (block[j] === '{') d++;
    else if (block[j] === '}') { d--; if (d === 0) { end = j; break; } }
  }
  const obj = block.substring(o, end + 1).trim();
  if (obj) {
    count++;
    if (count <= 3 || count === 14 || count === 40) {
      console.log('---');
      console.log('Entry ' + count + ': ' + obj.substring(0, 200));
    }
  }
  i = end + 1;
}
console.log('\nTotal entries:', count);