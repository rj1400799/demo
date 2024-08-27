// Coin Change
// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.

//  Example 1:
// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0

// Constraints:
// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dp = Array(amount + 1).fill(Infinity);

  //base case
  dp[0] = 0;

  //solve subProblems (bottom-up approach)
  for (let currentAmount = 1; currentAmount <= amount; currentAmount++) {
    //try to min for all combinations of coins
    for (let coin of coins) {
      //for ex: for dp[1] --> we can only get coins if we have 1 in coins list
      //i.e. 1 - 1 = 0
      if (currentAmount - coin >= 0) {
        dp[currentAmount] = Math.min(
          dp[currentAmount],
          1 + dp[currentAmount - coin]
        );
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
};

// Time Complexity: O(coins * amount+1) --> O(S*N)
// Space Complexity: O(amount+1) --> O(N)
