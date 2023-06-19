/**
 *
 * @param {*} toppings
 * @param {*} tastings
 * @returns
 * 
 * 설명 : 피자 토핑 배열 index 0부토 시작해서 tasting 배열을 순서 하나씩 만족시켜서 이동할 수 있는 최단거리 구하기
 * 당장 최단거리가 아니라도 total 값이 제일 짧은 경우가 있기에 모든 경우의 수를 탐색해야됨
 */
function findStartIndexAndDistance(toppings, tastings) {
  const startIndex = 0;

  let currentIndex = startIndex; // 현재 인덱스 초기화
  let distance = 0; // 이동 거리 초기값

  for (let i = 0; i < tastings.length; i++) {
    const currentTopping = tastings[i];

    // 오른쪽으로 이동하며 현재 토핑을 찾을 때까지 검색
    let rightIndex = currentIndex;
    let rightDistance = 0;
    while (toppings[rightIndex] !== currentTopping) {
      rightIndex = (rightIndex + 1) % toppings.length; // 다음 인덱스로 이동
      rightDistance += 1; // 오른쪽 이동 거리 증가
    }

    // 왼쪽으로 이동하며 현재 토핑을 찾을 때까지 검색
    let leftIndex = currentIndex;
    let leftDistance = 0;
    while (toppings[leftIndex] !== currentTopping) {
      leftIndex = (leftIndex - 1 + toppings.length) % toppings.length; // 이전 인덱스로 이동
      leftDistance += 1; // 왼쪽 이동 거리 증가
    }

    console.log(
      toppings[currentIndex],
      currentIndex,
      rightIndex,
      leftIndex,
      rightDistance,
      leftDistance
    );
    if (rightDistance <= leftDistance) {
      currentIndex = rightIndex;
      distance += rightDistance;
      //console.log(currentIndex);
    } else {
      currentIndex = leftIndex;
      distance += leftDistance;
    }

    //distance += 1; // 토핑을 먹은 거리 증가
  }

  console.log(startIndex, distance);
  return {
    startIndex,
    distance,
  };
}

function solution() {
  let index = 0;
  let distance = Infinity;
  // 예시 피자판 토핑 배열
  const topping = [2, 1, 3, 1, 2, 4, 4, 3];
  // 먹고 싶은 토핑 배열
  const tasting = [3, 1, 2, 4];
  const result = findStartIndexAndDistance(topping, tasting, 0);
  console.log(result);
}

solution();
