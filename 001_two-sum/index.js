/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  let output = [];
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const complement = target - element;
    if (nums.includes(complement) && nums.indexOf(complement) !== index) {
      output = [index, nums.indexOf(complement)];
      break;
    }
  }
  return output;
};

console.log(twoSum([2, 7, 11, 15], 9));
