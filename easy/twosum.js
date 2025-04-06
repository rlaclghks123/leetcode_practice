/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
    1. 겹치지 않도록 nums를 2번 순회하면서, 2개의 요소의 합이 target이 되는 위치(index)를 찾아서 출력한다.
*/

var twoSum = function (nums, target) {
  const len = nums.length;
  const ans = [];

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        ans.push(i, j);
        break;
      }
    }
  }
  return ans;
};

/*

- 속도 개선 -> 0ms
    - map 자료구조를 사용하여 O(n) 복잡도로 처리
    - target - nums[i] 를 통해 처리

const twoSum = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return [];
};

*/
