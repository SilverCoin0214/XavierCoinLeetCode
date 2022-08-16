/*
 * @Author: zzx_xavier zhangzuoxuan@gmail.com
 * @Date: 2022-08-16 15:11:06
 * @LastEditors: zzx_xavier zhangzuoxuan@gmail.com
 * @LastEditTime: 2022-08-16 15:11:08
 * @FilePath: /XavierCoinLeetCode/程序员面试金典/面试题 01.06. 字符串压缩/20220816.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {string} S
 * @return {string}
 */
 var compressString = function(S) {
    // 思路: 双指针
    let i = 0
    let j = 0
    let count = 0
    let res = ''
    while (S.length >= j) {
        if (S[i] != S[j]) {
            res += S[i] + count
            i = j
            count = 1
        } else {
            count += 1
        }
        j++
    }

    return res.length >= S.length ? S : res
};
