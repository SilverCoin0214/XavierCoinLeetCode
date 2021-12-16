/*
 * @Author: your name
 * @Date: 2021-12-16 13:50:44
 * @LastEditTime: 2021-12-16 13:54:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /XavierCoinLeetCode/977. 有序数组的平方/20211216.js
 */


/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    let res = nums.map((item, index) => {
        return item * item
    })

    return res.sort((a, b) =>  a - b)
};


// 双指针解法

const sortedSquares2 = function (nums) {
    const res = []
    let [left, right] = [0, nums.length - 1]

    while (left <= right) {
        const leftNum = Maht.abs(nums[left])
        const rightNum = Maht.abs(nums[right])
        if (leftNum > rightNum) {
            res.unshift(leftNum * leftNum)
            left++
        } else {
            res.unshift(rightNum * rightNum)
            right--
        }
    }

    return res
}
