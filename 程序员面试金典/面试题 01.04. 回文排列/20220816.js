/*
 * @Author: zzx_xavier zhangzuoxuan@gmail.com
 * @Date: 2022-08-16 15:11:29
 * @LastEditors: zzx_xavier zhangzuoxuan@gmail.com
 * @LastEditTime: 2022-08-16 15:11:31
 * @FilePath: /XavierCoinLeetCode/程序员面试金典/面试题 01.04. 回文排列/20220816.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {string} s
 * @return {boolean}
 */
 var canPermutePalindrome = function(s) {
    // 用哈希存储, 回文只能有一个旋转节点, 可以为0也可以为1, 超过就无法回文
    const set = new Set()
    for (let str of s) {
        if (!set.has(str)) {
            set.add(str)
        } else {
            set.delete(str)
        }
    }

    return set.size === 1 || set.size === 0
};
