/*
 * @Author: your name
 * @Date: 2021-12-20 17:14:38
 * @LastEditTime: 2021-12-20 17:16:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /XavierCoinLeetCode/283. 移动零/20211220.js
 */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
     // 同向双指针, 双指针的方法,
     // i和j同时从0开始移动.i用来扫描全局, j用来对调元素,
     // i碰上非零的元素就跟j对调, 就能把0都慢慢排到后面去
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[j], nums[i]] = [nums[i], nums[j]]
            j++
        }
    }
};
