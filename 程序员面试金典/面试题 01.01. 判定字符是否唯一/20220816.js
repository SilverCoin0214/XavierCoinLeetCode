/*
 * @Author: zzx_xavier zhangzuoxuan@gmail.com
 * @Date: 2022-08-16 15:12:57
 * @LastEditors: zzx_xavier zhangzuoxuan@gmail.com
 * @LastEditTime: 2022-08-16 15:13:01
 * @FilePath: /XavierCoinLeetCode/程序员面试金典/面试题 01.01. 判定字符是否唯一/20220816.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {string} astr
 * @return {boolean}
 */
 var isUnique = function(astr) {
    // Set去重
    return astr.length == new Set(astr).size
};
