/*
 * @Author: your name
 * @Date: 2021-12-21 14:29:21
 * @LastEditTime: 2021-12-21 14:29:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /XavierCoinLeetCode/167. 两数之和 II - 输入有序数组/20211221.js
 */


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    // 二分查找

    for (let i = 0; i < numbers.length; i++) {
        let left = i + 1
        let right = numbers.length - 1

        while (left <= right) {
            let mid = left + ((right - left) >> 1)

            if (numbers[mid] == target - numbers[i]) {
                return [i + 1, mid + 1]
            }

            if (numbers[mid] < target - numbers[i]) {
                left = mid + 1
            }

            if (numbers[mid] > target - numbers[i]) {
                right = mid - 1
            }
        }
    }

    return [-1, -1]
};
