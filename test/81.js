
/**
 * 
 * @param {*} arr 지도의 개수
 * @returns 
 * 
 * 설명: array 가 주어질 때 0,0 에서 시작하여 끝까지 갈 때 오른쪽으로 가거나 아래 방향만 갈 수 있다. 이때 가능한 모든 경우의 수
 */
function countPaths(arr) {
    const m = arr.length; // 행 수
    const n = arr[0].length; // 열 수
  
    // 경로의 개수를 저장할 2차원 배열 초기화
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  
    // 시작 지점은 1로 초기화
    dp[0][0] = 1;
  
    // 첫 번째 행의 경로 개수 계산
    for (let j = 1; j < n; j++) {
      if (arr[0][j] === 0) {
        dp[0][j] = dp[0][j - 1];
      }
    }
  
    // 첫 번째 열의 경로 개수 계산
    for (let i = 1; i < m; i++) {
      if (arr[i][0] === 0) {
        dp[i][0] = dp[i - 1][0];
      }
    }
  
    // 나머지 칸의 경로 개수 계산
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        if (arr[i][j] === 0) {
          dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
      }
    }
  
    return dp[m - 1][n - 1]; // 마지막 칸의 경로 개수 반환
  }
  
  // 예시 배열
  const myArray = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  
  const r = 2;
  const c = 4;
  const array = new Array(r).fill(0).map(() => new Array(c).fill(0));
  const paths = countPaths(array);
  console.log(`경로의 개수: ${paths}`);
  