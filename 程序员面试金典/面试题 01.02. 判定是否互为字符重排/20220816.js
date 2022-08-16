/*
 * @Author: zzx_xavier zhangzuoxuan@gmail.com
 * @Date: 2022-08-16 15:12:33
 * @LastEditors: zzx_xavier zhangzuoxuan@gmail.com
 * @LastEditTime: 2022-08-16 15:12:35
 * @FilePath: /XavierCoinLeetCode/程序员面试金典/面试题 01.02. 判定是否互为字符重排/20220816.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var CheckPermutation = function(s1, s2) {
    // 思路: 长度得相等, 转数组在s1里抽元素在s2中找, 找到一起消除
    if (s1.length !== s2.length) {
        return false
    }

    let arr1 = s1.split('');
    let arr2 = s2.split('');
    while (arr1.length > 0) {
        let el = arr1.pop();
        let index = arr2.indexOf(el);
        if (index === -1) {
            return false
        }
        arr2.splice(index, 1);
    }

    return true
};
