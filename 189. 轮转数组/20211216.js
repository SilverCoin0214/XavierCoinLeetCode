/*
 * @Author: your name
 * @Date: 2021-12-16 14:20:51
 * @LastEditTime: 2021-12-16 14:28:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /XavierCoinLeetCode/189. 轮转数组/20211216.js
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    let kval = k % nums.length

    let arr = nums.splice(nums.length - kval)

    nums.unshift(...arr)
};


// 双指针

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate2 = function(nums, k) {
    const len = nums.length
    if ((k %= len) == 0) return

    reverse(nums, 0, len - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, len - 1)
};

const reverse = (nums, left, right, temp) => {
    while (left < right) {
        temp = nums[left]
        nums[left++] = nums[right]
        nums[right--] = temp
    }
}
