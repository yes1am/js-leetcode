
// 链接：https://leetcode-cn.com/problems/two-sum/

// 示例
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

const nums = [2, 7, 11, 15];
const target = 9;
var twoSum = function (nums, target) {
  const cache = {}
  for(let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if(cache[target - item] !== undefined) {
      return [cache[target - item], i];
    } else {
      cache[item] = i;
    }
  }
  return [];
}

const result = twoSum(nums,target)
console.log( JSON.stringify(result) === JSON.stringify([0,1]))

// 注意点:
// 1. 使用 cache 进行已遍历数据的缓存
// 2. 判断是否存在缓存需要使用 cache[target - item] !== undefined
// 不能使用 if(cache[target - item]), 因为 cache[target - item] 可能为 0