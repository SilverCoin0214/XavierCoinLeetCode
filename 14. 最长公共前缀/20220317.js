/*
 * @Author: your name
 * @Date: 2022-03-17 16:51:36
 * @LastEditTime: 2022-03-17 16:51:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /XavierCoinLeetCode/14. 最长公共前缀/20220317.js
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    return strs.reduce((prefix, cur) => {
        while (cur.indexOf(prefix) != 0) {
            prefix = prefix.slice(0, prefix.length-1)
        }

        return prefix
    })
};
