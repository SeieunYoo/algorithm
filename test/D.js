function isMatchPattern(s, p) {
  const dp = Array(s.length + 1)
    .fill(false)
    .map(() => Array(p.length + 1).fill(false));

  dp[0][0] = true;

  // 패턴이 '*'로 시작할 경우에 대한 처리
  for (let j = 1; j <= p.length; j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 2];
    }
  }

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (p[j - 1] === s[i - 1] || p[j - 1] === '.') {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === '*') {
        // 패턴이 '*'인 경우
        dp[i][j] = dp[i][j - 2];

        if (p[j - 2] === s[i - 1] || p[j - 2] === '.') {
          dp[i][j] = dp[i][j] || dp[i - 1][j];
        }
      } else {
        dp[i][j] = false;
      }
    }
  }

  return dp[s.length][p.length];
}

// 예시 테스트
console.log(isMatch('aa', 'a')); // false
console.log(isMatch('aa', 'a*')); // true
console.log(isMatch('ab', '.*')); // true
