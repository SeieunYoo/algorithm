const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input2.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const a = Number(input.shift());

function solution(array) {
    let max = array[array.length - 1];
    let result = 0;
  
    for (let i = array.length - 2; i >= 0; i--) {
      if (array[i] > max) { //array[i] 가 더 크다면 max 값 갱신
        max = array[i];
      } else {
    
        result += max - array[i]; //array[i] 가 더 작다면 이익 계산
      }
    }
  
    console.log(result);
  }

// function findResult(result, array) {
//   let max = 0;
//   let index = 0;

//   max = Math.max(...array);
//   if (max == array[0]) {
//     console.log(result+0);
//     return;
// }

//   for (let i = 0; i < array.length; i++) {
//     if (max == array[i]) index = i;
//   }

//   for (let i = 0; i < index; i++) {
//     result += max - array[i];
//   }
//   array.splice(0, index + 1);
//   if (array.length == 0) {
//     console.log(result);
// }
//   else {
//     findResult(result, array);
//   }
// }

for(let i =0; i< a;i ++){
    const num = Number(input.shift());
    const array = input.shift().split(" ").map(Number);
    solution(num,array);
}

