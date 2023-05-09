const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input5.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = Number((input.shift()));
const array = input.map((row) => row.split(' ').map(Number));

console.log(array);