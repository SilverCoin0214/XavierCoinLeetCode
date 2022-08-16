/*
 * @Author: zzx_xavier zhangzuoxuan@gmail.com
 * @Date: 2022-08-16 15:10:40
 * @LastEditors: zzx_xavier zhangzuoxuan@gmail.com
 * @LastEditTime: 2022-08-16 15:10:42
 * @FilePath: /XavierCoinLeetCode/程序员面试金典/面试题 01.09. 字符串轮转/20220816.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var isFlipedString = function(s1, s2) {
    if (s1.length != s2.length) {
        return false
    }

    let str = s2 + s2

    return str.indexOf(s1) != -1 ? true : false
};
