function arithmeticSequence(arr) {
    if (arr.length < 3) {
      return false;
    }

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        // 두 개의 요소를 교환
        [arr[i], arr[j]] = [arr[j], arr[i]];
  
        // 등차 수열인지 확인
        let difference = arr[1] - arr[0];
        let isSequence = true;
        for (let k = 2; k < arr.length; k++) {
          if (arr[k] - arr[k - 1] !== difference) {
            isSequence = false;
            break;
          }
        }
  
        // 등차 수열인 경우 true 반환
        if (isSequence) {
          return true;
        }
  
        // 요소를 다시 복원하여 다른 요소와 교환할 수 있도록 함
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  
    // 모든 경우에 2개의 요소를 교환하여 등차 수열이 되지 않음
    return false;
  }
  
  
  
  
  
  