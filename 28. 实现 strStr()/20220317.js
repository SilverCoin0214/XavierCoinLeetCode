/*
 * @Author: your name
 * @Date: 2022-03-17 16:47:27
 * @LastEditTime: 2022-03-17 16:47:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /XavierCoinLeetCode/28. 实现 strStr()/20220317.js
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    //  字符串截取匹配, 先获取needle长度
    let len = needle.length

    if (len === 0) {
        return 0
    }

    for (let i = 0; i < haystack.length; i++) {
        let slice = haystack.slice(i, len + i)
        if (slice === needle) {
            return i
        }
    }

    return -1
};
