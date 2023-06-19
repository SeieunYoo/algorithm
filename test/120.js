/**
 * 
 * @param {*} n 
 * @returns 
 * 설명 : n이라는 숫자가 주어질 때 제곱수의 합으로 n을 만들 때 최소 개수
 */

function getMinSquares(n) {
    const dp = new Array(n + 1).fill(Infinity);
  
    dp[0] = 0;
  
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j * j <= i; j++) {
        dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
      }
    }
  
    return dp[n];
  }
  
  // 예시
  const num = 41;
  const minSquares = getMinSquares(num);
  console.log(`주어진 숫자 ${num}을(를) 최소 개수의 제곱수로 표현: ${minSquares}개`);
  