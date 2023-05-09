const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input5.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input.shift());

for (let i = 0; i < n; i++) {
  const num = Number(input.shift());
  const prices = input.shift().split(' ').map(Number);
  const total = Number(input.shift());

  //console.log(num,prices,total);
  //solution(prices,total);
}

// function solution(prices, total) {
//   const array = new Array(total + 1).fill(0);

//   array[0] = 1;

//   for (let i = 0; i < prices.length; i++) {
//     for (let j = prices[i]; j <= total; j++) {
//         console.log(array[total-3]);
//       array[j] = array[j] + array[j - prices[i]];
//     }
//   }

//   console.log(array[total]);
// }

// solution([1, 2], 1000);
