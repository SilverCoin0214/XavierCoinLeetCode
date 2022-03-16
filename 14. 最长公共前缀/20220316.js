/*
 * @Author: your name
 * @Date: 2022-03-16 10:29:38
 * @LastEditTime: 2022-03-16 10:29:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /XavierCoinLeetCode/14. 最长公共前缀/20220316.js
 */


/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    // 思路: 获取一个字符串先当成结果, 按照字符串里进行匹配, 如果不符则跳出, 将匹配的字符变成新的结果

    if (strs.length === 0) {
        return ""
    }

    let res = strs[0]

    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        for (; j < res.length && j < strs[i].length; j++) {
            if (res[j] !== strs[i][j]) {
                break
            }
        }

        res = res.slice(0, j)
        if (res == '') {
            return res
        }
    }

    return res
};

// 利用数组的 Reduce 方法实现的最简洁代码
// 取第一个字符串为公共前缀
// 逐个对比，返回两两元素的公共前缀
// 将 2 中的公共前缀和下一个元素对比，得到新的公共前缀

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    return strs.reduce((prefix,cur)=>{
        while(cur.indexOf(prefix)!=0){
            prefix = prefix.slice(0, prefix.length-1)
        }
        return prefix
    })
};
