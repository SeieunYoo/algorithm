const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input5.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
const [r, c, d] = input.shift().split(' ').map(Number);
let map = input.map((row) => row.split(' ').map(Number));

const directions = [
  [-1, 0], // 북쪽
  [0, 1], // 동쪽
  [1, 0], // 남쪽
  [0, -1], // 서쪽
];

let count = 0;

// 반시계 방향 회전 0 ->3 1-> 0 2->1 3->2
// 후진 0-2 1-3

function rotate(r, c, d) {
  if (map[r][c] === 0) {
    map[r][c] = 2; // 청소 완료 표시
    count++;
  }

  for (let i = 0; i < 4; i++) { // 반시계
    const nonClock = (d + 3) % 4;
    const [newX, newY] = [
      r + directions[nonClock][0],
      c + directions[nonClock][1],
    ];

    if (map[newX][newY] == 0) {
      rotate(newX, newY, nonClock);
      return;
    }

    // 청소할 공간이 없다면, 회전한 다음 다시 반복한다.
    d = nonClock;
  }

  const [newX, newY] = [r - directions[d][0], c - directions[d][1]];

  // 후진할 곳이 벽이 아닌 경우에는 후진한다.
  if (map[newX][newY] !== 1) {
    rotate(newX, newY, d);
  }
}

rotate(r, c, d);
console.log(count);
