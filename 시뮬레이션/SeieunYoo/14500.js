const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input7.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
let paper = input.map((row) => row.split(' ').map(Number));

// 2차원 배열에서 max 값 구하기
// const maxValue = paper
//   .reduce(
//     (acc, row) =>
//     	Math.max(acc, row.reduce((acc, v) => Math.max(acc, v), 0)),
//     0
//   );

const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
const visited = Array.from(Array(N), () => new Array(M).fill(false));
let maxSum = 0;

function dfs(x, y, count, sum) {
  if (count === 4) { //4칸을 모두 채운 경우
    maxSum = Math.max(maxSum, sum);
    return;
  }

  for (let i = 0; i < directions.length; i++) {
    const nx = x + directions[i][0];
    const ny = y + directions[i][1];
    if (nx >= 0 && nx < N && ny >= 0 && ny < M && !visited[nx][ny]) {
      if (count === 2) {
        visited[nx][ny] = true;
        dfs(x, y, count + 1, sum + paper[nx][ny]);
        visited[nx][ny] = false;
      }

      visited[nx][ny] = true;
      dfs(nx, ny, count + 1, sum + paper[nx][ny]);
      visited[nx][ny] = false;
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    visited[i][j] = true;
    dfs(i, j, 1, paper[i][j]);
    visited[i][j] = false;
  }
}

console.log(maxSum);
