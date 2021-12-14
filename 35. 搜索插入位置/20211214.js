/*
 * @Author: your name
 * @Date: 2021-12-14 21:22:04
 * @LastEditTime: 2021-12-14 21:23:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /XavierCoinLeetCode/35. 搜索插入位置/20211214.js
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length

    // 先判断 目标值是否超过有序数组的最大值
    if (target > nums[right - 1]) {
        return right
    }

    // 二分查找时如果找到则返回
    while (left <= right) {
        let mid = Math.floor((right - left) / 2) + left

        if (nums[mid] == target) {
            return mid
        }

        if (nums[mid] < target) {
            left = mid + 1
        }

        if (nums[mid] > target) {
            right = mid - 1
        }
    }

    // 收束到left == right时, 就是插入的位置
    return left
};
