
/**
 * 
 * @param {*} routes 
 * @returns 
 * 
 * 설명: 2차원 배열이 있을 때 1번 공항에서 n번 공항까지 갈 떄 최소 연료
 * 링크리스트로 풀어야할 듯
 */
function solution(routes) {
  const airportCount = routes.length;
  const INF = Number.MAX_SAFE_INTEGER;

  const minimumFuel = new Array(airportCount + 1).fill(INF);
  minimumFuel[1] = 0;

  for (let i = 1; i <= airportCount; i++) {
    for (let j = 0; j < airportCount; j++) {
      const [start, end, fuel] = routes[j];

      if (minimumFuel[start] !== INF) {
        minimumFuel[end] = Math.min(
          minimumFuel[end],
          Math.max(minimumFuel[start], fuel)
        );
        minimumFuel[start] = Math.min(
          minimumFuel[start],
          Math.max(minimumFuel[end], fuel)
        );
      }
    }
  }

  // 최소 연료 반환
  console.log(minimumFuel);
  return minimumFuel[airportCount];
}

// 예시 배열
const routes = [
  [5, 1, 15],
  [4, 2, 6],
  [1, 4, 8],
  [3, 2, 10],
  [1, 2, 7],
  [5, 4, 6],
  [2, 5, 11],
];

// 최소 연료 계산
const minimumFuel = solution(routes);
console.log(minimumFuel); 
