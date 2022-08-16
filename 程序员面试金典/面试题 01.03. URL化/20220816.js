/*
 * @Author: zzx_xavier zhangzuoxuan@gmail.com
 * @Date: 2022-08-16 15:12:02
 * @LastEditors: zzx_xavier zhangzuoxuan@gmail.com
 * @LastEditTime: 2022-08-16 15:12:04
 * @FilePath: /XavierCoinLeetCode/程序员面试金典/面试题 01.03. URL化/20220816.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
 var replaceSpaces = function(S, length) {
    return S.slice(0, length).replaceAll(' ', '%20')
};
