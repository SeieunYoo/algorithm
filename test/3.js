// 팩토리얼 계산 함수
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// 조합 계산 함수
function combination(n, r) {
  return factorial(n) / (factorial(r) * factorial(n - r));
}

function findCombination(numbers, target, sum, index, combination, result) {
  if (sum == target) {
    result.push([...combination]);
    return;
  }
  if (index >= numbers.length || sum > target) {
    return;
  }
  const currentNum = numbers[index];
  combination.push(currentNum);
  findCombination(
    numbers,
    target,
    sum + currentNum,
    index,
    combination,
    result
  );
  combination.pop();
  findCombination(numbers, target, sum, index + 1, combination, result);
}
function solution(k) {
  var answer = 0;
  const result = [];
  const numbers = [2, 3, 4, 5, 6, 7];
  const setNumbers = [
    [2, 1],
    [3, 1],
    [4, 1],
    [5, 3],
    [6, 3],
    [7, 1],
  ];
  findCombination(numbers, k, 0, 0, [], result);
  if (result.length == 0) answer = 0;
  for (let i = 0; i < result.length; i++) {
    let r = 1;
    for (let j = 0; j < result[i].length; j++) {
      console.log(result[i], setNumbers[result[i][j] - 2]);
      r = r * setNumbers[result[i][j] - 2][1];
    }
    const notSame = [...new Set(result[i])];
    const combinations = combination(result[i].length, notSame.length);
    r = r * combinations;
    answer = answer + r;
  }
  return answer;
}

console.log(solution(11));
