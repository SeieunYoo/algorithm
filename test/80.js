
/**
 * 
 * @param {*} arr 체스 배열
 * @param {*} x 말의 x 좌표
 * @param {*} y 말의 y 좌표
 * 
 * 설명 : 체스판에 말이 주어질 때 말의 대각선 두 방향은 갈 수 없다고 할때 갈 수 있는 체스판의 좌표 개수 구하기
 */
function changeDiagonalElements(arr, x, y) {
  const n = arr.length; // 배열의 행 수
  const m = arr[0].length; // 배열의 열 수

  // 왼쪽 상단에서 오른쪽 하단으로 대각선 상의 원소들을 true로 변경
  let i = x;
  let j = y;
  while (i < n && j < m) {
    arr[i][j] = true;
    i++;
    j++;
  }
  i = x - 1;
  j = y - 1;
  while (i >= 0 && j >= 0) {
    arr[i][j] = true;
    i--;
    j--;
  }
  // 오른쪽 상단에서 왼쪽 하단으로 대각선 상의 원소들을 true로 변경
  i = x - 1;
  j = y + 1;

  while (i >= 0 && j < m) {
    arr[i][j] = true;
    i--;
    j++;
  }

  // 오른쪽 상단에서 왼쪽 하단으로 대각선 상의 원소들을 true로 변경 (역순)
  i = x + 1;
  j = y - 1;

  while (i < n && j >= 0) {
    arr[i][j] = true;
    i++;
    j--;
  }
}

// 예시 배열
const myArray = [
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
];

const x = 2; // x 좌표
const y = 5; // y 좌표

changeDiagonalElements(myArray, x, y);

// 체스판에서 좌표 주어질 떄 index 찾기
function convertChessCoordinateToIndex(chessCoordinate) {
    const letter = chessCoordinate[0].toUpperCase(); // 좌표의 문자를 대문자로 변환
    const number = parseInt(chessCoordinate.slice(1)); // 좌표의 숫자 부분 추출
  
    const columnIndex = letter.charCodeAt(0) - 65; // 열 인덱스 계산 (A: 65)
  
    return [columnIndex, number - 1];
  }
  
