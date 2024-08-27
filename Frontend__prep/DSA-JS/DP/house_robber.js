/**
 * container = [1 , 2, 3, 1]
 * base - 1
 * dp[1] = max(c[0], c[1])
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let size = nums.length;
  //base conditions
  let prevHouseMax = nums[0];
  if (size < 2) {
    return prevHouseMax;
  }
  let currentHouseMax = Math.max(prevHouseMax, nums[1]);
  for (let i = 2; i < size; i++) {
    let a = nums[i] + prevHouseMax;
    prevHouseMax = currentHouseMax;
    currentHouseMax = Math.max(currentHouseMax, a);
  }
  return currentHouseMax;
};

// Time Complexity : O(N)
// Space Complexity: 0(1)
