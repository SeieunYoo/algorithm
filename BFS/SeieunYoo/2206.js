const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input5.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [ROW, COLUMN] = input.shift().split(' ').map(Number);
const visited = Array.from(Array(ROW), () => new Array(COLUMN).fill(false));
const BOARD = input.map((row) => row.trim().split('').map(Number));

const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

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
}

const BFS = () => {
  const queue = new Queue();
  queue.enqueue([0, 0, 1, false]); //row,col,distance,isCrash
  let answer = -1;

  while (!queue.isEmpty()) {
    let example = queue.dequeue();
    let [currentX, currentY, distance, isCrash] = [
      example[0],
      example[1],
      example[2],
      example[3],
    ]; //큐에서 하나씩 가져옴
    console.log(distance);
    console.log(visited);

    if (currentX === ROW - 1 && currentY === COLUMN - 1) {
      answer = distance;
      break;
    } //목표지점에 도달하면 break

    if (visited[currentX][currentY]) continue;
    else visited[currentX][currentY] = true; //visit 이 true면 컨티뉴

    for (let i = 0; i < directions.length; i++) {
      let [newX, newY] = [
        currentX + directions[i][0],
        currentY + directions[i][1],
      ];

      console.log("new"+newX+newY);
      //if (visited[newX][newY]) continue;
      //else visited[newX][newY] = true; //visit 이 true면 컨티뉴

      if (newX < 0 || newX >= ROW || newY < 0 || newY >= COLUMN) {
        continue;
      }

      console.log(isCrash);
      if (BOARD[newX][newY]) {
        //벽에 부딪히면
        if (!isCrash) isCrash = true; //벽을 부순적없다면 부셔줄게
        else isCrash = false;
      }
      queue.enqueue([newX, newY, distance + 1, isCrash]);
      //visited[newX][newY] = true;
    }
  }

  return answer;
};

/*let queue = new Queue();
queue.enqueue([0, 0, 1, 0]);
let answer = -1;
while (!queue.isEmpty()) {
  // isBreak는 현재 벽을 부순 상태인지 체크하는 변수
  let example = queue.dequeue();
  const [x, y, cnt, isBreak] = [
    example[0],
    example[1],
    example[2],
    example[3],
  ];

  // 골 지점에 도달했을때 강제 브레이크 (가장 먼저 도착한게 최단거리기 때문이다.)
  if (x === ROW - 1 && y === COLUMN - 1) {
    answer = cnt;
    break;
  }

  // 방문한 적이 있는지 확인
  if (visited[x][y][isBreak]) continue;
  else visited[x][y][isBreak] = 1;

  // 4방향으로 이동
  for (let i = 0; i < 4; i++) {
    const xPos = x + directions[i][0];
    const yPos = y + directions[i][1];

    // 범위를 벗어났으면 패스
    if (xPos < 0 || yPos < 0 || xPos >= ROW || yPos >= COLUMN) continue;

    // 해당 지점이 벽인지 아닌지 확인
    // 벽일 경우 만약 부순적이 없다면 벽을 부수고, 부순적이 있다면 다시 되돌아간다.
    let nextIsBreak = isBreak;
    if (BOARD[xPos][yPos]) {
      if (!nextIsBreak) nextIsBreak = 1;
      else continue;
    }
    queue.enqueue([xPos, yPos, cnt + 1, nextIsBreak]);
  }
}

console.log(answer);*/

console.log(BFS());
