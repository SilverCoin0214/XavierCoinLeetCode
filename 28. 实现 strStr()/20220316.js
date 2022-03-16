/*
 * @Author: your name
 * @Date: 2022-03-16 00:51:52
 * @LastEditTime: 2022-03-16 00:55:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /XavierCoinLeetCode/28. 实现 strStr()/20220316.js
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// https://leetcode-cn.com/problems/implement-strstr/

// 思路: 先获取 needle串字符长度,
//      然后通过 搜索串字符符合 needle串长度的切片来进行匹配,
//      如果匹配则返回, 否则返回为 - 1

var strStr = function(haystack, needle) {
    var len = needle.length;

    if (len == 0) {
        return 0
    }

    for (let i = 0; i < haystack.length; i++) {
        let slice = haystack.slice(i, i + len);
        if (needle == slice) {
            return i
        }
    }

    return -1
};
