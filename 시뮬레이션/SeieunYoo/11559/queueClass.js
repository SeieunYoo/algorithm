const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');
let visited = Array.from(Array(12), () => new Array(6).fill(false));
const board = input.map((row) => row.trim().split('').map(String));
const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

let answer = 0;
let isExplode = false;

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }
  enqueue(value) {
    this.queue[this.rear++] = value;
  }
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }
  isEmpty() {
    return this.rear === this.front;
  }
  length() {
    return this.rear - this.front;
  }
}

const queue = new Queue();
const queue2 = new Queue();
const explode = new Queue();

while (true) {
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 6; j++) {
      if (board[i][j] === '.') continue;
      queue.enqueue([i, j]);
      visited[i][j] = true;
      let color = board[i][j];

      while (!queue.isEmpty()) {
        let [y, x] = queue.dequeue();
        queue2.enqueue([y, x]);

        for (let dir = 0; dir < 4; dir++) {
          let ny = y + directions[dir][0];
          let nx = x + directions[dir][1];

          if (ny < 0 || ny >= 12 || nx < 0 || nx >= 6) continue;

          if (board[ny][nx] !== color) continue;

          if (visited[ny][nx]) continue;

          queue.enqueue([ny, nx]);
          visited[ny][nx] = true;
        }
      }

      isExplode = queue2.length() >= 4;

      while (!queue2.isEmpty()) {
        let [y, x] = queue2.dequeue();

        if (isExplode) explode.enqueue([y, x]);

        visited[y][x] = false;
      }
    }
  }

  if (!explode.length()) break;

  while (!explode.isEmpty()) {
    let [y, x] = explode.dequeue();
    board[y][x] = '.'; //explode 큐에 들어가있는 좌표들 폭파
  }

  answer++;
  
  for (let c = 0; c < 6; c++) {
    let bottom = 11; // 열마다 가장 아래에 있는 블록의 인덱스

    for (let r = 11; r >= 0; r--) {
      if (board[r][c] !== '.') {
        board[bottom--][c] = board[r][c];
      }
    }

    // 남은 블록을 '.'으로 채우기
    for (let r = bottom; r >= 0; r--) {
      board[r][c] = '.';
    }
  }
}

console.log(answer);
