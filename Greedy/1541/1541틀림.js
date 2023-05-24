const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const num = input[0].split(/\+|-/).map(Number);
const signal = input[0].split('').filter((item) => item == '+' || item == '-');

let min = Number.MAX_SAFE_INTEGER;
let array = [];

for (let i = 0; i < signal.length; i++) {
  array.push(num[i]);
  array.push(signal[i]);
}
array.push(num[num.length - 1]);

for (let i = 0; i < array.length; i+=2) {
  for (let j = i + 2; j < array.length; j+=2) {
    let array3 = [...array];
    const array2 = array3.slice(i, j+1).join('');
    const result = eval(array2.replace("--", "+"));
    array3.splice(i, j - i + 1, result);
    min = Math.min(eval(array3.join("").replace("--", "+")),min);
  }
}

console.log(min);